//Exercise 1
/*let end = 5; 
for(let i=1; i<=end; i++){
    console.log(i); 
}*/

//Exercise 2
/*let counter = 0; 
let maxValue = 10; 
let result = 1; 
 
debugger; 
for (counter = 0; counter < maxValue; counter++) { 
    console.log(result); 
    result *= maxValue - counter - 1; 
} 
 
console.log("Final result: ", result);*/

function max(array) { 
    let maxValue = array[0]; 
    for(let i=1; i <= array.length; i++) {
        if(array[i] > maxValue) { 
            maxValue = array[i]; 
        } 
    } 
    return maxValue; 
} 
 
console.log( max([1, 4, 6, 2])); // -> 6 
console.log( max([10, 4, 6, 2])); // -> 6

