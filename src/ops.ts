//#region Main

import type {Groups} from "./types/groups.js";
import {Group} from "./utils/group.js";
import {OPInfo} from "./utils/op.js";
import {Equipment} from "./utils/equipment.js";
import {WeaponInfo} from "./utils/weaponInfo/weapon.js";
import {
    BarrelAttachment,
    GripAttachment,
    SightAttachment,
    UnderBarrelAttachment,
} from "./utils/weaponInfo/attachment.js";

export const GROUPS: Groups = {
    Attackers: new Group({
        ops: [
            new OPInfo({
                name: "Ash",
                image: "../assets/Siege-Rando-Images/Attackers/Ash/Ash.png",
                icon: "../assets/Siege-Rando-Images/Attackers/Ash/Ash_Icon.png",
                equipment: [
                    new Equipment({
                        name: "Breach Charge",
                        image: "../assets/Siege-Rando-Images/Attackers/Ash/Equipment/Breach_Charge.png",
                    }),
                    new Equipment({
                        name: "Claymore",
                        image: "../assets/Siege-Rando-Images/Attackers/Ash/Equipment/Claymore.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "G36C",
                        image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/G36C/G36C.png",
                        attachments: {
                            barrels: [
                                new BarrelAttachment({
                                    name: "COMPENSATOR",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/G36C/BarrelAttachments/COMPENSATOR.png",
                                }),
                                new BarrelAttachment({
                                    name: "EXTENDED BARREL",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/G36C/BarrelAttachments/EXTENDED_BARREL.png",
                                }),
                                new BarrelAttachment({
                                    name: "FLASH HIDER",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/G36C/BarrelAttachments/FLASH_HIDER.png",
                                }),
                                new BarrelAttachment({
                                    name: "MUZZLE BRAKE",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/G36C/BarrelAttachments/MUZZLE_BRAKE.png",
                                }),
                                new BarrelAttachment({
                                    name: "SUPPRESSOR",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/G36C/BarrelAttachments/SUPPRESSOR.png",
                                }),
                            ],
                            grips: [
                                new GripAttachment({
                                    name: "ANGLED GRIP",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/G36C/GripAttachments/ANGLED_GRIP.png",
                                }),
                                new GripAttachment({
                                    name: "HORIZONTAL GRIP",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/G36C/GripAttachments/HORIZONTAL_GRIP.png",
                                }),
                                new GripAttachment({
                                    name: "VERTICAL GRIP",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/G36C/GripAttachments/VERTICAL_GRIP.png",
                                }),
                            ],
                            sights: [
                                new SightAttachment({
                                    name: "HOLO A",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/G36C/SightAttachments/HOLO_A.png",
                                }),
                                new SightAttachment({
                                    name: "HOLO B",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/G36C/SightAttachments/HOLO_B.png",
                                }),
                                new SightAttachment({
                                    name: "HOLO C",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/G36C/SightAttachments/HOLO_C.png",
                                }),
                                new SightAttachment({
                                    name: "HOLO D",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/G36C/SightAttachments/HOLO_D.png",
                                }),
                                new SightAttachment({
                                    name: "IRON SIGHT",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/G36C/SightAttachments/IRON SIGHT.png",
                                }),
                                new SightAttachment({
                                    name: "MAGNIFIED A",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/G36C/SightAttachments/MAGNIFIED_A.png",
                                }),
                                new SightAttachment({
                                    name: "MAGNIFIED B",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/G36C/SightAttachments/MAGNIFIED_B.png",
                                }),
                                new SightAttachment({
                                    name: "MAGNIFIED C",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/G36C/SightAttachments/MAGNIFIED_C.png",
                                }),
                                new SightAttachment({
                                    name: "RED DOT A",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/G36C/SightAttachments/RED_DOT_A.png",
                                }),
                                new SightAttachment({
                                    name: "RED DOT B",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/G36C/SightAttachments/RED_DOT_B.png",
                                }),
                                new SightAttachment({
                                    name: "RED DOT C",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/G36C/SightAttachments/RED_DOT_C.png",
                                }),
                                new SightAttachment({
                                    name: "REFLEX A",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/G36C/SightAttachments/REFLEX_A.png",
                                }),
                                new SightAttachment({
                                    name: "REFLEX B",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/G36C/SightAttachments/REFLEX_B.png",
                                }),
                                new SightAttachment({
                                    name: "REFLEX C",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/G36C/SightAttachments/REFLEX_C.png",
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachment({
                                    name: "LASER",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/G36C/UnderBarrelAttachments/LASER.png",
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo({
                        name: "R4-C",
                        image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/R4-C/R4-C.png",
                        attachments: {
                            barrels: [
                                new BarrelAttachment({
                                    name: "COMPENSATOR",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/R4-C/BarrelAttachments/COMPENSATOR.png",
                                }),
                                new BarrelAttachment({
                                    name: "EXTENDED BARREL",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/R4-C/BarrelAttachments/EXTENDED_BARREL.png",
                                }),
                                new BarrelAttachment({
                                    name: "FLASH HIDER",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/R4-C/BarrelAttachments/FLASH_HIDER.png",
                                }),
                                new BarrelAttachment({
                                    name: "MUZZLE BRAKE",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/R4-C/BarrelAttachments/MUZZLE_BRAKE.png",
                                }),
                                new BarrelAttachment({
                                    name: "SUPPRESSOR",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/R4-C/BarrelAttachments/SUPPRESSOR.png",
                                }),
                            ],
                            grips: [
                                new GripAttachment({
                                    name: "ANGLED GRIP",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/R4-C/GripAttachments/ANGLED_GRIP.png",
                                }),
                                new GripAttachment({
                                    name: "HORIZONTAL GRIP",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/R4-C/GripAttachments/HORIZONTAL_GRIP.png",
                                }),
                                new GripAttachment({
                                    name: "VERTICAL GRIP",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/R4-C/GripAttachments/VERTICAL_GRIP.png",
                                }),
                            ],
                            sights: [
                                new SightAttachment({
                                    name: "HOLO A",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/R4-C/SightAttachments/HOLO_A.png",
                                }),
                                new SightAttachment({
                                    name: "HOLO B",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/R4-C/SightAttachments/HOLO_B.png",
                                }),
                                new SightAttachment({
                                    name: "HOLO C",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/R4-C/SightAttachments/HOLO_C.png",
                                }),
                                new SightAttachment({
                                    name: "HOLO D",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/R4-C/SightAttachments/HOLO_D.png",
                                }),
                                new SightAttachment({
                                    name: "IRON SIGHT",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/R4-C/SightAttachments/IRON SIGHT.png",
                                }),
                                new SightAttachment({
                                    name: "MAGNIFIED A",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/R4-C/SightAttachments/MAGNIFIED_A.png",
                                }),
                                new SightAttachment({
                                    name: "MAGNIFIED B",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/R4-C/SightAttachments/MAGNIFIED_B.png",
                                }),
                                new SightAttachment({
                                    name: "MAGNIFIED C",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/R4-C/SightAttachments/MAGNIFIED_C.png",
                                }),
                                new SightAttachment({
                                    name: "RED DOT A",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/R4-C/SightAttachments/RED_DOT_A.png",
                                }),
                                new SightAttachment({
                                    name: "RED DOT B",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/R4-C/SightAttachments/RED_DOT_B.png",
                                }),
                                new SightAttachment({
                                    name: "RED DOT C",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/R4-C/SightAttachments/RED_DOT_C.png",
                                }),
                                new SightAttachment({
                                    name: "REFLEX A",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/R4-C/SightAttachments/REFLEX_A.png",
                                }),
                                new SightAttachment({
                                    name: "REFLEX B",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/R4-C/SightAttachments/REFLEX_B.png",
                                }),
                                new SightAttachment({
                                    name: "REFLEX C",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/R4-C/SightAttachments/REFLEX_C.png",
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachment({
                                    name: "LASER",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/PrimaryWeapons/R4-C/UnderBarrelAttachments/LASER.png",
                                }),
                            ],
                        },
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "5.7 USG",
                        image: "../assets/Siege-Rando-Images/Attackers/Ash/SecondaryWeapons/5.7 USG/5.7 USG.png",
                        attachments: {
                            barrels: [
                                new BarrelAttachment({
                                    name: "MUZZLE BRAKE",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/SecondaryWeapons/5.7 USG/BarrelAttachments/MUZZLE_BRAKE.png",
                                }),
                                new BarrelAttachment({
                                    name: "SUPPRESSOR",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/SecondaryWeapons/5.7 USG/BarrelAttachments/SUPPRESSOR.png",
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo({
                        name: "M45 MEUSOC",
                        image: "../assets/Siege-Rando-Images/Attackers/Ash/SecondaryWeapons/M45 MEUSOC/M54_MEUSOC.png",
                        attachments: {
                            barrels: [
                                new BarrelAttachment({
                                    name: "MUZZLE BRAKE",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/SecondaryWeapons/M45 MEUSOC/BarrelAttachments/MUZZLE_BRAKE.png",
                                }),
                                new BarrelAttachment({
                                    name: "SUPPRESSOR",
                                    image: "../assets/Siege-Rando-Images/Attackers/Ash/SecondaryWeapons/M45 MEUSOC/BarrelAttachments/SUPPRESSOR.png",
                                }),
                            ],
                        },
                    }),
                ],
            }),
            new OPInfo({
                name: "Blitz",
                image: "../assets/Siege-Rando-Images/Attackers/Blitz/Blitz.png",
                icon: "../assets/Siege-Rando-Images/Attackers/Blitz/Blitz_Icon.png",
                equipment: [
                    new Equipment({
                        name: "Breach Charge",
                        image: "../assets/Siege-Rando-Images/Attackers/Blitz/Equipment/Breach_Charge.png",
                    }),
                    new Equipment({
                        name: "Smoke Grenade",
                        image: "../assets/Siege-Rando-Images/Attackers/Blitz/Equipment/Smoke Grenade.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "G52-Tactical Shield",
                        image: "../assets/Siege-Rando-Images/Attackers/Blitz/PrimaryWeapons/G52-Tactical_Shield.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "P12",
                        image: "../assets/Siege-Rando-Images/Attackers/Blitz/SecondaryWeapons/P12.png",
                    }),
                ],
            }),
            new OPInfo({
                name: "Buck",
                image: "../assets/Siege-Rando-Images/Attackers/Buck/Buck.png",
                icon: "../assets/Siege-Rando-Images/Attackers/Buck/Buck_Icon.png",
                equipment: [
                    new Equipment({
                        name: "Hard Breach Charge",
                        image: "../assets/Siege-Rando-Images/Attackers/Buck/Equipment/Hard Breach Charge.png",
                    }),
                    new Equipment({
                        name: "Stun Grenade",
                        image: "../assets/Siege-Rando-Images/Attackers/Buck/Equipment/Stun Grenade.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "C8-SFW",
                        image: "../assets/Siege-Rando-Images/Attackers/Buck/PrimaryWeapons/C8-SFW.png",
                    }),
                    new WeaponInfo({
                        name: "CAMRS",
                        image: "../assets/Siege-Rando-Images/Attackers/Buck/PrimaryWeapons/CAMRS.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "Gonne 6",
                        image: "../assets/Siege-Rando-Images/Attackers/Buck/SecondaryWeapons/Gonne_6.png",
                    }),
                    new WeaponInfo({
                        name: "MK1 9mm",
                        image: "../assets/Siege-Rando-Images/Attackers/Buck/SecondaryWeapons/MK1_9mm.png",
                    }),
                ],
            }),
            new OPInfo({
                name: "Fuze",
                image: "../assets/Siege-Rando-Images/Attackers/Fuze/Fuze.png",
                icon: "../assets/Siege-Rando-Images/Attackers/Fuze/Fuze_Icon.png",
                equipment: [
                    new Equipment({
                        name: "Breach Charge",
                        image: "../assets/Siege-Rando-Images/Attackers/Fuze/Equipment/Breach_Charge.png",
                    }),
                    new Equipment({
                        name: "Hard Breach Charge",
                        image: "../assets/Siege-Rando-Images/Attackers/Fuze/Equipment/Hard Breach Charge.png",
                    }),
                    new Equipment({
                        name: "Smoke Grenade",
                        image: "../assets/Siege-Rando-Images/Attackers/Fuze/Equipment/Smoke Grenade.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "6P41",
                        image: "../assets/Siege-Rando-Images/Attackers/Fuze/PrimaryWeapons/6P41.png",
                    }),
                    new WeaponInfo({
                        name: "AK-12",
                        image: "../assets/Siege-Rando-Images/Attackers/Fuze/PrimaryWeapons/AK-12.png",
                    }),
                    new WeaponInfo({
                        name: "Ballistic Shield",
                        image: "../assets/Siege-Rando-Images/Attackers/Fuze/PrimaryWeapons/Ballistic Shield.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "GSH-18",
                        image: "../assets/Siege-Rando-Images/Attackers/Fuze/SecondaryWeapons/GSH-18.png",
                    }),
                    new WeaponInfo({
                        name: "PMM",
                        image: "../assets/Siege-Rando-Images/Attackers/Fuze/SecondaryWeapons/PMM.png",
                    }),
                ],
            }),
            new OPInfo({
                name: "Glaz",
                image: "../assets/Siege-Rando-Images/Attackers/Glaz/Glaz.png",
                icon: "../assets/Siege-Rando-Images/Attackers/Glaz/Glaz_Icon.png",
                equipment: [
                    new Equipment({
                        name: "Claymore",
                        image: "../assets/Siege-Rando-Images/Attackers/Glaz/Equipment/Claymore.png",
                    }),
                    new Equipment({
                        name: "Frag",
                        image: "../assets/Siege-Rando-Images/Attackers/Glaz/Equipment/Frag.png",
                    }),
                    new Equipment({
                        name: "Smoke Grenade",
                        image: "../assets/Siege-Rando-Images/Attackers/Glaz/Equipment/Smoke Grenade.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "0Ts-03",
                        image: "../assets/Siege-Rando-Images/Attackers/Glaz/PrimaryWeapons/0Ts-03.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "Bearing 9",
                        image: "../assets/Siege-Rando-Images/Attackers/Glaz/SecondaryWeapons/Bearing_9.png",
                    }),
                    new WeaponInfo({
                        name: "Gonne 6",
                        image: "../assets/Siege-Rando-Images/Attackers/Glaz/SecondaryWeapons/Gonne_6.png",
                    }),
                    new WeaponInfo({
                        name: "PMM",
                        image: "../assets/Siege-Rando-Images/Attackers/Glaz/SecondaryWeapons/PMM.png",
                    }),
                ],
            }),
            new OPInfo({
                name: "IQ",
                image: "../assets/Siege-Rando-Images/Attackers/IQ/IQ.png",
                icon: "../assets/Siege-Rando-Images/Attackers/IQ/IQ_Icon.png",
                equipment: [
                    new Equipment({
                        name: "Breach Charge",
                        image: "../assets/Siege-Rando-Images/Attackers/IQ/Equipment/Breach_Charge.png",
                    }),
                    new Equipment({
                        name: "Claymore",
                        image: "../assets/Siege-Rando-Images/Attackers/IQ/Equipment/Claymore.png",
                    }),
                    new Equipment({
                        name: "Frag",
                        image: "../assets/Siege-Rando-Images/Attackers/IQ/Equipment/Frag.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "552 COMMANDO",
                        image: "../assets/Siege-Rando-Images/Attackers/IQ/PrimaryWeapons/552_COMMANDO.png",
                    }),
                    new WeaponInfo({
                        name: "AUG A2",
                        image: "../assets/Siege-Rando-Images/Attackers/IQ/PrimaryWeapons/AUG_A2.png",
                    }),
                    new WeaponInfo({
                        name: "G8A1",
                        image: "../assets/Siege-Rando-Images/Attackers/IQ/PrimaryWeapons/G8A1.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "P12",
                        image: "../assets/Siege-Rando-Images/Attackers/IQ/SecondaryWeapons/P12.png",
                    }),
                ],
            }),
            new OPInfo({
                name: "Montagne",
                image: "../assets/Siege-Rando-Images/Attackers/Montagne/Montagne.png",
                icon: "../assets/Siege-Rando-Images/Attackers/Montagne/Montagne_Icon.png",
                equipment: [
                    new Equipment({
                        name: "Hard Breach Charge",
                        image: "../assets/Siege-Rando-Images/Attackers/Montagne/Equipment/Hard Breach Charge.png",
                    }),
                    new Equipment({
                        name: "Impact EMP",
                        image: "../assets/Siege-Rando-Images/Attackers/Montagne/Equipment/Impact EMP.png",
                    }),
                    new Equipment({
                        name: "Smoke Grenade",
                        image: "../assets/Siege-Rando-Images/Attackers/Montagne/Equipment/Smoke Grenade.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "LE ROC SHIELD",
                        image: "../assets/Siege-Rando-Images/Attackers/Montagne/PrimaryWeapons/LE_ROC_SHIELD.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "LFP589",
                        image: "../assets/Siege-Rando-Images/Attackers/Montagne/SecondaryWeapons/LFP589.png",
                    }),
                    new WeaponInfo({
                        name: "P9",
                        image: "../assets/Siege-Rando-Images/Attackers/Montagne/SecondaryWeapons/P9.png",
                    }),
                ],
            }),
            new OPInfo({
                name: "Sledge",
                image: "../assets/Siege-Rando-Images/Attackers/Sledge/Sledge.png",
                icon: "../assets/Siege-Rando-Images/Attackers/Sledge/Sledge_Icon.png",
                equipment: [
                    new Equipment({
                        name: "Frag",
                        image: "../assets/Siege-Rando-Images/Attackers/Sledge/Equipment/Frag.png",
                    }),
                    new Equipment({
                        name: "Impact EMP",
                        image: "../assets/Siege-Rando-Images/Attackers/Sledge/Equipment/Impact EMP.png",
                    }),
                    new Equipment({
                        name: "Stun Grenade",
                        image: "../assets/Siege-Rando-Images/Attackers/Sledge/Equipment/Stun Grenade.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "L85A2",
                        image: "../assets/Siege-Rando-Images/Attackers/Sledge/PrimaryWeapons/L85A2.png",
                    }),
                    new WeaponInfo({
                        name: "M590A1",
                        image: "../assets/Siege-Rando-Images/Attackers/Sledge/PrimaryWeapons/M590A1.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "P226 MK 25",
                        image: "../assets/Siege-Rando-Images/Attackers/Sledge/SecondaryWeapons/P226_MK_25.png",
                    }),
                ],
            }),
            new OPInfo({
                name: "Thatcher",
                image: "../assets/Siege-Rando-Images/Attackers/Thatcher/Thatcher.png",
                icon: "../assets/Siege-Rando-Images/Attackers/Thatcher/Thatcher_Icon.png",
                equipment: [
                    new Equipment({
                        name: "Breach Charge",
                        image: "../assets/Siege-Rando-Images/Attackers/Thatcher/Equipment/Breach_Charge.png",
                    }),
                    new Equipment({
                        name: "Claymore",
                        image: "../assets/Siege-Rando-Images/Attackers/Thatcher/Equipment/Claymore.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "AR33",
                        image: "../assets/Siege-Rando-Images/Attackers/Thatcher/PrimaryWeapons/AR33.png",
                    }),
                    new WeaponInfo({
                        name: "L85A2",
                        image: "../assets/Siege-Rando-Images/Attackers/Thatcher/PrimaryWeapons/L85A2.png",
                    }),
                    new WeaponInfo({
                        name: "M590A1",
                        image: "../assets/Siege-Rando-Images/Attackers/Thatcher/PrimaryWeapons/M590A1.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "P226 MK 25",
                        image: "../assets/Siege-Rando-Images/Attackers/Thatcher/SecondaryWeapons/P226_MK_25.png",
                    }),
                ],
            }),
            new OPInfo({
                name: "Thermite",
                image: "../assets/Siege-Rando-Images/Attackers/Thermite/Thermite.png",
                icon: "../assets/Siege-Rando-Images/Attackers/Thermite/Thermite_Icon.png",
                equipment: [
                    new Equipment({
                        name: "Smoke Grenade",
                        image: "../assets/Siege-Rando-Images/Attackers/Thermite/Equipment/Smoke Grenade.png",
                    }),
                    new Equipment({
                        name: "Stun Grenade",
                        image: "../assets/Siege-Rando-Images/Attackers/Thermite/Equipment/Stun Grenade.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "556XI",
                        image: "../assets/Siege-Rando-Images/Attackers/Thermite/PrimaryWeapons/556XI.png",
                    }),
                    new WeaponInfo({
                        name: "M1014",
                        image: "../assets/Siege-Rando-Images/Attackers/Thermite/PrimaryWeapons/M1014.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "5.7 USG",
                        image: "../assets/Siege-Rando-Images/Attackers/Thermite/SecondaryWeapons/5.7 USG.png",
                    }),
                    new WeaponInfo({
                        name: "M54 MEUSOC",
                        image: "../assets/Siege-Rando-Images/Attackers/Thermite/SecondaryWeapons/M54_MEUSOC.png",
                    }),
                ],
            }),
            new OPInfo({
                name: "Twitch",
                image: "../assets/Siege-Rando-Images/Attackers/Twitch/Twitch.png",
                icon: "../assets/Siege-Rando-Images/Attackers/Twitch/Twitch_Icon.png",
                equipment: [
                    new Equipment({
                        name: "Claymore",
                        image: "../assets/Siege-Rando-Images/Attackers/Twitch/Equipment/Claymore.png",
                    }),
                    new Equipment({
                        name: "Smoke Grenade",
                        image: "../assets/Siege-Rando-Images/Attackers/Twitch/Equipment/Smoke Grenade.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "417",
                        image: "../assets/Siege-Rando-Images/Attackers/Twitch/PrimaryWeapons/417.png",
                    }),
                    new WeaponInfo({
                        name: "F2",
                        image: "../assets/Siege-Rando-Images/Attackers/Twitch/PrimaryWeapons/F2.png",
                    }),
                    new WeaponInfo({
                        name: "SG-CQB",
                        image: "../assets/Siege-Rando-Images/Attackers/Twitch/PrimaryWeapons/SG-CQB.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "LFP589",
                        image: "../assets/Siege-Rando-Images/Attackers/Twitch/SecondaryWeapons/LFP589.png",
                    }),
                    new WeaponInfo({
                        name: "P9",
                        image: "../assets/Siege-Rando-Images/Attackers/Twitch/SecondaryWeapons/P9.png",
                    }),
                ],
            }),
            new OPInfo({
                name: "Zofia",
                image: "../assets/Siege-Rando-Images/Attackers/Zofia/Zofia.png",
                icon: "../assets/Siege-Rando-Images/Attackers/Zofia/zofia_icon.png",
                equipment: [
                    new Equipment({
                        name: "Breach Charge",
                        image: "../assets/Siege-Rando-Images/Attackers/Zofia/Equipment/Breach_Charge.png",
                    }),
                    new Equipment({
                        name: "Claymore",
                        image: "../assets/Siege-Rando-Images/Attackers/Zofia/Equipment/Claymore.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "LMG E",
                        image: "../assets/Siege-Rando-Images/Attackers/Zofia/PrimaryWeapons/LMG_E.png",
                    }),
                    new WeaponInfo({
                        name: "M762",
                        image: "../assets/Siege-Rando-Images/Attackers/Zofia/PrimaryWeapons/M762.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "RG15",
                        image: "../assets/Siege-Rando-Images/Attackers/Zofia/SecondaryWeapons/RG15.png",
                    }),
                ],
            }),
        ],
    }),
    Defenders: new Group({
        ops: [
            new OPInfo({
                name: "Alibi",
                image: "../assets/Siege-Rando-Images/Defenders/Alibi/Alibi.webp",
                icon: "../assets/Siege-Rando-Images/Defenders/Alibi/Alibi_Icon.webp",
                equipment: [
                    new Equipment({
                        name: "Observation Blocker",
                        image: "../assets/Siege-Rando-Images/Defenders/Alibi/Equipment/Observation_Blocker.webp",
                    }),
                    new Equipment({
                        name: "Proximity Alarm 3",
                        image: "../assets/Siege-Rando-Images/Defenders/Alibi/Equipment/Proximity_Alarm_3.webp",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "ACS12",
                        image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/ACS12/ACS12.webp",
                        attachments: {
                            barrels: [
                                new BarrelAttachment({
                                    name: "LASER",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/ACS12/BarrelAttachments/LASER.png",
                                }),
                            ],
                            grips: [
                                new GripAttachment({
                                    name: "ANGLED GRIP",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/ACS12/GripAttachments/ANGLED_GRIP.png",
                                }),
                                new GripAttachment({
                                    name: "VERTICAL GRIP",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/ACS12/GripAttachments/VERTICAL_GRIP.png",
                                }),
                            ],
                            sights: [
                                new SightAttachment({
                                    name: "HOLO A",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/ACS12/SightAttachments/HOLO_A.png",
                                }),
                                new SightAttachment({
                                    name: "HOLO B",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/ACS12/SightAttachments/HOLO_B.png",
                                }),
                                new SightAttachment({
                                    name: "HOLO C",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/ACS12/SightAttachments/HOLO_C.png",
                                }),
                                new SightAttachment({
                                    name: "HOLO D",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/ACS12/SightAttachments/HOLO_D.png",
                                }),
                                new SightAttachment({
                                    name: "IRON SIGHT",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/ACS12/SightAttachments/IRON SIGHT.png",
                                }),
                                new SightAttachment({
                                    name: "MAGNIFIED A",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/ACS12/SightAttachments/MAGNIFIED_A.png",
                                }),
                                new SightAttachment({
                                    name: "MAGNIFIED B",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/ACS12/SightAttachments/MAGNIFIED_B.png",
                                }),
                                new SightAttachment({
                                    name: "MAGNIFIED C",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/ACS12/SightAttachments/MAGNIFIED_C.png",
                                }),
                                new SightAttachment({
                                    name: "RED DOT A",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/ACS12/SightAttachments/RED_DOT_A.png",
                                }),
                                new SightAttachment({
                                    name: "RED DOT B",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/ACS12/SightAttachments/RED_DOT_B.png",
                                }),
                                new SightAttachment({
                                    name: "RED DOT C",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/ACS12/SightAttachments/RED_DOT_C.png",
                                }),
                                new SightAttachment({
                                    name: "REFLEX A",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/ACS12/SightAttachments/REFLEX_A.png",
                                }),
                                new SightAttachment({
                                    name: "REFLEX B",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/ACS12/SightAttachments/REFLEX_B.png",
                                }),
                                new SightAttachment({
                                    name: "REFLEX C",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/ACS12/SightAttachments/REFLEX_C.png",
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo({
                        name: "Mx4 Storm",
                        image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/Mx4 Storm/Mx4_Storm.webp",
                        attachments: {
                            barrels: [
                                new BarrelAttachment({
                                    name: "COMPENSATOR",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/Mx4 Storm/BarrelAttachments/COMPENSATOR.png",
                                }),
                                new BarrelAttachment({
                                    name: "EXTENDED BARREL",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/Mx4 Storm/BarrelAttachments/EXTENDED_BARREL.png",
                                }),
                                new BarrelAttachment({
                                    name: "FLASH HIDER",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/Mx4 Storm/BarrelAttachments/FLASH_HIDER.png",
                                }),
                                new BarrelAttachment({
                                    name: "LASER",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/Mx4 Storm/BarrelAttachments/LASER.png",
                                }),
                                new BarrelAttachment({
                                    name: "MUZZLE BRAKE",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/Mx4 Storm/BarrelAttachments/MUZZLE_BRAKE.png",
                                }),
                                new BarrelAttachment({
                                    name: "SUPPRESSOR",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/Mx4 Storm/BarrelAttachments/SUPPRESSOR.png",
                                }),
                            ],
                            grips: [
                                new GripAttachment({
                                    name: "ANGLED GRIP",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/Mx4 Storm/GripAttachments/ANGLED_GRIP.png",
                                }),
                                new GripAttachment({
                                    name: "VERTICAL GRIP",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/Mx4 Storm/GripAttachments/VERTICAL_GRIP.png",
                                }),
                            ],
                            sights: [
                                new SightAttachment({
                                    name: "HOLO A",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/Mx4 Storm/SightAttachments/HOLO_A.png",
                                }),
                                new SightAttachment({
                                    name: "HOLO B",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/Mx4 Storm/SightAttachments/HOLO_B.png",
                                }),
                                new SightAttachment({
                                    name: "HOLO C",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/Mx4 Storm/SightAttachments/HOLO_C.png",
                                }),
                                new SightAttachment({
                                    name: "HOLO D",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/Mx4 Storm/SightAttachments/HOLO_D.png",
                                }),
                                new SightAttachment({
                                    name: "IRON SIGHT",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/Mx4 Storm/SightAttachments/IRON SIGHT.png",
                                }),
                                new SightAttachment({
                                    name: "RED DOT A",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/Mx4 Storm/SightAttachments/RED_DOT_A.png",
                                }),
                                new SightAttachment({
                                    name: "RED DOT B",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/Mx4 Storm/SightAttachments/RED_DOT_B.png",
                                }),
                                new SightAttachment({
                                    name: "RED DOT C",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/Mx4 Storm/SightAttachments/RED_DOT_C.png",
                                }),
                                new SightAttachment({
                                    name: "REFLEX A",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/Mx4 Storm/SightAttachments/REFLEX_A.png",
                                }),
                                new SightAttachment({
                                    name: "REFLEX B",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/Mx4 Storm/SightAttachments/REFLEX_B.png",
                                }),
                                new SightAttachment({
                                    name: "REFLEX C",
                                    image: "../assets/Siege-Rando-Images/Defenders/Alibi/PrimaryWeapons/Mx4 Storm/SightAttachments/REFLEX_C.png",
                                }),
                            ],
                        },
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "Bailiff 410",
                        image: "../assets/Siege-Rando-Images/Defenders/Alibi/SecondaryWeapons/Bailiff_410.webp",
                    }),
                    new WeaponInfo({
                        name: "Keratos .357",
                        image: "../assets/Siege-Rando-Images/Defenders/Alibi/SecondaryWeapons/Keratos_.357.webp",
                    }),
                ],
            }),
        ],
    }),
};

//#endregion
