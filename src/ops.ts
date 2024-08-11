//#region Main

import { GroupInfo } from "./utils/Siege/group.js";
import { OPInfo } from "./utils/Siege/op.js";
import { EquipmentInfo } from "./utils/Siege/equipment.js";
import { WeaponInfo } from "./utils/Siege/weaponInfo/weapon.js";
import {
    BarrelAttachmentInfo,
    GripAttachmentInfo,
    SightAttachmentInfo,
    UnderBarrelAttachmentInfo,
} from "./utils/Siege/weaponInfo/attachment.js";

export const GROUPS = {
    Attackers: new GroupInfo({
        icons: [
            "assets/R6Images/GroupIcons/Attackers_Icon_hover.svg",
            "assets/R6Images/GroupIcons/Attackers_Icon.svg",
        ],
        ops: [
            new OPInfo<"Ace">({
                name: "Ace",
                icons: ["assets/R6Images/OPIcons/Ace_Icon.png"],
                images: ["assets/R6Images/OPImages/Ace.webp"],
            }),
            new OPInfo<"Amaru">({
                name: "Amaru",
                icons: ["assets/R6Images/OPIcons/Amaru_Icon.png"],
                images: ["assets/R6Images/OPImages/Amaru.webp"],
            }),
            new OPInfo<"Ash">({
                name: "Ash",
                icons: ["assets/R6Images/OPIcons/Ash_Icon.png"],
                images: ["assets/R6Images/OPImages/Ash.webp"],
                equipment: [
                    new EquipmentInfo<"Breach Charge">({
                        name: "Breach Charge",
                        images: ["assets/R6Images/Equipment/Breach_Charge.png"],
                    }),
                    new EquipmentInfo<"Claymore">({
                        name: "Claymore",
                        images: ["assets/R6Images/Equipment/Claymore.png"],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo<"G36C">({
                        name: "G36C",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/G36C.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo<"COMPENSATOR">({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"EXTENDED BARREL">({
                                    name: "EXTENDED BARREL",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/EXTENDED_BARREL.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"FLASH HIDER">({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo<"ANGLED GRIP">({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo<"HORIZONTAL GRIP">({
                                    name: "HORIZONTAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo<"VERTICAL GRIP">({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            sights: [
                                new SightAttachmentInfo<"HOLO A">({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO B">({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO C">({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO D">({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"IRON SIGHT">({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED A">({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED B">({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED C">({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT A">({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT B">({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT C">({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX A">({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX B">({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX C">({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo<"R4-C">({
                        name: "R4-C",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/R4-C.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo<"COMPENSATOR">({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"EXTENDED BARREL">({
                                    name: "EXTENDED BARREL",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/EXTENDED_BARREL.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"FLASH HIDER">({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo<"ANGLED GRIP">({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo<"HORIZONTAL GRIP">({
                                    name: "HORIZONTAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo<"VERTICAL GRIP">({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            sights: [
                                new SightAttachmentInfo<"HOLO A">({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO B">({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO C">({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO D">({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"IRON SIGHT">({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED A">({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED B">({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED C">({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT A">({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT B">({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT C">({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX A">({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX B">({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX C">({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
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
                    new WeaponInfo<"5.7 USG">({
                        name: "5.7 USG",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/5.7 USG.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo<"M45 MEUSOC">({
                        name: "M45 MEUSOC",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/M54_MEUSOC.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
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
            new OPInfo<"Blackbeard">({
                name: "Blackbeard",
                icons: ["assets/R6Images/OPIcons/Blackbeard_Icon.png"],
                images: ["assets/R6Images/OPImages/Blackbeard.webp"],
            }),
            new OPInfo<"Blitz">({
                name: "Blitz",
                icons: ["assets/R6Images/OPIcons/Blitz_Icon.png"],
                images: ["assets/R6Images/OPImages/Blitz.webp"],
                equipment: [
                    new EquipmentInfo<"Breach Charge">({
                        name: "Breach Charge",
                        images: ["assets/R6Images/Equipment/Breach_Charge.png"],
                    }),
                    new EquipmentInfo<"Smoke Grenade">({
                        name: "Smoke Grenade",
                        images: ["assets/R6Images/Equipment/Smoke Grenade.png"],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo<"G52-Tactical Shield">({
                        name: "G52-Tactical Shield",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/G52-Tactical_Shield.png"],
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo<"P12">({
                        name: "P12",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/P12.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
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
            new OPInfo<"Brava">({
                name: "Brava",
                icons: ["assets/R6Images/OPIcons/Brava_Icon.png"],
                images: ["assets/R6Images/OPImages/Brava.webp"],
            }),
            new OPInfo<"Buck">({
                name: "Buck",
                icons: ["assets/R6Images/OPIcons/Buck_Icon.png"],
                images: ["assets/R6Images/OPImages/Buck.webp"],
                equipment: [
                    new EquipmentInfo<"Hard Breach Charge">({
                        name: "Hard Breach Charge",
                        images: ["assets/R6Images/Equipment/Hard Breach Charge.png"],
                    }),
                    new EquipmentInfo<"Stun Grenade">({
                        name: "Stun Grenade",
                        images: ["assets/R6Images/Equipment/Stun Grenade.png"],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo<"C8-SFW">({
                        name: "C8-SFW",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/C8-SFW.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo<"COMPENSATOR">({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"EXTENDED BARREL">({
                                    name: "EXTENDED BARREL",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/EXTENDED_BARREL.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"FLASH HIDER">({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            sights: [
                                new SightAttachmentInfo<"HOLO A">({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO B">({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO C">({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO D">({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"IRON SIGHT">({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED A">({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED B">({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED C">({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT A">({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT B">({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT C">({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX A">({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX B">({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX C">({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo<"CAMRS">({
                        name: "CAMRS",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/CAMRS.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo<"HOLO A">({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO B">({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO C">({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO D">({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"IRON SIGHT">({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED A">({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED B">({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED C">({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT A">({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT B">({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT C">({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX A">({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX B">({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX C">({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"TELESCOPIC A">({
                                    name: "TELESCOPIC A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/TELESCOPIC_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"TELESCOPIC B">({
                                    name: "TELESCOPIC B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/TELESCOPIC_B.png",
                                    ],
                                }),
                            ],
                            barrels: [
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
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
                    new WeaponInfo<"Gonne 6">({
                        name: "Gonne 6",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/Gonne_6.png"],
                        attachments: {},
                    }),
                    new WeaponInfo<"MK1 9mm">({
                        name: "MK1 9mm",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/MK1_9mm.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
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
            new OPInfo<"Capitao">({
                name: "Capitao",
                icons: ["assets/R6Images/OPIcons/Capitao_Icon.png"],
                images: ["assets/R6Images/OPImages/Capitao.webp"],
            }),
            new OPInfo<"Deimos">({
                name: "Deimos",
                icons: ["assets/R6Images/OPIcons/Deimos_Icon.png"],
                images: ["assets/R6Images/OPImages/Deimos.webp"],
            }),
            new OPInfo<"Dokkaebi">({
                name: "Dokkaebi",
                icons: ["assets/R6Images/OPIcons/Dokkaebi_Icon.png"],
                images: ["assets/R6Images/OPImages/Dokkaebi.webp"],
            }),
            new OPInfo<"Finka">({
                name: "Finka",
                icons: ["assets/R6Images/OPIcons/Finka_Icon.png"],
                images: ["assets/R6Images/OPImages/Finka.webp"],
            }),
            new OPInfo<"Flores">({
                name: "Flores",
                icons: ["assets/R6Images/OPIcons/Flores_Icon.png"],
                images: ["assets/R6Images/OPImages/Flores.webp"],
            }),
            new OPInfo<"Fuze">({
                name: "Fuze",
                icons: ["assets/R6Images/OPIcons/Fuze_Icon.png"],
                images: ["assets/R6Images/OPImages/Fuze.webp"],
                equipment: [
                    new EquipmentInfo<"Breach Charge">({
                        name: "Breach Charge",
                        images: ["assets/R6Images/Equipment/Breach_Charge.png"],
                    }),
                    new EquipmentInfo<"Hard Breach Charge">({
                        name: "Hard Breach Charge",
                        images: ["assets/R6Images/Equipment/Hard Breach Charge.png"],
                    }),
                    new EquipmentInfo<"Smoke Grenade">({
                        name: "Smoke Grenade",
                        images: ["assets/R6Images/Equipment/Smoke Grenade.png"],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo<"6P41">({
                        name: "6P41",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/6P41.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo<"HOLO A">({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO B">({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO C">({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO D">({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"IRON SIGHT">({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED A">({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED B">({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED C">({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT A">({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT B">({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT C">({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX A">({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX B">({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX C">({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            barrels: [
                                new BarrelAttachmentInfo<"COMPENSATOR">({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"FLASH HIDER">({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo<"ANGLED GRIP">({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo<"HORIZONTAL GRIP">({
                                    name: "HORIZONTAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo<"VERTICAL GRIP">({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo<"AK-12">({
                        name: "AK-12",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/AK-12.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo<"HOLO A">({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO B">({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO C">({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO D">({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"IRON SIGHT">({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED A">({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED B">({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED C">({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT A">({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT B">({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT C">({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX A">({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX B">({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX C">({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            barrels: [
                                new BarrelAttachmentInfo<"COMPENSATOR">({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"FLASH HIDER">({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo<"ANGLED GRIP">({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo<"HORIZONTAL GRIP">({
                                    name: "HORIZONTAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo<"VERTICAL GRIP">({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo<"Ballistic Shield">({
                        name: "Ballistic Shield",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/Ballistic Shield.png"],
                        attachments: {},
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo<"GSH-18">({
                        name: "GSH-18",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/GSH-18.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo<"PMM">({
                        name: "PMM",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/PMM.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
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
            new OPInfo<"Glaz">({
                name: "Glaz",
                icons: ["assets/R6Images/OPIcons/Glaz_Icon.png"],
                images: ["assets/R6Images/OPImages/Glaz.webp"],
                equipment: [
                    new EquipmentInfo<"Claymore">({
                        name: "Claymore",
                        images: ["assets/R6Images/Equipment/Claymore.png"],
                    }),
                    new EquipmentInfo<"Frag">({
                        name: "Frag",
                        images: ["assets/R6Images/Equipment/Frag.png"],
                    }),
                    new EquipmentInfo<"Smoke Grenade">({
                        name: "Smoke Grenade",
                        images: ["assets/R6Images/Equipment/Smoke Grenade.png"],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo<"0Ts-03">({
                        name: "0Ts-03",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/0Ts-03.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo<"HOLO A">({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO B">({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO C">({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO D">({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"IRON SIGHT">({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT A">({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT B">({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT C">({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX A">({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX B">({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX C">({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            barrels: [
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo<"ANGLED GRIP">({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo<"HORIZONTAL GRIP">({
                                    name: "HORIZONTAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo<"VERTICAL GRIP">({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
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
                    new WeaponInfo<"Bearing 9">({
                        name: "Bearing 9",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/Bearing_9.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo<"HOLO A">({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO B">({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO C">({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO D">({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"IRON SIGHT">({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT A">({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT B">({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT C">({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX A">({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX B">({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX C">({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            barrels: [
                                new BarrelAttachmentInfo<"COMPENSATOR">({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"EXTENDED BARREL">({
                                    name: "EXTENDED BARREL",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/EXTENDED_BARREL.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"FLASH HIDER">({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo<"Gonne 6">({
                        name: "Gonne 6",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/Gonne_6.png"],
                        attachments: {},
                    }),
                    new WeaponInfo<"PMM">({
                        name: "PMM",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/PMM.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
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
            new OPInfo<"Gridlock">({
                name: "Gridlock",
                icons: ["assets/R6Images/OPIcons/Gridlock_Icon.png"],
                images: ["assets/R6Images/OPImages/Gridlock.webp"],
            }),
            new OPInfo<"Grim">({
                name: "Grim",
                icons: ["assets/R6Images/OPIcons/Grim_Icon.png"],
                images: ["assets/R6Images/OPImages/Grim.webp"],
            }),
            new OPInfo<"Hibana">({
                name: "Hibana",
                icons: ["assets/R6Images/OPIcons/Hibana_Icon.png"],
                images: ["assets/R6Images/OPImages/Hibana.webp"],
            }),
            new OPInfo<"Iana">({
                name: "Iana",
                icons: ["assets/R6Images/OPIcons/Iana_Icon.png"],
                images: ["assets/R6Images/OPImages/Iana.webp"],
            }),
            new OPInfo<"IQ">({
                name: "IQ",
                icons: ["assets/R6Images/OPIcons/IQ_Icon.png"],
                images: ["assets/R6Images/OPImages/IQ.webp"],
                equipment: [
                    new EquipmentInfo<"Breach Charge">({
                        name: "Breach Charge",
                        images: ["assets/R6Images/Equipment/Breach_Charge.png"],
                    }),
                    new EquipmentInfo<"Claymore">({
                        name: "Claymore",
                        images: ["assets/R6Images/Equipment/Claymore.png"],
                    }),
                    new EquipmentInfo<"Frag">({
                        name: "Frag",
                        images: ["assets/R6Images/Equipment/Frag.png"],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo<"552 COMMANDO">({
                        name: "552 COMMANDO",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/552_COMMANDO.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo<"HOLO A">({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO B">({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO C">({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO D">({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"IRON SIGHT">({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED A">({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED B">({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED C">({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT A">({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT B">({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT C">({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX A">({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX B">({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX C">({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            barrels: [
                                new BarrelAttachmentInfo<"COMPENSATOR">({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"EXTENDED BARREL">({
                                    name: "EXTENDED BARREL",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/EXTENDED_BARREL.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"FLASH HIDER">({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo<"ANGLED GRIP">({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo<"HORIZONTAL GRIP">({
                                    name: "HORIZONTAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo<"VERTICAL GRIP">({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo<"AUG A2">({
                        name: "AUG A2",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/AUG_A2.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo<"HOLO A">({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO B">({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO C">({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO D">({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"IRON SIGHT">({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED A">({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED B">({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED C">({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT A">({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT B">({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT C">({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX A">({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX B">({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX C">({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            barrels: [
                                new BarrelAttachmentInfo<"COMPENSATOR">({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"FLASH HIDER">({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo<"G8A1">({
                        name: "G8A1",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/G8A1.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo<"HOLO A">({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO B">({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO C">({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO D">({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"IRON SIGHT">({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED A">({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED B">({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED C">({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT A">({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT B">({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT C">({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX A">({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX B">({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX C">({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            barrels: [
                                new BarrelAttachmentInfo<"COMPENSATOR">({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"FLASH HIDER">({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo<"ANGLED GRIP">({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo<"HORIZONTAL GRIP">({
                                    name: "HORIZONTAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo<"VERTICAL GRIP">({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
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
                    new WeaponInfo<"P12">({
                        name: "P12",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/P12.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
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
            new OPInfo<"Jackal">({
                name: "Jackal",
                icons: ["assets/R6Images/OPIcons/Jackal_Icon.png"],
                images: ["assets/R6Images/OPImages/Jackal.webp"],
            }),
            new OPInfo<"Kali">({
                name: "Kali",
                icons: ["assets/R6Images/OPIcons/Kali_Icon.png"],
                images: ["assets/R6Images/OPImages/Kali.webp"],
            }),
            new OPInfo<"Lion">({
                name: "Lion",
                icons: ["assets/R6Images/OPIcons/Lion_Icon.png"],
                images: ["assets/R6Images/OPImages/Lion.webp"],
            }),
            new OPInfo<"Maverick">({
                name: "Maverick",
                icons: ["assets/R6Images/OPIcons/Maverick_Icon.png"],
                images: ["assets/R6Images/OPImages/Maverick.webp"],
            }),
            new OPInfo<"Montagne">({
                name: "Montagne",
                icons: ["assets/R6Images/OPIcons/Montagne_Icon.png"],
                images: ["assets/R6Images/OPImages/Montagne.webp"],
                equipment: [
                    new EquipmentInfo<"Hard Breach Charge">({
                        name: "Hard Breach Charge",
                        images: ["assets/R6Images/Equipment/Hard Breach Charge.png"],
                    }),
                    new EquipmentInfo<"Impact EMP">({
                        name: "Impact EMP",
                        images: ["assets/R6Images/Equipment/Impact EMP.png"],
                    }),
                    new EquipmentInfo<"Smoke Grenade">({
                        name: "Smoke Grenade",
                        images: ["assets/R6Images/Equipment/Smoke Grenade.png"],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo<"LE ROC SHIELD">({
                        name: "LE ROC SHIELD",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/LE_ROC_SHIELD.png"],
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo<"LFP589">({
                        name: "LFP589",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/LFP589.png"],
                        attachments: {
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo<"P9">({
                        name: "P9",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/P9.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
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
            new OPInfo<"Nokk">({
                name: "Nokk",
                icons: ["assets/R6Images/OPIcons/Nokk_Icon.png"],
                images: ["assets/R6Images/OPImages/Nokk.webp"],
            }),
            new OPInfo<"Nomad">({
                name: "Nomad",
                icons: ["assets/R6Images/OPIcons/Nomad_Icon.png"],
                images: ["assets/R6Images/OPImages/Nomad.webp"],
            }),
            new OPInfo<"Osa">({
                name: "Osa",
                icons: ["assets/R6Images/OPIcons/Osa_Icon.png"],
                images: ["assets/R6Images/OPImages/Osa.webp"],
            }),
            new OPInfo<"Ram">({
                name: "Ram",
                icons: ["assets/R6Images/OPIcons/Ram_Icon.png"],
                images: ["assets/R6Images/OPImages/Ram.webp"],
            }),
            new OPInfo<"Sens">({
                name: "Sens",
                icons: ["assets/R6Images/OPIcons/Sens_Icon.png"],
                images: ["assets/R6Images/OPImages/Sens.webp"],
            }),
            new OPInfo<"Sledge">({
                name: "Sledge",
                icons: ["assets/R6Images/OPIcons/Sledge_Icon.png"],
                images: ["assets/R6Images/OPImages/Sledge.webp"],
                equipment: [
                    new EquipmentInfo<"Frag">({
                        name: "Frag",
                        images: ["assets/R6Images/Equipment/Frag.png"],
                    }),
                    new EquipmentInfo<"Impact EMP">({
                        name: "Impact EMP",
                        images: ["assets/R6Images/Equipment/Impact EMP.png"],
                    }),
                    new EquipmentInfo<"Stun Grenade">({
                        name: "Stun Grenade",
                        images: ["assets/R6Images/Equipment/Stun Grenade.png"],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo<"L85A2">({
                        name: "L85A2",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/L85A2.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo<"HOLO A">({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO B">({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO C">({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO D">({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"IRON SIGHT">({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED A">({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED B">({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED C">({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT A">({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT B">({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT C">({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX A">({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX B">({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX C">({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            barrels: [
                                new BarrelAttachmentInfo<"COMPENSATOR">({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"FLASH HIDER">({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo<"ANGLED GRIP">({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo<"HORIZONTAL GRIP">({
                                    name: "HORIZONTAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo<"VERTICAL GRIP">({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo<"M590A1">({
                        name: "M590A1",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/M590A1.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo<"HOLO A">({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO B">({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO C">({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO D">({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"IRON SIGHT">({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT A">({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT B">({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT C">({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX A">({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX B">({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX C">({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
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
                    new WeaponInfo<"P226 MK 25">({
                        name: "P226 MK 25",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/P226_MK_25.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
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
            new OPInfo<"Striker">({
                name: "Striker",
                icons: ["assets/R6Images/OPIcons/Striker_Icon.png"],
                images: ["assets/R6Images/OPImages/Striker.webp"],
            }),
            new OPInfo<"Thatcher">({
                name: "Thatcher",
                icons: ["assets/R6Images/OPIcons/Thatcher_Icon.png"],
                images: ["assets/R6Images/OPImages/Thatcher.webp"],
                equipment: [
                    new EquipmentInfo<"Breach Charge">({
                        name: "Breach Charge",
                        images: ["assets/R6Images/Equipment/Breach_Charge.png"],
                    }),
                    new EquipmentInfo<"Claymore">({
                        name: "Claymore",
                        images: ["assets/R6Images/Equipment/Claymore.png"],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo<"AR33">({
                        name: "AR33",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/AR33.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo<"HOLO A">({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO B">({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO C">({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO D">({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"IRON SIGHT">({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED A">({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED B">({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED C">({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT A">({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT B">({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT C">({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX A">({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX B">({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX C">({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            barrels: [
                                new BarrelAttachmentInfo<"COMPENSATOR">({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"FLASH HIDER">({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo<"ANGLED GRIP">({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo<"HORIZONTAL GRIP">({
                                    name: "HORIZONTAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo<"VERTICAL GRIP">({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo<"L85A2">({
                        name: "L85A2",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/L85A2.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo<"HOLO A">({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO B">({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO C">({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO D">({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"IRON SIGHT">({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED A">({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED B">({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED C">({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT A">({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT B">({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT C">({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX A">({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX B">({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX C">({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            barrels: [
                                new BarrelAttachmentInfo<"COMPENSATOR">({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"FLASH HIDER">({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo<"ANGLED GRIP">({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo<"HORIZONTAL GRIP">({
                                    name: "HORIZONTAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo<"VERTICAL GRIP">({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo<"M590A1">({
                        name: "M590A1",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/M590A1.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo<"HOLO A">({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO B">({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO C">({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO D">({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"IRON SIGHT">({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT A">({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT B">({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT C">({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX A">({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX B">({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX C">({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
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
                    new WeaponInfo<"P226 MK 25">({
                        name: "P226 MK 25",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/P226_MK_25.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
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
            new OPInfo<"Thermite">({
                name: "Thermite",
                icons: ["assets/R6Images/OPIcons/Thermite_Icon.png"],
                images: ["assets/R6Images/OPImages/Thermite.webp"],
                equipment: [
                    new EquipmentInfo<"Smoke Grenade">({
                        name: "Smoke Grenade",
                        images: ["assets/R6Images/Equipment/Smoke Grenade.png"],
                    }),
                    new EquipmentInfo<"Stun Grenade">({
                        name: "Stun Grenade",
                        images: ["assets/R6Images/Equipment/Stun Grenade.png"],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo<"556XI">({
                        name: "556XI",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/556XI.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo<"HOLO A">({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO B">({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO C">({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO D">({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"IRON SIGHT">({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED A">({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED B">({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED C">({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT A">({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT B">({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT C">({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX A">({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX B">({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX C">({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            barrels: [
                                new BarrelAttachmentInfo<"COMPENSATOR">({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"FLASH HIDER">({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo<"ANGLED GRIP">({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo<"HORIZONTAL GRIP">({
                                    name: "HORIZONTAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo<"VERTICAL GRIP">({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo<"M1014">({
                        name: "M1014",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/M1014.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo<"HOLO A">({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO B">({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO C">({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO D">({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"IRON SIGHT">({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT A">({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT B">({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT C">({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX A">({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX B">({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX C">({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
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
                    new WeaponInfo<"5.7 USG">({
                        name: "5.7 USG",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/5.7 USG.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo<"M54 MEUSOC">({
                        name: "M54 MEUSOC",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/M54_MEUSOC.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
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
            new OPInfo<"Twitch">({
                name: "Twitch",
                icons: ["assets/R6Images/OPIcons/Twitch_Icon.png"],
                images: ["assets/R6Images/OPImages/Twitch.webp"],
                equipment: [
                    new EquipmentInfo<"Claymore">({
                        name: "Claymore",
                        images: ["assets/R6Images/Equipment/Claymore.png"],
                    }),
                    new EquipmentInfo<"Smoke Grenade">({
                        name: "Smoke Grenade",
                        images: ["assets/R6Images/Equipment/Smoke Grenade.png"],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo<"417">({
                        name: "417",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/417.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo<"HOLO A">({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO B">({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO C">({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO D">({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"IRON SIGHT">({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED A">({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED B">({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED C">({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT A">({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT B">({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT C">({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX A">({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX B">({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX C">({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"TELESCOPIC A">({
                                    name: "TELESCOPIC A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/TELESCOPIC_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"TELESCOPIC B">({
                                    name: "TELESCOPIC B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/TELESCOPIC_B.png",
                                    ],
                                }),
                            ],
                            barrels: [
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo<"ANGLED GRIP">({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo<"HORIZONTAL GRIP">({
                                    name: "HORIZONTAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo<"VERTICAL GRIP">({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo<"F2">({
                        name: "F2",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/F2.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo<"HOLO A">({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO B">({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO C">({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO D">({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"IRON SIGHT">({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED A">({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED B">({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED C">({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT A">({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT B">({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT C">({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX A">({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX B">({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX C">({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            barrels: [
                                new BarrelAttachmentInfo<"COMPENSATOR">({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"EXTENDED BARREL">({
                                    name: "EXTENDED BARREL",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/EXTENDED_BARREL.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"FLASH HIDER">({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo<"SG-CQB">({
                        name: "SG-CQB",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/SG-CQB.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo<"HOLO A">({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO B">({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO C">({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO D">({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"IRON SIGHT">({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT A">({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT B">({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT C">({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX A">({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX B">({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX C">({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo<"HORIZONTAL GRIP">({
                                    name: "HORIZONTAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo<"VERTICAL GRIP">({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
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
                    new WeaponInfo<"LFP589">({
                        name: "LFP589",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/LFP589.png"],
                        attachments: {
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo<"P9">({
                        name: "P9",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/P9.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
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
            new OPInfo<"Ying">({
                name: "Ying",
                icons: ["assets/R6Images/OPIcons/Ying_Icon.png"],
                images: ["assets/R6Images/OPImages/Ying.webp"],
            }),
            new OPInfo<"Zero">({
                name: "Zero",
                icons: ["assets/R6Images/OPIcons/Zero_Icon.png"],
                images: ["assets/R6Images/OPImages/Zero.webp"],
            }),
            new OPInfo<"Zofia">({
                name: "Zofia",
                icons: ["assets/R6Images/OPIcons/Zofia_Icon.png"],
                images: ["assets/R6Images/OPImages/Zofia.webp"],
                equipment: [
                    new EquipmentInfo<"Breach Charge">({
                        name: "Breach Charge",
                        images: ["assets/R6Images/Equipment/Breach_Charge.png"],
                    }),
                    new EquipmentInfo<"Claymore">({
                        name: "Claymore",
                        images: ["assets/R6Images/Equipment/Claymore.png"],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo<"LMG E">({
                        name: "LMG E",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/LMG_E.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo<"HOLO A">({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO B">({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO C">({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO D">({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"IRON SIGHT">({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED A">({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED B">({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED C">({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT A">({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT B">({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT C">({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX A">({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX B">({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX C">({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            barrels: [
                                new BarrelAttachmentInfo<"COMPENSATOR">({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"FLASH HIDER">({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo<"ANGLED GRIP">({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo<"HORIZONTAL GRIP">({
                                    name: "HORIZONTAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo<"VERTICAL GRIP">({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo<"M762">({
                        name: "M762",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/M762.png"],
                        attachments: {
                            sights: [
                                new SightAttachmentInfo<"HOLO A">({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO B">({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO C">({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO D">({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"IRON SIGHT">({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED A">({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED B">({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED C">({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT A">({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT B">({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT C">({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX A">({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX B">({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX C">({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            barrels: [
                                new BarrelAttachmentInfo<"COMPENSATOR">({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"FLASH HIDER">({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo<"ANGLED GRIP">({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo<"HORIZONTAL GRIP">({
                                    name: "HORIZONTAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo<"VERTICAL GRIP">({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
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
                    new WeaponInfo<"RG15">({
                        name: "RG15",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/RG15.png"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
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
            new OPInfo<"Alibi">({
                name: "Alibi",
                icons: ["assets/R6Images/OPIcons/Alibi_Icon.png"],
                images: ["assets/R6Images/OPImages/Alibi.webp"],
                equipment: [
                    new EquipmentInfo<"Observation Blocker">({
                        name: "Observation Blocker",
                        images: ["assets/R6Images/Equipment/Observation_Blocker.webp"],
                    }),
                    new EquipmentInfo<"Proximity Alarm">({
                        name: "Proximity Alarm",
                        images: ["assets/R6Images/Equipment/Proximity Alarm.png"],
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo<"ACS12">({
                        name: "ACS12",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/ACS12.webp"],
                        attachments: {
                            grips: [
                                new GripAttachmentInfo<"ANGLED GRIP">({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo<"VERTICAL GRIP">({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            sights: [
                                new SightAttachmentInfo<"HOLO A">({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO B">({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO C">({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO D">({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"IRON SIGHT">({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED A">({
                                    name: "MAGNIFIED A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED B">({
                                    name: "MAGNIFIED B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"MAGNIFIED C">({
                                    name: "MAGNIFIED C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/MAGNIFIED_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT A">({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT B">({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT C">({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX A">({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX B">({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX C">({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo<"Mx4 Storm">({
                        name: "Mx4 Storm",
                        images: ["assets/R6Images/Weapons/PrimaryWeapons/Mx4_Storm.webp"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo<"COMPENSATOR">({
                                    name: "COMPENSATOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/COMPENSATOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"EXTENDED BARREL">({
                                    name: "EXTENDED BARREL",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/EXTENDED_BARREL.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"FLASH HIDER">({
                                    name: "FLASH HIDER",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/FLASH_HIDER.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo<"ANGLED GRIP">({
                                    name: "ANGLED GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/ANGLED_GRIP.png",
                                    ],
                                }),
                                new GripAttachmentInfo<"VERTICAL GRIP">({
                                    name: "VERTICAL GRIP",
                                    images: [
                                        "assets/R6Images/Attachments/GripAttachments/VERTICAL_GRIP.png",
                                    ],
                                }),
                            ],
                            sights: [
                                new SightAttachmentInfo<"HOLO A">({
                                    name: "HOLO A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO B">({
                                    name: "HOLO B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO C">({
                                    name: "HOLO C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"HOLO D">({
                                    name: "HOLO D",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/HOLO_D.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"IRON SIGHT">({
                                    name: "IRON SIGHT",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/IRON_SIGHT.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT A">({
                                    name: "RED DOT A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT B">({
                                    name: "RED DOT B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"RED DOT C">({
                                    name: "RED DOT C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/RED_DOT_C.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX A">({
                                    name: "REFLEX A",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_A.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX B">({
                                    name: "REFLEX B",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_B.png",
                                    ],
                                }),
                                new SightAttachmentInfo<"REFLEX C">({
                                    name: "REFLEX C",
                                    images: [
                                        "assets/R6Images/Attachments/SightAttachments/REFLEX_C.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
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
                    new WeaponInfo<"Bailiff 410">({
                        name: "Bailiff 410",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/Bailiff_410.webp"],
                        attachments: {
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo<"Keratos .357">({
                        name: "Keratos .357",
                        images: ["assets/R6Images/Weapons/SecondaryWeapons/Keratos_.357.webp"],
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo<"MUZZLE BRAKE">({
                                    name: "MUZZLE BRAKE",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"SUPPRESSOR">({
                                    name: "SUPPRESSOR",
                                    images: [
                                        "assets/R6Images/Attachments/BarrelAttachments/SUPPRESSOR.png",
                                    ],
                                }),
                                new BarrelAttachmentInfo<"None">({
                                    name: "None",
                                    images: [
                                        "assets/R6Images/Attachments/SharedAttachments/None.png",
                                    ],
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo<"LASER">({
                                    name: "LASER",
                                    images: [
                                        "assets/R6Images/Attachments/UnderBarrelAttachments/LASER.png",
                                    ],
                                }),
                                new UnderBarrelAttachmentInfo<"None">({
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
            new OPInfo<"Clash">({
                name: "Clash",
                icons: ["assets/R6Images/OPIcons/KYSClash_Icon.png"],
                images: ["assets/R6Images/OPImages/Clash.webp"],
            }),
            new OPInfo<"Mute">({
                name: "Mute",
                icons: ["assets/R6Images/OPIcons/Mute_Icon.png"],
                images: ["assets/R6Images/OPImages/Mute.webp"],
            }),
            new OPInfo<"Smoke">({
                name: "Smoke",
                icons: ["assets/R6Images/OPIcons/Smoke_Icon.png"],
                images: ["assets/R6Images/OPImages/Smoke.webp"],
            }),
            new OPInfo<"Castle">({
                name: "Castle",
                icons: ["assets/R6Images/OPIcons/Castle_Icon.png"],
                images: ["assets/R6Images/OPImages/Castle.webp"],
            }),
            new OPInfo<"Pulse">({
                name: "Pulse",
                icons: ["assets/R6Images/OPIcons/Pulse_Icon.png"],
                images: ["assets/R6Images/OPImages/Pulse.webp"],
            }),
            new OPInfo<"Doc">({
                name: "Doc",
                icons: ["assets/R6Images/OPIcons/Doc_Icon.png"],
                images: ["assets/R6Images/OPImages/Doc.webp"],
            }),
            new OPInfo<"Rook">({
                name: "Rook",
                icons: ["assets/R6Images/OPIcons/Rook_Icon.png"],
                images: ["assets/R6Images/OPImages/Rook.webp"],
            }),
            new OPInfo<"Kapkan">({
                name: "Kapkan",
                icons: ["assets/R6Images/OPIcons/Kapkan_Icon.png"],
                images: ["assets/R6Images/OPImages/Kapkan.webp"],
            }),
            new OPInfo<"Tachanka">({
                name: "Tachanka",
                icons: ["assets/R6Images/OPIcons/Tachanka_Icon.png"],
                images: ["assets/R6Images/OPImages/Tachanka.webp"],
            }),
            new OPInfo<"Jager">({
                name: "Jager",
                icons: ["assets/R6Images/OPIcons/Jager_Icon.png"],
                images: ["assets/R6Images/OPImages/Jager.webp"],
            }),
            new OPInfo<"Bandit">({
                name: "Bandit",
                icons: ["assets/R6Images/OPIcons/Bandit_Icon.png"],
                images: ["assets/R6Images/OPImages/Bandit.webp"],
            }),
            new OPInfo<"Frost">({
                name: "Frost",
                icons: ["assets/R6Images/OPIcons/Frost_Icon.png"],
                images: ["assets/R6Images/OPImages/Frost.webp"],
            }),
            new OPInfo<"Valkyrie">({
                name: "Valkyrie",
                icons: ["assets/R6Images/OPIcons/Valkyrie_Icon.png"],
                images: ["assets/R6Images/OPImages/Valkyrie.webp"],
            }),
            new OPInfo<"Caveira">({
                name: "Caveira",
                icons: ["assets/R6Images/OPIcons/Caveira_Icon.png"],
                images: ["assets/R6Images/OPImages/Caveira.webp"],
            }),
            new OPInfo<"Echo">({
                name: "Echo",
                icons: ["assets/R6Images/OPIcons/Echo_Icon.png"],
                images: ["assets/R6Images/OPImages/Echo.webp"],
            }),
            new OPInfo<"Mira">({
                name: "Mira",
                icons: ["assets/R6Images/OPIcons/Mira_Icon.png"],
                images: ["assets/R6Images/OPImages/Mira.webp"],
            }),
            new OPInfo<"Lesion">({
                name: "Lesion",
                icons: ["assets/R6Images/OPIcons/Lesion_Icon.png"],
                images: ["assets/R6Images/OPImages/Lesion.webp"],
            }),
            new OPInfo<"Ela">({
                name: "Ela",
                icons: ["assets/R6Images/OPIcons/Ela_Icon.png"],
                images: ["assets/R6Images/OPImages/Ela.webp"],
            }),
            new OPInfo<"Vigil">({
                name: "Vigil",
                icons: ["assets/R6Images/OPIcons/Vigil_Icon.png"],
                images: ["assets/R6Images/OPImages/Vigil.webp"],
            }),
            new OPInfo<"Maestro">({
                name: "Maestro",
                icons: ["assets/R6Images/OPIcons/Maestro_Icon.png"],
                images: ["assets/R6Images/OPImages/Maestro.webp"],
            }),
            new OPInfo<"Kaid">({
                name: "Kaid",
                icons: ["assets/R6Images/OPIcons/Kaid_Icon.png"],
                images: ["assets/R6Images/OPImages/Kaid.webp"],
            }),
            new OPInfo<"Mozzie">({
                name: "Mozzie",
                icons: ["assets/R6Images/OPIcons/Mozzie_Icon.png"],
                images: ["assets/R6Images/OPImages/Mozzie.webp"],
            }),
            new OPInfo<"Warden">({
                name: "Warden",
                icons: ["assets/R6Images/OPIcons/Warden_Icon.png"],
                images: ["assets/R6Images/OPImages/Warden.webp"],
            }),
            new OPInfo<"Goyo">({
                name: "Goyo",
                icons: ["assets/R6Images/OPIcons/Goyo_Icon.png"],
                images: ["assets/R6Images/OPImages/Goyo.webp"],
            }),
            new OPInfo<"Wamai">({
                name: "Wamai",
                icons: ["assets/R6Images/OPIcons/Wamai_Icon.png"],
                images: ["assets/R6Images/OPImages/Wamai.webp"],
            }),
            new OPInfo<"Oryx">({
                name: "Oryx",
                icons: ["assets/R6Images/OPIcons/Oryx_Icon.png"],
                images: ["assets/R6Images/OPImages/Oryx.webp"],
            }),
            new OPInfo<"Melusi">({
                name: "Melusi",
                icons: ["assets/R6Images/OPIcons/Melusi_Icon.png"],
                images: ["assets/R6Images/OPImages/Melusi.webp"],
            }),
            new OPInfo<"Aruni">({
                name: "Aruni",
                icons: ["assets/R6Images/OPIcons/Aruni_Icon.png"],
                images: ["assets/R6Images/OPImages/Aruni.webp"],
            }),
            new OPInfo<"Thunderbird">({
                name: "Thunderbird",
                icons: ["assets/R6Images/OPIcons/Thunderbird_Icon.png"],
                images: ["assets/R6Images/OPImages/Thunderbird.webp"],
            }),
            new OPInfo<"Thorn">({
                name: "Thorn",
                icons: ["assets/R6Images/OPIcons/Thorn_Icon.png"],
                images: ["assets/R6Images/OPImages/Thorn.webp"],
            }),
            new OPInfo<"Azami">({
                name: "Azami",
                icons: ["assets/R6Images/OPIcons/Azami_Icon.png"],
                images: ["assets/R6Images/OPImages/Azami.webp"],
            }),
            new OPInfo<"Solis">({
                name: "Solis",
                icons: ["assets/R6Images/OPIcons/Solis_Icon.png"],
                images: ["assets/R6Images/OPImages/Solis.webp"],
            }),
            new OPInfo<"Fenrir">({
                name: "Fenrir",
                icons: ["assets/R6Images/OPIcons/Fenrir_Icon.png"],
                images: ["assets/R6Images/OPImages/Fenrir.webp"],
            }),
            new OPInfo<"Tubarao">({
                name: "Tubarao",
                icons: ["assets/R6Images/OPIcons/Tubarao_Icon.png"],
                images: ["assets/R6Images/OPImages/Tubarao.webp"],
            }),
            new OPInfo<"Sentry">({
                name: "Sentry",
                icons: ["assets/R6Images/OPIcons/Sentry_Icon.png"],
                images: ["assets/R6Images/OPImages/Sentry.webp"],
            }),
        ],
    }),
};

export const GroupParseKeys = {
    Attackers: "0" as const,
    Defenders: "1" as const,
};
export const GroupParseKeysRev = {
    "0": "Attackers" as const,
    "1": "Defenders" as const,
};

export const OPParseKeys = {
    "0": {
        Ace: "0" as const,
        Amaru: "1" as const,
        Ash: "2" as const,
        Blackbeard: "3" as const,
        Blitz: "4" as const,
        Brava: "5" as const,
        Buck: "6" as const,
        Capitao: "7" as const,
        Deimos: "8" as const,
        Dokkaebi: "9" as const,
        Finka: "A" as const,
        Flores: "B" as const,
        Fuze: "C" as const,
        Glaz: "D" as const,
        Gridlock: "E" as const,
        Grim: "F" as const,
        Hibana: "G" as const,
        Iana: "H" as const,
        IQ: "I" as const,
        Jackal: "J" as const,
        Kali: "K" as const,
        Lion: "L" as const,
        Maverick: "M" as const,
        Montagne: "N" as const,
        Nokk: "O" as const,
        Nomad: "P" as const,
        Osa: "Q" as const,
        Ram: "R" as const,
        Sens: "S" as const,
        Sledge: "T" as const,
        Striker: "U" as const,
        Thatcher: "V" as const,
        Thermite: "W" as const,
        Twitch: "X" as const,
        Ying: "Y" as const,
        Zero: "Z" as const,
        Zofia: "a" as const,
    },
    "1": {
        Alibi: "0" as const,
        Clash: "1" as const,
        Mute: "2" as const,
        Smoke: "3" as const,
        Castle: "4" as const,
        Pulse: "5" as const,
        Doc: "6" as const,
        Rook: "7" as const,
        Kapkan: "8" as const,
        Tachanka: "9" as const,
        Jager: "A" as const,
        Bandit: "B" as const,
        Frost: "C" as const,
        Valkyrie: "D" as const,
        Caveira: "E" as const,
        Echo: "F" as const,
        Mira: "G" as const,
        Lesion: "H" as const,
        Ela: "I" as const,
        Vigil: "J" as const,
        Maestro: "K" as const,
        Kaid: "L" as const,
        Mozzie: "M" as const,
        Warden: "N" as const,
        Goyo: "O" as const,
        Wamai: "P" as const,
        Oryx: "Q" as const,
        Melusi: "R" as const,
        Aruni: "S" as const,
        Thunderbird: "T" as const,
        Thorn: "U" as const,
        Azami: "V" as const,
        Solis: "W" as const,
        Fenrir: "X" as const,
        Tubarao: "Y" as const,
        Sentry: "Z" as const,
    },
};
export const OPParseKeysRev = {
    "0": {
        "0": "Ace" as const,
        "1": "Amaru" as const,
        "2": "Ash" as const,
        "3": "Blackbeard" as const,
        "4": "Blitz" as const,
        "5": "Brava" as const,
        "6": "Buck" as const,
        "7": "Capitao" as const,
        "8": "Deimos" as const,
        "9": "Dokkaebi" as const,
        A: "Finka" as const,
        B: "Flores" as const,
        C: "Fuze" as const,
        D: "Glaz" as const,
        E: "Gridlock" as const,
        F: "Grim" as const,
        G: "Hibana" as const,
        H: "Iana" as const,
        I: "IQ" as const,
        J: "Jackal" as const,
        K: "Kali" as const,
        L: "Lion" as const,
        M: "Maverick" as const,
        N: "Montagne" as const,
        O: "Nokk" as const,
        P: "Nomad" as const,
        Q: "Osa" as const,
        R: "Ram" as const,
        S: "Sens" as const,
        T: "Sledge" as const,
        U: "Striker" as const,
        V: "Thatcher" as const,
        W: "Thermite" as const,
        X: "Twitch" as const,
        Y: "Ying" as const,
        Z: "Zero" as const,
        a: "Zofia" as const,
    },
    "1": {
        "0": "Alibi" as const,
        "1": "Clash" as const,
        "2": "Mute" as const,
        "3": "Smoke" as const,
        "4": "Castle" as const,
        "5": "Pulse" as const,
        "6": "Doc" as const,
        "7": "Rook" as const,
        "8": "Kapkan" as const,
        "9": "Tachanka" as const,
        A: "Jager" as const,
        B: "Bandit" as const,
        C: "Frost" as const,
        D: "Valkyrie" as const,
        E: "Caveira" as const,
        F: "Echo" as const,
        G: "Mira" as const,
        H: "Lesion" as const,
        I: "Ela" as const,
        J: "Vigil" as const,
        K: "Maestro" as const,
        L: "Kaid" as const,
        M: "Mozzie" as const,
        N: "Warden" as const,
        O: "Goyo" as const,
        P: "Wamai" as const,
        Q: "Oryx" as const,
        R: "Melusi" as const,
        S: "Aruni" as const,
        T: "Thunderbird" as const,
        U: "Thorn" as const,
        V: "Azami" as const,
        W: "Solis" as const,
        X: "Fenrir" as const,
        Y: "Tubarao" as const,
        Z: "Sentry" as const,
    },
};

export type ParsedGroupKeys = keyof typeof GroupParseKeys;
export type ParsedGroupKeysRev = keyof typeof GroupParseKeysRev;

export type CombinedOPParseKeys = (typeof OPParseKeys)["0"] & (typeof OPParseKeys)["1"];
export type AllOPNames = keyof CombinedOPParseKeys;

export type ALLOPParsedValues =
    | keyof (typeof OPParseKeysRev)["0"]
    | keyof (typeof OPParseKeysRev)["1"];

export type AllGroups = (typeof GROUPS)["Attackers"] | (typeof GROUPS)["Defenders"];

//#endregion
