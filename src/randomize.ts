//#region Main
import type { AllGroups, AllOPNames, ParsedGroupKeys } from "./ops.js";
import type { OptionNames } from "./utils/options.js";
import type { WeaponAttackments, WeaponAttackmentsInfo } from "./types/weapon.js";
import { GROUPS } from "./ops.js";
import { Equipment, EquipmentInfo } from "./utils/equipment.js";
import { OP } from "./utils/op.js";
import Options from "./utils/options.js";
import {
    BarrelAttachment,
    GripAttachment,
    SightAttachment,
    UnderBarrelAttachment,
} from "./utils/weaponInfo/attachment.js";
import { Weapon, WeaponInfo } from "./utils/weaponInfo/weapon.js";

function roll() {
    let op: OP | undefined = undefined;
    const key = sessionStorage.getItem("group") as ParsedGroupKeys | null;
    const roll = sessionStorage.getItem("roll") as "1" | null;
    if (key !== null) {
        const group = GROUPS[key];
        let savedOP = tryFetchSavedOP();
        if (roll !== null && Boolean(Number(roll))) {
            op = randomizeOP(key, group, savedOP);
            if (op !== undefined) {
                sessionStorage.setItem("op", JSON.stringify(op));
            }
            sessionStorage.removeItem("roll");
        } else {
            op = savedOP;
        }
        applyVisuals(op);
    }
}

function tryFetchSavedOP(): OP<AllOPNames> | undefined {
    let opString = sessionStorage.getItem("op");
    if (opString !== null && opString !== undefined) {
        const json = JSON.parse(opString);
        return OP.createOPFromJSON(json) as OP<AllOPNames>;
    }
}

function randomizeOP(
    key: ParsedGroupKeys,
    group: AllGroups,
    savedOP?: OP<AllOPNames>
): OP | undefined {
    let opInfo: (typeof group.ops)[0] | undefined = undefined;
    if (group.ops.length > 0) {
        if (Options.Filter.GroupFalse(key)) {
            return undefined;
        } else {
            let opInfos: (typeof group.ops)[0][] = [];
            if (Options.optionTrue("Try Avoid Dupes", "OPs") && savedOP !== undefined) {
                opInfos = group.ops.filter(
                    (opInfo) =>
                        Options.Filter.OPTrue(key, opInfo.name) === true &&
                        opInfo.name !== savedOP?.name
                );
                if (opInfos.length <= 0) {
                    opInfos = group.ops.filter(
                        (opInfo) => Options.Filter.OPTrue(key, opInfo.name) === true
                    );
                }
            } else {
                opInfos = group.ops.filter(
                    (opInfo) => Options.Filter.OPTrue(key, opInfo.name) === true
                );
            }
            opInfo = getRandomItemFromArray<(typeof opInfos)[0]>(opInfos);
        }
    } else {
        return undefined;
    }
    const op = new OP({
        name: opInfo.name,
        icon: getRandomItemFromArray(opInfo.icons),
        image: getRandomItemFromArray(opInfo.images),
    });
    if (opInfo.equipment.length > 0) {
        const equipment = randomizeEquipment(
            opInfo.equipment,
            opInfo.equipmentCount,
            savedOP === undefined ? [] : savedOP.equipment ?? []
        );
        if (equipment !== undefined) {
            op.equipment = equipment;
        }
    }
    if (opInfo.primaryWeapons.length > 0) {
        op.primaryWeapon = randomizeWeapon(
            opInfo.primaryWeapons,
            "Primary",
            savedOP?.primaryWeapon
        );
    }
    if (opInfo.secondaryWeapons.length > 0) {
        op.secondaryWeapon = randomizeWeapon(
            opInfo.secondaryWeapons,
            "Secondary",
            savedOP?.secondaryWeapon
        );
    }
    return op;
}

function randomizeEquipment(
    opInfoEuipment: EquipmentInfo[],
    equipmentCount: number,
    savedEquipment: Equipment[]
): Equipment[] | undefined {
    const equipmentInfos: EquipmentInfo[] = [];
    let opInfoEuipmentCopy: EquipmentInfo[] = [...opInfoEuipment];
    if (opInfoEuipmentCopy.length >= equipmentCount) {
        for (let i = 0; i < equipmentCount; i++) {
            opInfoEuipmentCopy = opInfoEuipmentCopy.filter(
                (equipment) => !equipmentMatchesList(equipment, equipmentInfos)
            );
            let randomEquipment = getRandomItemFromArray(opInfoEuipmentCopy);
            while (
                Options.optionTrue("Try Avoid Dupes", "Equipment") &&
                equipmentMatchesList(randomEquipment, savedEquipment)
            ) {
                opInfoEuipmentCopy = opInfoEuipmentCopy.filter(
                    (equipment) => !equipmentMatchesList(equipment, savedEquipment)
                );
                if (opInfoEuipmentCopy.length > 0) {
                    randomEquipment = getRandomItemFromArray(opInfoEuipmentCopy);
                } else {
                    break;
                }
            }
            equipmentInfos.push(randomEquipment);
        }
    }
    const equipments: Equipment[] = [];
    for (let i = 0; i < equipmentInfos.length; i++) {
        const equipmentInfo = equipmentInfos[i];
        equipments.push(
            new Equipment({
                name: equipmentInfo.name,
                image: getRandomItemFromArray(equipmentInfo.images),
            })
        );
    }
    if (equipments.length > 0) {
        return equipments;
    }
}
function randomizeWeapon(
    weaponInfos: WeaponInfo[],
    type: "Primary" | "Secondary",
    savedWeapon?: Weapon
): Weapon {
    let weaponInfosCopy = [...weaponInfos];
    if (
        Options.optionTrue("Try Avoid Dupes", (type + " Weapons") as OptionNames) &&
        savedWeapon !== undefined
    ) {
        weaponInfosCopy = weaponInfosCopy.filter(
            (weaponInfo) => weaponInfo.name !== savedWeapon.name
        );
        if (weaponInfosCopy.length <= 0) {
            weaponInfosCopy = [...weaponInfos];
        }
    }
    const weaponInfo = getRandomItemFromArray(weaponInfosCopy);
    return new Weapon({
        name: weaponInfo.name,
        image: getRandomItemFromArray(weaponInfo.images),
        attachments: randomizeAttachments(weaponInfo.attachments, type, savedWeapon?.attachments),
    });
}

function randomizeAttachments(
    attachmentInfos: WeaponAttackmentsInfo,
    type: "Primary" | "Secondary",
    savedAttachments?: WeaponAttackments
): WeaponAttackments {
    const attachments: WeaponAttackments = {};
    let key: keyof WeaponAttackmentsInfo;
    for (key in attachmentInfos) {
        const name = fetchMatchingAttachmentName(key);
        if (name !== undefined) {
            const ats = attachmentInfos[key];
            if (ats !== undefined && ats.length > 0) {
                let atsCopy = [...ats];
                if (
                    Options.optionTrue("Try Avoid Dupes", (type + " " + key) as OptionNames) &&
                    savedAttachments !== undefined
                ) {
                    atsCopy = atsCopy.filter(
                        (attachmentInfo) => attachmentInfo.name !== savedAttachments[name]?.name
                    );
                    if (atsCopy.length <= 0) {
                        atsCopy = [...ats];
                    }
                }
                const attachmentInfo = getRandomItemFromArray(atsCopy);
                switch (name) {
                    case "sight":
                        attachments[name] = new SightAttachment({
                            name: attachmentInfo.name,
                            image: getRandomItemFromArray(attachmentInfo.images),
                        });
                        break;
                    case "barrel":
                        attachments[name] = new BarrelAttachment({
                            name: attachmentInfo.name,
                            image: getRandomItemFromArray(attachmentInfo.images),
                        });
                        break;
                    case "grip":
                        attachments[name] = new GripAttachment({
                            name: attachmentInfo.name,
                            image: getRandomItemFromArray(attachmentInfo.images),
                        });
                        break;
                    default:
                        attachments[name] = new UnderBarrelAttachment({
                            name: attachmentInfo.name,
                            image: getRandomItemFromArray(attachmentInfo.images),
                        });
                        break;
                }
            }
        }
    }
    return attachments;
}
function fetchMatchingAttachmentName(key: string): keyof WeaponAttackments | undefined {
    const attachmentNames = ["sight", "barrel", "grip", "underBarrel"] as const;
    for (let index = 0; index < attachmentNames.length; index++) {
        const name = attachmentNames[index];
        if (key.includes(name)) {
            return name;
        }
    }
    return undefined;
}

function getRandomItemFromArray<T>(array: T[]) {
    return array[Math.floor(Math.random() * array.length)];
}

function equipmentMatchesList(
    equipment: EquipmentInfo | Equipment,
    equipments: (EquipmentInfo | Equipment)[]
) {
    for (let i = 0; i < equipments.length; i++) {
        const check = equipments[i];
        if (equipment.name === check.name) {
            return true;
        }
    }
    return false;
}

roll();

function applyVisuals(op: OP | undefined) {
    if (op !== undefined) {
    }

    const opModalContent = document
        .getElementsByClassName("op-modal-content")
        .item(0) as HTMLDivElement | null;
    const opModalInfo = document
        .getElementsByClassName("op-modal-info")
        .item(0) as HTMLDivElement | null;
    if (opModalContent !== null && opModalInfo !== null) {
        let info: {
            func?: (preChild: HTMLDivElement, child: HTMLDivElement) => Boolean;
            type?: ">" | "<";
        } = {};
        checkWraping(
            info,
            opModalContent.children,
            () => {
                opModalInfo.style.flexDirection = "row";
            },
            () => {
                opModalInfo.style.flexDirection = "column";
            }
        );
        window.addEventListener("resize", () => {
            checkWraping(
                info,
                opModalContent.children,
                () => {
                    opModalInfo.style.flexDirection = "row";
                },
                () => {
                    opModalInfo.style.flexDirection = "column";
                }
            );
        });
    }
}

function checkWraping(
    info: {
        func?: (preChild: HTMLDivElement, child: HTMLDivElement) => Boolean;
        type?: ">" | "<";
    },
    children: HTMLCollection,
    wrapFunc: (...args: any[]) => any,
    unwrapFunc: (...args: any[]) => any
) {
    let preChild: HTMLDivElement | null = null;
    for (let i = children.length - 1; i >= 0; i--) {
        const child = children[i] as HTMLDivElement;
        if (preChild === null) {
            preChild = child;
        } else {
            const func = info["func"];
            const type = info["type"];
            if (func === undefined || type === undefined) {
                if (preChild.offsetTop > child.offsetTop) {
                    info["func"] = (preChild: HTMLDivElement, child: HTMLDivElement) => {
                        return preChild.offsetTop < child.offsetTop;
                    };
                    info["type"] = "<";
                    wrapFunc();
                } else if (preChild.offsetTop < child.offsetTop) {
                    info["func"] = (preChild: HTMLDivElement, child: HTMLDivElement) => {
                        return preChild.offsetTop > child.offsetTop;
                    };
                    info["type"] = ">";
                    unwrapFunc();
                }
            } else {
                if (func(preChild, child)) {
                    switch (type) {
                        case "<":
                            info["func"] = (preChild: HTMLDivElement, child: HTMLDivElement) => {
                                return preChild.offsetTop > child.offsetTop;
                            };
                            info["type"] = ">";
                            unwrapFunc();
                            break;
                        default:
                            info["func"] = (preChild: HTMLDivElement, child: HTMLDivElement) => {
                                return preChild.offsetTop < child.offsetTop;
                            };
                            info["type"] = "<";
                            wrapFunc();
                            break;
                    }
                }
            }
        }
    }
}
//#endregion
