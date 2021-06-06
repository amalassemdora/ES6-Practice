//#region Task 1
/*
 *Swap the values of x and y using destructuring
 */
console.log("************ Task 1 ************");
let num1 = 1,
    num2 = 2;
console.log(`Before Swapping\nnumber1 : ${num1}\nnumber2 : ${num2}\n`);
//Swapping
[num1, num2] = [num2, num1];
console.log(`After Swapping\nnumber1 : ${num1}\nnumber2 : ${num2}\n`);
//#endregion

//#region  Task2
/*
*Using rest parameter and spread operator return max value 
from any array 
note: array length is not fixed
Bonus: return min and max value and display each of them 
separately after function call
*/
console.log("************ Task 2 ************");

function arr_Max(...arr) {

    return Math.max(...arr);
}
let arr1 = [1, 6, 4, 7, 10];
//let max = arr_Max(...arr1);
console.log(`The max argument in array is ${arr_Max(...arr1)}`);
console.log(`The min argument in array is ${Math.min(...arr1)}`);

//#endregion

//#region  Task3
/*
 *array api methods
 */
console.log("************ Task 3 ************");
var fruits = ["apple", "strawberry", "banana", "orange", "mango"];
//test that every element in the given array is a string and out it
console.log("The Sting element in fruits.");
if (fruits.every(i => (typeof i === "string"))) {
    fruits.forEach((item, index) => {
        console.log(`${item} is String`);
    });
}
//test that some of array elements starts with "a" ann out it 
console.log("The element in fruits stars with 'a'.");
if (fruits.some((item) => (item.startsWith("a")))) {
    fruits.forEach((item, index) => {
        if (item.startsWith("a")) {
            console.log(`${item} stars with 'a'`)
        }
    });
}
//generate new array filtered from the given array with only elements that starts with "b" or "s"
console.log("New array depdends on the element in fruits that stars with 'b' or 's'.");

const arr_b_s = fruits.filter((fruits) => fruits.startsWith("b") | fruits.startsWith("s"));

console.log(`New array : ${arr_b_s}`);

//generate new array, each element of the new array contains a string declaring that you like the give fruit element
console.log("New array that like fruits.");
const new_fruits = fruits.map((item, index) => {
    return item;
})

new_fruits.forEach((item, index) => {
    console.log(item);
});

//#endregion
//#region task 4
/*
 *information must contains courseName, courseDuation,courseOwner
 */
console.log("************ Task 4 ************");

function Course(
    options = {
        courseName,
        courseDuration,
        courseOwner,
    }
) {
    //Assign default value to arguments
    let defaults = {
        courseName: "C#",
        courseDuration: 36,
        courseOwner: "ITI",
    };
    let courseInfo = Object.assign({}, defaults, options);
    for (const prop in options) {
        if (defaults.hasOwnProperty(prop) == false) {
            console.error("the prameter number is equal or less than 3");
            return 0;
        }
    }
    console.log(courseInfo);
}
//with three arguments
Course({
    courseName: "ES6",
    courseDuration: 18,
    courseOwner: "ITI Menofia",
});
//with two arguments
Course({
    courseName: "ES6",
    courseDuration: 18,

});
//with one arguments
Course({
    courseOwner: "ITI Menofia",
});
//without any arguments
Course({});
//#endregion