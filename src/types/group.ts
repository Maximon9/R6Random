import type {OPInfo} from "../utils/op.js";

export type Groups = {
    [k: string]: {
        icon?: HTMLElement;
        ops?: OPInfo[];
    };
};
