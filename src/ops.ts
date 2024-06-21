//#region Main

import {Groups} from "./types/groups.js";
import {Equipment} from "./utils/equipment.js";
import {Group} from "./utils/group.js";
import {OPInfo} from "./utils/op.js";
import {
    BarrelAttachment,
    GripAttachment,
    SightAttachment,
    UnderBarrelAttachment,
} from "./utils/weaponInfo/attachment.js";
import {WeaponInfo} from "./utils/weaponInfo/weapon.js";

export const GROUPS: Groups = {
    Attackers: new Group({
        icon: "",
        ops: [
            new OPInfo({
                name: "Ash",
                image: "",
                icon: "",
                equipment: [
                    new Equipment({
                        name: "Equipment",
                        image: "",
                    }),
                    new Equipment({
                        name: "Equipment",
                        image: "",
                    }),
                    new Equipment({
                        name: "Equipment",
                        image: "",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "Scar",
                        image: "",
                        attachments: {
                            sights: [
                                new SightAttachment({
                                    name: "Sight",
                                    image: "./image/image/image/image/image/image/image",
                                }),
                            ],
                            barrels: [
                                new BarrelAttachment({
                                    name: "Barrel",
                                    image: "./image/image/image/image/image/image/image",
                                }),
                            ],
                            grips: [
                                new GripAttachment({
                                    name: "Grip",
                                    image: "./image/image/image/image/image/image/image",
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachment({
                                    name: "UnderBarrel",
                                    image: "./image/image/image/image/image/image/image",
                                }),
                            ],
                        },
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "Pistol",
                        image: "",
                        attachments: {
                            sights: [
                                new SightAttachment({
                                    name: "Sight",
                                    image: "./image/image/image/image/image/image/image",
                                }),
                            ],
                            barrels: [
                                new BarrelAttachment({
                                    name: "Barrel",
                                    image: "./image/image/image/image/image/image/image",
                                }),
                            ],
                            grips: [
                                new GripAttachment({
                                    name: "Grip",
                                    image: "./image/image/image/image/image/image/image",
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachment({
                                    name: "UnderBarrel",
                                    image: "./image/image/image/image/image/image/image",
                                }),
                            ],
                        },
                    }),
                ],
            }),
        ],
    }),
};

//#endregion
