import { GROUPS } from "./ops.js";
import { OP } from "./utils/op.js";
import Options from "./utils/options.js";
const key = localStorage.getItem("group");
if (key !== null) {
    const group = GROUPS[key];
    randomizeOP(key, group);
}
function randomizeOP(key, group) {
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
function getRandomItemFromArray(array) {
    return array[Math.floor(Math.random() * array.length)];
}
//# sourceMappingURL=randomize.js.map