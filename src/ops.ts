//#region Main

import type {Groups} from "./types/groups.js";
import {Group} from "./utils/group.js";
import {OPInfo} from "./utils/op.js";

export const GROUPS: Groups = {
	Attackers: new Group({
		ops: [
			new OPInfo({
				name: "Ash",
				image: "OpsImages/Ash.png",
				icon: "OpsIcons/Ash_Icon.png",
			}),
			new OPInfo({
				name: "Blitz",
				image: "OpsImages/Blitz.png",
				icon: "OpsIcons/Blitz_Icon.png",
			}),
			new OPInfo({
				name: "Buck",
				image: "OpsImages/Buck.png",
				icon: "OpsIcons/Buck_Icon.png",
			}),
			new OPInfo({
				name: "Fuze",
				image: "OpsImages/Fuze.png",
				icon: "OpsIcons/Fuze_Icon.png",
			}),
			new OPInfo({
				name: "Glaz",
				image: "OpsImages/Glaz.png",
				icon: "OpsIcons/Glaz_Icon.png",
			}),
			new OPInfo({
				name: "IQ",
				image: "OpsImages/IQ.png",
				icon: "OpsIcons/IQ_Icon.png",
			}),
			new OPInfo({
				name: "Montagne",
				image: "OpsImages/Montagne.png",
				icon: "OpsIcons/Montagne_Icon.png",
			}),
			new OPInfo({
				name: "Sledge",
				image: "OpsImages/Sledge.png",
				icon: "OpsIcons/Sledge_Icon.png",
			}),
			new OPInfo({
				name: "Thatcher",
				image: "OpsImages/Thatcher.png",
				icon: "OpsIcons/Thatcher_Icon.png",
			}),
			new OPInfo({
				name: "Thermite",
				image: "OpsImages/Thermite.png",
				icon: "OpsIcons/Thermite_Icon.png",
			}),
			new OPInfo({
				name: "Twitch",
				image: "OpsImages/Twitch.png",
				icon: "OpsIcons/Twitch_Icon.png",
			}),
			new OPInfo({
				name: "Zofia",
				image: "OpsImages/Zofia.png",
				icon: "OpsIcons/zofia_icon.png",
			}),
		]
	}),
	Defenders: new Group({
		ops: [
			new OPInfo({
				name: "Alibi",
				image: "OpsImages/Alibi.webp",
				icon: "OpsIcons/Alibi_Icon.webp",
			}),
		]
	}),
};

//#endregion