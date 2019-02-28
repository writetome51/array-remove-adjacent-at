import { getAndRemoveAdjacentAt } from '@writetome51/array-get-and-remove-adjacent-at';


// startingIndex can be negative or positive.

export function removeAdjacentAt(startingIndex, numItemsToRemove, array): void {
	getAndRemoveAdjacentAt(startingIndex, numItemsToRemove, array);
}
