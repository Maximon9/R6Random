//#region Main
import { GroupInfo } from "./utils/group.js";
import { OPInfo } from "./utils/op.js";
import { EquipmentInfo } from "./utils/equipment.js";
import { WeaponInfo } from "./utils/weaponInfo/weapon.js";
import { BarrelAttachmentInfo, GripAttachmentInfo, SightAttachmentInfo, UnderBarrelAttachmentInfo, } from "./utils/weaponInfo/attachment.js";
export const GROUPS = {
    Attackers: new GroupInfo({
        icons: [
            "GroupIcons/Attackers_Icon_hover.svg",
            "GroupIcons/Attackers_Icon.svg",
        ],
        ops: [
            new OPInfo({
                name: "Ash",
                icons: [
                    "OPIcons/Ash_Icon.png",
                ],
                images: [
                    "OPImages/Ash.png",
                ],
                equipment: [
                    new EquipmentInfo({
                        name: "Breach Charge",
                        images: [
                            "Equipment/Breach_Charge.png",
                        ],
                    }),
                    new EquipmentInfo({
                        name: "Claymore",
                        images: [
                            "Equipment/Claymore.png",
                        ],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "G36C",
                        images: [
                            "Weapons/PrimaryWeapons/G36C.png",
                        ],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "COMPENSATOR",
                                    images: [
                                        "Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "EXTENDED BARREL",
                                    images: [
                                        "Attachments/BarrelAttachments/EXTENDED_BARREL.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "FLASH HIDER",
                                    images: [
                                        "Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "HORIZONTAL GRIP",
                                    images: [
                                        "Attachments/GripAttachments/HORIZONTAL_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    images: [
                                        "Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    images: [
                                        "Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    images: [
                                        "Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    images: [
                                        "Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    images: [
                                        "Attachments/SightAttachments/IRON SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    images: [
                                        "Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    images: [
                                        "Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    images: [
                                        "Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    images: [
                                        "Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    images: [
                                        "Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    images: [
                                        "Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                            ],
                        }
                    }),
                    new WeaponInfo({
                        name: "R4-C",
                        images: [
                            "Weapons/PrimaryWeapons/R4-C.png",
                        ],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "COMPENSATOR",
                                    images: [
                                        "Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "EXTENDED BARREL",
                                    images: [
                                        "Attachments/BarrelAttachments/EXTENDED_BARREL.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "FLASH HIDER",
                                    images: [
                                        "Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "HORIZONTAL GRIP",
                                    images: [
                                        "Attachments/GripAttachments/HORIZONTAL_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    images: [
                                        "Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    images: [
                                        "Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    images: [
                                        "Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    images: [
                                        "Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    images: [
                                        "Attachments/SightAttachments/IRON SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    images: [
                                        "Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    images: [
                                        "Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    images: [
                                        "Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    images: [
                                        "Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    images: [
                                        "Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    images: [
                                        "Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                            ],
                        }
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "5.7 USG",
                        images: [
                            "Weapons/SecondaryWeapons/5.7 USG.png",
                        ],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                            ],
                        }
                    }),
                    new WeaponInfo({
                        name: "M45 MEUSOC",
                        images: [
                            "Weapons/SecondaryWeapons/M54_MEUSOC.png",
                        ],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                            ],
                        }
                    }),
                ],
            }),
            new OPInfo({
                name: "Blitz",
                icons: [
                    "OPIcons/Blitz_Icon.png",
                ],
                images: [
                    "OPImages/Blitz.png",
                ],
                equipment: [
                    new EquipmentInfo({
                        name: "Breach Charge",
                        images: [
                            "Equipment/Breach_Charge.png",
                        ],
                    }),
                    new EquipmentInfo({
                        name: "Smoke Grenade",
                        images: [
                            "Equipment/Smoke Grenade.png",
                        ],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "G52-Tactical Shield",
                        images: [
                            "Weapons/PrimaryWeapons/G52-Tactical_Shield.png",
                        ],
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "P12",
                        images: [
                            "Weapons/SecondaryWeapons/P12.png",
                        ],
                    }),
                ],
            }),
            new OPInfo({
                name: "Buck",
                icons: [
                    "OPIcons/Buck_Icon.png",
                ],
                images: [
                    "OPImages/Buck.png",
                ],
                equipment: [
                    new EquipmentInfo({
                        name: "Hard Breach Charge",
                        images: [
                            "Equipment/Hard Breach Charge.png",
                        ],
                    }),
                    new EquipmentInfo({
                        name: "Stun Grenade",
                        images: [
                            "Equipment/Stun Grenade.png",
                        ],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "C8-SFW",
                        images: [
                            "Weapons/PrimaryWeapons/C8-SFW.png",
                        ],
                    }),
                    new WeaponInfo({
                        name: "CAMRS",
                        images: [
                            "Weapons/PrimaryWeapons/CAMRS.png",
                        ],
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "Gonne 6",
                        images: [
                            "Weapons/SecondaryWeapons/Gonne_6.png",
                        ],
                    }),
                    new WeaponInfo({
                        name: "MK1 9mm",
                        images: [
                            "Weapons/SecondaryWeapons/MK1_9mm.png",
                        ],
                    }),
                ],
            }),
            new OPInfo({
                name: "Fuze",
                icons: [
                    "OPIcons/Fuze_Icon.png",
                ],
                images: [
                    "OPImages/Fuze.png",
                ],
                equipment: [
                    new EquipmentInfo({
                        name: "Breach Charge",
                        images: [
                            "Equipment/Breach_Charge.png",
                        ],
                    }),
                    new EquipmentInfo({
                        name: "Hard Breach Charge",
                        images: [
                            "Equipment/Hard Breach Charge.png",
                        ],
                    }),
                    new EquipmentInfo({
                        name: "Smoke Grenade",
                        images: [
                            "Equipment/Smoke Grenade.png",
                        ],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "6P41",
                        images: [
                            "Weapons/PrimaryWeapons/6P41.png",
                        ],
                    }),
                    new WeaponInfo({
                        name: "AK-12",
                        images: [
                            "Weapons/PrimaryWeapons/AK-12.png",
                        ],
                    }),
                    new WeaponInfo({
                        name: "Ballistic Shield",
                        images: [
                            "Weapons/PrimaryWeapons/Ballistic Shield.png",
                        ],
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "GSH-18",
                        images: [
                            "Weapons/SecondaryWeapons/GSH-18.png",
                        ],
                    }),
                    new WeaponInfo({
                        name: "PMM",
                        images: [
                            "Weapons/SecondaryWeapons/PMM.png",
                        ],
                    }),
                ],
            }),
            new OPInfo({
                name: "Glaz",
                icons: [
                    "OPIcons/Glaz_Icon.png",
                ],
                images: [
                    "OPImages/Glaz.png",
                ],
                equipment: [
                    new EquipmentInfo({
                        name: "Claymore",
                        images: [
                            "Equipment/Claymore.png",
                        ],
                    }),
                    new EquipmentInfo({
                        name: "Frag",
                        images: [
                            "Equipment/Frag.png",
                        ],
                    }),
                    new EquipmentInfo({
                        name: "Smoke Grenade",
                        images: [
                            "Equipment/Smoke Grenade.png",
                        ],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "0Ts-03",
                        images: [
                            "Weapons/PrimaryWeapons/0Ts-03.png",
                        ],
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "Bearing 9",
                        images: [
                            "Weapons/SecondaryWeapons/Bearing_9.png",
                        ],
                    }),
                    new WeaponInfo({
                        name: "Gonne 6",
                        images: [
                            "Weapons/SecondaryWeapons/Gonne_6.png",
                        ],
                    }),
                    new WeaponInfo({
                        name: "PMM",
                        images: [
                            "Weapons/SecondaryWeapons/PMM.png",
                        ],
                    }),
                ],
            }),
            new OPInfo({
                name: "IQ",
                icons: [
                    "OPIcons/IQ_Icon.png",
                ],
                images: [
                    "OPImages/IQ.png",
                ],
                equipment: [
                    new EquipmentInfo({
                        name: "Breach Charge",
                        images: [
                            "Equipment/Breach_Charge.png",
                        ],
                    }),
                    new EquipmentInfo({
                        name: "Claymore",
                        images: [
                            "Equipment/Claymore.png",
                        ],
                    }),
                    new EquipmentInfo({
                        name: "Frag",
                        images: [
                            "Equipment/Frag.png",
                        ],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "552 COMMANDO",
                        images: [
                            "Weapons/PrimaryWeapons/552_COMMANDO.png",
                        ],
                    }),
                    new WeaponInfo({
                        name: "AUG A2",
                        images: [
                            "Weapons/PrimaryWeapons/AUG_A2.png",
                        ],
                    }),
                    new WeaponInfo({
                        name: "G8A1",
                        images: [
                            "Weapons/PrimaryWeapons/G8A1.png",
                        ],
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "P12",
                        images: [
                            "Weapons/SecondaryWeapons/P12.png",
                        ],
                    }),
                ],
            }),
            new OPInfo({
                name: "Montagne",
                icons: [
                    "OPIcons/Montagne_Icon.png",
                ],
                images: [
                    "OPImages/Montagne.png",
                ],
                equipment: [
                    new EquipmentInfo({
                        name: "Hard Breach Charge",
                        images: [
                            "Equipment/Hard Breach Charge.png",
                        ],
                    }),
                    new EquipmentInfo({
                        name: "Impact EMP",
                        images: [
                            "Equipment/Impact EMP.png",
                        ],
                    }),
                    new EquipmentInfo({
                        name: "Smoke Grenade",
                        images: [
                            "Equipment/Smoke Grenade.png",
                        ],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "LE ROC SHIELD",
                        images: [
                            "Weapons/PrimaryWeapons/LE_ROC_SHIELD.png",
                        ],
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "LFP589",
                        images: [
                            "Weapons/SecondaryWeapons/LFP589.png",
                        ],
                    }),
                    new WeaponInfo({
                        name: "P9",
                        images: [
                            "Weapons/SecondaryWeapons/P9.png",
                        ],
                    }),
                ],
            }),
            new OPInfo({
                name: "Sledge",
                icons: [
                    "OPIcons/Sledge_Icon.png",
                ],
                images: [
                    "OPImages/Sledge.png",
                ],
                equipment: [
                    new EquipmentInfo({
                        name: "Frag",
                        images: [
                            "Equipment/Frag.png",
                        ],
                    }),
                    new EquipmentInfo({
                        name: "Impact EMP",
                        images: [
                            "Equipment/Impact EMP.png",
                        ],
                    }),
                    new EquipmentInfo({
                        name: "Stun Grenade",
                        images: [
                            "Equipment/Stun Grenade.png",
                        ],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "L85A2",
                        images: [
                            "Weapons/PrimaryWeapons/L85A2.png",
                        ],
                    }),
                    new WeaponInfo({
                        name: "M590A1",
                        images: [
                            "Weapons/PrimaryWeapons/M590A1.png",
                        ],
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "P226 MK 25",
                        images: [
                            "Weapons/SecondaryWeapons/P226_MK_25.png",
                        ],
                    }),
                ],
            }),
            new OPInfo({
                name: "Thatcher",
                icons: [
                    "OPIcons/Thatcher_Icon.png",
                ],
                images: [
                    "OPImages/Thatcher.png",
                ],
                equipment: [
                    new EquipmentInfo({
                        name: "Breach Charge",
                        images: [
                            "Equipment/Breach_Charge.png",
                        ],
                    }),
                    new EquipmentInfo({
                        name: "Claymore",
                        images: [
                            "Equipment/Claymore.png",
                        ],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "AR33",
                        images: [
                            "Weapons/PrimaryWeapons/AR33.png",
                        ],
                    }),
                    new WeaponInfo({
                        name: "L85A2",
                        images: [
                            "Weapons/PrimaryWeapons/L85A2.png",
                        ],
                    }),
                    new WeaponInfo({
                        name: "M590A1",
                        images: [
                            "Weapons/PrimaryWeapons/M590A1.png",
                        ],
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "P226 MK 25",
                        images: [
                            "Weapons/SecondaryWeapons/P226_MK_25.png",
                        ],
                    }),
                ],
            }),
            new OPInfo({
                name: "Thermite",
                icons: [
                    "OPIcons/Thermite_Icon.png",
                ],
                images: [
                    "OPImages/Thermite.png",
                ],
                equipment: [
                    new EquipmentInfo({
                        name: "Smoke Grenade",
                        images: [
                            "Equipment/Smoke Grenade.png",
                        ],
                    }),
                    new EquipmentInfo({
                        name: "Stun Grenade",
                        images: [
                            "Equipment/Stun Grenade.png",
                        ],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "556XI",
                        images: [
                            "Weapons/PrimaryWeapons/556XI.png",
                        ],
                    }),
                    new WeaponInfo({
                        name: "M1014",
                        images: [
                            "Weapons/PrimaryWeapons/M1014.png",
                        ],
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "5.7 USG",
                        images: [
                            "Weapons/SecondaryWeapons/5.7 USG.png",
                        ],
                    }),
                    new WeaponInfo({
                        name: "M54 MEUSOC",
                        images: [
                            "Weapons/SecondaryWeapons/M54_MEUSOC.png",
                        ],
                    }),
                ],
            }),
            new OPInfo({
                name: "Twitch",
                icons: [
                    "OPIcons/Twitch_Icon.png",
                ],
                images: [
                    "OPImages/Twitch.png",
                ],
                equipment: [
                    new EquipmentInfo({
                        name: "Claymore",
                        images: [
                            "Equipment/Claymore.png",
                        ],
                    }),
                    new EquipmentInfo({
                        name: "Smoke Grenade",
                        images: [
                            "Equipment/Smoke Grenade.png",
                        ],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "417",
                        images: [
                            "Weapons/PrimaryWeapons/417.png",
                        ],
                    }),
                    new WeaponInfo({
                        name: "F2",
                        images: [
                            "Weapons/PrimaryWeapons/F2.png",
                        ],
                    }),
                    new WeaponInfo({
                        name: "SG-CQB",
                        images: [
                            "Weapons/PrimaryWeapons/SG-CQB.png",
                        ],
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "LFP589",
                        images: [
                            "Weapons/SecondaryWeapons/LFP589.png",
                        ],
                    }),
                    new WeaponInfo({
                        name: "P9",
                        images: [
                            "Weapons/SecondaryWeapons/P9.png",
                        ],
                    }),
                ],
            }),
            new OPInfo({
                name: "Zofia",
                icons: [
                    "OPIcons/zofia_icon.png",
                ],
                images: [
                    "OPImages/Zofia.png",
                ],
                equipment: [
                    new EquipmentInfo({
                        name: "Breach Charge",
                        images: [
                            "Equipment/Breach_Charge.png",
                        ],
                    }),
                    new EquipmentInfo({
                        name: "Claymore",
                        images: [
                            "Equipment/Claymore.png",
                        ],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "LMG E",
                        images: [
                            "Weapons/PrimaryWeapons/LMG_E.png",
                        ],
                    }),
                    new WeaponInfo({
                        name: "M762",
                        images: [
                            "Weapons/PrimaryWeapons/M762.png",
                        ],
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "RG15",
                        images: [
                            "Weapons/SecondaryWeapons/RG15.png",
                        ],
                    }),
                ],
            }),
        ],
    }),
    Defenders: new GroupInfo({
        icons: [
            "GroupIcons/Defenders_Icon_hover.svg",
            "GroupIcons/Defenders_Icon.svg",
        ],
        ops: [
            new OPInfo({
                name: "Alibi",
                icons: [
                    "OPIcons/Alibi_Icon.webp",
                ],
                images: [
                    "OPImages/Alibi.webp",
                ],
                equipment: [
                    new EquipmentInfo({
                        name: "Observation Blocker",
                        images: [
                            "Equipment/Observation_Blocker.webp",
                        ],
                    }),
                    new EquipmentInfo({
                        name: "Proximity Alarm 3",
                        images: [
                            "Equipment/Proximity_Alarm_3.webp",
                        ],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "ACS12",
                        images: [
                            "Weapons/PrimaryWeapons/ACS12.webp",
                        ],
                        attachments: {
                            grips: [
                                new GripAttachmentInfo({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    images: [
                                        "Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    images: [
                                        "Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    images: [
                                        "Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    images: [
                                        "Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    images: [
                                        "Attachments/SightAttachments/IRON SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    images: [
                                        "Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    images: [
                                        "Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    images: [
                                        "Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    images: [
                                        "Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    images: [
                                        "Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    images: [
                                        "Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                            ],
                        }
                    }),
                    new WeaponInfo({
                        name: "Mx4 Storm",
                        images: [
                            "Weapons/PrimaryWeapons/Mx4_Storm.webp",
                        ],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "COMPENSATOR",
                                    images: [
                                        "Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "EXTENDED BARREL",
                                    images: [
                                        "Attachments/BarrelAttachments/EXTENDED_BARREL.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "FLASH HIDER",
                                    images: [
                                        "Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    images: [
                                        "Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    images: [
                                        "Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    images: [
                                        "Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    images: [
                                        "Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    images: [
                                        "Attachments/SightAttachments/IRON SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    images: [
                                        "Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    images: [
                                        "Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    images: [
                                        "Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    images: [
                                        "Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    images: [
                                        "Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    images: [
                                        "Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    images: [
                                        "Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                            ],
                        }
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "Bailiff 410",
                        images: [
                            "Weapons/SecondaryWeapons/Bailiff_410.webp",
                        ],
                    }),
                    new WeaponInfo({
                        name: "Keratos .357",
                        images: [
                            "Weapons/SecondaryWeapons/Keratos_.357.webp",
                        ],
                    }),
                ],
            }),
        ],
    }),
};
//#endregion
//# sourceMappingURL=ops.js.map