//#region Main
import type { OPInfo } from "../utils/op.js";

export type GroupParameters<Names extends string = string> = {
    icons?: string[];
    ops?: OPInfo<Names>[];
};
//#endregion
