//#region Main
import type { OPInfoParameters, OPParameters } from "../types/op.js";
import type { WeaponInfo } from "./weaponInfo/weapon.js";
import type { EquipmentInfo } from "./equipment.js";
import type { WeaponAttackments } from "../types/weapon.js";
import { Equipment } from "./equipment.js";
import { Weapon } from "./weaponInfo/weapon.js";
import { whiteBackground } from "./img.js";
import {
    BarrelAttachment,
    GripAttachment,
    SightAttachment,
    UnderBarrelAttachment,
} from "./weaponInfo/attachment.js";

export class OPInfo<Name extends string = string> {
    name: Name;
    images: string[];
    icons: string[];
    equipmentCount: number;
    equipment: EquipmentInfo[];
    primaryWeapons: WeaponInfo[];
    secondaryWeapons: WeaponInfo[];

    constructor(info: OPInfoParameters<Name> = {}) {
        this.name = info["name"] ?? ("" as Name);
        this.images = info["images"] ?? [whiteBackground];
        this.icons = info["icons"] ?? [whiteBackground];
        this.equipmentCount = info["equipmentNum"] ?? 1;
        this.equipment = info["equipment"] ?? [];
        this.primaryWeapons = info["primaryWeapons"] ?? [];
        this.secondaryWeapons = info["secondaryWeapons"] ?? [];
    }
}
export class OP<Name extends string = string> {
    name?: Name;
    image?: string;
    icon?: string;
    equipment?: Equipment[];
    primaryWeapon?: Weapon;
    secondaryWeapon?: Weapon;
    constructor(info: OPParameters<Name> = {}) {
        let item: any = info["name"];
        if (item !== undefined) {
            this.name = item;
        }
        item = info["icon"];
        if (item !== undefined) {
            this.icon = item;
        }
        item = info["image"];
        if (item !== undefined) {
            this.image = item;
        }
        item = info["equipment"];
        if (item !== undefined) {
            this.equipment = item;
        }
        item = info["primaryWeapon"];
        if (item !== undefined) {
            this.primaryWeapon = item;
        }
        item = info["secondaryWeapon"];
        if (item !== undefined) {
            this.secondaryWeapon = item;
        }
    }
    static createOPFromJSON(json: { [k: string]: string | {} | {}[] }) {
        const op = new OP();
        for (const key in json) {
            const value = json[key];
            if (typeof value === "string") {
                if (key === "name") {
                    op.name = value;
                } else if (key === "icon") {
                    op.icon = value;
                } else if (key === "image") {
                    op.image = value;
                }
            } else if (Array.isArray(value)) {
                if (key === "equipment") {
                    const array = this.#createEquipmentFromJson(value);
                    if (array !== undefined) {
                        op.equipment = array;
                    }
                }
            } else {
                if (key === "primaryWeapon") {
                    const item = this.#createWeaponFromJson(value);
                    if (item !== undefined) {
                        op.primaryWeapon = item;
                    }
                } else if (key === "secondaryWeapon") {
                    const item = this.#createWeaponFromJson(value);
                    if (item !== undefined) {
                        op.secondaryWeapon = item;
                    }
                }
            }
        }
        return op;
    }
    static #createEquipmentFromJson(array: { [k: string]: string }[]): Equipment[] | undefined {
        const equipmentArray: Equipment[] = [];
        for (let i = 0; i < array.length; i++) {
            const equipmentInfo = array[i];
            const equipment = new Equipment();
            let empty = true;
            for (const key in equipmentInfo) {
                const value = equipmentInfo[key];
                if (typeof value === "string") {
                    if (key === "name") {
                        equipment.name = value;
                        empty = false;
                    } else if (key === "image") {
                        equipment.image = value;
                        empty = false;
                    }
                }
            }
            if (!empty) {
                equipmentArray.push(equipment);
            }
        }
        if (equipmentArray.length > 0) return equipmentArray;
    }
    static #createWeaponFromJson(json: { [k: string]: string | {} }): Weapon | undefined {
        const weapon = new Weapon();
        let empty = true;
        for (const key in json) {
            const value = json[key];
            if (typeof value === "string") {
                if (key === "name") {
                    weapon.name = value;
                    empty = false;
                } else if (key === "image") {
                    weapon.image = value;
                    empty = false;
                }
            } else {
                if (key === "attachments") {
                    const item = this.#createAttachmentsFromJson(value);
                    if (item !== undefined) {
                        weapon.attachments = item;
                        empty = false;
                    }
                }
            }
        }
        if (!empty) return weapon;
    }
    static #createAttachmentsFromJson(json: {
        [k: string]: { [k: string]: string };
    }): WeaponAttackments | undefined {
        const attachments: WeaponAttackments = {};
        let empty = true;
        for (const key in json) {
            const value = json[key];
            if (typeof value === "object" && !Array.isArray(value)) {
                let attachtmentEmpty = true;
                let item = undefined;
                if (key === "sight") {
                    item = new SightAttachment();
                } else if (key === "barrel") {
                    item = new BarrelAttachment();
                } else if (key === "grip") {
                    item = new GripAttachment();
                } else if (key === "underBarrel") {
                    item = new UnderBarrelAttachment();
                }
                if (item !== undefined) {
                    for (const aKey in value) {
                        const aValue = value[aKey];
                        if (typeof aValue === "string") {
                            if (aKey === "name") {
                                item.name = aValue;
                                attachtmentEmpty = false;
                            } else if (aKey === "image") {
                                item.image = aValue;
                                attachtmentEmpty = false;
                            }
                        }
                    }
                    if (!attachtmentEmpty) {
                        if (empty) {
                            empty = false;
                        }
                        attachments[key as keyof WeaponAttackments] = item;
                    }
                }
            }
        }
        if (!empty) {
            return attachments;
        }
    }
}
//# sourceMappingURL=op.js.map
//#endregion
