import { GROUPS } from "./ops.js";
import { GroupInfo } from "./utils/group.js";
import { OP } from "./utils/op.js";
import Options from "./utils/options.js";

const key = localStorage.getItem("group");
if (key !== null) {
    const group = GROUPS[key];
    randomizeOP(key, group);
}

function randomizeOP(key: string, group: GroupInfo) {
    let op = getRandomItemFromArray(group.ops);
    while (Options.Filter.OPTrue(key, op.name) === false) {
        op = getRandomItemFromArray(group.ops);
    }
    return new OP({
        name: op.name,
        icon: getRandomItemFromArray(op.icons),
        image: getRandomItemFromArray(op.images),
    });
}

function getRandomItemFromArray<T>(array: T[]) {
    return array[Math.floor(Math.random() * array.length)];
}
