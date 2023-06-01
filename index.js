// 1. 

// function maxOfTwoNumbers(x, y) {
//     if (x >= y) {
//         return x;
//     } else {
//         return y;
//     }
// }
// console.log(maxOfTwoNumbers(3, 9));

//2.

const maxOfThree = function(x, y, z) {
    let max = x;

    if (y > max) {
        max = y;
    }
    if (z > max) {
        max = z;
    }

    return max;
}
 
console.log(maxOfThree(3,12,9));

    
