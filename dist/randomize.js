import { GROUPS } from "./ops.js";
import { Equipment } from "./utils/equipment.js";
import { OP } from "./utils/op.js";
import Options from "./utils/options.js";
import { BarrelAttachment, GripAttachment, SightAttachment, UnderBarrelAttachment, } from "./utils/weaponInfo/attachment.js";
import { Weapon } from "./utils/weaponInfo/weapon.js";
import { whiteBackground } from "./utils/img.js";
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
        /*
    <div class="weapon-data">
        <div>
            <div style="font-size: 4vmax">Primary</div>
            <div>
                <img
                    src="assets/images/WhiteBackground.jpg"
                    alt="Image"
                    style="aspect-ratio: 7/4; width: 14vmax"
                />
            </div>
            Weapon
        </div>
        <div class="attachments">
            <div class="attachment-section">
                <div>
                    <div>
                        <img
                            src="assets/images/WhiteBackground.jpg"
                            alt="Image"
                            style="aspect-ratio: 4/3; width: 10vmax"
                        />
                    </div>
                    Sight
                </div>
                <div>
                    <div>
                        <img
                            src="assets/images/WhiteBackground.jpg"
                            alt="Image"
                            style="aspect-ratio: 4/3; width: 10vmax"
                        />
                    </div>
                    Barrel
                </div>
            </div>
            <div class="attachment-section">
                <div>
                    <div>
                        <img
                            src="assets/images/WhiteBackground.jpg"
                            alt="Image"
                            style="aspect-ratio: 4/3; width: 10vmax"
                        />
                    </div>
                    Grip
                </div>
                <div>
                    <div>
                        <img
                            src="assets/images/WhiteBackground.jpg"
                            alt="Image"
                            style="aspect-ratio: 4/3; width: 10vmax"
                        />
                    </div>
                    Under Barrel
                </div>
            </div>
        </div>
    </div>
    <div class="weapon-data">
        <div>
            <div style="font-size: 4vmax">Secondary</div>
            <div>
                <img
                    src="assets/images/WhiteBackground.jpg"
                    alt="Image"
                    style="aspect-ratio: 7/4; width: 14vmax"
                />
            </div>
            Weapon
        </div>
        <div class="attachments">
            <div class="attachment-section">
                <div>
                    <div>
                        <img
                            src="assets/images/WhiteBackground.jpg"
                            alt="Image"
                            style="aspect-ratio: 4/3; width: 10vmax"
                        />
                    </div>
                    Sight
                </div>
                <div>
                    <div>
                        <img
                            src="assets/images/WhiteBackground.jpg"
                            alt="Image"
                            style="aspect-ratio: 4/3; width: 10vmax"
                        />
                    </div>
                    Barrel
                </div>
            </div>
            <div class="attachment-section">
                <div>
                    <div>
                        <img
                            src="assets/images/WhiteBackground.jpg"
                            alt="Image"
                            style="aspect-ratio: 4/3; width: 10vmax"
                        />
                    </div>
                    Grip
                </div>
                <div>
                    <div>
                        <img
                            src="assets/images/WhiteBackground.jpg"
                            alt="Image"
                            style="aspect-ratio: 4/3; width: 10vmax"
                        />
                    </div>
                    Under Barrel
                </div>
            </div>
        </div>
    </div>
    */
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
            image.style.width = "20vmax";
            image.style.height = "25vmax";
            image.style.overflow = "hidden";
            image.style.backgroundImage = `url(${op.image ?? whiteBackground})`;
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
        const equipmentData = document.createElement("div");
        equipmentData.className = "equipment-data";
        equipmentData.innerHTML += "Equipment";
        const equipmentDataWrapper = document.createElement("div");
        equipmentDataWrapper.className = "equipment-data-wrapper";
        equipmentData.appendChild(equipmentDataWrapper);
        const equipment = op?.equipment;
        if (equipment !== undefined) {
            for (let i1 = 0; i1 < 2; i1++) {
                for (let i = 0; i < equipment.length; i++) {
                    const eq = equipment[i];
                    const eqImageContainer = document.createElement("div");
                    eqImageContainer.style.display = "flex";
                    eqImageContainer.style.flexDirection = "column";
                    eqImageContainer.style.fontSize = "2vmax";
                    const eqImage = document.createElement("img");
                    eqImage.src = eq.image ?? whiteBackground;
                    eqImage.alt = "Equipment Image";
                    eqImage.style.width = "13vmax";
                    eqImageContainer.appendChild(eqImage);
                    eqImageContainer.innerHTML += eq.name ?? "";
                    equipmentDataWrapper.appendChild(eqImageContainer);
                }
            }
            opModalInfo.appendChild(equipmentData);
        }
        const weaponContainer = document.createElement("div");
        weaponContainer.className = "weapon-container";
        if (op.primaryWeapon !== undefined && op.primaryWeapon.name !== undefined) {
            const primaryData = document.createElement("div");
            primaryData.className = "weapon-data";
            const primaryWeaponData = document.createElement("div");
            const primaryTitle = document.createElement("div");
            primaryTitle.innerHTML += "Primary";
            primaryTitle.style.fontSize = "2.5vmax";
            const primaryWeaponImageContainer = document.createElement("div");
            const primaryWeaponImage = document.createElement("img");
            primaryWeaponImage.src = op.primaryWeapon.image ?? whiteBackground;
            primaryWeaponImage.style.width = "20vmax";
            primaryWeaponImageContainer.appendChild(primaryWeaponImage);
            primaryWeaponData.appendChild(primaryTitle);
            primaryWeaponData.appendChild(primaryWeaponImageContainer);
            primaryData.appendChild(primaryWeaponData);
            primaryData.innerHTML += op.primaryWeapon.name;
            tryAddAttachmentVisuals(primaryData, op.primaryWeapon.attachments);
            weaponContainer.appendChild(primaryData);
        }
        if (op.secondaryWeapon !== undefined && op.secondaryWeapon.name !== undefined) {
            const secondaryData = document.createElement("div");
            secondaryData.className = "weapon-data";
            const secondaryWeaponData = document.createElement("div");
            const secondaryTitle = document.createElement("div");
            secondaryTitle.innerHTML += "Primary";
            secondaryTitle.style.fontSize = "2.5vmax";
            const secondaryWeaponImageContainer = document.createElement("div");
            const secondaryWeaponImage = document.createElement("img");
            secondaryWeaponImage.src = op.secondaryWeapon.image ?? whiteBackground;
            secondaryWeaponImage.style.width = "20vmax";
            secondaryWeaponImageContainer.appendChild(secondaryWeaponImage);
            secondaryWeaponData.appendChild(secondaryTitle);
            secondaryWeaponData.appendChild(secondaryWeaponImageContainer);
            secondaryData.appendChild(secondaryWeaponData);
            secondaryData.innerHTML += op.secondaryWeapon.name;
            tryAddAttachmentVisuals(secondaryData, op.secondaryWeapon.attachments);
            weaponContainer.appendChild(secondaryData);
        }
        opModalContent.appendChild(opModalInfo);
        opModalContent.appendChild(weaponContainer);
        opModal.appendChild(opModalContent);
        document.body.insertBefore(opModal, document.body.childNodes[0]);
    }
}
function tryAddAttachmentVisuals(weaponData, attachments) {
    /*
        <div class="attachment-section">
            <div>
                <div>
                    <img
                        src="assets/images/WhiteBackground.jpg"
                        alt="Image"
                        style="aspect-ratio: 4/3; width: 10vmax"
                    />
                </div>
                Sight
            </div>
            <div>
                <div>
                    <img
                        src="assets/images/WhiteBackground.jpg"
                        alt="Image"
                        style="aspect-ratio: 4/3; width: 10vmax"
                    />
                </div>
                Grip
            </div>
        </div>
        <div class="attachment-section">
            <div>
                <div>
                    <img
                        src="assets/images/WhiteBackground.jpg"
                        alt="Image"
                        style="aspect-ratio: 4/3; width: 10vmax"
                    />
                </div>
                Barrel
            </div>
            <div>
                <div>
                    <img
                        src="assets/images/WhiteBackground.jpg"
                        alt="Image"
                        style="aspect-ratio: 4/3; width: 10vmax"
                    />
                </div>
                Under Barrel
            </div>
        </div>
    */
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
                if (key === "sight" || key === "grip") {
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
                        case "barrel":
                            attachmentData = sectionOrder["1"][0] = document.createElement("div");
                            break;
                        default:
                            attachmentData = sectionOrder["1"][1] = document.createElement("div");
                            break;
                    }
                }
                if (attachmentData !== undefined && attachment?.name !== undefined) {
                    const imageContainer = document.createElement("div");
                    const image = document.createElement("img");
                    image.src = attachment.image ?? whiteBackground;
                    image.style.width = "10vmax";
                    imageContainer.append(image);
                    attachmentData.innerHTML += key;
                    attachmentData.appendChild(imageContainer);
                }
            }
            console.log(sectionInfo);
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
//#endregion
//# sourceMappingURL=randomize.js.map