//#region Main
export type EquipmentInfoParameters<Name extends string> = {
    name?: Name;
    images?: string[];
};
export type EquipmentParameters<Name extends string> = {
    name?: Name;
    image?: string;
};
//#endregion
