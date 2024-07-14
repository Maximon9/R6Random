//#region Main

import type { Groups } from "./types/groups.js";
import { GroupInfo } from "./utils/group.js";
import { OPInfo } from "./utils/op.js";
import { EquipmentInfo } from "./utils/equipment.js";
import { WeaponInfo } from "./utils/weaponInfo/weapon.js";
import {
    BarrelAttachmentInfo,
    GripAttachmentInfo,
    SightAttachmentInfo,
    UnderBarrelAttachmentInfo,
} from "./utils/weaponInfo/attachment.js";

export const GROUPS: Groups = {
    Attackers: new GroupInfo({
        icons: "assets/Siege-Rando-Images/GroupIcons/Attackers_Icon.svg",
        ops: [
            new OPInfo({
                name: "Ash",
                images: "assets/Siege-Rando-Images/OpsImages/Ash.png",
                icon: "assets/Siege-Rando-Images/OpsIcons/Ash_Icon.png",
                equipment: [
                    new EquipmentInfo({
                        name: "Breach Charge",
                        image: "assets/Siege-Rando-Images/EquipmentInfo/Breach_Charge.png",
                    }),
                    new EquipmentInfo({
                        name: "Claymore",
                        image: "assets/Siege-Rando-Images/EquipmentInfo/Claymore.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "G36C",
                        images: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/G36C.png",
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "COMPENSATOR",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachmentInfos/COMPENSATOR.png",
                                }),
                                new BarrelAttachmentInfo({
                                    name: "EXTENDED BARREL",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachmentInfos/EXTENDED_BARREL.png",
                                }),
                                new BarrelAttachmentInfo({
                                    name: "FLASH HIDER",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachmentInfos/FLASH_HIDER.png",
                                }),
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachmentInfos/MUZZLE_BRAKE.png",
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachmentInfos/SUPPRESSOR.png",
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo({
                                    name: "ANGLED GRIP",
                                    image: "assets/Siege-Rando-Images/Weapons/GripAttachmentInfos/ANGLED_GRIP.png",
                                }),
                                new GripAttachmentInfo({
                                    name: "HORIZONTAL GRIP",
                                    image: "assets/Siege-Rando-Images/Weapons/GripAttachmentInfos/HORIZONTAL_GRIP.png",
                                }),
                                new GripAttachmentInfo({
                                    name: "VERTICAL GRIP",
                                    image: "assets/Siege-Rando-Images/Weapons/GripAttachmentInfos/VERTICAL_GRIP.png",
                                }),
                            ],
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/HOLO_A.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/HOLO_B.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/HOLO_C.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/HOLO_D.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/IRON SIGHT.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED A",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/MAGNIFIED_A.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED B",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/MAGNIFIED_B.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED C",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/MAGNIFIED_C.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/RED_DOT_A.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/RED_DOT_B.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/RED_DOT_C.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/REFLEX_A.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/REFLEX_B.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/REFLEX_C.png",
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    image: "assets/Siege-Rando-Images/Weapons/UnderBarrelAttachmentInfos/LASER.png",
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo({
                        name: "R4-C",
                        images: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/R4-C.png",
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "COMPENSATOR",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachmentInfos/COMPENSATOR.png",
                                }),
                                new BarrelAttachmentInfo({
                                    name: "EXTENDED BARREL",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachmentInfos/EXTENDED_BARREL.png",
                                }),
                                new BarrelAttachmentInfo({
                                    name: "FLASH HIDER",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachmentInfos/FLASH_HIDER.png",
                                }),
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachmentInfos/MUZZLE_BRAKE.png",
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachmentInfos/SUPPRESSOR.png",
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo({
                                    name: "ANGLED GRIP",
                                    image: "assets/Siege-Rando-Images/Weapons/GripAttachmentInfos/ANGLED_GRIP.png",
                                }),
                                new GripAttachmentInfo({
                                    name: "HORIZONTAL GRIP",
                                    image: "assets/Siege-Rando-Images/Weapons/GripAttachmentInfos/HORIZONTAL_GRIP.png",
                                }),
                                new GripAttachmentInfo({
                                    name: "VERTICAL GRIP",
                                    image: "assets/Siege-Rando-Images/Weapons/GripAttachmentInfos/VERTICAL_GRIP.png",
                                }),
                            ],
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/HOLO_A.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/HOLO_B.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/HOLO_C.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/HOLO_D.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/IRON SIGHT.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED A",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/MAGNIFIED_A.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED B",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/MAGNIFIED_B.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED C",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/MAGNIFIED_C.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/RED_DOT_A.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/RED_DOT_B.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/RED_DOT_C.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/REFLEX_A.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/REFLEX_B.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/REFLEX_C.png",
                                }),
                            ],
                            underBarrels: [
                                new UnderBarrelAttachmentInfo({
                                    name: "LASER",
                                    image: "assets/Siege-Rando-Images/Weapons/UnderBarrelAttachmentInfos/LASER.png",
                                }),
                            ],
                        },
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "5.7 USG",
                        images: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/5.7 USG.png",
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachmentInfos/MUZZLE_BRAKE.png",
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachmentInfos/SUPPRESSOR.png",
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo({
                        name: "M45 MEUSOC",
                        images: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/M54_MEUSOC.png",
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachmentInfos/MUZZLE_BRAKE.png",
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachmentInfos/SUPPRESSOR.png",
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
                    new EquipmentInfo({
                        name: "Breach Charge",
                        images: "assets/Siege-Rando-Images/EquipmentInfo/Breach_Charge.png",
                    }),
                    new EquipmentInfo({
                        name: "Smoke Grenade",
                        images: "assets/Siege-Rando-Images/EquipmentInfo/Smoke Grenade.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "G52-Tactical Shield",
                        images: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/G52-Tactical_Shield.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "P12",
                        images: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/P12.png",
                    }),
                ],
            }),
            new OPInfo({
                name: "Buck",
                image: "assets/Siege-Rando-Images/OpsImages/Buck.png",
                icon: "assets/Siege-Rando-Images/OpsIcons/Buck_Icon.png",
                equipment: [
                    new EquipmentInfo({
                        name: "Hard Breach Charge",
                        images: "assets/Siege-Rando-Images/EquipmentInfo/Hard Breach Charge.png",
                    }),
                    new EquipmentInfo({
                        name: "Stun Grenade",
                        images: "assets/Siege-Rando-Images/EquipmentInfo/Stun Grenade.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "C8-SFW",
                        images: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/C8-SFW.png",
                    }),
                    new WeaponInfo({
                        name: "CAMRS",
                        images: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/CAMRS.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "Gonne 6",
                        images: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/Gonne_6.png",
                    }),
                    new WeaponInfo({
                        name: "MK1 9mm",
                        images: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/MK1_9mm.png",
                    }),
                ],
            }),
            new OPInfo({
                name: "Fuze",
                image: "assets/Siege-Rando-Images/OpsImages/Fuze.png",
                icon: "assets/Siege-Rando-Images/OpsIcons/Fuze_Icon.png",
                equipment: [
                    new EquipmentInfo({
                        name: "Breach Charge",
                        images: "assets/Siege-Rando-Images/EquipmentInfo/Breach_Charge.png",
                    }),
                    new EquipmentInfo({
                        name: "Hard Breach Charge",
                        images: "assets/Siege-Rando-Images/EquipmentInfo/Hard Breach Charge.png",
                    }),
                    new EquipmentInfo({
                        name: "Smoke Grenade",
                        images: "assets/Siege-Rando-Images/EquipmentInfo/Smoke Grenade.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "6P41",
                        images: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/6P41.png",
                    }),
                    new WeaponInfo({
                        name: "AK-12",
                        images: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/AK-12.png",
                    }),
                    new WeaponInfo({
                        name: "Ballistic Shield",
                        images: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/Ballistic Shield.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "GSH-18",
                        images: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/GSH-18.png",
                    }),
                    new WeaponInfo({
                        name: "PMM",
                        images: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/PMM.png",
                    }),
                ],
            }),
            new OPInfo({
                name: "Glaz",
                image: "assets/Siege-Rando-Images/OpsImages/Glaz.png",
                icon: "assets/Siege-Rando-Images/OpsIcons/Glaz_Icon.png",
                equipment: [
                    new EquipmentInfo({
                        name: "Claymore",
                        images: "assets/Siege-Rando-Images/EquipmentInfo/Claymore.png",
                    }),
                    new EquipmentInfo({
                        name: "Frag",
                        images: "assets/Siege-Rando-Images/EquipmentInfo/Frag.png",
                    }),
                    new EquipmentInfo({
                        name: "Smoke Grenade",
                        images: "assets/Siege-Rando-Images/EquipmentInfo/Smoke Grenade.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "0Ts-03",
                        images: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/0Ts-03.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "Bearing 9",
                        images: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/Bearing_9.png",
                    }),
                    new WeaponInfo({
                        name: "Gonne 6",
                        images: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/Gonne_6.png",
                    }),
                    new WeaponInfo({
                        name: "PMM",
                        images: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/PMM.png",
                    }),
                ],
            }),
            new OPInfo({
                name: "IQ",
                image: "assets/Siege-Rando-Images/OpsImages/IQ.png",
                icon: "assets/Siege-Rando-Images/OpsIcons/IQ_Icon.png",
                equipment: [
                    new EquipmentInfo({
                        name: "Breach Charge",
                        images: "assets/Siege-Rando-Images/EquipmentInfo/Breach_Charge.png",
                    }),
                    new EquipmentInfo({
                        name: "Claymore",
                        images: "assets/Siege-Rando-Images/EquipmentInfo/Claymore.png",
                    }),
                    new EquipmentInfo({
                        name: "Frag",
                        images: "assets/Siege-Rando-Images/EquipmentInfo/Frag.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "552 COMMANDO",
                        images: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/552_COMMANDO.png",
                    }),
                    new WeaponInfo({
                        name: "AUG A2",
                        images: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/AUG_A2.png",
                    }),
                    new WeaponInfo({
                        name: "G8A1",
                        images: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/G8A1.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "P12",
                        images: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/P12.png",
                    }),
                ],
            }),
            new OPInfo({
                name: "Montagne",
                image: "assets/Siege-Rando-Images/OpsImages/Montagne.png",
                icon: "assets/Siege-Rando-Images/OpsIcons/Montagne_Icon.png",
                equipment: [
                    new EquipmentInfo({
                        name: "Hard Breach Charge",
                        images: "assets/Siege-Rando-Images/EquipmentInfo/Hard Breach Charge.png",
                    }),
                    new EquipmentInfo({
                        name: "Impact EMP",
                        images: "assets/Siege-Rando-Images/EquipmentInfo/Impact EMP.png",
                    }),
                    new EquipmentInfo({
                        name: "Smoke Grenade",
                        images: "assets/Siege-Rando-Images/EquipmentInfo/Smoke Grenade.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "LE ROC SHIELD",
                        images: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/LE_ROC_SHIELD.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "LFP589",
                        images: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/LFP589.png",
                    }),
                    new WeaponInfo({
                        name: "P9",
                        images: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/P9.png",
                    }),
                ],
            }),
            new OPInfo({
                name: "Sledge",
                image: "assets/Siege-Rando-Images/OpsImages/Sledge.png",
                icon: "assets/Siege-Rando-Images/OpsIcons/Sledge_Icon.png",
                equipment: [
                    new EquipmentInfo({
                        name: "Frag",
                        images: "assets/Siege-Rando-Images/EquipmentInfo/Frag.png",
                    }),
                    new EquipmentInfo({
                        name: "Impact EMP",
                        images: "assets/Siege-Rando-Images/EquipmentInfo/Impact EMP.png",
                    }),
                    new EquipmentInfo({
                        name: "Stun Grenade",
                        images: "assets/Siege-Rando-Images/EquipmentInfo/Stun Grenade.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "L85A2",
                        images: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/L85A2.png",
                    }),
                    new WeaponInfo({
                        name: "M590A1",
                        images: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/M590A1.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "P226 MK 25",
                        images: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/P226_MK_25.png",
                    }),
                ],
            }),
            new OPInfo({
                name: "Thatcher",
                image: "assets/Siege-Rando-Images/OpsImages/Thatcher.png",
                icon: "assets/Siege-Rando-Images/OpsIcons/Thatcher_Icon.png",
                equipment: [
                    new EquipmentInfo({
                        name: "Breach Charge",
                        images: "assets/Siege-Rando-Images/EquipmentInfo/Breach_Charge.png",
                    }),
                    new EquipmentInfo({
                        name: "Claymore",
                        images: "assets/Siege-Rando-Images/EquipmentInfo/Claymore.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "AR33",
                        images: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/AR33.png",
                    }),
                    new WeaponInfo({
                        name: "L85A2",
                        images: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/L85A2.png",
                    }),
                    new WeaponInfo({
                        name: "M590A1",
                        images: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/M590A1.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "P226 MK 25",
                        images: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/P226_MK_25.png",
                    }),
                ],
            }),
            new OPInfo({
                name: "Thermite",
                image: "assets/Siege-Rando-Images/OpsImages/Thermite.png",
                icon: "assets/Siege-Rando-Images/OpsIcons/Thermite_Icon.png",
                equipment: [
                    new EquipmentInfo({
                        name: "Smoke Grenade",
                        images: "assets/Siege-Rando-Images/EquipmentInfo/Smoke Grenade.png",
                    }),
                    new EquipmentInfo({
                        name: "Stun Grenade",
                        images: "assets/Siege-Rando-Images/EquipmentInfo/Stun Grenade.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "556XI",
                        images: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/556XI.png",
                    }),
                    new WeaponInfo({
                        name: "M1014",
                        images: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/M1014.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "5.7 USG",
                        images: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/5.7 USG.png",
                    }),
                    new WeaponInfo({
                        name: "M54 MEUSOC",
                        images: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/M54_MEUSOC.png",
                    }),
                ],
            }),
            new OPInfo({
                name: "Twitch",
                image: "assets/Siege-Rando-Images/OpsImages/Twitch.png",
                icon: "assets/Siege-Rando-Images/OpsIcons/Twitch_Icon.png",
                equipment: [
                    new EquipmentInfo({
                        name: "Claymore",
                        images: "assets/Siege-Rando-Images/EquipmentInfo/Claymore.png",
                    }),
                    new EquipmentInfo({
                        name: "Smoke Grenade",
                        images: "assets/Siege-Rando-Images/EquipmentInfo/Smoke Grenade.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "417",
                        images: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/417.png",
                    }),
                    new WeaponInfo({
                        name: "F2",
                        images: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/F2.png",
                    }),
                    new WeaponInfo({
                        name: "SG-CQB",
                        images: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/SG-CQB.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "LFP589",
                        images: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/LFP589.png",
                    }),
                    new WeaponInfo({
                        name: "P9",
                        images: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/P9.png",
                    }),
                ],
            }),
            new OPInfo({
                name: "Zofia",
                image: "assets/Siege-Rando-Images/OpsImages/Zofia.png",
                icon: "assets/Siege-Rando-Images/OpsIcons/zofia_icon.png",
                equipment: [
                    new EquipmentInfo({
                        name: "Breach Charge",
                        images: "assets/Siege-Rando-Images/EquipmentInfo/Breach_Charge.png",
                    }),
                    new EquipmentInfo({
                        name: "Claymore",
                        images: "assets/Siege-Rando-Images/EquipmentInfo/Claymore.png",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "LMG E",
                        images: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/LMG_E.png",
                    }),
                    new WeaponInfo({
                        name: "M762",
                        images: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/M762.png",
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "RG15",
                        images: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/RG15.png",
                    }),
                ],
            }),
        ],
    }),
    Defenders: new GroupInfo({
        icons: "assets/Siege-Rando-Images/GroupIcons/Defenders_Icon.svg",
        ops: [
            new OPInfo({
                name: "Alibi",
                image: "assets/Siege-Rando-Images/OpsImages/Alibi.webp",
                icon: "assets/Siege-Rando-Images/OpsIcons/Alibi_Icon.webp",
                equipment: [
                    new EquipmentInfo({
                        name: "Observation Blocker",
                        images: "assets/Siege-Rando-Images/EquipmentInfo/Observation_Blocker.webp",
                    }),
                    new EquipmentInfo({
                        name: "Proximity Alarm 3",
                        images: "assets/Siege-Rando-Images/EquipmentInfo/Proximity_Alarm_3.webp",
                    }),
                ],
                primaryWeapons: [
                    new WeaponInfo({
                        name: "ACS12",
                        images: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/ACS12.webp",
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "LASER",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachmentInfos/LASER.png",
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo({
                                    name: "ANGLED GRIP",
                                    image: "assets/Siege-Rando-Images/Weapons/GripAttachmentInfos/ANGLED_GRIP.png",
                                }),
                                new GripAttachmentInfo({
                                    name: "VERTICAL GRIP",
                                    image: "assets/Siege-Rando-Images/Weapons/GripAttachmentInfos/VERTICAL_GRIP.png",
                                }),
                            ],
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/HOLO_A.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/HOLO_B.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/HOLO_C.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/HOLO_D.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/IRON SIGHT.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED A",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/MAGNIFIED_A.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED B",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/MAGNIFIED_B.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "MAGNIFIED C",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/MAGNIFIED_C.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/RED_DOT_A.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/RED_DOT_B.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/RED_DOT_C.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/REFLEX_A.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/REFLEX_B.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/REFLEX_C.png",
                                }),
                            ],
                        },
                    }),
                    new WeaponInfo({
                        name: "Mx4 Storm",
                        images: "assets/Siege-Rando-Images/Weapons/PrimaryWeapons/Mx4_Storm.webp",
                        attachments: {
                            barrels: [
                                new BarrelAttachmentInfo({
                                    name: "COMPENSATOR",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachmentInfos/COMPENSATOR.png",
                                }),
                                new BarrelAttachmentInfo({
                                    name: "EXTENDED BARREL",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachmentInfos/EXTENDED_BARREL.png",
                                }),
                                new BarrelAttachmentInfo({
                                    name: "FLASH HIDER",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachmentInfos/FLASH_HIDER.png",
                                }),
                                new BarrelAttachmentInfo({
                                    name: "LASER",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachmentInfos/LASER.png",
                                }),
                                new BarrelAttachmentInfo({
                                    name: "MUZZLE BRAKE",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachmentInfos/MUZZLE_BRAKE.png",
                                }),
                                new BarrelAttachmentInfo({
                                    name: "SUPPRESSOR",
                                    image: "assets/Siege-Rando-Images/Weapons/BarrelAttachmentInfos/SUPPRESSOR.png",
                                }),
                            ],
                            grips: [
                                new GripAttachmentInfo({
                                    name: "ANGLED GRIP",
                                    image: "assets/Siege-Rando-Images/Weapons/GripAttachmentInfos/ANGLED_GRIP.png",
                                }),
                                new GripAttachmentInfo({
                                    name: "VERTICAL GRIP",
                                    image: "assets/Siege-Rando-Images/Weapons/GripAttachmentInfos/VERTICAL_GRIP.png",
                                }),
                            ],
                            sights: [
                                new SightAttachmentInfo({
                                    name: "HOLO A",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/HOLO_A.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO B",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/HOLO_B.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO C",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/HOLO_C.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "HOLO D",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/HOLO_D.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "IRON SIGHT",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/IRON SIGHT.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT A",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/RED_DOT_A.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT B",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/RED_DOT_B.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "RED DOT C",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/RED_DOT_C.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX A",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/REFLEX_A.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX B",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/REFLEX_B.png",
                                }),
                                new SightAttachmentInfo({
                                    name: "REFLEX C",
                                    image: "assets/Siege-Rando-Images/Weapons/SightAttachmentInfos/REFLEX_C.png",
                                }),
                            ],
                        },
                    }),
                ],
                secondaryWeapons: [
                    new WeaponInfo({
                        name: "Bailiff 410",
                        images: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/Bailiff_410.webp",
                    }),
                    new WeaponInfo({
                        name: "Keratos .357",
                        images: "assets/Siege-Rando-Images/Weapons/SecondaryWeapons/Keratos_.357.webp",
                    }),
                ],
            }),
        ],
    }),
};

//#endregion
