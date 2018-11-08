To include in your project:

import {removeAdjacentAt} from '@writetome51/array-remove-adjacent-at';

removeAdjacentAt(startingIndex, numItemsToRemove, array): void

This function removes multiple adjacent items from an array.  
startingIndex is where you want to begin removing items (it can be positive or negative).  
Examples:

let arr = [10,20,30,40,50,60,70,80,90];  
removeAdjacentAt(-4, 2, arr);  
// arr is now  [10,20,30,40,50,80,90]

let arr = [10,20,30,40,50,60,70,80,90];  
removeAdjacentAt(2, 4, arr);  
// arr is now  [10,20,70,80,90]