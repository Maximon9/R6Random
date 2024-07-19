//#region Main
export type AttachmentInfoParameters<Name extends string> = {
    name?: Name;
    images?: string[];
};
export type AttachmentParameters<Name extends string> = {
    name?: Name;
    image?: string;
};
//#endregion
