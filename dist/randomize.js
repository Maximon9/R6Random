import { GROUPS } from "./ops.js";
import { Equipment } from "./utils/Siege/equipment.js";
import { OP } from "./utils/Siege/op.js";
import Options, { createOptions } from "./utils/Siege/options.js";
import { BarrelAttachment, GripAttachment, SightAttachment, UnderBarrelAttachment, } from "./utils/Siege/weaponInfo/attachment.js";
import { Weapon } from "./utils/Siege/weaponInfo/weapon.js";
import { whiteBackground } from "./utils/img.js";
import { giveHoverAnimation, HoverOptions } from "./utils/html.js";
import Animator, { AnimationCurves } from "./utils/animation/animation.js";
import { lerp } from "./utils/math.js";
import InputSystem from "./input.js";
InputSystem.start();
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
export let optionsInfo = undefined;
function applyVisuals(op) {
    optionsInfo = { htmls: createOptions(1), on: false };
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
            image.className = "op-image";
            image.style.backgroundImage = `url("${op.image ?? whiteBackground}")`;
            const iconContainer = document.createElement("div");
            iconContainer.className = "icon-container";
            const iconContent = document.createElement("div");
            iconContent.style.width = "fit-content";
            iconContent.style.height = "fit-content";
            iconContent.style.fontSize = "2vmax";
            iconContent.style.display = "flex";
            iconContent.style.flexDirection = "column";
            const icon = document.createElement("img");
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
    const animation = new Animator({
        time: 0.2,
        animate: (t) => {
            const y = lerp(t, -5, 0);
            optionsButton.style.translate = `0 ${y}vmax`;
        },
        animationCurve: AnimationCurves.easeInOut,
    });
    optionsContainer.addEventListener("mouseenter", () => {
        animation.stop();
        animation.startType = "start";
        animation.start();
    });
    optionsContainer.addEventListener("mouseleave", () => {
        animation.stop();
        animation.startType = "end";
        animation.start();
    });
    const optionsButton = document.createElement("div");
    optionsButton.innerHTML += "Options";
    optionsButton.style.translate = "0 -5vmax";
    giveHoverAnimation(optionsButton, new HoverOptions({ transitionSec: 0.15 }));
    optionsButton.addEventListener("click", () => {
        giveHoverAnimation(optionsButton, new HoverOptions({ transitionSec: 0.15, click: true, animateOnTouch: true }));
        if (Options.isTouchScreen) {
            setTimeout(() => {
                displayOptions();
                giveHoverAnimation(optionsButton, new HoverOptions({ transitionSec: 0.15, click: true, animateOnTouch: false }));
            }, 200);
        }
        else {
            displayOptions();
        }
    });
    optionsContainer.appendChild(optionsButton);
    options.appendChild(optionsContainer);
    document.body.insertBefore(options, document.body.childNodes[0]);
}
function displayOptions() {
    if (optionsInfo !== undefined) {
        document.body.style.overflow = "hidden";
        for (let i = 0; i < optionsInfo.htmls.length; i++) {
            const [element, display] = optionsInfo.htmls[0];
            element.style.display = display;
            optionsInfo.on = true;
        }
    }
}
function tryAddWeaponVisuals(key, weaponContainer, weapon) {
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
function tryAddAttachmentVisuals(weaponData, attachments) {
    if (attachments !== undefined) {
        if (Object.keys(attachments).length > 0) {
            const sectionInfo = {};
            const sectionOrder = { 0: [], 1: [] };
            const attachmentsDiv = document.createElement("div");
            attachmentsDiv.className = "attachments";
            for (const nKey in attachments) {
                const key = nKey;
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
                }
                else {
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
                    attachmentDataWrapper.className = "attachment-section-data-wrapper";
                    const attachmentName = document.createElement("div");
                    attachmentName.className = "attachment-name";
                    attachmentName.innerHTML = attachment.name;
                    const attachmentTitle = document.createElement("div");
                    attachmentTitle.style.fontSize = "1.2em";
                    attachmentTitle.innerHTML += key;
                    attachmentDataWrapper.appendChild(image);
                    attachmentDataWrapper.appendChild(attachmentName);
                    attachmentData.appendChild(attachmentTitle);
                    attachmentData.appendChild(attachmentDataWrapper);
                }
            }
            for (const nKey in sectionInfo) {
                const key = nKey;
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
const root = document.querySelector(":root");
function getRootVariable(key) {
    if (root !== null) {
        const rs = getComputedStyle(root);
        return rs.getPropertyValue(key);
    }
}
function setRootVariable(key, value) {
    if (root !== null) {
        return root.style.setProperty(key, value);
    }
}
roll();
//#endregion
//# sourceMappingURL=randomize.js.map