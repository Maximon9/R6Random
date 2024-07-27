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
import { whiteBackground } from "./utils/img.js";
import { setPriority } from "os";
import { giveHoverAnimation, HoverOptions } from "./utils/html.js";

type Ratio = [number, number];

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
    addOptionButton();
    if (op !== undefined) {
        const opModal = document.createElement("section");
        opModal.className = "op-modal";

        const opModalContent = document.createElement("div");
        opModalContent.className = "op-modal-content";

        const opModalInfo = document.createElement("div");
        opModalInfo.className = "op-modal-info";

        if (op.name !== undefined) {
            const opData = document.createElement("div");
            opData.className = "op-data";
            const image = document.createElement("div");
            image.style.width = "19.5vmax";
            image.style.height = "22.35vmax";
            image.style.overflow = "hidden";
            image.style.backgroundImage = `url("${op.image ?? whiteBackground}")`;
            image.style.backgroundRepeat = "no-repeat";
            image.style.backgroundSize = "cover";
            const iconContainer = document.createElement("div");
            iconContainer.className = "icon-container";

            const iconContent = document.createElement("div");
            iconContent.style.zIndex = "1";
            iconContent.style.width = "fit-content";
            iconContent.style.height = "fit-content";
            iconContent.style.fontSize = "2vmax";
            iconContent.style.display = "flex";
            iconContent.style.flexDirection = "column";
            const icon = document.createElement("img");
            icon.style.zIndex = "1";
            icon.src = op.icon ?? whiteBackground;
            icon.alt = "OP Icon";
            icon.style.width = "6vmax";
            iconContent.append(icon);
            iconContent.innerHTML += op.name;
            iconContainer.appendChild(iconContent);
            image.appendChild(iconContainer);
            opData.appendChild(image);
            opModalInfo.appendChild(opData);
        }

        const equipmentContent = document.createElement("div");
        equipmentContent.className = "equipment-content";
        equipmentContent.innerHTML += "Equipment";

        const equipmentWrapper = document.createElement("div");
        equipmentWrapper.className = "equipment-wrapper";
        const equipment = op?.equipment;
        if (equipment !== undefined) {
            for (let i = 0; i < equipment.length; i++) {
                const eq = equipment[i];
                if (eq.name !== undefined) {
                    const equipmentData = document.createElement("div");
                    equipmentData.className = "equipment-data";
                    const equipmentImage = document.createElement("div");
                    equipmentImage.className = "equipment-image";
                    equipmentImage.style.backgroundImage = `url("${eq.image ?? whiteBackground}")`;

                    equipmentData.appendChild(equipmentImage);
                    equipmentData.innerHTML += eq.name;
                    equipmentWrapper.appendChild(equipmentData);
                }
            }
            equipmentContent.appendChild(equipmentWrapper);
            opModalInfo.appendChild(equipmentContent);
        }

        const weaponContainer = document.createElement("div");
        weaponContainer.className = "weapons-container";

        tryAddWeaponVisuals("Primary", weaponContainer, op.primaryWeapon);
        tryAddWeaponVisuals("Secondary", weaponContainer, op.secondaryWeapon);

        opModalContent.appendChild(opModalInfo);
        opModalContent.appendChild(weaponContainer);
        opModal.appendChild(opModalContent);
        document.body.insertBefore(opModal, document.body.childNodes[2]);
    }
}

function addOptionButton() {
    const options = document.createElement("div");
    options.className = "options";

    const optionsContainer = document.createElement("div");
    optionsContainer.addEventListener("mouseenter", () => {
        setRootVariable("--options-hover", "0");
        console.log(0, getRootVariable("--options-hover"));
    });
    optionsContainer.addEventListener("mouseleave", () => {
        setRootVariable("--options-hover", "-6vmax");
        console.log(1, getRootVariable("--options-hover"));
    });

    const optionsButton = document.createElement("div");
    optionsButton.innerHTML += "Options";
    const translate = () => {
        optionsButton.style.transform += "translate(0, var(--options-hover))";
    };
    giveHoverAnimation(
        optionsButton,
        new HoverOptions({ transitionSec: 0.15, onMouseEnter: translate, onMouseLeave: translate })
    );

    optionsContainer.appendChild(optionsButton);
    options.appendChild(optionsContainer);

    document.body.insertBefore(options, document.body.childNodes[0]);
}

function tryAddWeaponVisuals(
    key: "Primary" | "Secondary",
    weaponContainer: HTMLDivElement,
    weapon?: Weapon
) {
    if (weapon !== undefined && weapon.name !== undefined) {
        const content = document.createElement("div");
        content.className = "weapon-content";

        const weaponSection = document.createElement("div");
        weaponSection.className = "weapon-section";

        const title = document.createElement("div");
        title.innerHTML += key;
        title.style.fontSize = "2.5vmax";

        const weaponImage = document.createElement("div");
        weaponImage.style.backgroundImage = `url("${weapon.image ?? whiteBackground}")`;
        weaponImage.className = "weapon-image";

        const weaponData = document.createElement("div");
        weaponData.className = "weapon-data";

        weaponData.appendChild(weaponImage);
        weaponData.innerHTML += weapon.name;

        weaponSection.appendChild(title);
        weaponSection.appendChild(weaponData);
        content.appendChild(weaponSection);
        tryAddAttachmentVisuals(content, weapon.attachments);
        weaponContainer.appendChild(content);
    }
}
function tryAddAttachmentVisuals(weaponData: HTMLDivElement, attachments?: WeaponAttackments) {
    if (attachments !== undefined) {
        if (Object.keys(attachments).length > 0) {
            const sectionInfo: { "0"?: HTMLDivElement; "1"?: HTMLDivElement } = {};
            const sectionOrder: { "0": HTMLDivElement[]; "1": HTMLDivElement[] } = { 0: [], 1: [] };
            const attachmentsDiv = document.createElement("div");
            attachmentsDiv.className = "attachments";
            for (const nKey in attachments) {
                const key = nKey as keyof WeaponAttackments;
                const attachment = attachments[key];
                let sectionZero = sectionInfo["0"];
                let sectionOne = sectionInfo["1"];
                let attachmentData = undefined;
                if (key === "sight" || key === "barrel") {
                    if (sectionZero === undefined) {
                        sectionZero = sectionInfo["0"] = document.createElement("div");
                        sectionZero.className = "attachment-section";
                    }
                    switch (key) {
                        case "sight":
                            attachmentData = sectionOrder["0"][0] = document.createElement("div");
                            break;
                        default:
                            attachmentData = sectionOrder["0"][1] = document.createElement("div");
                            break;
                    }
                } else {
                    if (sectionOne === undefined) {
                        sectionOne = sectionInfo[1] = document.createElement("div");
                        sectionOne.className = "attachment-section";
                    }
                    switch (key) {
                        case "grip":
                            attachmentData = sectionOrder["1"][0] = document.createElement("div");
                            break;
                        default:
                            attachmentData = sectionOrder["1"][1] = document.createElement("div");
                            break;
                    }
                }
                if (attachmentData !== undefined && attachment?.name !== undefined) {
                    attachmentData.className = "attachment-section-data";
                    attachmentData.style.fontSize = "1.5vmax";

                    const image = document.createElement("div");
                    image.className = "attachment-image";
                    image.style.backgroundImage = `url("${attachment.image ?? whiteBackground}")`;

                    const attachmentDataWrapper = document.createElement("div");
                    attachmentDataWrapper.appendChild(image);
                    attachmentDataWrapper.innerHTML += attachment.name;
                    attachmentDataWrapper.className = "attachment-section-data-wrapper";

                    const attachmentTitle = document.createElement("div");
                    attachmentTitle.style.fontSize = "2vmax";
                    attachmentTitle.innerHTML += key;

                    attachmentData.appendChild(attachmentTitle);
                    attachmentData.appendChild(attachmentDataWrapper);
                }
            }
            for (const nKey in sectionInfo) {
                const key = nKey as keyof typeof sectionInfo;
                const attachmentSection = sectionInfo[key];
                if (attachmentSection !== undefined) {
                    const divsOrder = sectionOrder[key];
                    if (divsOrder.length > 0) {
                        for (let i = 0; i < divsOrder.length; i++) {
                            const attachment = divsOrder[i];
                            if (attachment !== undefined) {
                                attachmentSection.appendChild(attachment);
                            }
                        }
                        attachmentsDiv.appendChild(attachmentSection);
                    }
                }
            }
            weaponData.appendChild(attachmentsDiv);
        }
    }
}

const root = document.querySelector(":root") as HTMLElement;

function getRootVariable(key: string) {
    if (root !== null) {
        const rs = getComputedStyle(root);
        return rs.getPropertyValue(key);
    }
}

function setRootVariable(key: string, value: string) {
    if (root !== null) {
        return root.style.setProperty(key, value);
    }
}
//#endregion
