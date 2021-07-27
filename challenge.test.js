'use strict';

/* ------------------------------------------------------------------------------------------------
CHALLENGE 1
Write a function that will return a reversed string
example: "Hello World"
Output: "dlroW olleH"
Hint: You can use the array function reverse
------------------------------------------------------------------------------------------------ */

const reverseString = (str) => {
    // Solution code here...

    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"

};

/* ------------------------------------------------------------------------------------------------
CHALLENGE 2
Write a function named addInTheMiddle that will be receive an array and value.
You will require to add that value in the middle of the array
examples:
Input: [1,2,4,5], 3
Output: [1,2,3,4,5]
Input: ['a','b','c','e','f'], 'd'
Output: ['a','b','c','d','e','f']
------------------------------------------------------------------------------------------------ */

const addInTheMiddle = (arr, val) => {
    // Solution code here...
    
    let middle=parseInt(arr.length/2)
    if (parseInt(arr.length/2)!== (arr.length/2)) {
        middle=middle+1
    }
    arr.splice(middle,0,val)
    

    return arr;
};

/* ------------------------------------------------------------------------------------------------
TESTS
All the code below will verify that your functions are working to solve the challenges.
DO NOT CHANGE any of the below code.
Run your tests from the console: jest challenges-02.test.js
------------------------------------------------------------------------------------------------ */

describe('Testing challenge 1', () => {
    test('It should return the reversed version of the input string', () => {
        expect(reverseString('Hello World')).toStrictEqual('dlroW olleH');
        expect(reverseString('rubber ducks dont quack !')).toStrictEqual('! kcauq tnod skcud rebbur');
    });
});

describe('Testing challenge 2', () => {
    test('It should return the array with the provided element added in the middle', () => {
        expect(addInTheMiddle([1, 2, 4, 5], 3)).toStrictEqual([1, 2, 3, 4, 5]);
        expect(addInTheMiddle(['a', 'b', 'c', 'e', 'f'], 'd')).toStrictEqual(['a', 'b', 'c', 'd', 'e', 'f']);
    });
});