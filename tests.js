import { removeAdjacentAt } from './index.js';
import { arraysMatch } from '@writetome51/arrays-match';


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let errorsTriggered = 0;
let errorTriggered = false;

console.time('check');

// Test 1: Make sure errors are triggered when passing incorrect types or not enough
// arguments:
try {
    removeAdjacentAt();
}
catch (e) {
    ++errorsTriggered;
}
try {
    removeAdjacentAt(1);
}
catch (e) {
    ++errorsTriggered;
}
try {
    removeAdjacentAt(1, '1', arr);
}
catch (e) {
    ++errorsTriggered;
}
try {
    removeAdjacentAt('0', '0', false);
}
catch (e) {
    ++errorsTriggered;
}
try {
    removeAdjacentAt(1.1, 1.1, arr);
}
catch (e) {
    ++errorsTriggered;
}
try {
    removeAdjacentAt(1, -1, arr);
}
catch (e) {
    ++errorsTriggered;
}
try {
    removeAdjacentAt(1, 1, 'hello everyone');
}
catch (e) {
    ++errorsTriggered;
}
if (errorsTriggered === 7) console.log('test 1 passed');
else console.log('test 1 FAILED');


// Test 2:  Make sure error is triggered if you try to remove more items than array has:
errorsTriggered = 0;
try {
    removeAdjacentAt(0, 14, arr);
}
catch (e) {
    ++errorsTriggered;
}
try {
    removeAdjacentAt(11, 3, arr);
}
catch (e) {
    ++errorsTriggered;
}
if (errorsTriggered === 2) console.log('test 2 passed');
else console.log('test 2 FAILED');


// Test 3: Make sure function only removes specified items :
removeAdjacentAt(0, 2, arr);
if (arraysMatch([3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13], arr)) console.log('test 3 passed');
else console.log('test 3 FAILED');


// Test 4: Similar to above, but different part of array :
removeAdjacentAt(2, 5, arr);
if (arraysMatch([3, 4, 10, 11, 12, 13], arr)) console.log('test 4 passed');
else console.log('test 4 FAILED');


// Test 5: Similar to above, but now use negative starting index :
removeAdjacentAt(-3, 2, arr);
if (arraysMatch([3, 4, 10, 13], arr)) console.log('test 5 passed');
else console.log('test 5 FAILED');


// Test 6: Using negative starting index, trying to remove more than array has should
// trigger error :
errorTriggered = false;
try {
    removeAdjacentAt(-3, 4, arr);
}
catch (e) {
    errorTriggered = true;
}
if (errorTriggered) console.log('test 6 passed');
else console.log('test 6 FAILED');


// Test 7: make sure memory reference isn't broken after function modifies array:
let copy = arr;
removeAdjacentAt(0, 1, arr);
if (arraysMatch(arr, copy)) console.log('test 7 passed');
else console.log('test 7 FAILED');

console.timeEnd('check');
