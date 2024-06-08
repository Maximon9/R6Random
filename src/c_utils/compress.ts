// region Main
import {PathOrFileDescriptor, copyFileSync, realpath} from "fs";
import {existsSync, readdirSync, rmSync, mkdirSync, writeFileSync, readFileSync} from "fs";
import {relative, basename, dirname, join, parse} from "path";
import {log} from "console";
import {RequestManager} from "../c_utils/requestManager.js";
import type {Request} from "../c_types/requestManager.js";
import type {AllJsonTools, AllTools, Config} from "../c_types/siege.js";
import {merge, mergeCopy} from "./json.js";
import type {JSONObject} from "../c_types/json.js";
import {isArrayBufferView} from "util/types";
import {FilesManager} from "turbodepot-node";

const fileManager = new FilesManager();
export enum Compression {
    DECOMPRESS = 0,
    COMPRESS_NEEDED = 1,
    COMPRESS = 2,
}

const writeFile = (file: PathOrFileDescriptor, data: string | ArrayBufferView | JSONObject) => {
    if (typeof data !== "object" || isArrayBufferView(data)) {
        writeFileSync(file, data, {encoding: "utf-8"});
    } else {
        writeFileSync(file, JSON.stringify(data, null, 4), {encoding: "utf-8"});
    }
};
const readFile = (file: PathOrFileDescriptor) => readFileSync(file, {encoding: "utf-8"});
const relPath = (path: string, start: string = process.cwd()) => relative(start, path).replace("\\", "/");
const isAlpha = (char: string) => {
    return typeof char === "string" && char.length === 1 && /[A-Za-z]/.test(char);
};

export class Compressionator {
    static #jsonData: JSONObject = {};
    static #jsonOpNames: string[] = ["ops"];
    static #jsonToolsNames: string[] = ["tools"];
    static #pathsToRemove: string[] = [];
    static #checkRemovePath: string[] = [];
    static #pathErrorString: string = "";
    static #jsonErrorString: string = "";
    static #siegePaths: string[] = [];
    static requestManager: RequestManager<Compression> = new RequestManager<Compression>(
        (request: Request<Compression>) => {
            this.mode = request["data"];
        }
    );
    static #siegePath: string = "";
    static #spaces: string[] = [" ", "_", "-"];
    static configs: Config;
    static workspaceFolders: string[] = [];
    static Compressionator: {};
    static #endOfPaths = ["", ".", "..", "C:\\", "C:/"];

    static get #checkNames(): string[] {
        return [
            ...(this.configs["groupNames"] ?? []),
            ...(this.configs["equipmentNames"] ?? []),
            ...(this.configs["weaponNames"] ?? []),
            ...(this.configs["attachmentNames"] ?? []),
        ];
    }

    static get siegePaths(): string[] {
        this.#fetchSiegePaths();
        return this.#siegePaths;
    }
    static #fetchSiegePaths() {
        const cwd = process.cwd(),
            allSiegePaths: string[] = [];
        for (let i = 0; i < this.configs["siegePaths"].length; i++) {
            const path = this.configs["siegePaths"][i];
            if (existsSync(path)) {
                allSiegePaths.push(relPath(path));
            }
        }
        if (this.workspaceFolders.length > 0) {
            for (let i = 0; i < this.workspaceFolders.length; i++) {
                const wf = this.workspaceFolders[i];
                allSiegePaths.push(...this.#fetchPathsFromPath(wf, this.configs["siegeNames"], this.#siegePaths));
            }
        } else {
            allSiegePaths.push(...this.#fetchPathsFromPath(cwd, this.configs["siegeNames"], this.#siegePaths));
        }
        if (this.workspaceFolders.length > 0) {
            for (let i = 0; i < this.workspaceFolders.length; i++) {
                const wf = this.workspaceFolders[i],
                    path = relPath(wf);
                allSiegePaths.push(
                    ...this.#searchForDirRecursively(
                        path,
                        this.configs["siegeNames"],
                        this.configs["ignore"],
                        this.#siegePaths
                    )
                );
            }
        } else {
            allSiegePaths.push(
                ...this.#searchForDirRecursively(
                    ".",
                    this.configs["siegeNames"],
                    this.configs["ignore"],
                    this.#siegePaths
                )
            );
        }
        for (let i = 0; i < allSiegePaths.length; i++) {
            const path = allSiegePaths[i];
            if (!existsSync(path)) {
                delete allSiegePaths[i];
            }
        }
        this.#siegePaths.push(...allSiegePaths);
        if (this.#siegePaths.length <= 0) {
            throw Error("Cannot find paths to compress in");
        }
    }
    static #searchForDirRecursively(
        mainPath: string,
        dirNames: string[],
        ignore: string[],
        ignorePaths: string[]
    ): string[] {
        if (mainPath === "") mainPath = ".";
        const names: string[] = readdirSync(mainPath).filter((name) => {
                const path = `${mainPath}/${name}`;
                return fileManager.isDirectory(path) && !this.#stringContains(name, ignore);
            }),
            allPaths: string[] = [];
        for (let i = 0; i < names.length; i++) {
            const name = names[i],
                path = join(mainPath, name);
            let skip = false;
            for (let i = 0; i < ignorePaths.length; i++) {
                const iPath = ignorePaths[i];
                if (this.#samePath(path, iPath)) {
                    skip = true;
                }
            }
            if (!skip) {
                for (let i = 0; i < dirNames.length; i++) {
                    const dirName = dirNames[i];
                    if (this.#allWordsAreSimilar(dirName, name)) {
                        allPaths.push(path);
                        break;
                    }
                }
            }
            allPaths.push(...this.#searchForDirRecursively(path, dirNames, ignore, ignorePaths));
        }
        return allPaths;
    }

    static #mode: Compression = Compression.DECOMPRESS;

    static get mode(): Compression {
        return this.#mode;
    }

    static set mode(v: Compression) {
        this.#mode = v;
        this.#startCompression();
    }

    static #startCompression() {
        for (let i = 0; i < this.siegePaths.length; i++) {
            this.#siegePath = this.siegePaths[i];
            const names: string[] = readdirSync(this.#siegePath, {encoding: "utf-8", recursive: false});
            switch (this.mode) {
                case Compression.DECOMPRESS:
                    this.#tryDecompressing(names);
                    break;
                case Compression.COMPRESS_NEEDED:
                    this.#tryCompressingNeeded(names);
                    break;
                case Compression.COMPRESS:
                    this.#tryCompressing(names);
                    break;
            }
        }
    }
    static #fetchMatchingName(
        name: string,
        names: string[],
        returnUndefined: boolean = false,
        keepSpaces: boolean = false
    ): string | undefined {
        let nString: string | undefined = undefined;
        for (let i = 0; i < names.length; i++) {
            const check = names[i];
            if (this.#allWordsAreSimilar(name, check)) {
                nString = this.#capitalizeAllWords(check);
            }
        }
        if (nString !== undefined) {
            if (!keepSpaces) {
                for (let i = 0; i < this.#spaces.length; i++) {
                    const space = this.#spaces[i];
                    nString = nString.replaceAll(space, "");
                }
            } else {
                if (!returnUndefined) {
                    if (!keepSpaces) {
                        nString = name;
                        for (let i = 0; i < this.#spaces.length; i++) {
                            const space = this.#spaces[i];
                            nString = nString.replaceAll(space, "");
                        }
                    }
                }
            }
        }
        return nString;
    }
    static #stringContains(string: string, stringList: string[]): boolean {
        for (let i = 0; i < stringList.length; i++) {
            const check = stringList[i];
            if (this.#allWordsAreSimilar(string, check)) {
                return true;
            }
        }
        return false;
    }
    static #pathContains(path: string, stringList: string[]): boolean {
        while (this.#endOfPaths.includes(path)) {
            const name = basename(path);
            for (let i = 0; i < stringList.length; i++) {
                const check = stringList[i];
                if (this.#allWordsAreSimilar(name, check)) {
                    return true;
                }
            }
            path = dirname(path);
        }
        return false;
    }
    static #fetchPathsFromPath(path: string, stringList: string[], ignorePaths: string[]): string[] {
        const allPaths: string[] = [];
        while (this.#endOfPaths.includes(path)) {
            const name = basename(path);
            let cont = false;
            for (let i = 0; i < ignorePaths.length; i++) {
                const iPath = ignorePaths[i];
                if (this.#samePath(path, iPath)) {
                    cont = true;
                }
            }
            if (cont) {
                continue;
            }
            for (let i = 0; i < stringList.length; i++) {
                const check = stringList[i];
                if (this.#allWordsAreSimilar(name, check)) {
                    allPaths.push(path);
                }
            }
            path = dirname(path);
        }
        return allPaths;
    }
    static #fetchFirstMatchingParent(path: string, names: string[]): [string, number] | undefined {
        let parentLevel = 1;
        while (this.#endOfPaths.includes(path)) {
            const name = basename(path),
                fetch = this.#fetchMatchingName(name, names, true, true);
            if (fetch !== undefined) {
                return [fetch, parentLevel];
            }
            parentLevel += 1;
            path = dirname(path);
        }
        return undefined;
    }
    static #isSimilar(string1: string, string2: string): boolean {
        const realString1: string = string1.toLowerCase().replaceAll(" ", "").replaceAll("_", "").replace("-", ""),
            realString2: string = string2.toLowerCase().replaceAll(" ", "").replaceAll("_", "").replace("-", "");
        if (realString1.includes(realString2) || realString2.includes(realString1)) {
            return true;
        }
        return false;
    }

    static #similarNameExists(basePath: string, nameToCheck: string): string {
        const names = readdirSync(basePath);
        for (let i = 0; i < names.length; i++) {
            const name = names[i];
            if (this.#allWordsAreSimilar(nameToCheck, name)) {
                return name;
            }
        }
        return nameToCheck;
    }

    //#region Change Compression

    //#region Decompressing
    static #tryDecompressing(names: string[]) {
        log("Trying to decompress");
        this.#searchForJsonOps(names, this.#decompressCompression);
        this.#searchForGroups(names, this.#decompressNeededCompression, true);
        this.requestManager.finishRequest();
    }

    //#region Decompress needed compression
    static #decompressNeededCompression = (allTools: AllJsonTools) => {
        for (const basePath in allTools) {
            const toolInfo = allTools[basePath];
            this.#createFilesFromJson(basePath, basePath, toolInfo["data"], this.#createFilesFromJson);
        }
        for (const basePath in allTools) {
            const toolInfo = allTools[basePath];
            for (let i = 0; i < toolInfo["paths"].length; i++) {
                const path = toolInfo["paths"][i];
                rmSync(path);
            }
        }
        this.#RemovePathsAndCheck();
    };
    //#endregion

    //#region Decompress full compression
    static #decompressCompression = (basePath: string, allJsonPaths: string[], data: JSONObject) => {
        this.#createFilesFromJson(basePath, basePath, data, this.#createFilesFromJson);
        for (let i = 0; i < allJsonPaths.length; i++) {
            const path = allJsonPaths[i];
            rmSync(path);
        }
        this.#RemovePathsAndCheck();
    };
    //#endregion
    //#endregion

    //#region Compress Needed
    static #tryCompressingNeeded(names: string[]) {
        log("Trying to compress what is needed");
        this.#searchForJsonOps(names, this.#compressNeededFromCompression);
        this.#searchForGroups(names, this.#mergeAllToolJsons, true);
        this.#searchForGroups(names, this.#compressNeededFromDecompression);
        this.requestManager.finishRequest();
    }

    static #mergeAllToolJsons = (allTools: AllJsonTools) => {
        for (const basePath in allTools) {
            const jsonToolsPath = join(basePath, "tools.json"),
                toolInfo = allTools[basePath];
            for (let i = 0; i < toolInfo["paths"].length; i++) {
                const path = toolInfo["paths"][i];
                rmSync(path);
            }
            this.#organizeFiles(basePath, toolInfo["data"]);
            writeFile(jsonToolsPath, JSON.stringify(toolInfo["data"], null, 4));
        }
    };

    //#region Compress only what is needed from what's already decompressed
    static #compressNeededFromDecompression = (allTools: AllTools) => {
        for (const basePath in allTools) {
            const jsonPaths = allTools[basePath];
            for (let i = 0; i < jsonPaths.length; i++) {
                const path = jsonPaths[i],
                    jsonPath = join(basePath, "tools.json");
                if (existsSync(jsonPath)) {
                    this.#jsonData = JSON.parse(readFile(jsonPath));
                }

                this.#compress(basePath, path, basename(path), this.#jsonData);

                writeFile(jsonPath, this.#jsonData);

                this.#jsonData;
            }
        }
        this.#RemovePathsAndCheck();
    };
    //#endregion

    //#region Compress only what is needed from what's already compressed
    static #compressNeededFromCompression = (basePath: string, allJsonPaths: string[], data: JSONObject) => {
        this.#createFilesFromJson(basePath, basePath, data, this.#createOpDirs, false);
        for (let i = 0; i < allJsonPaths.length; i++) {
            const path = allJsonPaths[i];
            rmSync(path);
        }
        this.#RemovePathsAndCheck();
    };
    static #createOpDirs(basePath: string, jsonBasePath: string, data: JSONObject) {
        for (const key in data) {
            const value = data[key];
            if (typeof value !== "string") {
                this.#createJsonToolsAndFiles(this.#createDir(basePath, value), jsonBasePath, value);
            }
        }
    }
    static #createJsonToolsAndFiles(basePath: string, jsonBasePath: string, data: JSONObject) {
        const itemsToRemove: string[] = [];
        for (const key in data) {
            const value = data[key];
            if (typeof value === "string") {
                this.#createFile(basePath, jsonBasePath, value);
                if (!itemsToRemove.includes(key)) {
                    itemsToRemove.push(key);
                }
            }
        }
        for (let i = 0; i < itemsToRemove.length; i++) {
            const key = itemsToRemove[i];
            delete data[key];
        }

        const toolsJsonPath = join(basePath, "tools.json");

        if (existsSync(toolsJsonPath)) {
            this.#jsonData = JSON.parse(readFile(toolsJsonPath));
            this.#fixJsonKeyNames(data, this.#jsonData);
        } else {
            this.#fixJsonKeyNames(data);
        }
        this.#fixJsonItems(basePath, jsonBasePath, data);

        if (Object.keys(this.#jsonData).length > 0) {
            merge(data, this.#jsonData);
        }

        this.#jsonData = {};

        writeFile(toolsJsonPath, data);
    }
    //#endregion
    //#endregion

    //#region Full Compressioon
    static #tryCompressing(names: string[]) {
        log("Trying to compress everything");
        this.#searchForJsonOps(names, this.#mergeAllOpJsons);
        for (let i = 0; i < names.length; i++) {
            const name = names[i];
            if (this.#stringContains(name, this.configs["groupNames"])) {
                this.#compress(this.#siegePath, join(this.#siegePath, name), name, this.#jsonData);
            }
        }

        writeFile(join(this.#siegePath, "ops.json"), this.#jsonData);
        this.#jsonData = {};
        this.#RemovePathsAndCheck();
        this.requestManager.finishRequest();
    }

    static #mergeAllOpJsons = (basePath: string, allJsonPaths: string[], data: JSONObject) => {
        if (allJsonPaths.length > 1) {
            const jsonOpsPath = join(basePath, "ops.json");
            for (let i = 0; i < allJsonPaths.length; i++) {
                const path = allJsonPaths[i];
                rmSync(path);
            }
            this.#organizeFiles(basePath, data);
            writeFile(jsonOpsPath, data);
        }
        this.#jsonData = data;
    };
    //#endregion

    //#region Shared functions
    static #compress(startPath: string, mainPath: string, dirName: string, data: JSONObject) {
        let realDirName = this.#fetchMatchingName(dirName, this.#checkNames);
        if (realDirName !== undefined) {
            realDirName = this.#fetchMatchingName(realDirName, Object.keys(data));
        }
        if (realDirName === undefined) {
            return;
        }

        data[realDirName] = {};
        const names = readdirSync(mainPath);

        this.#checkRemovePath.push(mainPath);

        for (let i = 0; i < names.length; i++) {
            const name = names[i],
                path = join(mainPath, name);
            if (fileManager.isDirectory(path)) {
                this.#compress(startPath, path, name, data[realDirName]);
            } else if (this.#isImageFile(name)) {
                const realName = this.#capitalizeAllWords(parse(path).name.replaceAll("_", " "));
                if (this.#stringContains(realName, Object.keys(data[realDirName]))) {
                    continue;
                }
                const firstMatchingParent = this.#fetchFirstMatchingParent(mainPath, this.#checkNames);
                if (firstMatchingParent !== undefined) {
                    const firstMatchingParentString: string = firstMatchingParent[0],
                        firstMatchingParentLevel: number = firstMatchingParent[1];
                    let pathToFile: string | undefined = undefined;
                    if (firstMatchingParentLevel === 1) {
                        if (this.#stringContains(firstMatchingParentString, this.configs["equipmentNames"])) {
                            pathToFile = join(this.#siegePath, firstMatchingParentString, name);
                        } else if (
                            this.#stringContains(firstMatchingParentString, this.configs["weaponNames"]) ||
                            this.#stringContains(firstMatchingParentString, this.configs["attachmentNames"])
                        ) {
                            pathToFile = join(this.#siegePath, "Weapons", firstMatchingParentString, name);
                        } else if (this.#stringContains(firstMatchingParentString, this.configs["groupNames"])) {
                            pathToFile = join(this.#siegePath, "GroupIcons", name);
                        } else {
                            pathToFile = undefined;
                        }
                    } else if (firstMatchingParentLevel > 1) {
                        if (this.#stringContains(firstMatchingParentString, this.configs["equipmentNames"])) {
                            pathToFile = join(this.#siegePath, firstMatchingParentString, realDirName, name);
                        } else if (
                            this.#stringContains(firstMatchingParentString, this.configs["weaponNames"]) ||
                            this.#stringContains(firstMatchingParentString, this.configs["attachmentNames"])
                        ) {
                            pathToFile = join(this.#siegePath, "Weapons", realDirName, name);
                        } else if (this.#stringContains(firstMatchingParentString, this.configs["groupNames"])) {
                            if (realName.toLowerCase().includes("icon")) {
                                pathToFile = join(this.#siegePath, "OpsIcons", name);
                            } else {
                                pathToFile = join(this.#siegePath, "OpsImages", name);
                            }
                        } else {
                            pathToFile = undefined;
                        }
                    }

                    if (pathToFile !== undefined) {
                        mkdirSync(dirname(pathToFile), {recursive: true});
                        copyFileSync(path, pathToFile);
                        this.#pathsToRemove.push(path);
                        data[realDirName][realName] = relPath(pathToFile, startPath);
                    }
                }
            } else if (name.endsWith(".json")) {
                const newJsonData = JSON.parse(readFile(path));
                this.#fixJsonKeyNames(data[realDirName], newJsonData);
                this.#fixJsonItems(startPath, dirname(path), newJsonData);
                merge(data[realDirName], newJsonData);
                this.#pathsToRemove.push(path);
            }
        }
    }
    static #organizeFiles(startPath: string, data: JSONObject, jsonTreePath: string = ".") {
        for (const key in data) {
            const value = data[key];
            if (typeof value === "string") {
                const realPath = join(startPath, value),
                    name = basename(realPath);
                const firstMatchingParent = this.#fetchFirstMatchingParent(jsonTreePath, this.#checkNames);
                if (firstMatchingParent !== undefined) {
                    const firstMatchingParentString: string = firstMatchingParent[0],
                        firstMatchingParentLevel: number = firstMatchingParent[1],
                        realDirName: string = basename(jsonTreePath);
                    let revampedPath: string | undefined = undefined;

                    if (firstMatchingParentLevel === 1) {
                        if (this.#stringContains(firstMatchingParentString, this.configs["equipmentNames"])) {
                            revampedPath = join(this.#siegePath, firstMatchingParentString, name);
                        } else if (
                            this.#stringContains(firstMatchingParentString, this.configs["weaponNames"]) ||
                            this.#stringContains(firstMatchingParentString, this.configs["attachmentNames"])
                        ) {
                            revampedPath = join(this.#siegePath, "Weapons", firstMatchingParentString, name);
                        } else if (this.#stringContains(firstMatchingParentString, this.configs["groupNames"])) {
                            revampedPath = join(this.#siegePath, "GroupIcons", name);
                        } else {
                            revampedPath = undefined;
                        }
                    } else if (firstMatchingParentLevel > 1) {
                        if (this.#stringContains(firstMatchingParentString, this.configs["equipmentNames"])) {
                            revampedPath = join(this.#siegePath, firstMatchingParentString, realDirName, name);
                        } else if (
                            this.#stringContains(firstMatchingParentString, this.configs["weaponNames"]) ||
                            this.#stringContains(firstMatchingParentString, this.configs["attachmentNames"])
                        ) {
                            revampedPath = join(this.#siegePath, "Weapons", realDirName, name);
                        } else if (this.#stringContains(firstMatchingParentString, this.configs["groupNames"])) {
                            if (key.toLowerCase().endsWith("icon")) {
                                revampedPath = join(this.#siegePath, "OpsIcons", name);
                            } else {
                                revampedPath = join(this.#siegePath, "OpsImages", name);
                            }
                        } else {
                            revampedPath = undefined;
                        }
                    }
                    if (revampedPath !== undefined && !this.#samePath(realPath, revampedPath)) {
                        mkdirSync(dirname(revampedPath), {recursive: true});
                        copyFileSync(realPath, revampedPath);
                        this.#pathsToRemove.push(realPath);
                        data[key] = relPath(revampedPath, startPath);
                    }
                }
            } else {
                this.#organizeFiles(startPath, value, join(jsonTreePath, key));
            }
        }
        this.#siegePath;
    }

    static #searchForJsonOps(
        names: string[],
        compression_callback: (basePath: string, allJsonPaths: string[], data: JSONObject) => void
    ) {
        const all_ops: string[] = [];
        for (let index = 0; index < names.length; index++) {
            const name = names[index];
            if (this.#stringContains(name, this.#jsonOpNames) && name.endsWith(".json")) {
                all_ops.push(join(this.#siegePath, name));
            }
        }
        this.#errorHandler(true, ...all_ops);

        const all_ops_data: JSONObject[] = [];
        for (let i = 0; i < all_ops.length; i++) {
            const path = all_ops[i],
                data = readFile(path);
            if (data.trim() !== "") {
                all_ops_data.push(JSON.parse(data));
            }
        }
        compression_callback(this.#siegePath, all_ops, this.#mergeJsonData(...all_ops_data));
    }
    static #searchForGroups(names: string[], compression_callback: any, searchForJsons: boolean = false) {
        for (let i = 0; i < names.length; i++) {
            const name = names[i];
            if (this.#stringContains(name, this.configs["groupNames"])) {
                this.#searchForOps(join(this.#siegePath, name), compression_callback, searchForJsons);
            }
        }
    }

    static #fixJsonKeyNames(...jsonList: JSONObject[]) {
        for (let i = 0; i < jsonList.length; i++) {
            const data = jsonList[i];
            let itemsToAdd: [string, any][] = [],
                itemsToRemove: string[] = [];

            // This replaces all names that have underscores to have spaces instead
            // Example: A json dictionary has the name of an attachment called "Red_Dot" so it changes to "Red Dot"
            for (const key in data) {
                if (key.includes("_")) {
                    const value = data[key],
                        newKey = key.replaceAll("_", " "),
                        itemToAdd: [string, any] = [newKey, value];
                    if (itemsToAdd.includes(itemToAdd)) {
                        itemsToAdd.push(itemToAdd);
                    }
                    if (itemsToRemove.includes(key)) {
                        itemsToRemove.push(key);
                    }
                }
            }

            for (let i = 0; i < itemsToRemove.length; i++) {
                const [key, value] = itemsToRemove[i];
                delete data[key];
            }
            for (let i = 0; i < itemsToAdd.length; i++) {
                const [key, value] = itemsToAdd[i];
                data[key] = value;
            }
            itemsToAdd = [];
            itemsToRemove = [];

            // This fixes any names that are similar to a group name or a tool name to be correctly named
            // Example: A json dictionary has an op group called "Attack" when it should be called "Attackers" this it fixes that
            for (const key in data) {
                const value = data[key];
                let newKey: string = key;
                if (typeof value !== "string" && this.#stringContains(key, this.#checkNames)) {
                    newKey = this.#fetchMatchingName(key, this.#checkNames) ?? newKey;
                }
                if (key !== newKey) {
                    if (itemsToRemove.includes(key)) {
                        itemsToRemove.push(key);
                    }
                }
                const itemToAdd: [string, any] = [newKey, value];
                if (itemsToAdd.includes(itemToAdd)) {
                    itemsToAdd.push(itemToAdd);
                }
            }

            for (let i = 0; i < itemsToRemove.length; i++) {
                const [key, value] = itemsToRemove[i];
                delete data[key];
            }
            for (let i = 0; i < itemsToAdd.length; i++) {
                const [key, value] = itemsToAdd[i];
                data[key] = value;
            }
            itemsToAdd = [];
            itemsToRemove = [];

            // This fixes any names similar between each dictionary to have the same name
            // Example: One json dictionary has the name "Ash" and the other "ash" which would then turn into "Ash" on both json dictionaries
            for (const key in data) {
                const value = data[key],
                    newKey = this.#getMostPreferedKey(key, jsonList);
                if (key !== newKey) {
                    const itemToAdd: [string, any] = [newKey, value];
                    if (itemsToRemove.includes(key)) {
                        itemsToRemove.push(key);
                    }
                    if (itemsToAdd.includes(itemToAdd)) {
                        itemsToAdd.push(itemToAdd);
                    }
                }
            }

            for (let i = 0; i < itemsToRemove.length; i++) {
                const [key, value] = itemsToRemove[i];
                delete data[key];
            }
            for (let i = 0; i < itemsToAdd.length; i++) {
                const [key, value] = itemsToAdd[i];
                data[key] = value;
            }
        }

        const nextJsonList = this.#getNextJsonLevel(jsonList);
        if (jsonList.length > 0) {
            this.#fixJsonKeyNames(...nextJsonList);
        }
    }
    static #fixJsonItems(basePath: string, jsonBasePath: string, ...jsonList: JSONObject[]) {
        for (let i = 0; i < jsonList.length; i++) {
            const data = jsonList[i];
            for (const key in data) {
                const value = data[key];
                if (typeof value === "string") {
                    const realValuePath = join(jsonBasePath, value);
                    data[key] = relPath(realValuePath, basePath);
                } else {
                    this.#fixJsonItems(basePath, jsonBasePath, value);
                }
            }
        }
    }

    static #mergeJsonData(...jsonList: JSONObject[]): JSONObject {
        this.#fixJsonKeyNames(...jsonList);
        if (jsonList.length <= 0) {
            return {};
        } else if (jsonList.length === 1) {
            return jsonList[0];
        }
        return mergeCopy(...jsonList);
    }

    static #getNextJsonLevel(jsonList: JSONObject[]): JSONObject[] {
        const newJsonList: JSONObject[] = [];
        for (let i = 0; i < jsonList.length; i++) {
            const data = jsonList[i];
            for (const key in data) {
                const value = data[key];
                if (typeof value !== "string") {
                    newJsonList.push(value);
                }
            }
        }
        return newJsonList;
    }
    static #getMostPreferedKey(name: string, jsonList: JSONObject[]): string {
        const allSimilarNames: string[] = [name],
            og_word_count = this.#wordCount(name);
        for (let i = 0; i < jsonList.length; i++) {
            const data = jsonList[i];
            for (const key in data) {
                const wordCount = this.#wordCount(key);
                if (
                    !allSimilarNames.includes(key) &&
                    og_word_count === wordCount &&
                    this.#allWordsAreSimilar(name, key)
                ) {
                    allSimilarNames.push(key);
                }
            }
        }
        let prefered: string = name;

        for (let i = 0; i < allSimilarNames.length; i++) {
            const name = allSimilarNames[i];
            if (this.#allWordsAreCapitalized(prefered) && this.#allWordsAreCapitalized(name)) {
                if (this.#allWordsAreSimilar(prefered, name)) {
                    const p_len = prefered.length,
                        n_len = name.length;
                    if (n_len > p_len) {
                        prefered = name;
                    }
                } else if (!this.#allWordsAreCapitalized(prefered) && this.#allWordsAreCapitalized(name)) {
                    if (this.#allWordsAreSimilar(prefered, name)) {
                        const p_len = prefered.length,
                            n_len = name.length;
                        if (n_len > p_len) {
                            prefered = name;
                        }
                    }
                }
            }
        }
        prefered = this.#capitalizeAllWords(prefered);

        return prefered;
    }

    static #allWordsAreCapitalized(string: string) {
        const allWords = this.#getAllWords(string);
        for (let i = 0; i < allWords.length; i++) {
            const word = allWords[i];
            const test = "";
            if (word[0] !== word[0].toUpperCase()) {
                return false;
            }
        }
        return true;
    }
    static #wordCount(string: string) {
        return this.#getAllWords(string).length;
    }
    static #capitalizeAllWords(string: string): string {
        if (!this.#allWordsAreCapitalized(string)) {
            const words = this.#getAllWords(string, true);
            for (let i = 0; i < words.length; i++) {
                let word = words[i];
                if (!this.#spaces.includes(word)) {
                    word = word.substring(0, 1).toUpperCase() + word.substring(1, word.length);
                }
                words[i] = word;
            }
            string = words.join("");
        }
        return string;
    }
    static #getAllWords(string: string, withSpaces: boolean = false): string[] {
        const words: string[] = [string];
        for (let i = 0; i < this.#spaces.length; i++) {
            const space = this.#spaces[i];
            for (let i1 = words.length - 1; i1 >= 0; i1--) {
                const word = words[i1],
                    newWords = word.split(space);
                if (withSpaces) {
                    for (let i2 = newWords.length - 1; i2 >= 0; i2--) {
                        const word = newWords[i2];
                        if (!this.#spaces.includes(word) && i2 > 0) {
                            newWords.splice(i2, 0, space);
                        }
                    }
                }
                words.splice(i1, 1, ...newWords);
            }
        }
        for (let i = words.length - 1; i >= 0; i--) {
            const newWords: string[] = this.#getWordsWithoutSpaces(words[i]);
            if (newWords.length > 0) {
                words.splice(i, 1, ...newWords);
            }
        }
        return words;
    }
    static #getWordsWithoutSpaces(string: string): string[] {
        const words: string[] = [];
        let pre_char: string = "";
        for (let i = 0; i < string.length; i++) {
            const char = string[i];

            if (
                i === 0 ||
                (isAlpha(pre_char) &&
                    isAlpha(char) &&
                    pre_char === pre_char.toLowerCase() &&
                    char === char.toUpperCase())
            ) {
                let spc: string = "",
                    si: number;
                for (si = i; si < string.length; si++) {
                    const sc = string[si];
                    if (isAlpha(spc) && isAlpha(char) && spc === spc.toLowerCase() && sc === sc.toUpperCase()) {
                        break;
                    } else if (this.#spaces.includes(sc)) {
                        break;
                    }
                    spc = sc;
                }
                if (i < si) {
                    words.push(string.substring(i, si));
                } else {
                    words.push(string.substring(i, i + 1));
                }
            }
            pre_char = char;
        }
        return words;
    }
    static #allWordsAreSimilar(string1: string, string2: string): boolean {
        const words1 = this.#getAllWords(string1),
            words2 = this.#getAllWords(string2),
            length = words1.length;
        if (length !== words2.length) {
            return false;
        }
        for (let i = 0; i < length; i++) {
            if (!this.#isSimilar(words1[i], words2[i])) {
                return false;
            }
        }
        return true;
    }

    static #searchForToolsJson(basePath: string) {
        const names = readdirSync(basePath),
            allJsonTools: string[] = [];
        for (let i = 0; i < names.length; i++) {
            const name = names[i];
            if (this.#stringContains(name, this.#jsonToolsNames) && name.endsWith(".json")) {
                allJsonTools.push(join(basePath, name));
            }
        }
        return allJsonTools;
    }

    static #searchForTools(basePath: string): string[] {
        const names = readdirSync(basePath),
            allTools: string[] = [];
        for (let i = 0; i < names.length; i++) {
            const name = names[i];
            if (this.#stringContains(name, [...this.configs["weaponNames"], ...this.configs["equipmentNames"]])) {
                allTools.push(join(basePath, name));
            }
        }
        return allTools;
    }

    static #searchForOps(basePath: string, compression_callback: any, searchForJsons: boolean = false): void {
        const names = readdirSync(basePath),
            allTools: AllTools | AllJsonTools = {};

        for (const name of names) {
            const realPath = join(basePath, name);
            if (fileManager.isDirectory(realpath)) {
                if (searchForJsons) {
                    const tools = this.#searchForToolsJson(realPath),
                        allToolData: JSONObject[] = [];
                    for (const path of tools) {
                        const data = readFileSync(path, "utf-8").trim();
                        if (data !== "") {
                            allToolData.push(JSON.parse(data));
                        }
                    }
                    allTools[realPath] = {
                        paths: tools,
                        data: this.#mergeJsonData(...allToolData),
                    };
                } else {
                    allTools[realPath] = this.#searchForTools(realPath);
                }
            }
        }

        const itemsToRemove: string[] = [];

        if (searchForJsons) {
            for (const key in allTools) {
                const value = allTools[key] as string[];
                if (value.length === 0 && !itemsToRemove.includes(key)) {
                    itemsToRemove.push(key);
                }
            }
        } else {
            for (const key in allTools) {
                const value = allTools[key] as {paths: string[]; data: {}};
                if (
                    value["paths"].length === 0 &&
                    Object.keys(value["data"]).length === 0 &&
                    !itemsToRemove.includes(key)
                ) {
                    itemsToRemove.push(key);
                }
            }
        }

        for (let i = 0; i < itemsToRemove.length; i++) {
            const key = itemsToRemove[i];
            delete allTools[key];
        }

        if (Object.keys(allTools).length > 0) {
            compression_callback(allTools);
        }
    }

    static #RemovePathsAndCheck() {
        for (let i = this.#pathsToRemove.length - 1; i >= 0; i++) {
            const path = this.#pathsToRemove[i];
            if (existsSync(path)) {
                rmSync(path);
            }
            delete this.#pathsToRemove[i];
        }
        for (let i = this.#checkRemovePath.length - 1; i >= 0; i--) {
            const path = this.#checkRemovePath[i];
            if (existsSync(path)) {
                const names = readdirSync(path),
                    base = dirname(path);
                if (!this.#samePath(base, this.#siegePath) && !this.#checkRemovePath.includes(base)) {
                    this.#checkRemovePath.push(base);
                }
                i += 1;
                if (names.length <= 0) {
                    rmSync(path);
                }
            }
            delete this.#checkRemovePath[i];
        }
    }

    static #createFilesFromJson(
        basePath: string,
        jsonBasePath: string,
        data: JSONObject,
        callback: any,
        repeat_callback: boolean = true
    ) {
        for (const key in data) {
            const value = data[key];
            if (typeof value === "string") {
                this.#createFile(basePath, jsonBasePath, value);
            } else {
                if (repeat_callback) {
                    callback(this.#createDir(basePath, key), jsonBasePath, value, callback);
                } else {
                    callback(this.#createDir(basePath, key), jsonBasePath, value);
                }
            }
        }
    }
    static #createFile(basePath: string, jsonBasePath: string, value: string) {
        const realValuePath = relPath(join(jsonBasePath, value)),
            distPath = relPath(join(basePath, value));
        if (!this.#samePath(realValuePath, distPath)) {
            copyFileSync(realValuePath, distPath);
            const valuePath = dirname(realValuePath);
            if (
                !this.#pathContains(valuePath, this.configs["groupNames"]) &&
                !this.#checkRemovePath.includes(valuePath)
            ) {
                this.#checkRemovePath.push(valuePath);
            }
            if (
                !this.#pathContains(realValuePath, this.configs["groupNames"]) &&
                !this.#pathsToRemove.includes(realValuePath)
            ) {
                this.#pathsToRemove.push(realValuePath);
            }
        }
    }
    static #createDir(basePath: string, value: string): string {
        const path = join(basePath, this.#similarNameExists(basePath, value));
        if (!existsSync(path)) {
            mkdirSync(path, {recursive: true});
        }
        return path;
    }

    static #samePath(p1: string, p2: string) {
        let isSame = false;
        try {
            isSame = fileManager.isDirectoryEqualTo(p1, p2);
        } catch (_) {
            isSame = false;
        }
        if (isSame) {
            return isSame;
        }
        try {
            isSame = fileManager.isFileEqualTo(p1, p2);
        } catch (_) {
            isSame = false;
        }
        return isSame;
    }
    static #errorHandler(checkJson: boolean = false, ...jsonPaths: string[]) {
        for (let i = 0; i < jsonPaths.length; i++) {
            const path = jsonPaths[i];
            if (!existsSync(path)) {
                if (this.#pathErrorString == "") {
                    this.#pathErrorString += `[PathError]:\n\tThe path \"${path}\" does not exist\n\tThis is most likely a problem with the code\nSO GO TELL AZUL NOW!!!\n`;
                } else {
                    this.#pathErrorString += `\n\tThe path \"${path}\" does not exist\n\tThis is most likely a problem with the code\nSO GO TELL AZUL NOW!!!\n`;
                }
            }
        }
        if (checkJson) {
            for (let i = 0; i < jsonPaths.length; i++) {
                const path = jsonPaths[i],
                    data = JSON.parse(readFile(path));
                this.#jsonPathsErrorHandler(path, data);
            }
        }
        if (this.#jsonErrorString !== "") {
            this.#jsonErrorString = this.#jsonErrorString.substring(0, this.#jsonErrorString.length - 1);
        }
        if (this.#pathErrorString !== "" && this.#jsonErrorString === "") {
            this.#pathErrorString = this.#pathErrorString.substring(0, this.#pathErrorString.length - 1);
        }
        if (this.#pathErrorString !== "" || this.#jsonErrorString !== "") {
            throw Error(this.#pathErrorString + this.#jsonErrorString);
        }
    }
    static #jsonPathsErrorHandler(jsonPath: string, data: JSONObject) {
        for (const key in data) {
            const rawValue = data[key];
            if (typeof rawValue === "string") {
                const value = join(dirname(jsonPath), rawValue);
                if (!existsSync(value)) {
                    if (this.#jsonErrorString == "") {
                        if (this.#pathErrorString === "") {
                            this.#jsonErrorString += `[JSONError]:\n\tInside the json file \"${jsonPath}\":\n\tThe relative path ${rawValue} from ${key} doesn't exist.\n\tThis is most likely a you problem, SO GO FIX IT!!!\n`;
                        } else {
                            this.#jsonErrorString += `\n\n[JSONError]:\n\tInside the json file \"${jsonPath}\":\n\tTherelative  path ${rawValue} from ${key} doesn't exist.\n\tThis is most likely a you problem, SO GO FIX IT!!!\n`;
                        }
                    } else {
                        this.#jsonErrorString += `\n\tInside the json file \"${jsonPath}\":\n\tThe relative path ${rawValue} from ${key} doesn't exist.\n\tThis is most likely a you problem, SO GO FIX IT!!!\n`;
                    }
                }
            } else {
                this.#jsonPathsErrorHandler(jsonPath, rawValue);
            }
        }
    }
    static #isImageFile(fileName: string) {
        for (let i = 0; i < this.configs["imageExtensions"].length; i++) {
            const ext = this.configs["imageExtensions"][i];
            if (fileName.endsWith(ext)) {
                return true;
            }
        }
        return false;
    }
    //#endregion
    //#endregion
}
