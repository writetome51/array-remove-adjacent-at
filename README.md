# removeAdjacentAt(<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;startingIndex,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;howMany,<br>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;array<br>): void

Beginning at `startingIndex`, it removes `howMany` adjacent items  from `array`.  
`startingIndex` can be negative or positive. 


## Examples
```
let arr = [10,20,30,40,50,60,70,80,90];  
removeAdjacentAt(-4, 2, arr);  
// arr is now  [10,20,30,40,50,80,90]

let arr = [10,20,30,40,50,60,70,80,90];  
removeAdjacentAt(2, 4, arr);  
// arr is now  [10,20,70,80,90]
```

## Installation
`npm i  @writetome51/array-remove-adjacent-at`

## Loading
```
// if using TypeScript:
import {removeAdjacentAt} from '@writetome51/array-remove-adjacent-at';
// if using ES5 JavaScript:
var removeAdjacentAt = 
    require('@writetome51/array-remove-adjacent-at').removeAdjacentAt;
```