"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const ALL_OPS = [];
const ATTACKER_BUTTON = document.getElementById("attack-op");
const DEFENDER_BUTTON = document.getElementById("defend-op");
function main() {
    return __awaiter(this, void 0, void 0, function* () {
        yield SetAllOPS();
    });
}
function SetAllOPS() {
    return __awaiter(this, void 0, void 0, function* () {
        console.log(document.plugins);
    });
}
function randomize(type) { }
function loadJSON(path, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                if (success)
                    success(JSON.parse(xhr.responseText));
            }
            else {
                if (error)
                    error(xhr);
            }
        }
    };
    xhr.open("GET", path, true);
    xhr.send();
}
main();
//# sourceMappingURL=index.js.map