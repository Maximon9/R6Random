export type AllJsonTools = {[k: string]: {paths: string[]; data: {}}};
export type AllTools = {[k: string]: string[]};
export type JsonToolFunc = (allTools: AllJsonTools) => void;
export type ToolFunc = (allTools: AllTools) => void;

export type Config = {
    siegeNames: string[];
    siegePaths: string[];
    ignore: string[];
    groupNames: string[];
    equipmentNames: string[];
    weaponNames: string[];
    attachmentNames: string[];
    imageExtensions: string[];
};
