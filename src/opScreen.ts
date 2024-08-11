//#region Main
import type { AllGroups, AllOPNames, ParsedGroupKeys } from "./ops.js";
import type { OptionNames } from "./utils/Siege/options.js";
import type { WeaponAttackments, WeaponAttackmentsInfo } from "./types/weapon.js";
import { GROUPS } from "./ops.js";
import { Equipment, EquipmentInfo } from "./utils/Siege/equipment.js";
import { OP } from "./utils/Siege/op.js";
import Options, {
    changeOptionsDisplay,
    createOptions,
    exitOptions,
    optionsInfo,
} from "./utils/Siege/options.js";
import {
    BarrelAttachment,
    GripAttachment,
    SightAttachment,
    UnderBarrelAttachment,
} from "./utils/Siege/weaponInfo/attachment.js";
import { Weapon, WeaponInfo } from "./utils/Siege/weaponInfo/weapon.js";
import { whiteBackground } from "./utils/img.js";
import { AnimationCurves, Animator, ElementAnimator } from "./utils/animation/animation.js";
import InputSystem from "./utils/input.js";
import { createFooter } from "./utils/Siege/footer.js";
import { createElement, disableContextMenu, groupButtonClicked } from "./utils/html.js";
import Dice, { getRandomItemFromArray } from "./utils/randomize.js";
import { HTMLGroup } from "./types/html.js";
import { lerp } from "./utils/math.js";

InputSystem.start();
disableContextMenu(document.body);

let opModal: HTMLElement | undefined = undefined;
let rerollOptionsWrapper: HTMLDivElement | undefined = undefined;

function roll() {
    let op: OP | undefined = undefined;
    const key = sessionStorage.getItem("group") as ParsedGroupKeys | null;
    const roll = sessionStorage.getItem("roll") as "1" | null;
    if (key !== null) {
        const group = GROUPS[key];
        let savedOP = tryFetchSavedOP();
        if (roll !== null && Boolean(Number(roll))) {
            opModal?.remove();
            op = randomizeOP(key, group, savedOP);
            if (op !== undefined) {
                sessionStorage.setItem("op", JSON.stringify(op));
            }
            sessionStorage.removeItem("roll");
        } else {
            op = savedOP;
        }
    }
    applyVisuals(op);
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

function applyVisuals(op: OP | undefined) {
    if (rerollOptionsWrapper === undefined) {
        rerollOptionsWrapper = createElement("html", "div");
        rerollOptionsWrapper.className = "reroll-options-wrapper";

        const rerollOptionsContainer = createElement("html", "div");
        rerollOptionsContainer.className = "reroll-options-container";

        addOptionButton(rerollOptionsContainer);
        addReRollButtons(rerollOptionsContainer);

        rerollOptionsWrapper.appendChild(rerollOptionsContainer);
        document.body.insertBefore(rerollOptionsWrapper, document.body.childNodes[2]);
    }
    if (op !== undefined) {
        opModal = createElement("html", "section");
        opModal.className = "op-modal";

        const opModalContent = createElement("html", "div");
        opModalContent.className = "op-modal-content";

        const opModalInfo = createElement("html", "div");
        opModalInfo.className = "op-modal-info";

        if (op.name !== undefined) {
            const opData = createElement("html", "div");
            opData.className = "op-data";
            const image = createElement("html", "div");
            image.className = "op-image";
            image.style.backgroundImage = `url("${op.image ?? whiteBackground}")`;

            const iconContainer = createElement("html", "div");
            iconContainer.className = "icon-container";

            const iconContent = createElement("html", "div");
            iconContent.style.width = "fit-content";
            iconContent.style.height = "fit-content";
            iconContent.style.fontSize = "2vmax";
            iconContent.style.display = "flex";
            iconContent.style.justifyContent = "center";
            iconContent.style.alignItems = "center";
            iconContent.style.flexDirection = "column";
            const icon = createElement("html", "img");
            icon.src = op.icon ?? whiteBackground;
            icon.alt = "OP Icon";
            icon.style.width = "3.5vmax";
            iconContent.append(icon);
            iconContent.innerHTML += op.name;
            iconContainer.appendChild(iconContent);
            image.appendChild(iconContainer);
            opData.appendChild(image);
            opModalInfo.appendChild(opData);
        }

        const equipmentContent = createElement("html", "div");
        equipmentContent.className = "equipment-content";
        equipmentContent.innerHTML += "Equipment";

        const equipmentWrapper = createElement("html", "div");
        equipmentWrapper.className = "equipment-wrapper";
        const equipment = op?.equipment;
        if (equipment !== undefined) {
            for (let i = 0; i < equipment.length; i++) {
                const eq = equipment[i];
                if (eq.name !== undefined) {
                    const equipmentData = createElement("html", "div");
                    equipmentData.className = "equipment-data";
                    const equipmentImage = createElement("html", "div");
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

        const weaponContainer = createElement("html", "div");
        weaponContainer.className = "weapons-container";

        tryAddWeaponVisuals("Primary", weaponContainer, op.primaryWeapon);
        tryAddWeaponVisuals("Secondary", weaponContainer, op.secondaryWeapon);

        opModalContent.appendChild(opModalInfo);
        opModalContent.appendChild(weaponContainer);
        opModal.appendChild(opModalContent);
        document.body.appendChild(opModal);
        createFooter(opModal);
    }
}

function addOptionButton(rerollOptionsContainer: HTMLDivElement) {
    const options = createElement("html", "div");
    options.className = "options";

    const optionsContainer = createElement("html", "div");

    const optionsButton = createElement("html", "div");
    optionsButton.style.backgroundImage = "url(assets/images/OptionsIcon.svg)";

    const animator = new ElementAnimator(optionsButton, [{ scale: "110%" }], {
        duration: 150,
        fill: "both",
    });
    optionsButton.addEventListener("pointerenter", (event) => {
        if (event.pointerType !== "touch") {
            animator.play();
        }
    });
    optionsButton.addEventListener("pointerleave", (event) => {
        if (event.pointerType !== "touch") {
            animator.play([{ scale: "100%" }]);
        }
    });

    optionsButton.addEventListener("pointerup", (event) => {
        if (event.button === 0) {
            animator.play()?.addEventListener("finish", () => {
                optionsButton.style.display = "none";
                changeOptionsDisplay("show");
            });
        }
    });

    optionsInfo.htmls = createOptions(document.body, 1);
    optionsInfo.on = false;
    for (let i = 0; i < optionsInfo.htmls.length; i++) {
        const { element, animator } = optionsInfo.htmls[i];
        if (element.className === "exit-options") {
            (element as HTMLElement).addEventListener("pointerup", (event) => {
                if (event.button === 0) {
                    if (animator !== undefined) {
                        animator.play()?.addEventListener("finish", () => {
                            optionsButton.style.display = "";
                            exitOptions();
                        });
                    }
                }
            });
        }
    }

    optionsContainer.appendChild(optionsButton);
    options.appendChild(optionsContainer);
    rerollOptionsContainer.appendChild(options);

    document.body.insertBefore(rerollOptionsContainer, document.body.childNodes[0]);
}
function addReRollButtons(rerollOptionsContainer: HTMLDivElement) {
    const rerollContainer = createElement("html", "div");
    rerollContainer.className = "reroll-container";

    const rerollButtons = createElement("html", "div");
    rerollButtons.className = "reroll-buttons";
    rerollButtons.style.zIndex = "1";

    const htmlGroups: HTMLGroup<{
        hasTouched: boolean;
    }>[] = [];
    const groupKeys = Object.keys(GROUPS);
    for (let i = 0; i < groupKeys.length; i++) {
        const key = groupKeys[i];
        const group = GROUPS[key as keyof typeof GROUPS];
        const rerollButton = createElement("html", "div");
        rerollButton.style.zIndex = "2";
        rerollButton.style.scale = "90%";
        rerollButton.style.translate = "10vmax 0";
        const animationData = {
            hasTouched: false,
        };
        const elementAnimator = new ElementAnimator(rerollButton, [{ translate: "0, 0" }], {
            duration: 150,
            fill: "both",
            easing: "ease-in-out",
        });
        const animator = new Animator(
            (t: number, button: HTMLDivElement) => {
                const p = lerp(t, 90, 100);
                button.style.scale = `${p}%`;
            },
            {
                duration: 0.15,
                fill: true,
                animationCurve: AnimationCurves.easeInOut,
                args: [rerollButton],
            }
        );

        const rerollImage = createElement("html", "img");
        rerollImage.draggable = false;
        const htmlImages = group.fetch_html_images();
        rerollImage.src = htmlImages.normalIcon ?? whiteBackground;
        rerollImage.alt = `${key} Rerol Button`;

        rerollButton.addEventListener("pointerenter", (event) => {
            if (event.pointerType !== "touch") {
                rerollImage.src = htmlImages.hoverIcon ?? whiteBackground;
                animator.play("start");
            }
        });
        rerollButton.addEventListener("pointerleave", (event) => {
            if (event.pointerType !== "touch") {
                animator.play("end").addEventListener("finish", () => {
                    rerollImage.src = htmlImages.normalIcon ?? whiteBackground;
                });
            }
        });

        const htmlGroupData: HTMLGroup<{
            hasTouched: boolean;
        }> = {
            animator,
            elementAnimator,
            animationData,
            key,
            htmlGroup: rerollButton,
            htmlImg: rerollImage,
            htmlImages,
        };

        htmlGroups.push(htmlGroupData);
        rerollButton.appendChild(rerollImage);
        rerollButtons.appendChild(rerollButton);
        if (i < groupKeys.length - 1) {
            const dice = new Dice();
            dice.animator.setOptions({
                duration: 500,
                fill: "both",
                easing: "ease-in-out",
            });
            dice.svg.style.translate = "5vmax 0";
            dice.svg.style.zIndex = "2";
            rerollButtons.appendChild(dice.svg);
            htmlGroupData.dice = dice;
        }
    }
    const unsetHTMLGroups = (name: string) => {
        for (let i = 0; i < htmlGroups.length; i++) {
            const { animator, key, htmlGroup, htmlImg, htmlImages } = htmlGroups[i];
            if (name !== key) {
                animator?.play("end").addEventListener("finish", () => {
                    htmlImg.src = htmlImages.normalIcon ?? whiteBackground;
                });
            }
        }
    };
    for (let i = 0; i < htmlGroups.length; i++) {
        const { animator, key, htmlGroup, htmlImg, htmlImages, dice } = htmlGroups[i];
        htmlGroup.addEventListener("pointerup", (event) => {
            if (event.button === 0) {
                event.stopImmediatePropagation();
                event.stopPropagation();
                unsetHTMLGroups(key);
                htmlImg.src = htmlImages.hoverIcon ?? whiteBackground;
                animator?.play("start").addEventListener("finish", () => {
                    if (event.pointerType === "touch") {
                        animator.play("end").addEventListener("finish", () => {
                            htmlImg.src = htmlImages.normalIcon ?? whiteBackground;
                        });
                    }
                    dice?.randomize();
                    groupButtonClicked(key);
                    roll();
                });
            }
        });
    }

    const loopOverHTMLGroups = (
        func: (
            htmlGroup: HTMLGroup<{
                hasTouched: boolean;
            }>,
            index: number
        ) => void
    ) => {
        for (let i = 0; i < htmlGroups.length; i++) {
            func(htmlGroups[i], i);
        }
    };
    const setTranslations = (
        htmlGroups: HTMLGroup<{
            hasTouched: boolean;
        }>
    ) => {
        const { elementAnimator, htmlGroup, dice } = htmlGroups;
        elementAnimator?.play([{ translate: "0 0" }], {
            duration: 150,
            fill: "both",
            easing: "ease-in-out",
        });
        dice?.animator.play([{ translate: "0 0" }], {
            duration: 150,
            fill: "both",
            easing: "ease-in-out",
        });
    };
    const unsetTranslations = (
        htmlGroups: HTMLGroup<{
            hasTouched: boolean;
        }>
    ) => {
        const { elementAnimator, dice } = htmlGroups;
        elementAnimator?.play([{ translate: "10vmax 0" }], {
            duration: 500,
            fill: "both",
            easing: "ease-in-out",
        });
        dice?.animator.play([{ translate: "5vmax 0" }], {
            duration: 500,
            fill: "both",
            easing: "ease-in-out",
        });
    };
    rerollButtons.addEventListener("pointerup", (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        if (event.button === 0) {
            if (event.pointerType === "touch") {
                loopOverHTMLGroups((htmlGroup) => {
                    const { animationData } = htmlGroup;
                    if (animationData !== undefined) {
                        if (animationData.hasTouched) {
                            animationData.hasTouched = false;
                            unsetTranslations(htmlGroup);
                        } else {
                            animationData.hasTouched = true;
                            setTranslations(htmlGroup);
                        }
                    }
                });
            }
        }
    });
    document.body.addEventListener("pointerup", (event) => {
        event.stopImmediatePropagation();
        event.stopPropagation();
        if (event.button === 0) {
            if (event.pointerType === "touch") {
                loopOverHTMLGroups((htmlGroup) => {
                    htmlGroup.animationData === undefined
                        ? undefined
                        : (htmlGroup.animationData.hasTouched = false);
                    unsetTranslations(htmlGroup);
                });
            }
        }
    });
    rerollButtons.addEventListener("pointerenter", (event) => {
        if (event.pointerType !== "touch") {
            loopOverHTMLGroups(setTranslations);
        }
    });
    rerollButtons.addEventListener("pointerleave", (event) => {
        if (event.pointerType !== "touch") {
            loopOverHTMLGroups(unsetTranslations);
        }
    });

    rerollContainer.appendChild(rerollButtons);
    rerollOptionsContainer.appendChild(rerollContainer);
}

function tryAddWeaponVisuals(
    key: "Primary" | "Secondary",
    weaponContainer: HTMLDivElement,
    weapon?: Weapon
) {
    if (weapon !== undefined && weapon.name !== undefined) {
        const content = createElement("html", "div");
        content.className = "weapon-content";

        const weaponSection = createElement("html", "div");
        weaponSection.className = "weapon-section";

        const title = createElement("html", "div");
        title.innerHTML += key;
        title.style.fontSize = "2.5vmax";

        const weaponImage = createElement("html", "div");
        weaponImage.style.backgroundImage = `url("${weapon.image ?? whiteBackground}")`;
        weaponImage.className = "weapon-image";

        const weaponData = createElement("html", "div");
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
            const attachmentsDiv = createElement("html", "div");
            attachmentsDiv.className = "attachments";
            for (const nKey in attachments) {
                const key = nKey as keyof WeaponAttackments;
                const attachment = attachments[key];
                let sectionZero = sectionInfo["0"];
                let sectionOne = sectionInfo["1"];
                let attachmentData = undefined;
                if (key === "sight" || key === "barrel") {
                    if (sectionZero === undefined) {
                        sectionZero = sectionInfo["0"] = createElement("html", "div");
                        sectionZero.className = "attachment-section";
                    }
                    switch (key) {
                        case "sight":
                            attachmentData = sectionOrder["0"][0] = createElement("html", "div");
                            break;
                        default:
                            attachmentData = sectionOrder["0"][1] = createElement("html", "div");
                            break;
                    }
                } else {
                    if (sectionOne === undefined) {
                        sectionOne = sectionInfo[1] = createElement("html", "div");
                        sectionOne.className = "attachment-section";
                    }
                    switch (key) {
                        case "grip":
                            attachmentData = sectionOrder["1"][0] = createElement("html", "div");
                            break;
                        default:
                            attachmentData = sectionOrder["1"][1] = createElement("html", "div");
                            break;
                    }
                }
                if (attachmentData !== undefined && attachment?.name !== undefined) {
                    attachmentData.className = "attachment-section-data";
                    attachmentData.style.fontSize = "1.5vmax";

                    const image = createElement("html", "div");
                    image.className = "attachment-image";
                    image.style.backgroundImage = `url("${attachment.image ?? whiteBackground}")`;

                    const attachmentDataWrapper = createElement("html", "div");
                    attachmentDataWrapper.className = "attachment-section-data-wrapper";

                    const attachmentName = createElement("html", "div");
                    attachmentName.className = "attachment-name";
                    attachmentName.innerHTML = attachment.name;

                    const attachmentTitle = createElement("html", "div");
                    attachmentTitle.style.fontSize = "1.2em";
                    attachmentTitle.innerHTML += key;

                    attachmentDataWrapper.appendChild(image);
                    attachmentDataWrapper.appendChild(attachmentName);
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

roll();
//#endregion
