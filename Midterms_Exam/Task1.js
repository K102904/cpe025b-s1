function sumDeepStrictNumbers(arr) {
    let arrayko = 0;
    for (const item of arr){
        if (Array.isArray(item)) {
            arrayko += sumDeepStrictNumbers(item);
        } else if (typeof item === 'number' && !Number.isNaN(item))
        {
            arrayko +=item;
        }
    }
    return arrayko;
}

// Test Code
const testArray1 = [10, ['5', [true, 5]], null, [undefined, [10, NaN]]];
console.log(sumDeepStrictNumbers(testArray1));

