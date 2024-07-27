//#region Main
import { GroupInfo } from "./utils/group.js";
import { OPInfo } from "./utils/op.js";
import { EquipmentInfo } from "./utils/equipment.js";
import { WeaponInfo } from "./utils/weaponInfo/weapon.js";
import { BarrelAttachmentInfo, GripAttachmentInfo, SightAttachmentInfo, UnderBarrelAttachmentInfo, } from "./utils/weaponInfo/attachment.js";
export const GROUPS = {
    Attackers: new GroupInfo({
        icons: [
            "assets/R6Images/GroupIcons/Attackers_Icon_hover.svg",
            "assets/R6Images/GroupIcons/Attackers_Icon.svg",
        ],
        ops: [
            new OPInfo({
                name: "Ace",
                icons: ["assets/R6Images/OPIcons/Ace_Icon.png"],
            }),
            new OPInfo({
                name: "Amaru",
                icons: ["assets/R6Images/OPIcons/Amaru_Icon.png"],
            }),
            new OPInfo({
                name: "Ash",
                icons: ["assets/R6Images/OPIcons/Ash_Icon.png"],
                images: ["assets/R6Images/OPImages/Ash.png"],
                equipment: [
                    new EquipmentInfo({
                        name: "Breach Charge",
                        images: ["assets/R6Images/Equipment/Breach_Charge.png"],
                    }),
                    new EquipmentInfo({
                        name: "Claymore",
                        images: ["assets/R6Images/Equipment/Claymore.png"],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "G36C",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/G36C.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "EXTENDED BARREL",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/EXTENDED_BARREL.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "HORIZONTAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo({
                        name: "R4-C",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/R4-C.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "EXTENDED BARREL",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/EXTENDED_BARREL.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "HORIZONTAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "5.7 USG",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/5.7 USG.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo({
                        name: "M45 MEUSOC",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/M54_MEUSOC.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                ],
            }),
            new OPInfo({
                name: "Blackbeard",
                icons: ["assets/R6Images/OPIcons/Blackbeard_Icon.png"],
            }),
            new OPInfo({
                name: "Blitz",
                icons: ["assets/R6Images/OPIcons/Blitz_Icon.png"],
                images: ["assets/R6Images/OPImages/Blitz.png"],
                equipment: [
                    new EquipmentInfo({
                        name: "Breach Charge",
                        images: ["assets/R6Images/Equipment/Breach_Charge.png"],
                    }),
                    new EquipmentInfo({
                        name: "Smoke Grenade",
                        images: ["assets/R6Images/Equipment/Smoke Grenade.png"],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "G52-Tactical Shield",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/G52-Tactical_Shield.png"],
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "P12",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/P12.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                ],
            }),
            new OPInfo({
                name: "Brava",
                icons: ["assets/R6Images/OPIcons/Brava_Icon.png"],
            }),
            new OPInfo({
                name: "Buck",
                icons: ["assets/R6Images/OPIcons/Buck_Icon.png"],
                images: ["assets/R6Images/OPImages/Buck.png"],
                equipment: [
                    new EquipmentInfo({
                        name: "Hard Breach Charge",
                        images: ["assets/R6Images/Equipment/Hard Breach Charge.png"],
                    }),
                    new EquipmentInfo({
                        name: "Stun Grenade",
                        images: ["assets/R6Images/Equipment/Stun Grenade.png"],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "C8-SFW",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/C8-SFW.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "EXTENDED BARREL",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/EXTENDED_BARREL.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo({
                        name: "CAMRS",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/CAMRS.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "TELESCOPIC A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/TELESCOPIC_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "TELESCOPIC B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/TELESCOPIC_B.png",
                                    ],
                                }),
                            ],
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "Gonne 6",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/Gonne_6.png"],
                        attachments: {},
                    }),
                    new WeaponInfo({
                        name: "MK1 9mm",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/MK1_9mm.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                ],
            }),
            new OPInfo({
                name: "Capitao",
                icons: ["assets/R6Images/OPIcons/Capitao_Icon.png"],
            }),
            new OPInfo({
                name: "Deimos",
                icons: ["assets/R6Images/OPIcons/Deimos_Icon.png"],
            }),
            new OPInfo({
                name: "Dokkaebi",
                icons: ["assets/R6Images/OPIcons/Dokkaebi_Icon.png"],
            }),
            new OPInfo({
                name: "Finka",
                icons: ["assets/R6Images/OPIcons/Finka_Icon.png"],
            }),
            new OPInfo({
                name: "Flores",
                icons: ["assets/R6Images/OPIcons/Flores_Icon.png"],
            }),
            new OPInfo({
                name: "Fuze",
                icons: ["assets/R6Images/OPIcons/Fuze_Icon.png"],
                images: ["assets/R6Images/OPImages/Fuze.png"],
                equipment: [
                    new EquipmentInfo({
                        name: "Breach Charge",
                        images: ["assets/R6Images/Equipment/Breach_Charge.png"],
                    }),
                    new EquipmentInfo({
                        name: "Hard Breach Charge",
                        images: ["assets/R6Images/Equipment/Hard Breach Charge.png"],
                    }),
                    new EquipmentInfo({
                        name: "Smoke Grenade",
                        images: ["assets/R6Images/Equipment/Smoke Grenade.png"],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "6P41",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/6P41.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "HORIZONTAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo({
                        name: "AK-12",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/AK-12.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "HORIZONTAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo({
                        name: "Ballistic Shield",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/Ballistic Shield.png"],
                        attachments: {},
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "GSH-18",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/GSH-18.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo({
                        name: "PMM",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/PMM.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                ],
            }),
            new OPInfo({
                name: "Glaz",
                icons: ["assets/R6Images/OPIcons/Glaz_Icon.png"],
                images: ["assets/R6Images/OPImages/Glaz.png"],
                equipment: [
                    new EquipmentInfo({
                        name: "Claymore",
                        images: ["assets/R6Images/Equipment/Claymore.png"],
                    }),
                    new EquipmentInfo({
                        name: "Frag",
                        images: ["assets/R6Images/Equipment/Frag.png"],
                    }),
                    new EquipmentInfo({
                        name: "Smoke Grenade",
                        images: ["assets/R6Images/Equipment/Smoke Grenade.png"],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "0Ts-03",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/0Ts-03.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "HORIZONTAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "Bearing 9",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/Bearing_9.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "EXTENDED BARREL",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/EXTENDED_BARREL.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo({
                        name: "Gonne 6",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/Gonne_6.png"],
                        attachments: {},
                    }),
                    new WeaponInfo({
                        name: "PMM",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/PMM.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                ],
            }),
            new OPInfo({
                name: "Gridlock",
                icons: ["assets/R6Images/OPIcons/Gridlock_Icon.png"],
            }),
            new OPInfo({
                name: "Grim",
                icons: ["assets/R6Images/OPIcons/Grim_Icon.png"],
            }),
            new OPInfo({
                name: "Hibana",
                icons: ["assets/R6Images/OPIcons/Hibana_Icon.png"],
            }),
            new OPInfo({
                name: "Iana",
                icons: ["assets/R6Images/OPIcons/Iana_Icon.png"],
            }),
            new OPInfo({
                name: "IQ",
                icons: ["assets/R6Images/OPIcons/IQ_Icon.png"],
                images: ["assets/R6Images/OPImages/IQ.png"],
                equipment: [
                    new EquipmentInfo({
                        name: "Breach Charge",
                        images: ["assets/R6Images/Equipment/Breach_Charge.png"],
                    }),
                    new EquipmentInfo({
                        name: "Claymore",
                        images: ["assets/R6Images/Equipment/Claymore.png"],
                    }),
                    new EquipmentInfo({
                        name: "Frag",
                        images: ["assets/R6Images/Equipment/Frag.png"],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "552 COMMANDO",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/552_COMMANDO.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "EXTENDED BARREL",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/EXTENDED_BARREL.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "HORIZONTAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo({
                        name: "AUG A2",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/AUG_A2.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo({
                        name: "G8A1",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/G8A1.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "HORIZONTAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "P12",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/P12.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                ],
            }),
            new OPInfo({
                name: "Jackal",
                icons: ["assets/R6Images/OPIcons/Jackal_Icon.png"],
            }),
            new OPInfo({
                name: "Kali",
                icons: ["assets/R6Images/OPIcons/Kali_Icon.png"],
            }),
            new OPInfo({
                name: "Lion",
                icons: ["assets/R6Images/OPIcons/Lion_Icon.png"],
            }),
            new OPInfo({
                name: "Maverick",
                icons: ["assets/R6Images/OPIcons/Maverick_Icon.png"],
            }),
            new OPInfo({
                name: "Montagne",
                icons: ["assets/R6Images/OPIcons/Montagne_Icon.png"],
                images: ["assets/R6Images/OPImages/Montagne.png"],
                equipment: [
                    new EquipmentInfo({
                        name: "Hard Breach Charge",
                        images: ["assets/R6Images/Equipment/Hard Breach Charge.png"],
                    }),
                    new EquipmentInfo({
                        name: "Impact EMP",
                        images: ["assets/R6Images/Equipment/Impact EMP.png"],
                    }),
                    new EquipmentInfo({
                        name: "Smoke Grenade",
                        images: ["assets/R6Images/Equipment/Smoke Grenade.png"],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "LE ROC SHIELD",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/LE_ROC_SHIELD.png"],
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "LFP589",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/LFP589.png"],
                        attachments: {
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo({
                        name: "P9",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/P9.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                ],
            }),
            new OPInfo({
                name: "Nokk",
                icons: ["assets/R6Images/OPIcons/Nokk_Icon.png"],
            }),
            new OPInfo({
                name: "Sledge",
                icons: ["assets/R6Images/OPIcons/Sledge_Icon.png"],
                images: ["assets/R6Images/OPImages/Sledge.png"],
                equipment: [
                    new EquipmentInfo({
                        name: "Frag",
                        images: ["assets/R6Images/Equipment/Frag.png"],
                    }),
                    new EquipmentInfo({
                        name: "Impact EMP",
                        images: ["assets/R6Images/Equipment/Impact EMP.png"],
                    }),
                    new EquipmentInfo({
                        name: "Stun Grenade",
                        images: ["assets/R6Images/Equipment/Stun Grenade.png"],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "L85A2",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/L85A2.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "HORIZONTAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo({
                        name: "M590A1",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/M590A1.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "P226 MK 25",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/P226_MK_25.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                ],
            }),
            new OPInfo({
                name: "Thatcher",
                icons: ["assets/R6Images/OPIcons/Thatcher_Icon.png"],
                images: ["assets/R6Images/OPImages/Thatcher.png"],
                equipment: [
                    new EquipmentInfo({
                        name: "Breach Charge",
                        images: ["assets/R6Images/Equipment/Breach_Charge.png"],
                    }),
                    new EquipmentInfo({
                        name: "Claymore",
                        images: ["assets/R6Images/Equipment/Claymore.png"],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "AR33",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/AR33.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "HORIZONTAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo({
                        name: "L85A2",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/L85A2.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "HORIZONTAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo({
                        name: "M590A1",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/M590A1.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "P226 MK 25",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/P226_MK_25.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                ],
            }),
            new OPInfo({
                name: "Thermite",
                icons: ["assets/R6Images/OPIcons/Thermite_Icon.png"],
                images: ["assets/R6Images/OPImages/Thermite.png"],
                equipment: [
                    new EquipmentInfo({
                        name: "Smoke Grenade",
                        images: ["assets/R6Images/Equipment/Smoke Grenade.png"],
                    }),
                    new EquipmentInfo({
                        name: "Stun Grenade",
                        images: ["assets/R6Images/Equipment/Stun Grenade.png"],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "556XI",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/556XI.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "HORIZONTAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo({
                        name: "M1014",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/M1014.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "5.7 USG",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/5.7 USG.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo({
                        name: "M54 MEUSOC",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/M54_MEUSOC.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                ],
            }),
            new OPInfo({
                name: "Twitch",
                icons: ["assets/R6Images/OPIcons/Twitch_Icon.png"],
                images: ["assets/R6Images/OPImages/Twitch.png"],
                equipment: [
                    new EquipmentInfo({
                        name: "Claymore",
                        images: ["assets/R6Images/Equipment/Claymore.png"],
                    }),
                    new EquipmentInfo({
                        name: "Smoke Grenade",
                        images: ["assets/R6Images/Equipment/Smoke Grenade.png"],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "417",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/417.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "TELESCOPIC A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/TELESCOPIC_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "TELESCOPIC B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/TELESCOPIC_B.png",
                                    ],
                                }),
                            ],
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "HORIZONTAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo({
                        name: "F2",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/F2.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "EXTENDED BARREL",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/EXTENDED_BARREL.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo({
                        name: "SG-CQB",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/SG-CQB.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo({
                                    name: "HORIZONTAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "LFP589",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/LFP589.png"],
                        attachments: {
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo({
                        name: "P9",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/P9.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                ],
            }),
            new OPInfo({
                name: "Zofia",
                icons: ["assets/R6Images/OPIcons/Zofia_Icon.png"],
                images: ["assets/R6Images/OPImages/Zofia.png"],
                equipment: [
                    new EquipmentInfo({
                        name: "Breach Charge",
                        images: ["assets/R6Images/Equipment/Breach_Charge.png"],
                    }),
                    new EquipmentInfo({
                        name: "Claymore",
                        images: ["assets/R6Images/Equipment/Claymore.png"],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "LMG E",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/LMG_E.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "HORIZONTAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo({
                        name: "M762",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/M762.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "HORIZONTAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "RG15",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/RG15.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                ],
            }),
        ],
    }),
    Defenders: new GroupInfo({
        icons: [
            "assets/R6Images/GroupIcons/Defenders_Icon_hover.svg",
            "assets/R6Images/GroupIcons/Defenders_Icon.svg",
        ],
        ops: [
            new OPInfo({
                name: "Alibi",
                icons: ["assets/R6Images/OPIcons/Alibi_Icon.png"],
                images: ["assets/R6Images/OPImages/Alibi.webp"],
                equipment: [
                    new EquipmentInfo({
                        name: "Observation Blocker",
                        images: ["assets/R6Images/Equipment/Observation_Blocker.webp"],
                    }),
                    new EquipmentInfo({
                        name: "Proximity Alarm",
                        images: ["assets/R6Images/Equipment/Proximity Alarm.png"],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "ACS12",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/ACS12.webp"],
                        attachments: {
                            grips: [
                                new GripAttachmentInfo({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo({
                        name: "Mx4 Storm",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/Mx4_Storm.webp"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "EXTENDED BARREL",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/EXTENDED_BARREL.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "Bailiff 410",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/Bailiff_410.webp"],
                        attachments: {
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo({
                        name: "Keratos .357",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/Keratos_.357.webp"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                ],
            }),
            new OPInfo({
                name: "Clash",
                icons: ["assets/R6Images/OPIcons/KYSClash_Icon.png"],
            }),
        ],
    }),
};
export const GroupParseKeys = {
    Attackers: "0",
    Defenders: "1",
};
export const GroupParseKeysRev = {
    "0": "Attackers",
    "1": "Defenders",
};
export const OPParseKeys = {
    "0": {
        Ace: "0",
        Amaru: "1",
        Ash: "2",
        Blackbeard: "3",
        Blitz: "4",
        Brava: "5",
        Buck: "6",
        Capitao: "7",
        Deimos: "8",
        Dokkaebi: "9",
        Finka: "10",
        Flores: "11",
        Fuze: "12",
        Glaz: "13",
        Gridlock: "14",
        Grim: "15",
        Hibana: "16",
        Iana: "17",
        IQ: "18",
        Jackal: "19",
        Kali: "20",
        Lion: "21",
        Maverick: "22",
        Montagne: "23",
        Nokk: "24",
        Sledge: "25",
        Thatcher: "26",
        Thermite: "27",
        Twitch: "28",
        Zofia: "29",
    },
    "1": {
        Alibi: "0",
        Clash: "1",
    },
};
export const OPParseKeysRev = {
    "0": {
        "0": "Ace",
        "1": "Amaru",
        "2": "Ash",
        "3": "Blackbeard",
        "4": "Blitz",
        "5": "Brava",
        "6": "Buck",
        "7": "Capitao",
        "8": "Deimos",
        "9": "Dokkaebi",
        "10": "Finka",
        "11": "Flores",
        "12": "Fuze",
        "13": "Glaz",
        "14": "Gridlock",
        "15": "Grim",
        "16": "Hibana",
        "17": "Iana",
        "18": "IQ",
        "19": "Jackal",
        "20": "Kali",
        "21": "Lion",
        "22": "Maverick",
        "23": "Montagne",
        "24": "Nokk",
        "25": "Sledge",
        "26": "Thatcher",
        "27": "Thermite",
        "28": "Twitch",
        "29": "Zofia",
    },
    "1": {
        "0": "Alibi",
        "1": "Clash",
    },
};
//#endregion
//# sourceMappingURL=ops.js.map