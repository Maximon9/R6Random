import { GROUPS } from "./ops.js";
import { WeaponAttackments, WeaponAttackmentsInfo } from "./types/weapon.js";
import { Equipment, EquipmentInfo } from "./utils/equipment.js";
import { GroupInfo } from "./utils/group.js";
import { OP } from "./utils/op.js";
import Options from "./utils/options.js";
import {
    BarrelAttachment,
    GripAttachment,
    SightAttachment,
    UnderBarrelAttachment,
} from "./utils/weaponInfo/attachment.js";
import { Weapon, WeaponInfo } from "./utils/weaponInfo/weapon.js";

const key = localStorage.getItem("group");
if (key !== null) {
    const group = GROUPS[key];
    const op = randomizeOP(key, group);
    console.log(op);
}

function equipmentMatchesList(
    equipment: EquipmentInfo,
    equipments: EquipmentInfo[]
) {
    for (let i = 0; i < equipments.length; i++) {
        const check = equipments[i];
        if (equipment.name === check.name) {
            return true;
        }
    }
    return false;
}

function randomizeOP(key: string, group: GroupInfo) {
    let op = getRandomItemFromArray(group.ops);
    while (Options.Filter.OPTrue(key, op.name) === false) {
        op = getRandomItemFromArray(group.ops);
    }
    const equipmentInfos = [];
    for (let i = 0; i < op.equipmentNum; i++) {
        if (i == 0) {
            equipmentInfos.push(getRandomItemFromArray(op.equipment));
        } else {
            let equipment = getRandomItemFromArray(op.equipment);
            while (equipmentMatchesList(equipment, equipmentInfos)) {
                equipment = getRandomItemFromArray(op.equipment);
            }
            equipmentInfos.push(equipment);
        }
    }
    return new OP({
        name: op.name,
        icon: getRandomItemFromArray(op.icons),
        image: getRandomItemFromArray(op.images),
        equipment: randomizeEquipment(equipmentInfos),
        primaryWeapon: randomizeWeapon(
            getRandomItemFromArray(op.primaryWeapons)
        ),
        secondaryWeapon: randomizeWeapon(
            getRandomItemFromArray(op.secondaryWeapons)
        ),
    });
}

function randomizeEquipment(equipmentInfos: EquipmentInfo[]): Equipment[] {
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
    return equipments;
}
function randomizeWeapon(weaponInfo: WeaponInfo): Weapon {
    return new Weapon({
        name: weaponInfo.name,
        image: getRandomItemFromArray(weaponInfo.images),
        attachments: randomizeAttachments(weaponInfo.attachments),
    });
}

function randomizeAttachments(
    attachmentInfos: WeaponAttackmentsInfo
): WeaponAttackments {
    const attachments: WeaponAttackments = {};
    let key: keyof WeaponAttackmentsInfo;
    for (key in attachmentInfos) {
        const name = fetchMatchingAttachmentName(key);
        if (name !== undefined) {
            const ats = attachmentInfos[key];
            if (ats !== undefined) {
                const attachmentInfo = getRandomItemFromArray(ats);
                switch (name) {
                    case "sight":
                        attachments[name] = new SightAttachment({
                            name: attachmentInfo.name,
                            image: getRandomItemFromArray(
                                attachmentInfo.images
                            ),
                        });
                        break;
                    case "barrel":
                        attachments[name] = new BarrelAttachment({
                            name: attachmentInfo.name,
                            image: getRandomItemFromArray(
                                attachmentInfo.images
                            ),
                        });
                        break;
                    case "grip":
                        attachments[name] = new GripAttachment({
                            name: attachmentInfo.name,
                            image: getRandomItemFromArray(
                                attachmentInfo.images
                            ),
                        });
                        break;
                    default:
                        attachments[name] = new UnderBarrelAttachment({
                            name: attachmentInfo.name,
                            image: getRandomItemFromArray(
                                attachmentInfo.images
                            ),
                        });
                        break;
                }
            }
        }
    }
    return attachments;
}
function fetchMatchingAttachmentName(
    key: string
): keyof WeaponAttackments | undefined {
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
