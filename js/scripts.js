// Question 1 : Apples and Bananas
// Link: https://edabit.com/challenge/bhanrxz6EKfWR7ApR

// Write a function, .vreplace() that extends the String prototype by replacing all vowels in a string with a specified vowel.

// Examples
// "apples and bananas".vreplace("u") ➞ "upplus und bununus"

// "cheese casserole".vreplace("o") ➞ "chooso cossorolo"

// "stuffed jalapeno poppers".vreplace("e") ➞ "steffed jelepene peppers"
// 
// Notes
// Words will be lowercased.


const a = 'apples and bananas';
const b = 'cheese casserole';
const c = 'stuffed jalapeno poppers';

String.prototype.vreplace = function(vowel) {
    return this.replace(/[aeiou]/g, vowel);     // regex with vowels
}

a.vowel();



// Question 2 :
// Link: https://edabit.com/challenge/Hs4TpDHX57Rqegmgg

// Concatenate Variable Number of Input Arrays
// Create a function that concatenates n input arrays, where n is variable.

// Examples
// concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// concat([1, 2], [3, 4]) ➞ [1, 2, 3, 4]

// concat([4, 4, 4, 4, 4]) ➞ [4, 4, 4, 4, 4]
// resource https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat
 
// line 1 concat([1, 2, 3], [4, 5], [6, 7]) ➞ [1, 2, 3, 4, 5, 6, 7]

// uses an array, spread operator, EJS5 
 
const arr1 = [1,2,3]
const arr2 = [4,5]
const arr3 = [6,7]

const arr4 = [...arr1, ...arr2 , ...arr3] // concating all the items together

console.log(arr4) //arr4 ==> [1, 2, 3, 4, 5, 6, 7]

// line 2  concat([1], [2], [3], [4], [5], [6], [7]) ➞ [1, 2, 3, 4, 5, 6, 7]

const array1 = [1,2];
const array2 = [3,4];

const array3 = [...array1, ...array2] // concating all the items together

//array3 ==> [1, 2, 3, 4]


// Question 3 : 
// Link: https://edabit.com/challenge/HKmJFmZZCX53ff4ke


// The Sweetest Ice Cream
// Create a function which takes an array of instances from the class IceCream and returns the sweetness value of the sweetest icecream.

// Sweetness is calculated from the flavor and number of sprinkles. Each sprinkle has a sweetness value of 1, and the sweetness values for the flavors are as follows:

// Flavours	Sweetness Value
// Plain	0
// Vanilla	5
// ChocolateChip	5
// Strawberry	10
// Chocolate	12

// const Plain = 0       
// const Vanillla = 5    
// const Chocolate = 12 
// const Strawberry = 10 
// const ChocolateChip = 5
// const spinkles = 10

// function myIceCream{
//     sweetestIcecream = {}
// }




