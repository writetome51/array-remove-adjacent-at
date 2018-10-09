"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var getAndRemoveAdjacentAt_1 = require("@writetome51/array-get-and-removers-basic/getAndRemoveAdjacentAt");
// startingIndex can be negative or positive.
function removeAdjacentAt(startingIndex, numItemsToRemove, array) {
    getAndRemoveAdjacentAt_1.getAndRemoveAdjacentAt(startingIndex, numItemsToRemove, array);
}
exports.removeAdjacentAt = removeAdjacentAt;
