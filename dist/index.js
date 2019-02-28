"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var array_get_and_remove_adjacent_at_1 = require("@writetome51/array-get-and-remove-adjacent-at");
// startingIndex can be negative or positive.
function removeAdjacentAt(startingIndex, numItemsToRemove, array) {
    array_get_and_remove_adjacent_at_1.getAndRemoveAdjacentAt(startingIndex, numItemsToRemove, array);
}
exports.removeAdjacentAt = removeAdjacentAt;
