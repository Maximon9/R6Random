import { GROUPS } from "./ops.js";

const key = localStorage.getItem("group");
if (key !== null) {
    const group = GROUPS[key];
    console.log(key);
    console.log(group);
}
