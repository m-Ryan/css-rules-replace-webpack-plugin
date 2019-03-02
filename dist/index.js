"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var loader_utils_1 = __importDefault(require("loader-utils"));
function default_1(source) {
    var options = loader_utils_1.default.getOptions(this);
    options.rules.forEach(function (item) {
        item.originValues.forEach(function (value) {
            source = source.replace(new RegExp(item.name + "\\s*:\\s*" + value, 'mig'), item.name + ":" + item.replaceValue);
        });
    });
    return source;
}
exports.default = default_1;
//# sourceMappingURL=index.js.map