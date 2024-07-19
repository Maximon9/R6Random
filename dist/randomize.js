import { GROUPS } from "./ops.js";
import { Equipment } from "./utils/equipment.js";
import { OP } from "./utils/op.js";
import Options from "./utils/options.js";
import { BarrelAttachment, GripAttachment, SightAttachment, UnderBarrelAttachment, } from "./utils/weaponInfo/attachment.js";
import { Weapon } from "./utils/weaponInfo/weapon.js";
const key = localStorage.getItem("group");
let op = undefined;
if (key !== null) {
    const group = GROUPS[key];
    let opString = localStorage.getItem("op");
    if (opString !== null) {
        const json = JSON.parse(opString);
        op = OP.createOPFromJSON(json);
    }
    else {
        op = randomizeOP(key, group);
        if (op !== undefined) {
            localStorage.setItem("op", JSON.stringify(op));
        }
    }
    if (op !== undefined) {
        console.log(op);
    }
}
function randomizeOP(key, group) {
    let opInfo = getRandomItemFromArray(group.ops);
    if (Options.Filter.GroupFalse(key)) {
        return undefined;
    }
    else {
        if (group.ops.length > 0) {
            while (Options.Filter.OPTrue(key, opInfo.name) === false) {
                opInfo = getRandomItemFromArray(group.ops);
            }
        }
        else {
            return undefined;
        }
    }
    const op = new OP({
        name: opInfo.name,
        icon: getRandomItemFromArray(opInfo.icons),
        image: getRandomItemFromArray(opInfo.images),
    });
    const equipmentInfos = [];
    if (opInfo.equipment.length >= opInfo.equipmentCount) {
        for (let i = 0; i < opInfo.equipmentCount; i++) {
            if (i == 0) {
                equipmentInfos.push(getRandomItemFromArray(opInfo.equipment));
            }
            else {
                let equipment = getRandomItemFromArray(opInfo.equipment);
                while (equipmentMatchesList(equipment, equipmentInfos)) {
                    equipment = getRandomItemFromArray(opInfo.equipment);
                }
                equipmentInfos.push(equipment);
            }
        }
    }
    if (equipmentInfos.length > 0) {
        op.equipment = randomizeEquipment(equipmentInfos);
    }
    if (opInfo.primaryWeapons.length > 0) {
        op.primaryWeapon = randomizeWeapon(getRandomItemFromArray(opInfo.primaryWeapons));
    }
    if (opInfo.secondaryWeapons.length > 0) {
        op.secondaryWeapon = randomizeWeapon(getRandomItemFromArray(opInfo.secondaryWeapons));
    }
    return op;
}
function randomizeEquipment(equipmentInfos) {
    const equipments = [];
    for (let i = 0; i < equipmentInfos.length; i++) {
        const equipmentInfo = equipmentInfos[i];
        equipments.push(new Equipment({
            name: equipmentInfo.name,
            image: getRandomItemFromArray(equipmentInfo.images),
        }));
    }
    return equipments;
}
function randomizeWeapon(weaponInfo) {
    return new Weapon({
        name: weaponInfo.name,
        image: getRandomItemFromArray(weaponInfo.images),
        attachments: randomizeAttachments(weaponInfo.attachments),
    });
}
function randomizeAttachments(attachmentInfos) {
    const attachments = {};
    let key;
    for (key in attachmentInfos) {
        const name = fetchMatchingAttachmentName(key);
        if (name !== undefined) {
            const ats = attachmentInfos[key];
            if (ats !== undefined && ats.length > 0) {
                const attachmentInfo = getRandomItemFromArray(ats);
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
function fetchMatchingAttachmentName(key) {
    const attachmentNames = ["sight", "barrel", "grip", "underBarrel"];
    for (let index = 0; index < attachmentNames.length; index++) {
        const name = attachmentNames[index];
        if (key.includes(name)) {
            return name;
        }
    }
    return undefined;
}
function getRandomItemFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}
function equipmentMatchesList(equipment, equipments) {
    for (let i = 0; i < equipments.length; i++) {
        const check = equipments[i];
        if (equipment.name === check.name) {
            return true;
        }
    }
    return false;
}
//# sourceMappingURL=randomize.js.map