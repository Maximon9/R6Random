import { GROUPS } from "./ops.js";
import { Equipment } from "./utils/equipment.js";
import { OP } from "./utils/op.js";
import Options from "./utils/options.js";
import { BarrelAttachment, GripAttachment, SightAttachment, UnderBarrelAttachment, } from "./utils/weaponInfo/attachment.js";
import { Weapon } from "./utils/weaponInfo/weapon.js";
function roll() {
    let op = undefined;
    const key = sessionStorage.getItem("group");
    const roll = sessionStorage.getItem("roll");
    if (key !== null) {
        const group = GROUPS[key];
        let savedOP = tryFetchSavedOP();
        if (roll !== null && Boolean(Number(roll))) {
            op = randomizeOP(key, group, savedOP);
            if (op !== undefined) {
                sessionStorage.setItem("op", JSON.stringify(op));
            }
            sessionStorage.removeItem("roll");
        }
        else {
            op = savedOP;
        }
        applyVisuals(op);
    }
}
function tryFetchSavedOP() {
    let opString = sessionStorage.getItem("op");
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
            let opInfos = [];
            if (Options.optionTrue("Try Avoid Dupes", "OPs") && savedOP !== undefined) {
                opInfos = group.ops.filter((opInfo) => Options.Filter.OPTrue(key, opInfo.name) === true &&
                    opInfo.name !== savedOP?.name);
                if (opInfos.length <= 0) {
                    opInfos = group.ops.filter((opInfo) => Options.Filter.OPTrue(key, opInfo.name) === true);
                }
            }
            else {
                opInfos = group.ops.filter((opInfo) => Options.Filter.OPTrue(key, opInfo.name) === true);
            }
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
        const equipment = randomizeEquipment(opInfo.equipment, opInfo.equipmentCount, savedOP === undefined ? [] : savedOP.equipment ?? []);
        if (equipment !== undefined) {
            op.equipment = equipment;
        }
    }
    if (opInfo.primaryWeapons.length > 0) {
        op.primaryWeapon = randomizeWeapon(opInfo.primaryWeapons, "Primary", savedOP?.primaryWeapon);
    }
    if (opInfo.secondaryWeapons.length > 0) {
        op.secondaryWeapon = randomizeWeapon(opInfo.secondaryWeapons, "Secondary", savedOP?.secondaryWeapon);
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
            while (Options.optionTrue("Try Avoid Dupes", "Equipment") &&
                equipmentMatchesList(randomEquipment, savedEquipment)) {
                opInfoEuipmentCopy = opInfoEuipmentCopy.filter((equipment) => !equipmentMatchesList(equipment, savedEquipment));
                if (opInfoEuipmentCopy.length > 0) {
                    randomEquipment = getRandomItemFromArray(opInfoEuipmentCopy);
                }
                else {
                    break;
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
    if (equipments.length > 0) {
        return equipments;
    }
}
function randomizeWeapon(weaponInfos, type, savedWeapon) {
    let weaponInfosCopy = [...weaponInfos];
    if (Options.optionTrue("Try Avoid Dupes", (type + " Weapons")) &&
        savedWeapon !== undefined) {
        weaponInfosCopy = weaponInfosCopy.filter((weaponInfo) => weaponInfo.name !== savedWeapon.name);
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
function randomizeAttachments(attachmentInfos, type, savedAttachments) {
    const attachments = {};
    let key;
    for (key in attachmentInfos) {
        const name = fetchMatchingAttachmentName(key);
        if (name !== undefined) {
            const ats = attachmentInfos[key];
            if (ats !== undefined && ats.length > 0) {
                let atsCopy = [...ats];
                if (Options.optionTrue("Try Avoid Dupes", (type + " " + key)) &&
                    savedAttachments !== undefined) {
                    atsCopy = atsCopy.filter((attachmentInfo) => attachmentInfo.name !== savedAttachments[name]?.name);
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
function applyVisuals(op) {
    if (op !== undefined) {
    }
    const opModalInfo = document
        .getElementsByClassName("op-modal-info")
        .item(0);
    if (opModalInfo !== null) {
        let combinedWidth = 0;
        for (let i = 0; i < opModalInfo.children.length; i++) {
            const child = opModalInfo.children[i];
            combinedWidth += child.clientWidth;
        }
        console.log(combinedWidth);
    }
}
//#endregion
//# sourceMappingURL=randomize.js.map