//#region Main

import type { Groups } from "./types/groups.js";
import { Group } from "./utils/group.js";
import { OPInfo } from "./utils/op.js";
import { Equipment } from "./utils/equipment.js";
import { WeaponInfo } from "./utils/weaponInfo/weapon.js";
import {
    BarrelAttachment,
    GripAttachment,
    SightAttachment,
    UnderBarrelAttachment,
} from "./utils/weaponInfo/attachment.js";

export const GROUPS: Groups = {
    Attackers: new Group({
        icon: "assets/Siege-Rando-Images/GroupIcons/Attackers_Icon.svg",
        ops: [
            new OPInfo({
                name: "Ash",
                image: "assets/Siege-Rando-Images/OpsImages/Ash.png",
                icon: "assets/Siege-Rando-Images/OpsIcons/Ash_Icon.png",
                equipment: [
                    new Equipment({
                        name: "Breach Charge",
                        image: "assets/Siege-Rando-Images/Equipment/Breach_Charge.png",
                    }),
                    new Equipment({
                        name: "Claymore",
                        image: "assets/Siege-Rando-Images/Equipment/Claymore.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "G36C",
                        image: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/G36C.png",
                        attachments: {
                            barrels: [
                                new BarrelAttachment({
                                    name: "COMPENSATOR",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachments/COMPENSATOR.png",
                                }),
                                new BarrelAttachment({
                                    name: "EXTENDED BARREL",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachments/EXTENDED_BARREL.png",
                                }),
                                new BarrelAttachment({
                                    name: "FLASH HIDER",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachments/FLASH_HIDER.png",
                                }),
                                new BarrelAttachment({
                                    name: "MUZZLE BRAKE",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachments/MUZZLE_BRAKE.png",
                                }),
                                new BarrelAttachment({
                                    name: "SUPPRESSOR",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachments/SUPPRESSOR.png",
                                }),
                            ],
                            grips: [
                                new GripAttachment({
                                    name: "ANGLED GRIP",
                                    image: "assets/Siege-Rando-Images/Weapons/GripAttachments/ANGLED_GRIP.png",
                                }),
                                new GripAttachment({
                                    name: "HORIZONTAL GRIP",
                                    image: "assets/Siege-Rando-Images/Weapons/GripAttachments/HORIZONTAL_GRIP.png",
                                }),
                                new GripAttachment({
                                    name: "VERTICAL GRIP",
                                    image: "assets/Siege-Rando-Images/Weapons/GripAttachments/VERTICAL_GRIP.png",
                                }),
                            ],
                            sights: [
                                new SightAttachment({
                                    name: "HOLO A",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/HOLO_A.png",
                                }),
                                new SightAttachment({
                                    name: "HOLO B",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/HOLO_B.png",
                                }),
                                new SightAttachment({
                                    name: "HOLO C",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/HOLO_C.png",
                                }),
                                new SightAttachment({
                                    name: "HOLO D",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/HOLO_D.png",
                                }),
                                new SightAttachment({
                                    name: "IRON SIGHT",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/IRON SIGHT.png",
                                }),
                                new SightAttachment({
                                    name: "MAGNIFIED A",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/MAGNIFIED_A.png",
                                }),
                                new SightAttachment({
                                    name: "MAGNIFIED B",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/MAGNIFIED_B.png",
                                }),
                                new SightAttachment({
                                    name: "MAGNIFIED C",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/MAGNIFIED_C.png",
                                }),
                                new SightAttachment({
                                    name: "RED DOT A",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/RED_DOT_A.png",
                                }),
                                new SightAttachment({
                                    name: "RED DOT B",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/RED_DOT_B.png",
                                }),
                                new SightAttachment({
                                    name: "RED DOT C",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/RED_DOT_C.png",
                                }),
                                new SightAttachment({
                                    name: "REFLEX A",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/REFLEX_A.png",
                                }),
                                new SightAttachment({
                                    name: "REFLEX B",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/REFLEX_B.png",
                                }),
                                new SightAttachment({
                                    name: "REFLEX C",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/REFLEX_C.png",
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachment({
                                    name: "LASER",
                                    image: "assets/Siege-Rando-Images/Weapons/UnderBarrelAttachments/LASER.png",
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo({
                        name: "R4-C",
                        image: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/R4-C.png",
                        attachments: {
                            barrels: [
                                new BarrelAttachment({
                                    name: "COMPENSATOR",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachments/COMPENSATOR.png",
                                }),
                                new BarrelAttachment({
                                    name: "EXTENDED BARREL",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachments/EXTENDED_BARREL.png",
                                }),
                                new BarrelAttachment({
                                    name: "FLASH HIDER",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachments/FLASH_HIDER.png",
                                }),
                                new BarrelAttachment({
                                    name: "MUZZLE BRAKE",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachments/MUZZLE_BRAKE.png",
                                }),
                                new BarrelAttachment({
                                    name: "SUPPRESSOR",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachments/SUPPRESSOR.png",
                                }),
                            ],
                            grips: [
                                new GripAttachment({
                                    name: "ANGLED GRIP",
                                    image: "assets/Siege-Rando-Images/Weapons/GripAttachments/ANGLED_GRIP.png",
                                }),
                                new GripAttachment({
                                    name: "HORIZONTAL GRIP",
                                    image: "assets/Siege-Rando-Images/Weapons/GripAttachments/HORIZONTAL_GRIP.png",
                                }),
                                new GripAttachment({
                                    name: "VERTICAL GRIP",
                                    image: "assets/Siege-Rando-Images/Weapons/GripAttachments/VERTICAL_GRIP.png",
                                }),
                            ],
                            sights: [
                                new SightAttachment({
                                    name: "HOLO A",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/HOLO_A.png",
                                }),
                                new SightAttachment({
                                    name: "HOLO B",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/HOLO_B.png",
                                }),
                                new SightAttachment({
                                    name: "HOLO C",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/HOLO_C.png",
                                }),
                                new SightAttachment({
                                    name: "HOLO D",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/HOLO_D.png",
                                }),
                                new SightAttachment({
                                    name: "IRON SIGHT",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/IRON SIGHT.png",
                                }),
                                new SightAttachment({
                                    name: "MAGNIFIED A",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/MAGNIFIED_A.png",
                                }),
                                new SightAttachment({
                                    name: "MAGNIFIED B",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/MAGNIFIED_B.png",
                                }),
                                new SightAttachment({
                                    name: "MAGNIFIED C",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/MAGNIFIED_C.png",
                                }),
                                new SightAttachment({
                                    name: "RED DOT A",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/RED_DOT_A.png",
                                }),
                                new SightAttachment({
                                    name: "RED DOT B",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/RED_DOT_B.png",
                                }),
                                new SightAttachment({
                                    name: "RED DOT C",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/RED_DOT_C.png",
                                }),
                                new SightAttachment({
                                    name: "REFLEX A",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/REFLEX_A.png",
                                }),
                                new SightAttachment({
                                    name: "REFLEX B",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/REFLEX_B.png",
                                }),
                                new SightAttachment({
                                    name: "REFLEX C",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/REFLEX_C.png",
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachment({
                                    name: "LASER",
                                    image: "assets/Siege-Rando-Images/Weapons/UnderBarrelAttachments/LASER.png",
                                }),
                            ],
                        },
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "5.7 USG",
                        image: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/5.7 USG.png",
                        attachments: {
                            barrels: [
                                new BarrelAttachment({
                                    name: "MUZZLE BRAKE",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachments/MUZZLE_BRAKE.png",
                                }),
                                new BarrelAttachment({
                                    name: "SUPPRESSOR",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachments/SUPPRESSOR.png",
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo({
                        name: "M45 MEUSOC",
                        image: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/M54_MEUSOC.png",
                        attachments: {
                            barrels: [
                                new BarrelAttachment({
                                    name: "MUZZLE BRAKE",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachments/MUZZLE_BRAKE.png",
                                }),
                                new BarrelAttachment({
                                    name: "SUPPRESSOR",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachments/SUPPRESSOR.png",
                                }),
                            ],
                        },
                    }),
                ],
            }),
            new OPInfo({
                name: "Blitz",
                image: "assets/Siege-Rando-Images/OpsImages/Blitz.png",
                icon: "assets/Siege-Rando-Images/OpsIcons/Blitz_Icon.png",
                equipment: [
                    new Equipment({
                        name: "Breach Charge",
                        image: "assets/Siege-Rando-Images/Equipment/Breach_Charge.png",
                    }),
                    new Equipment({
                        name: "Smoke Grenade",
                        image: "assets/Siege-Rando-Images/Equipment/Smoke Grenade.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "G52-Tactical Shield",
                        image: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/G52-Tactical_Shield.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "P12",
                        image: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/P12.png",
                    }),
                ],
            }),
            new OPInfo({
                name: "Buck",
                image: "assets/Siege-Rando-Images/OpsImages/Buck.png",
                icon: "assets/Siege-Rando-Images/OpsIcons/Buck_Icon.png",
                equipment: [
                    new Equipment({
                        name: "Hard Breach Charge",
                        image: "assets/Siege-Rando-Images/Equipment/Hard Breach Charge.png",
                    }),
                    new Equipment({
                        name: "Stun Grenade",
                        image: "assets/Siege-Rando-Images/Equipment/Stun Grenade.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "C8-SFW",
                        image: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/C8-SFW.png",
                    }),
                    new WeaponInfo({
                        name: "CAMRS",
                        image: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/CAMRS.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "Gonne 6",
                        image: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/Gonne_6.png",
                    }),
                    new WeaponInfo({
                        name: "MK1 9mm",
                        image: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/MK1_9mm.png",
                    }),
                ],
            }),
            new OPInfo({
                name: "Fuze",
                image: "assets/Siege-Rando-Images/OpsImages/Fuze.png",
                icon: "assets/Siege-Rando-Images/OpsIcons/Fuze_Icon.png",
                equipment: [
                    new Equipment({
                        name: "Breach Charge",
                        image: "assets/Siege-Rando-Images/Equipment/Breach_Charge.png",
                    }),
                    new Equipment({
                        name: "Hard Breach Charge",
                        image: "assets/Siege-Rando-Images/Equipment/Hard Breach Charge.png",
                    }),
                    new Equipment({
                        name: "Smoke Grenade",
                        image: "assets/Siege-Rando-Images/Equipment/Smoke Grenade.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "6P41",
                        image: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/6P41.png",
                    }),
                    new WeaponInfo({
                        name: "AK-12",
                        image: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/AK-12.png",
                    }),
                    new WeaponInfo({
                        name: "Ballistic Shield",
                        image: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/Ballistic Shield.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "GSH-18",
                        image: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/GSH-18.png",
                    }),
                    new WeaponInfo({
                        name: "PMM",
                        image: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/PMM.png",
                    }),
                ],
            }),
            new OPInfo({
                name: "Glaz",
                image: "assets/Siege-Rando-Images/OpsImages/Glaz.png",
                icon: "assets/Siege-Rando-Images/OpsIcons/Glaz_Icon.png",
                equipment: [
                    new Equipment({
                        name: "Claymore",
                        image: "assets/Siege-Rando-Images/Equipment/Claymore.png",
                    }),
                    new Equipment({
                        name: "Frag",
                        image: "assets/Siege-Rando-Images/Equipment/Frag.png",
                    }),
                    new Equipment({
                        name: "Smoke Grenade",
                        image: "assets/Siege-Rando-Images/Equipment/Smoke Grenade.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "0Ts-03",
                        image: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/0Ts-03.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "Bearing 9",
                        image: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/Bearing_9.png",
                    }),
                    new WeaponInfo({
                        name: "Gonne 6",
                        image: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/Gonne_6.png",
                    }),
                    new WeaponInfo({
                        name: "PMM",
                        image: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/PMM.png",
                    }),
                ],
            }),
            new OPInfo({
                name: "IQ",
                image: "assets/Siege-Rando-Images/OpsImages/IQ.png",
                icon: "assets/Siege-Rando-Images/OpsIcons/IQ_Icon.png",
                equipment: [
                    new Equipment({
                        name: "Breach Charge",
                        image: "assets/Siege-Rando-Images/Equipment/Breach_Charge.png",
                    }),
                    new Equipment({
                        name: "Claymore",
                        image: "assets/Siege-Rando-Images/Equipment/Claymore.png",
                    }),
                    new Equipment({
                        name: "Frag",
                        image: "assets/Siege-Rando-Images/Equipment/Frag.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "552 COMMANDO",
                        image: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/552_COMMANDO.png",
                    }),
                    new WeaponInfo({
                        name: "AUG A2",
                        image: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/AUG_A2.png",
                    }),
                    new WeaponInfo({
                        name: "G8A1",
                        image: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/G8A1.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "P12",
                        image: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/P12.png",
                    }),
                ],
            }),
            new OPInfo({
                name: "Montagne",
                image: "assets/Siege-Rando-Images/OpsImages/Montagne.png",
                icon: "assets/Siege-Rando-Images/OpsIcons/Montagne_Icon.png",
                equipment: [
                    new Equipment({
                        name: "Hard Breach Charge",
                        image: "assets/Siege-Rando-Images/Equipment/Hard Breach Charge.png",
                    }),
                    new Equipment({
                        name: "Impact EMP",
                        image: "assets/Siege-Rando-Images/Equipment/Impact EMP.png",
                    }),
                    new Equipment({
                        name: "Smoke Grenade",
                        image: "assets/Siege-Rando-Images/Equipment/Smoke Grenade.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "LE ROC SHIELD",
                        image: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/LE_ROC_SHIELD.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "LFP589",
                        image: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/LFP589.png",
                    }),
                    new WeaponInfo({
                        name: "P9",
                        image: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/P9.png",
                    }),
                ],
            }),
            new OPInfo({
                name: "Sledge",
                image: "assets/Siege-Rando-Images/OpsImages/Sledge.png",
                icon: "assets/Siege-Rando-Images/OpsIcons/Sledge_Icon.png",
                equipment: [
                    new Equipment({
                        name: "Frag",
                        image: "assets/Siege-Rando-Images/Equipment/Frag.png",
                    }),
                    new Equipment({
                        name: "Impact EMP",
                        image: "assets/Siege-Rando-Images/Equipment/Impact EMP.png",
                    }),
                    new Equipment({
                        name: "Stun Grenade",
                        image: "assets/Siege-Rando-Images/Equipment/Stun Grenade.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "L85A2",
                        image: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/L85A2.png",
                    }),
                    new WeaponInfo({
                        name: "M590A1",
                        image: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/M590A1.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "P226 MK 25",
                        image: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/P226_MK_25.png",
                    }),
                ],
            }),
            new OPInfo({
                name: "Thatcher",
                image: "assets/Siege-Rando-Images/OpsImages/Thatcher.png",
                icon: "assets/Siege-Rando-Images/OpsIcons/Thatcher_Icon.png",
                equipment: [
                    new Equipment({
                        name: "Breach Charge",
                        image: "assets/Siege-Rando-Images/Equipment/Breach_Charge.png",
                    }),
                    new Equipment({
                        name: "Claymore",
                        image: "assets/Siege-Rando-Images/Equipment/Claymore.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "AR33",
                        image: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/AR33.png",
                    }),
                    new WeaponInfo({
                        name: "L85A2",
                        image: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/L85A2.png",
                    }),
                    new WeaponInfo({
                        name: "M590A1",
                        image: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/M590A1.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "P226 MK 25",
                        image: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/P226_MK_25.png",
                    }),
                ],
            }),
            new OPInfo({
                name: "Thermite",
                image: "assets/Siege-Rando-Images/OpsImages/Thermite.png",
                icon: "assets/Siege-Rando-Images/OpsIcons/Thermite_Icon.png",
                equipment: [
                    new Equipment({
                        name: "Smoke Grenade",
                        image: "assets/Siege-Rando-Images/Equipment/Smoke Grenade.png",
                    }),
                    new Equipment({
                        name: "Stun Grenade",
                        image: "assets/Siege-Rando-Images/Equipment/Stun Grenade.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "556XI",
                        image: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/556XI.png",
                    }),
                    new WeaponInfo({
                        name: "M1014",
                        image: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/M1014.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "5.7 USG",
                        image: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/5.7 USG.png",
                    }),
                    new WeaponInfo({
                        name: "M54 MEUSOC",
                        image: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/M54_MEUSOC.png",
                    }),
                ],
            }),
            new OPInfo({
                name: "Twitch",
                image: "assets/Siege-Rando-Images/OpsImages/Twitch.png",
                icon: "assets/Siege-Rando-Images/OpsIcons/Twitch_Icon.png",
                equipment: [
                    new Equipment({
                        name: "Claymore",
                        image: "assets/Siege-Rando-Images/Equipment/Claymore.png",
                    }),
                    new Equipment({
                        name: "Smoke Grenade",
                        image: "assets/Siege-Rando-Images/Equipment/Smoke Grenade.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "417",
                        image: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/417.png",
                    }),
                    new WeaponInfo({
                        name: "F2",
                        image: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/F2.png",
                    }),
                    new WeaponInfo({
                        name: "SG-CQB",
                        image: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/SG-CQB.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "LFP589",
                        image: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/LFP589.png",
                    }),
                    new WeaponInfo({
                        name: "P9",
                        image: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/P9.png",
                    }),
                ],
            }),
            new OPInfo({
                name: "Zofia",
                image: "assets/Siege-Rando-Images/OpsImages/Zofia.png",
                icon: "assets/Siege-Rando-Images/OpsIcons/zofia_icon.png",
                equipment: [
                    new Equipment({
                        name: "Breach Charge",
                        image: "assets/Siege-Rando-Images/Equipment/Breach_Charge.png",
                    }),
                    new Equipment({
                        name: "Claymore",
                        image: "assets/Siege-Rando-Images/Equipment/Claymore.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "LMG E",
                        image: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/LMG_E.png",
                    }),
                    new WeaponInfo({
                        name: "M762",
                        image: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/M762.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "RG15",
                        image: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/RG15.png",
                    }),
                ],
            }),
        ],
    }),
    Defenders: new Group({
        icon: "assets/Siege-Rando-Images/GroupIcons/Defenders_Icon.svg",
        ops: [
            new OPInfo({
                name: "Alibi",
                image: "assets/Siege-Rando-Images/OpsImages/Alibi.webp",
                icon: "assets/Siege-Rando-Images/OpsIcons/Alibi_Icon.webp",
                equipment: [
                    new Equipment({
                        name: "Observation Blocker",
                        image: "assets/Siege-Rando-Images/Equipment/Observation_Blocker.webp",
                    }),
                    new Equipment({
                        name: "Proximity Alarm 3",
                        image: "assets/Siege-Rando-Images/Equipment/Proximity_Alarm_3.webp",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "ACS12",
                        image: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/ACS12.webp",
                        attachments: {
                            barrels: [
                                new BarrelAttachment({
                                    name: "LASER",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachments/LASER.png",
                                }),
                            ],
                            grips: [
                                new GripAttachment({
                                    name: "ANGLED GRIP",
                                    image: "assets/Siege-Rando-Images/Weapons/GripAttachments/ANGLED_GRIP.png",
                                }),
                                new GripAttachment({
                                    name: "VERTICAL GRIP",
                                    image: "assets/Siege-Rando-Images/Weapons/GripAttachments/VERTICAL_GRIP.png",
                                }),
                            ],
                            sights: [
                                new SightAttachment({
                                    name: "HOLO A",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/HOLO_A.png",
                                }),
                                new SightAttachment({
                                    name: "HOLO B",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/HOLO_B.png",
                                }),
                                new SightAttachment({
                                    name: "HOLO C",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/HOLO_C.png",
                                }),
                                new SightAttachment({
                                    name: "HOLO D",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/HOLO_D.png",
                                }),
                                new SightAttachment({
                                    name: "IRON SIGHT",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/IRON SIGHT.png",
                                }),
                                new SightAttachment({
                                    name: "MAGNIFIED A",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/MAGNIFIED_A.png",
                                }),
                                new SightAttachment({
                                    name: "MAGNIFIED B",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/MAGNIFIED_B.png",
                                }),
                                new SightAttachment({
                                    name: "MAGNIFIED C",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/MAGNIFIED_C.png",
                                }),
                                new SightAttachment({
                                    name: "RED DOT A",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/RED_DOT_A.png",
                                }),
                                new SightAttachment({
                                    name: "RED DOT B",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/RED_DOT_B.png",
                                }),
                                new SightAttachment({
                                    name: "RED DOT C",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/RED_DOT_C.png",
                                }),
                                new SightAttachment({
                                    name: "REFLEX A",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/REFLEX_A.png",
                                }),
                                new SightAttachment({
                                    name: "REFLEX B",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/REFLEX_B.png",
                                }),
                                new SightAttachment({
                                    name: "REFLEX C",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/REFLEX_C.png",
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo({
                        name: "Mx4 Storm",
                        image: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/Mx4_Storm.webp",
                        attachments: {
                            barrels: [
                                new BarrelAttachment({
                                    name: "COMPENSATOR",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachments/COMPENSATOR.png",
                                }),
                                new BarrelAttachment({
                                    name: "EXTENDED BARREL",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachments/EXTENDED_BARREL.png",
                                }),
                                new BarrelAttachment({
                                    name: "FLASH HIDER",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachments/FLASH_HIDER.png",
                                }),
                                new BarrelAttachment({
                                    name: "LASER",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachments/LASER.png",
                                }),
                                new BarrelAttachment({
                                    name: "MUZZLE BRAKE",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachments/MUZZLE_BRAKE.png",
                                }),
                                new BarrelAttachment({
                                    name: "SUPPRESSOR",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachments/SUPPRESSOR.png",
                                }),
                            ],
                            grips: [
                                new GripAttachment({
                                    name: "ANGLED GRIP",
                                    image: "assets/Siege-Rando-Images/Weapons/GripAttachments/ANGLED_GRIP.png",
                                }),
                                new GripAttachment({
                                    name: "VERTICAL GRIP",
                                    image: "assets/Siege-Rando-Images/Weapons/GripAttachments/VERTICAL_GRIP.png",
                                }),
                            ],
                            sights: [
                                new SightAttachment({
                                    name: "HOLO A",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/HOLO_A.png",
                                }),
                                new SightAttachment({
                                    name: "HOLO B",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/HOLO_B.png",
                                }),
                                new SightAttachment({
                                    name: "HOLO C",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/HOLO_C.png",
                                }),
                                new SightAttachment({
                                    name: "HOLO D",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/HOLO_D.png",
                                }),
                                new SightAttachment({
                                    name: "IRON SIGHT",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/IRON SIGHT.png",
                                }),
                                new SightAttachment({
                                    name: "RED DOT A",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/RED_DOT_A.png",
                                }),
                                new SightAttachment({
                                    name: "RED DOT B",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/RED_DOT_B.png",
                                }),
                                new SightAttachment({
                                    name: "RED DOT C",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/RED_DOT_C.png",
                                }),
                                new SightAttachment({
                                    name: "REFLEX A",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/REFLEX_A.png",
                                }),
                                new SightAttachment({
                                    name: "REFLEX B",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/REFLEX_B.png",
                                }),
                                new SightAttachment({
                                    name: "REFLEX C",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachments/REFLEX_C.png",
                                }),
                            ],
                        },
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "Bailiff 410",
                        image: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/Bailiff_410.webp",
                    }),
                    new WeaponInfo({
                        name: "Keratos .357",
                        image: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/Keratos_.357.webp",
                    }),
                ],
            }),
        ],
    }),
};

//#endregion
