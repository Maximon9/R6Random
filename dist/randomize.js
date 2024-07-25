import { GROUPS } from "./ops.js";
import { Equipment } from "./utils/equipment.js";
import { OP } from "./utils/op.js";
import Options from "./utils/options.js";
import { BarrelAttachment, GripAttachment, SightAttachment, UnderBarrelAttachment, } from "./utils/weaponInfo/attachment.js";
import { Weapon } from "./utils/weaponInfo/weapon.js";
function roll() {
    let op = undefined;
    const key = localStorage.getItem("group");
    const rollString = localStorage.getItem("roll");
    if (key !== null && rollString !== null) {
        const roll = Boolean(Number(rollString));
        const group = GROUPS[key];
        let savedOP = tryFetchSavedOP();
        if (roll) {
            op = randomizeOP(key, group, savedOP);
            if (op !== undefined) {
                localStorage.setItem("op", JSON.stringify(op));
            }
        }
        else {
            op = savedOP;
        }
        console.log(op);
    }
}
function tryFetchSavedOP() {
    let opString = localStorage.getItem("op");
    if (opString !== null && opString !== undefined) {
        const json = JSON.parse(opString);
        return OP.createOPFromJSON(json);
    }
}
function randomizeOP(key, group, savedOP) {
    let opInfo = undefined;
    if (group.ops.length > 0) {
        if (Options.Filter.GroupFalse(key)) {
            return undefined;
        }
        else {
            const opInfos = group.ops.filter((opInfo) => Options.Filter.OPTrue(key, opInfo.name) === true &&
                opInfo.name !== savedOP?.name);
            opInfo = getRandomItemFromArray(opInfos);
        }
    }
    else {
        return undefined;
    }
    const op = new OP({
        name: opInfo.name,
        icon: getRandomItemFromArray(opInfo.icons),
        image: getRandomItemFromArray(opInfo.images),
    });
    if (opInfo.equipment.length > 0) {
        op.equipment = randomizeEquipment(opInfo.equipment, opInfo.equipmentCount, savedOP === undefined ? [] : savedOP.equipment ?? []);
    }
    if (opInfo.primaryWeapons.length > 0) {
        op.primaryWeapon = randomizeWeapon(getRandomItemFromArray(opInfo.primaryWeapons));
    }
    if (opInfo.secondaryWeapons.length > 0) {
        op.secondaryWeapon = randomizeWeapon(getRandomItemFromArray(opInfo.secondaryWeapons));
    }
    return op;
}
function randomizeEquipment(opInfoEuipment, equipmentCount, savedEquipment) {
    const equipmentInfos = [];
    let opInfoEuipmentCopy = [...opInfoEuipment];
    if (opInfoEuipmentCopy.length >= equipmentCount) {
        for (let i = 0; i < equipmentCount; i++) {
            opInfoEuipmentCopy = opInfoEuipmentCopy.filter((equipment) => !equipmentMatchesList(equipment, equipmentInfos));
            let randomEquipment = getRandomItemFromArray(opInfoEuipmentCopy);
            if (equipmentMatchesList(randomEquipment, savedEquipment)) {
                if (opInfoEuipment.length > equipmentCount) {
                    opInfoEuipmentCopy = opInfoEuipmentCopy.filter((equipment) => !equipmentMatchesList(equipment, savedEquipment));
                    if (opInfoEuipmentCopy.length > 0) {
                        randomEquipment = getRandomItemFromArray(opInfoEuipmentCopy);
                    }
                }
            }
            equipmentInfos.push(randomEquipment);
        }
    }
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
roll();
//#endregion
//# sourceMappingURL=randomize.js.map