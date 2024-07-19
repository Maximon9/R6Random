//#region Main

import type {Groups} from "./types/groups.js";
import {GroupInfo} from "./utils/group.js";
import {OPInfo} from "./utils/op.js";
import {EquipmentInfo} from "./utils/equipment.js";
import {WeaponInfo} from "./utils/weaponInfo/weapon.js";
import {
	BarrelAttachmentInfo,
	GripAttachmentInfo,
	SightAttachmentInfo,
	UnderBarrelAttachmentInfo,
} from "./utils/weaponInfo/attachment.js";

export const GROUPS: Groups = {
	Attackers: new GroupInfo({
		icons: [
			"assets/images/GroupIcons/Attackers_Icon_hover.svg",
			"assets/images/GroupIcons/Attackers_Icon.svg",
		],
		ops: [
			new OPInfo({
				name: "Ace",
				icons: [
					"assets/images/OPIcons/Ace_Icon.png",
				],
			}),
			new OPInfo({
				name: "Amaru",
				icons: [
					"assets/images/OPIcons/Amaru_Icon.png",
				],
			}),
			new OPInfo({
				name: "Ash",
				icons: [
					"assets/images/OPIcons/Ash_Icon.png",
				],
				images: [
					"assets/images/OPImages/Ash.png",
				],
				equipment: [
					new EquipmentInfo({
						name: "Breach Charge",
						images: [
							"assets/images/Equipment/Breach_Charge.png",
						],
					}),
					new EquipmentInfo({
						name: "Claymore",
						images: [
							"assets/images/Equipment/Claymore.png",
						],
					}),
				],
				primaryWeapons: [
					new WeaponInfo({
						name: "G36C",
						images: [
							"assets/images/Weapons/PrimaryWeapons/G36C.png",
						],
						attachments: {
							barrels: [
								new BarrelAttachmentInfo({
									name: "COMPENSATOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/COMPENSATOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "EXTENDED BARREL",
									images: [
										"assets/images/Attachments/BarrelAttachments/EXTENDED_BARREL.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "FLASH HIDER",
									images: [
										"assets/images/Attachments/BarrelAttachments/FLASH_HIDER.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							grips: [
								new GripAttachmentInfo({
									name: "ANGLED GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/ANGLED_GRIP.png",
									],
								}),
								new GripAttachmentInfo({
									name: "HORIZONTAL GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
									],
								}),
								new GripAttachmentInfo({
									name: "VERTICAL GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/VERTICAL_GRIP.png",
									],
								}),
							],
							sights: [
								new SightAttachmentInfo({
									name: "HOLO A",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO B",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO C",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO D",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_D.png",
									],
								}),
								new SightAttachmentInfo({
									name: "IRON SIGHT",
									images: [
										"assets/images/Attachments/SightAttachments/IRON_SIGHT.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED A",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED B",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED C",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT A",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT B",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT C",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX A",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX B",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX C",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_C.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
					new WeaponInfo({
						name: "R4-C",
						images: [
							"assets/images/Weapons/PrimaryWeapons/R4-C.png",
						],
						attachments: {
							barrels: [
								new BarrelAttachmentInfo({
									name: "COMPENSATOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/COMPENSATOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "EXTENDED BARREL",
									images: [
										"assets/images/Attachments/BarrelAttachments/EXTENDED_BARREL.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "FLASH HIDER",
									images: [
										"assets/images/Attachments/BarrelAttachments/FLASH_HIDER.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							grips: [
								new GripAttachmentInfo({
									name: "ANGLED GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/ANGLED_GRIP.png",
									],
								}),
								new GripAttachmentInfo({
									name: "HORIZONTAL GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
									],
								}),
								new GripAttachmentInfo({
									name: "VERTICAL GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/VERTICAL_GRIP.png",
									],
								}),
							],
							sights: [
								new SightAttachmentInfo({
									name: "HOLO A",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO B",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO C",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO D",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_D.png",
									],
								}),
								new SightAttachmentInfo({
									name: "IRON SIGHT",
									images: [
										"assets/images/Attachments/SightAttachments/IRON_SIGHT.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED A",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED B",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED C",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT A",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT B",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT C",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX A",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX B",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX C",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_C.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
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
							"assets/images/Weapons/SecondaryWeapons/5.7 USG.png",
						],
						attachments: {
							barrels: [
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
					new WeaponInfo({
						name: "M45 MEUSOC",
						images: [
							"assets/images/Weapons/SecondaryWeapons/M54_MEUSOC.png",
						],
						attachments: {
							barrels: [
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
				],
			}),
			new OPInfo({
				name: "Blackbeard",
				icons: [
					"assets/images/OPIcons/Blackbeard_Icon.png",
				],
			}),
			new OPInfo({
				name: "Blitz",
				icons: [
					"assets/images/OPIcons/Blitz_Icon.png",
				],
				images: [
					"assets/images/OPImages/Blitz.png",
				],
				equipment: [
					new EquipmentInfo({
						name: "Breach Charge",
						images: [
							"assets/images/Equipment/Breach_Charge.png",
						],
					}),
					new EquipmentInfo({
						name: "Smoke Grenade",
						images: [
							"assets/images/Equipment/Smoke Grenade.png",
						],
					}),
				],
				primaryWeapons: [
					new WeaponInfo({
						name: "G52-Tactical Shield",
						images: [
							"assets/images/Weapons/PrimaryWeapons/G52-Tactical_Shield.png",
						],
					}),
				],
				secondaryWeapons: [
					new WeaponInfo({
						name: "P12",
						images: [
							"assets/images/Weapons/SecondaryWeapons/P12.png",
						],
						attachments: {
							barrels: [
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
				],
			}),
			new OPInfo({
				name: "Brava",
				icons: [
					"assets/images/OPIcons/Brava_Icon.png",
				],
			}),
			new OPInfo({
				name: "Buck",
				icons: [
					"assets/images/OPIcons/Buck_Icon.png",
				],
				images: [
					"assets/images/OPImages/Buck.png",
				],
				equipment: [
					new EquipmentInfo({
						name: "Hard Breach Charge",
						images: [
							"assets/images/Equipment/Hard Breach Charge.png",
						],
					}),
					new EquipmentInfo({
						name: "Stun Grenade",
						images: [
							"assets/images/Equipment/Stun Grenade.png",
						],
					}),
				],
				primaryWeapons: [
					new WeaponInfo({
						name: "C8-SFW",
						images: [
							"assets/images/Weapons/PrimaryWeapons/C8-SFW.png",
						],
						attachments: {
							barrels: [
								new BarrelAttachmentInfo({
									name: "COMPENSATOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/COMPENSATOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "EXTENDED BARREL",
									images: [
										"assets/images/Attachments/BarrelAttachments/EXTENDED_BARREL.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "FLASH HIDER",
									images: [
										"assets/images/Attachments/BarrelAttachments/FLASH_HIDER.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							sights: [
								new SightAttachmentInfo({
									name: "HOLO A",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO B",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO C",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO D",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_D.png",
									],
								}),
								new SightAttachmentInfo({
									name: "IRON SIGHT",
									images: [
										"assets/images/Attachments/SightAttachments/IRON_SIGHT.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED A",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED B",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED C",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT A",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT B",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT C",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX A",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX B",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX C",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_C.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
					new WeaponInfo({
						name: "CAMRS",
						images: [
							"assets/images/Weapons/PrimaryWeapons/CAMRS.png",
						],
						attachments: {
							sights: [
								new SightAttachmentInfo({
									name: "HOLO A",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO B",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO C",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO D",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_D.png",
									],
								}),
								new SightAttachmentInfo({
									name: "IRON SIGHT",
									images: [
										"assets/images/Attachments/SightAttachments/IRON_SIGHT.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED A",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED B",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED C",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT A",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT B",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT C",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX A",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX B",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX C",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "TELESCOPIC A",
									images: [
										"assets/images/Attachments/SightAttachments/TELESCOPIC_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "TELESCOPIC B",
									images: [
										"assets/images/Attachments/SightAttachments/TELESCOPIC_B.png",
									],
								}),
							],
							barrels: [
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
				],
				secondaryWeapons: [
					new WeaponInfo({
						name: "Gonne 6",
						images: [
							"assets/images/Weapons/SecondaryWeapons/Gonne_6.png",
						],
						attachments: {
						}
					}),
					new WeaponInfo({
						name: "MK1 9mm",
						images: [
							"assets/images/Weapons/SecondaryWeapons/MK1_9mm.png",
						],
						attachments: {
							barrels: [
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
				],
			}),
			new OPInfo({
				name: "Capitao",
				icons: [
					"assets/images/OPIcons/Capitao_Icon.png",
				],
			}),
			new OPInfo({
				name: "Deimos",
				icons: [
					"assets/images/OPIcons/Deimos_Icon.png",
				],
			}),
			new OPInfo({
				name: "Dokkaebi",
				icons: [
					"assets/images/OPIcons/Dokkaebi_Icon.png",
				],
			}),
			new OPInfo({
				name: "Finka",
				icons: [
					"assets/images/OPIcons/Finka_Icon.png",
				],
			}),
			new OPInfo({
				name: "Flores",
				icons: [
					"assets/images/OPIcons/Flores_Icon.png",
				],
			}),
			new OPInfo({
				name: "Fuze",
				icons: [
					"assets/images/OPIcons/Fuze_Icon.png",
				],
				images: [
					"assets/images/OPImages/Fuze.png",
				],
				equipment: [
					new EquipmentInfo({
						name: "Breach Charge",
						images: [
							"assets/images/Equipment/Breach_Charge.png",
						],
					}),
					new EquipmentInfo({
						name: "Hard Breach Charge",
						images: [
							"assets/images/Equipment/Hard Breach Charge.png",
						],
					}),
					new EquipmentInfo({
						name: "Smoke Grenade",
						images: [
							"assets/images/Equipment/Smoke Grenade.png",
						],
					}),
				],
				primaryWeapons: [
					new WeaponInfo({
						name: "6P41",
						images: [
							"assets/images/Weapons/PrimaryWeapons/6P41.png",
						],
						attachments: {
							sights: [
								new SightAttachmentInfo({
									name: "HOLO A",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO B",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO C",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO D",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_D.png",
									],
								}),
								new SightAttachmentInfo({
									name: "IRON SIGHT",
									images: [
										"assets/images/Attachments/SightAttachments/IRON_SIGHT.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED A",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED B",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED C",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT A",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT B",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT C",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX A",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX B",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX C",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_C.png",
									],
								}),
							],
							barrels: [
								new BarrelAttachmentInfo({
									name: "COMPENSATOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/COMPENSATOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "FLASH HIDER",
									images: [
										"assets/images/Attachments/BarrelAttachments/FLASH_HIDER.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							grips: [
								new GripAttachmentInfo({
									name: "ANGLED GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/ANGLED_GRIP.png",
									],
								}),
								new GripAttachmentInfo({
									name: "HORIZONTAL GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
									],
								}),
								new GripAttachmentInfo({
									name: "VERTICAL GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/VERTICAL_GRIP.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
					new WeaponInfo({
						name: "AK-12",
						images: [
							"assets/images/Weapons/PrimaryWeapons/AK-12.png",
						],
						attachments: {
							sights: [
								new SightAttachmentInfo({
									name: "HOLO A",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO B",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO C",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO D",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_D.png",
									],
								}),
								new SightAttachmentInfo({
									name: "IRON SIGHT",
									images: [
										"assets/images/Attachments/SightAttachments/IRON_SIGHT.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED A",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED B",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED C",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT A",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT B",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT C",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX A",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX B",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX C",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_C.png",
									],
								}),
							],
							barrels: [
								new BarrelAttachmentInfo({
									name: "COMPENSATOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/COMPENSATOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "FLASH HIDER",
									images: [
										"assets/images/Attachments/BarrelAttachments/FLASH_HIDER.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							grips: [
								new GripAttachmentInfo({
									name: "ANGLED GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/ANGLED_GRIP.png",
									],
								}),
								new GripAttachmentInfo({
									name: "HORIZONTAL GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
									],
								}),
								new GripAttachmentInfo({
									name: "VERTICAL GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/VERTICAL_GRIP.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
					new WeaponInfo({
						name: "Ballistic Shield",
						images: [
							"assets/images/Weapons/PrimaryWeapons/Ballistic Shield.png",
						],
						attachments: {
						}
					}),
				],
				secondaryWeapons: [
					new WeaponInfo({
						name: "GSH-18",
						images: [
							"assets/images/Weapons/SecondaryWeapons/GSH-18.png",
						],
						attachments: {
							barrels: [
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
					new WeaponInfo({
						name: "PMM",
						images: [
							"assets/images/Weapons/SecondaryWeapons/PMM.png",
						],
						attachments: {
							barrels: [
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
				],
			}),
			new OPInfo({
				name: "Glaz",
				icons: [
					"assets/images/OPIcons/Glaz_Icon.png",
				],
				images: [
					"assets/images/OPImages/Glaz.png",
				],
				equipment: [
					new EquipmentInfo({
						name: "Claymore",
						images: [
							"assets/images/Equipment/Claymore.png",
						],
					}),
					new EquipmentInfo({
						name: "Frag",
						images: [
							"assets/images/Equipment/Frag.png",
						],
					}),
					new EquipmentInfo({
						name: "Smoke Grenade",
						images: [
							"assets/images/Equipment/Smoke Grenade.png",
						],
					}),
				],
				primaryWeapons: [
					new WeaponInfo({
						name: "0Ts-03",
						images: [
							"assets/images/Weapons/PrimaryWeapons/0Ts-03.png",
						],
						attachments: {
							sights: [
								new SightAttachmentInfo({
									name: "HOLO A",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO B",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO C",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO D",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_D.png",
									],
								}),
								new SightAttachmentInfo({
									name: "IRON SIGHT",
									images: [
										"assets/images/Attachments/SightAttachments/IRON_SIGHT.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT A",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT B",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT C",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX A",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX B",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX C",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_C.png",
									],
								}),
							],
							barrels: [
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							grips: [
								new GripAttachmentInfo({
									name: "ANGLED GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/ANGLED_GRIP.png",
									],
								}),
								new GripAttachmentInfo({
									name: "HORIZONTAL GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
									],
								}),
								new GripAttachmentInfo({
									name: "VERTICAL GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/VERTICAL_GRIP.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
				],
				secondaryWeapons: [
					new WeaponInfo({
						name: "Bearing 9",
						images: [
							"assets/images/Weapons/SecondaryWeapons/Bearing_9.png",
						],
						attachments: {
							sights: [
								new SightAttachmentInfo({
									name: "HOLO A",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO B",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO C",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO D",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_D.png",
									],
								}),
								new SightAttachmentInfo({
									name: "IRON SIGHT",
									images: [
										"assets/images/Attachments/SightAttachments/IRON_SIGHT.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT A",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT B",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT C",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX A",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX B",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX C",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_C.png",
									],
								}),
							],
							barrels: [
								new BarrelAttachmentInfo({
									name: "COMPENSATOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/COMPENSATOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "EXTENDED BARREL",
									images: [
										"assets/images/Attachments/BarrelAttachments/EXTENDED_BARREL.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "FLASH HIDER",
									images: [
										"assets/images/Attachments/BarrelAttachments/FLASH_HIDER.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
					new WeaponInfo({
						name: "Gonne 6",
						images: [
							"assets/images/Weapons/SecondaryWeapons/Gonne_6.png",
						],
						attachments: {
						}
					}),
					new WeaponInfo({
						name: "PMM",
						images: [
							"assets/images/Weapons/SecondaryWeapons/PMM.png",
						],
						attachments: {
							barrels: [
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
				],
			}),
			new OPInfo({
				name: "Gridlock",
				icons: [
					"assets/images/OPIcons/Gridlock_Icon.png",
				],
			}),
			new OPInfo({
				name: "Grim",
				icons: [
					"assets/images/OPIcons/Grim_Icon.png",
				],
			}),
			new OPInfo({
				name: "Hibana",
				icons: [
					"assets/images/OPIcons/Hibana_Icon.png",
				],
			}),
			new OPInfo({
				name: "Iana",
				icons: [
					"assets/images/OPIcons/Iana_Icon.png",
				],
			}),
			new OPInfo({
				name: "IQ",
				icons: [
					"assets/images/OPIcons/IQ_Icon.png",
				],
				images: [
					"assets/images/OPImages/IQ.png",
				],
				equipment: [
					new EquipmentInfo({
						name: "Breach Charge",
						images: [
							"assets/images/Equipment/Breach_Charge.png",
						],
					}),
					new EquipmentInfo({
						name: "Claymore",
						images: [
							"assets/images/Equipment/Claymore.png",
						],
					}),
					new EquipmentInfo({
						name: "Frag",
						images: [
							"assets/images/Equipment/Frag.png",
						],
					}),
				],
				primaryWeapons: [
					new WeaponInfo({
						name: "552 COMMANDO",
						images: [
							"assets/images/Weapons/PrimaryWeapons/552_COMMANDO.png",
						],
						attachments: {
							sights: [
								new SightAttachmentInfo({
									name: "HOLO A",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO B",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO C",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO D",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_D.png",
									],
								}),
								new SightAttachmentInfo({
									name: "IRON SIGHT",
									images: [
										"assets/images/Attachments/SightAttachments/IRON_SIGHT.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED A",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED B",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED C",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT A",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT B",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT C",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX A",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX B",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX C",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_C.png",
									],
								}),
							],
							barrels: [
								new BarrelAttachmentInfo({
									name: "COMPENSATOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/COMPENSATOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "EXTENDED BARREL",
									images: [
										"assets/images/Attachments/BarrelAttachments/EXTENDED_BARREL.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "FLASH HIDER",
									images: [
										"assets/images/Attachments/BarrelAttachments/FLASH_HIDER.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							grips: [
								new GripAttachmentInfo({
									name: "ANGLED GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/ANGLED_GRIP.png",
									],
								}),
								new GripAttachmentInfo({
									name: "HORIZONTAL GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
									],
								}),
								new GripAttachmentInfo({
									name: "VERTICAL GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/VERTICAL_GRIP.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
					new WeaponInfo({
						name: "AUG A2",
						images: [
							"assets/images/Weapons/PrimaryWeapons/AUG_A2.png",
						],
						attachments: {
							sights: [
								new SightAttachmentInfo({
									name: "HOLO A",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO B",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO C",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO D",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_D.png",
									],
								}),
								new SightAttachmentInfo({
									name: "IRON SIGHT",
									images: [
										"assets/images/Attachments/SightAttachments/IRON_SIGHT.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED A",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED B",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED C",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT A",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT B",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT C",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX A",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX B",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX C",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_C.png",
									],
								}),
							],
							barrels: [
								new BarrelAttachmentInfo({
									name: "COMPENSATOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/COMPENSATOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "FLASH HIDER",
									images: [
										"assets/images/Attachments/BarrelAttachments/FLASH_HIDER.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
					new WeaponInfo({
						name: "G8A1",
						images: [
							"assets/images/Weapons/PrimaryWeapons/G8A1.png",
						],
						attachments: {
							sights: [
								new SightAttachmentInfo({
									name: "HOLO A",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO B",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO C",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO D",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_D.png",
									],
								}),
								new SightAttachmentInfo({
									name: "IRON SIGHT",
									images: [
										"assets/images/Attachments/SightAttachments/IRON_SIGHT.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED A",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED B",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED C",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT A",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT B",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT C",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX A",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX B",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX C",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_C.png",
									],
								}),
							],
							barrels: [
								new BarrelAttachmentInfo({
									name: "COMPENSATOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/COMPENSATOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "FLASH HIDER",
									images: [
										"assets/images/Attachments/BarrelAttachments/FLASH_HIDER.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							grips: [
								new GripAttachmentInfo({
									name: "ANGLED GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/ANGLED_GRIP.png",
									],
								}),
								new GripAttachmentInfo({
									name: "HORIZONTAL GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
									],
								}),
								new GripAttachmentInfo({
									name: "VERTICAL GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/VERTICAL_GRIP.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
				],
				secondaryWeapons: [
					new WeaponInfo({
						name: "P12",
						images: [
							"assets/images/Weapons/SecondaryWeapons/P12.png",
						],
						attachments: {
							barrels: [
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
				],
			}),
			new OPInfo({
				name: "Jackal",
				icons: [
					"assets/images/OPIcons/Jackal_Icon.png",
				],
			}),
			new OPInfo({
				name: "Kali",
				icons: [
					"assets/images/OPIcons/Kali_Icon.png",
				],
			}),
			new OPInfo({
				name: "Lion",
				icons: [
					"assets/images/OPIcons/Lion_Icon.png",
				],
			}),
			new OPInfo({
				name: "Maverick",
				icons: [
					"assets/images/OPIcons/Maverick_Icon.png",
				],
			}),
			new OPInfo({
				name: "Montagne",
				icons: [
					"assets/images/OPIcons/Montagne_Icon.png",
				],
				images: [
					"assets/images/OPImages/Montagne.png",
				],
				equipment: [
					new EquipmentInfo({
						name: "Hard Breach Charge",
						images: [
							"assets/images/Equipment/Hard Breach Charge.png",
						],
					}),
					new EquipmentInfo({
						name: "Impact EMP",
						images: [
							"assets/images/Equipment/Impact EMP.png",
						],
					}),
					new EquipmentInfo({
						name: "Smoke Grenade",
						images: [
							"assets/images/Equipment/Smoke Grenade.png",
						],
					}),
				],
				primaryWeapons: [
					new WeaponInfo({
						name: "LE ROC SHIELD",
						images: [
							"assets/images/Weapons/PrimaryWeapons/LE_ROC_SHIELD.png",
						],
					}),
				],
				secondaryWeapons: [
					new WeaponInfo({
						name: "LFP589",
						images: [
							"assets/images/Weapons/SecondaryWeapons/LFP589.png",
						],
						attachments: {
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
					new WeaponInfo({
						name: "P9",
						images: [
							"assets/images/Weapons/SecondaryWeapons/P9.png",
						],
						attachments: {
							barrels: [
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
				],
			}),
			new OPInfo({
				name: "Nokk",
				icons: [
					"assets/images/OPIcons/Nokk_Icon.png",
				],
			}),
			new OPInfo({
				name: "Sledge",
				icons: [
					"assets/images/OPIcons/Sledge_Icon.png",
				],
				images: [
					"assets/images/OPImages/Sledge.png",
				],
				equipment: [
					new EquipmentInfo({
						name: "Frag",
						images: [
							"assets/images/Equipment/Frag.png",
						],
					}),
					new EquipmentInfo({
						name: "Impact EMP",
						images: [
							"assets/images/Equipment/Impact EMP.png",
						],
					}),
					new EquipmentInfo({
						name: "Stun Grenade",
						images: [
							"assets/images/Equipment/Stun Grenade.png",
						],
					}),
				],
				primaryWeapons: [
					new WeaponInfo({
						name: "L85A2",
						images: [
							"assets/images/Weapons/PrimaryWeapons/L85A2.png",
						],
						attachments: {
							sights: [
								new SightAttachmentInfo({
									name: "HOLO A",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO B",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO C",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO D",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_D.png",
									],
								}),
								new SightAttachmentInfo({
									name: "IRON SIGHT",
									images: [
										"assets/images/Attachments/SightAttachments/IRON_SIGHT.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED A",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED B",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED C",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT A",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT B",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT C",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX A",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX B",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX C",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_C.png",
									],
								}),
							],
							barrels: [
								new BarrelAttachmentInfo({
									name: "COMPENSATOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/COMPENSATOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "FLASH HIDER",
									images: [
										"assets/images/Attachments/BarrelAttachments/FLASH_HIDER.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							grips: [
								new GripAttachmentInfo({
									name: "ANGLED GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/ANGLED_GRIP.png",
									],
								}),
								new GripAttachmentInfo({
									name: "HORIZONTAL GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
									],
								}),
								new GripAttachmentInfo({
									name: "VERTICAL GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/VERTICAL_GRIP.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
					new WeaponInfo({
						name: "M590A1",
						images: [
							"assets/images/Weapons/PrimaryWeapons/M590A1.png",
						],
						attachments: {
							sights: [
								new SightAttachmentInfo({
									name: "HOLO A",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO B",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO C",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO D",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_D.png",
									],
								}),
								new SightAttachmentInfo({
									name: "IRON SIGHT",
									images: [
										"assets/images/Attachments/SightAttachments/IRON_SIGHT.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT A",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT B",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT C",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX A",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX B",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX C",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_C.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
				],
				secondaryWeapons: [
					new WeaponInfo({
						name: "P226 MK 25",
						images: [
							"assets/images/Weapons/SecondaryWeapons/P226_MK_25.png",
						],
						attachments: {
							barrels: [
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
				],
			}),
			new OPInfo({
				name: "Thatcher",
				icons: [
					"assets/images/OPIcons/Thatcher_Icon.png",
				],
				images: [
					"assets/images/OPImages/Thatcher.png",
				],
				equipment: [
					new EquipmentInfo({
						name: "Breach Charge",
						images: [
							"assets/images/Equipment/Breach_Charge.png",
						],
					}),
					new EquipmentInfo({
						name: "Claymore",
						images: [
							"assets/images/Equipment/Claymore.png",
						],
					}),
				],
				primaryWeapons: [
					new WeaponInfo({
						name: "AR33",
						images: [
							"assets/images/Weapons/PrimaryWeapons/AR33.png",
						],
						attachments: {
							sights: [
								new SightAttachmentInfo({
									name: "HOLO A",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO B",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO C",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO D",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_D.png",
									],
								}),
								new SightAttachmentInfo({
									name: "IRON SIGHT",
									images: [
										"assets/images/Attachments/SightAttachments/IRON_SIGHT.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED A",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED B",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED C",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT A",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT B",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT C",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX A",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX B",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX C",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_C.png",
									],
								}),
							],
							barrels: [
								new BarrelAttachmentInfo({
									name: "COMPENSATOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/COMPENSATOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "FLASH HIDER",
									images: [
										"assets/images/Attachments/BarrelAttachments/FLASH_HIDER.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							grips: [
								new GripAttachmentInfo({
									name: "ANGLED GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/ANGLED_GRIP.png",
									],
								}),
								new GripAttachmentInfo({
									name: "HORIZONTAL GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
									],
								}),
								new GripAttachmentInfo({
									name: "VERTICAL GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/VERTICAL_GRIP.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
					new WeaponInfo({
						name: "L85A2",
						images: [
							"assets/images/Weapons/PrimaryWeapons/L85A2.png",
						],
						attachments: {
							sights: [
								new SightAttachmentInfo({
									name: "HOLO A",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO B",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO C",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO D",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_D.png",
									],
								}),
								new SightAttachmentInfo({
									name: "IRON SIGHT",
									images: [
										"assets/images/Attachments/SightAttachments/IRON_SIGHT.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED A",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED B",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED C",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT A",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT B",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT C",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX A",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX B",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX C",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_C.png",
									],
								}),
							],
							barrels: [
								new BarrelAttachmentInfo({
									name: "COMPENSATOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/COMPENSATOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "FLASH HIDER",
									images: [
										"assets/images/Attachments/BarrelAttachments/FLASH_HIDER.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							grips: [
								new GripAttachmentInfo({
									name: "ANGLED GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/ANGLED_GRIP.png",
									],
								}),
								new GripAttachmentInfo({
									name: "HORIZONTAL GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
									],
								}),
								new GripAttachmentInfo({
									name: "VERTICAL GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/VERTICAL_GRIP.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
					new WeaponInfo({
						name: "M590A1",
						images: [
							"assets/images/Weapons/PrimaryWeapons/M590A1.png",
						],
						attachments: {
							sights: [
								new SightAttachmentInfo({
									name: "HOLO A",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO B",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO C",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO D",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_D.png",
									],
								}),
								new SightAttachmentInfo({
									name: "IRON SIGHT",
									images: [
										"assets/images/Attachments/SightAttachments/IRON_SIGHT.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT A",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT B",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT C",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX A",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX B",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX C",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_C.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
				],
				secondaryWeapons: [
					new WeaponInfo({
						name: "P226 MK 25",
						images: [
							"assets/images/Weapons/SecondaryWeapons/P226_MK_25.png",
						],
						attachments: {
							barrels: [
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
				],
			}),
			new OPInfo({
				name: "Thermite",
				icons: [
					"assets/images/OPIcons/Thermite_Icon.png",
				],
				images: [
					"assets/images/OPImages/Thermite.png",
				],
				equipment: [
					new EquipmentInfo({
						name: "Smoke Grenade",
						images: [
							"assets/images/Equipment/Smoke Grenade.png",
						],
					}),
					new EquipmentInfo({
						name: "Stun Grenade",
						images: [
							"assets/images/Equipment/Stun Grenade.png",
						],
					}),
				],
				primaryWeapons: [
					new WeaponInfo({
						name: "556XI",
						images: [
							"assets/images/Weapons/PrimaryWeapons/556XI.png",
						],
						attachments: {
							sights: [
								new SightAttachmentInfo({
									name: "HOLO A",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO B",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO C",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO D",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_D.png",
									],
								}),
								new SightAttachmentInfo({
									name: "IRON SIGHT",
									images: [
										"assets/images/Attachments/SightAttachments/IRON_SIGHT.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED A",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED B",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED C",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT A",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT B",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT C",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX A",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX B",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX C",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_C.png",
									],
								}),
							],
							barrels: [
								new BarrelAttachmentInfo({
									name: "COMPENSATOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/COMPENSATOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "FLASH HIDER",
									images: [
										"assets/images/Attachments/BarrelAttachments/FLASH_HIDER.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							grips: [
								new GripAttachmentInfo({
									name: "ANGLED GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/ANGLED_GRIP.png",
									],
								}),
								new GripAttachmentInfo({
									name: "HORIZONTAL GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
									],
								}),
								new GripAttachmentInfo({
									name: "VERTICAL GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/VERTICAL_GRIP.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
					new WeaponInfo({
						name: "M1014",
						images: [
							"assets/images/Weapons/PrimaryWeapons/M1014.png",
						],
						attachments: {
							sights: [
								new SightAttachmentInfo({
									name: "HOLO A",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO B",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO C",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO D",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_D.png",
									],
								}),
								new SightAttachmentInfo({
									name: "IRON SIGHT",
									images: [
										"assets/images/Attachments/SightAttachments/IRON_SIGHT.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT A",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT B",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT C",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX A",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX B",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX C",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_C.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
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
							"assets/images/Weapons/SecondaryWeapons/5.7 USG.png",
						],
						attachments: {
							barrels: [
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
					new WeaponInfo({
						name: "M54 MEUSOC",
						images: [
							"assets/images/Weapons/SecondaryWeapons/M54_MEUSOC.png",
						],
						attachments: {
							barrels: [
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
				],
			}),
			new OPInfo({
				name: "Twitch",
				icons: [
					"assets/images/OPIcons/Twitch_Icon.png",
				],
				images: [
					"assets/images/OPImages/Twitch.png",
				],
				equipment: [
					new EquipmentInfo({
						name: "Claymore",
						images: [
							"assets/images/Equipment/Claymore.png",
						],
					}),
					new EquipmentInfo({
						name: "Smoke Grenade",
						images: [
							"assets/images/Equipment/Smoke Grenade.png",
						],
					}),
				],
				primaryWeapons: [
					new WeaponInfo({
						name: "417",
						images: [
							"assets/images/Weapons/PrimaryWeapons/417.png",
						],
						attachments: {
							sights: [
								new SightAttachmentInfo({
									name: "HOLO A",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO B",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO C",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO D",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_D.png",
									],
								}),
								new SightAttachmentInfo({
									name: "IRON SIGHT",
									images: [
										"assets/images/Attachments/SightAttachments/IRON_SIGHT.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED A",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED B",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED C",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT A",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT B",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT C",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX A",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX B",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX C",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "TELESCOPIC A",
									images: [
										"assets/images/Attachments/SightAttachments/TELESCOPIC_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "TELESCOPIC B",
									images: [
										"assets/images/Attachments/SightAttachments/TELESCOPIC_B.png",
									],
								}),
							],
							barrels: [
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							grips: [
								new GripAttachmentInfo({
									name: "ANGLED GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/ANGLED_GRIP.png",
									],
								}),
								new GripAttachmentInfo({
									name: "HORIZONTAL GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
									],
								}),
								new GripAttachmentInfo({
									name: "VERTICAL GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/VERTICAL_GRIP.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
					new WeaponInfo({
						name: "F2",
						images: [
							"assets/images/Weapons/PrimaryWeapons/F2.png",
						],
						attachments: {
							sights: [
								new SightAttachmentInfo({
									name: "HOLO A",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO B",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO C",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO D",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_D.png",
									],
								}),
								new SightAttachmentInfo({
									name: "IRON SIGHT",
									images: [
										"assets/images/Attachments/SightAttachments/IRON_SIGHT.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED A",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED B",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED C",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT A",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT B",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT C",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX A",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX B",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX C",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_C.png",
									],
								}),
							],
							barrels: [
								new BarrelAttachmentInfo({
									name: "COMPENSATOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/COMPENSATOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "EXTENDED BARREL",
									images: [
										"assets/images/Attachments/BarrelAttachments/EXTENDED_BARREL.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "FLASH HIDER",
									images: [
										"assets/images/Attachments/BarrelAttachments/FLASH_HIDER.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
					new WeaponInfo({
						name: "SG-CQB",
						images: [
							"assets/images/Weapons/PrimaryWeapons/SG-CQB.png",
						],
						attachments: {
							sights: [
								new SightAttachmentInfo({
									name: "HOLO A",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO B",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO C",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO D",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_D.png",
									],
								}),
								new SightAttachmentInfo({
									name: "IRON SIGHT",
									images: [
										"assets/images/Attachments/SightAttachments/IRON_SIGHT.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT A",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT B",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT C",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX A",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX B",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX C",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_C.png",
									],
								}),
							],
							grips: [
								new GripAttachmentInfo({
									name: "HORIZONTAL GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
									],
								}),
								new GripAttachmentInfo({
									name: "VERTICAL GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/VERTICAL_GRIP.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
				],
				secondaryWeapons: [
					new WeaponInfo({
						name: "LFP589",
						images: [
							"assets/images/Weapons/SecondaryWeapons/LFP589.png",
						],
						attachments: {
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
					new WeaponInfo({
						name: "P9",
						images: [
							"assets/images/Weapons/SecondaryWeapons/P9.png",
						],
						attachments: {
							barrels: [
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
				],
			}),
			new OPInfo({
				name: "Zofia",
				icons: [
					"assets/images/OPIcons/Zofia_Icon.png",
				],
				images: [
					"assets/images/OPImages/Zofia.png",
				],
				equipment: [
					new EquipmentInfo({
						name: "Breach Charge",
						images: [
							"assets/images/Equipment/Breach_Charge.png",
						],
					}),
					new EquipmentInfo({
						name: "Claymore",
						images: [
							"assets/images/Equipment/Claymore.png",
						],
					}),
				],
				primaryWeapons: [
					new WeaponInfo({
						name: "LMG E",
						images: [
							"assets/images/Weapons/PrimaryWeapons/LMG_E.png",
						],
						attachments: {
							sights: [
								new SightAttachmentInfo({
									name: "HOLO A",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO B",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO C",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO D",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_D.png",
									],
								}),
								new SightAttachmentInfo({
									name: "IRON SIGHT",
									images: [
										"assets/images/Attachments/SightAttachments/IRON_SIGHT.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED A",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED B",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED C",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT A",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT B",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT C",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX A",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX B",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX C",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_C.png",
									],
								}),
							],
							barrels: [
								new BarrelAttachmentInfo({
									name: "COMPENSATOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/COMPENSATOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "FLASH HIDER",
									images: [
										"assets/images/Attachments/BarrelAttachments/FLASH_HIDER.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							grips: [
								new GripAttachmentInfo({
									name: "ANGLED GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/ANGLED_GRIP.png",
									],
								}),
								new GripAttachmentInfo({
									name: "HORIZONTAL GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
									],
								}),
								new GripAttachmentInfo({
									name: "VERTICAL GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/VERTICAL_GRIP.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
					new WeaponInfo({
						name: "M762",
						images: [
							"assets/images/Weapons/PrimaryWeapons/M762.png",
						],
						attachments: {
							sights: [
								new SightAttachmentInfo({
									name: "HOLO A",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO B",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO C",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO D",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_D.png",
									],
								}),
								new SightAttachmentInfo({
									name: "IRON SIGHT",
									images: [
										"assets/images/Attachments/SightAttachments/IRON_SIGHT.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED A",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED B",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED C",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT A",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT B",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT C",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX A",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX B",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX C",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_C.png",
									],
								}),
							],
							barrels: [
								new BarrelAttachmentInfo({
									name: "COMPENSATOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/COMPENSATOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "FLASH HIDER",
									images: [
										"assets/images/Attachments/BarrelAttachments/FLASH_HIDER.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							grips: [
								new GripAttachmentInfo({
									name: "ANGLED GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/ANGLED_GRIP.png",
									],
								}),
								new GripAttachmentInfo({
									name: "HORIZONTAL GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/HORIZONTAL_GRIP.png",
									],
								}),
								new GripAttachmentInfo({
									name: "VERTICAL GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/VERTICAL_GRIP.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
				],
				secondaryWeapons: [
					new WeaponInfo({
						name: "RG15",
						images: [
							"assets/images/Weapons/SecondaryWeapons/RG15.png",
						],
						attachments: {
							barrels: [
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
				],
			}),
		],
	}),
	Defenders: new GroupInfo({
		icons: [
			"assets/images/GroupIcons/Defenders_Icon_hover.svg",
			"assets/images/GroupIcons/Defenders_Icon.svg",
		],
		ops: [
			new OPInfo({
				name: "Alibi",
				icons: [
					"assets/images/OPIcons/Alibi_Icon.png",
				],
				images: [
					"assets/images/OPImages/Alibi.webp",
				],
				equipment: [
					new EquipmentInfo({
						name: "Observation Blocker",
						images: [
							"assets/images/Equipment/Observation_Blocker.webp",
						],
					}),
					new EquipmentInfo({
						name: "Proximity Alarm",
						images: [
							"assets/images/Equipment/Proximity Alarm.png",
						],
					}),
				],
				primaryWeapons: [
					new WeaponInfo({
						name: "ACS12",
						images: [
							"assets/images/Weapons/PrimaryWeapons/ACS12.webp",
						],
						attachments: {
							grips: [
								new GripAttachmentInfo({
									name: "ANGLED GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/ANGLED_GRIP.png",
									],
								}),
								new GripAttachmentInfo({
									name: "VERTICAL GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/VERTICAL_GRIP.png",
									],
								}),
							],
							sights: [
								new SightAttachmentInfo({
									name: "HOLO A",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO B",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO C",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO D",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_D.png",
									],
								}),
								new SightAttachmentInfo({
									name: "IRON SIGHT",
									images: [
										"assets/images/Attachments/SightAttachments/IRON_SIGHT.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED A",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED B",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "MAGNIFIED C",
									images: [
										"assets/images/Attachments/SightAttachments/MAGNIFIED_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT A",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT B",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT C",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX A",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX B",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX C",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_C.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
					new WeaponInfo({
						name: "Mx4 Storm",
						images: [
							"assets/images/Weapons/PrimaryWeapons/Mx4_Storm.webp",
						],
						attachments: {
							barrels: [
								new BarrelAttachmentInfo({
									name: "COMPENSATOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/COMPENSATOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "EXTENDED BARREL",
									images: [
										"assets/images/Attachments/BarrelAttachments/EXTENDED_BARREL.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "FLASH HIDER",
									images: [
										"assets/images/Attachments/BarrelAttachments/FLASH_HIDER.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							grips: [
								new GripAttachmentInfo({
									name: "ANGLED GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/ANGLED_GRIP.png",
									],
								}),
								new GripAttachmentInfo({
									name: "VERTICAL GRIP",
									images: [
										"assets/images/Attachments/GripAttachments/VERTICAL_GRIP.png",
									],
								}),
							],
							sights: [
								new SightAttachmentInfo({
									name: "HOLO A",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO B",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO C",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "HOLO D",
									images: [
										"assets/images/Attachments/SightAttachments/HOLO_D.png",
									],
								}),
								new SightAttachmentInfo({
									name: "IRON SIGHT",
									images: [
										"assets/images/Attachments/SightAttachments/IRON_SIGHT.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT A",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT B",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "RED DOT C",
									images: [
										"assets/images/Attachments/SightAttachments/RED_DOT_C.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX A",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_A.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX B",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_B.png",
									],
								}),
								new SightAttachmentInfo({
									name: "REFLEX C",
									images: [
										"assets/images/Attachments/SightAttachments/REFLEX_C.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
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
							"assets/images/Weapons/SecondaryWeapons/Bailiff_410.webp",
						],
						attachments: {
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
					new WeaponInfo({
						name: "Keratos .357",
						images: [
							"assets/images/Weapons/SecondaryWeapons/Keratos_.357.webp",
						],
						attachments: {
							barrels: [
								new BarrelAttachmentInfo({
									name: "MUZZLE BRAKE",
									images: [
										"assets/images/Attachments/BarrelAttachments/MUZZLE_BRAKE.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "SUPPRESSOR",
									images: [
										"assets/images/Attachments/BarrelAttachments/SUPPRESSOR.png",
									],
								}),
								new BarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
							underBarrels: [
								new UnderBarrelAttachmentInfo({
									name: "LASER",
									images: [
										"assets/images/Attachments/UnderBarrelAttachments/LASER.png",
									],
								}),
								new UnderBarrelAttachmentInfo({
									name: "None",
									images: [
										"assets/images/Attachments/SharedAttachments/None.png",
									],
								}),
							],
						}
					}),
				],
			}),
			new OPInfo({
				name: "Clash",
				icons: [
					"assets/images/OPIcons/KYSClash_Icon.png",
				],
			}),
		],
	}),
};

export const GroupParseKeys: { [k: string]: string } = {};
GroupParseKeys[(GroupParseKeys["Attackers"] = "0")] = "Attackers";
GroupParseKeys[(GroupParseKeys["Defenders"] = "1")] = "Defenders";

export const OpParseKeys: { [k: string]: { [k: string]: string } } = {};
const AttackersKey = GroupParseKeys["Attackers"];
OpParseKeys[AttackersKey] = {};
OpParseKeys[AttackersKey][(OpParseKeys[AttackersKey]["Ace"] = "0")] = "Ace"
OpParseKeys[AttackersKey][(OpParseKeys[AttackersKey]["Amaru"] = "1")] = "Amaru"
OpParseKeys[AttackersKey][(OpParseKeys[AttackersKey]["Ash"] = "2")] = "Ash"
OpParseKeys[AttackersKey][(OpParseKeys[AttackersKey]["Blackbeard"] = "3")] = "Blackbeard"
OpParseKeys[AttackersKey][(OpParseKeys[AttackersKey]["Blitz"] = "4")] = "Blitz"
OpParseKeys[AttackersKey][(OpParseKeys[AttackersKey]["Brava"] = "5")] = "Brava"
OpParseKeys[AttackersKey][(OpParseKeys[AttackersKey]["Buck"] = "6")] = "Buck"
OpParseKeys[AttackersKey][(OpParseKeys[AttackersKey]["Capitao"] = "7")] = "Capitao"
OpParseKeys[AttackersKey][(OpParseKeys[AttackersKey]["Deimos"] = "8")] = "Deimos"
OpParseKeys[AttackersKey][(OpParseKeys[AttackersKey]["Dokkaebi"] = "9")] = "Dokkaebi"
OpParseKeys[AttackersKey][(OpParseKeys[AttackersKey]["Finka"] = "10")] = "Finka"
OpParseKeys[AttackersKey][(OpParseKeys[AttackersKey]["Flores"] = "11")] = "Flores"
OpParseKeys[AttackersKey][(OpParseKeys[AttackersKey]["Fuze"] = "12")] = "Fuze"
OpParseKeys[AttackersKey][(OpParseKeys[AttackersKey]["Glaz"] = "13")] = "Glaz"
OpParseKeys[AttackersKey][(OpParseKeys[AttackersKey]["Gridlock"] = "14")] = "Gridlock"
OpParseKeys[AttackersKey][(OpParseKeys[AttackersKey]["Grim"] = "15")] = "Grim"
OpParseKeys[AttackersKey][(OpParseKeys[AttackersKey]["Hibana"] = "16")] = "Hibana"
OpParseKeys[AttackersKey][(OpParseKeys[AttackersKey]["Iana"] = "17")] = "Iana"
OpParseKeys[AttackersKey][(OpParseKeys[AttackersKey]["IQ"] = "18")] = "IQ"
OpParseKeys[AttackersKey][(OpParseKeys[AttackersKey]["Jackal"] = "19")] = "Jackal"
OpParseKeys[AttackersKey][(OpParseKeys[AttackersKey]["Kali"] = "20")] = "Kali"
OpParseKeys[AttackersKey][(OpParseKeys[AttackersKey]["Lion"] = "21")] = "Lion"
OpParseKeys[AttackersKey][(OpParseKeys[AttackersKey]["Maverick"] = "22")] = "Maverick"
OpParseKeys[AttackersKey][(OpParseKeys[AttackersKey]["Montagne"] = "23")] = "Montagne"
OpParseKeys[AttackersKey][(OpParseKeys[AttackersKey]["Nokk"] = "24")] = "Nokk"
OpParseKeys[AttackersKey][(OpParseKeys[AttackersKey]["Sledge"] = "25")] = "Sledge"
OpParseKeys[AttackersKey][(OpParseKeys[AttackersKey]["Thatcher"] = "26")] = "Thatcher"
OpParseKeys[AttackersKey][(OpParseKeys[AttackersKey]["Thermite"] = "27")] = "Thermite"
OpParseKeys[AttackersKey][(OpParseKeys[AttackersKey]["Twitch"] = "28")] = "Twitch"
OpParseKeys[AttackersKey][(OpParseKeys[AttackersKey]["Zofia"] = "29")] = "Zofia"

const DefendersKey = GroupParseKeys["Defenders"];
OpParseKeys[DefendersKey] = {};
OpParseKeys[DefendersKey][(OpParseKeys[DefendersKey]["Alibi"] = "0")] = "Alibi"
OpParseKeys[DefendersKey][(OpParseKeys[DefendersKey]["Clash"] = "1")] = "Clash"


//#endregion
