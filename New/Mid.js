=
// TASK 1: Recursive Deep Primitive Summation
function sumDeepStrictNumbers(arr) {
    let sum = 0;
    for (const item of arr) {
        if (Array.isArray(item)) {
            // Recurse into nested arrays
            sum += sumDeepStrictNumbers(item);
        } else if (typeof item === 'number' && !Number.isNaN(item)) {
            // Only add strictly typed Numbers, excluding NaN
            sum += item;
        }
        // Implicitly ignores: strings, booleans, null, undefined, NaN
    }
    return sum;
}

// Test Code
const testArray1 = [10, ['5', [true, 5]], null, [undefined, [10, NaN]]];
console.log(sumDeepStrictNumbers(testArray1)); // Expected: 25

// TASK 2: Categorized Inventory Valuation
function getInventoryValuation(inventory) {
    const result = {};
    for (const item of inventory) {
        // Exclude items with zero or negative quantity
        if (item.qty <= 0) continue;

        const value = item.qty * item.price;

        if (result[item.category] === undefined) {
            result[item.category] = 0;
        }
        result[item.category] += value;
    }
    return result;
}

// Test Code
const testInventory = [
    { name: 'Monitor', qty: 2, price: 200, category: 'Tech' },
    { name: 'Mouse', qty: 0, price: 50, category: 'Tech' },
    { name: 'Desk', qty: 1, price: 300, category: 'Furniture' },
    { name: 'Lamp', qty: 2, price: 50, category: 'Furniture' }
];
console.log(getInventoryValuation(testInventory)); // Expected: { Tech: 400, Furniture: 400 }


// TASK 3: Functional Pipeline Composer

function composePipeline(fns) {
    // Returns a function that threads an initial value through each fn left-to-right
    return function(initialValue) {
        return fns.reduce((acc, fn) => fn(acc), initialValue);
    };
}

// Test Code
const add2 = x => x + 2;
const sqr = x => x * x;
const half = x => x / 2;
const pipeline = composePipeline([add2, sqr, half]);
console.log(pipeline(4)); // Expected: 18  → (4+2)=6 → 6²=36 → 36/2=18

// TASK 4: Optimized Recursive Exponentiation
const memo = {};
function power(base, exp) {
    // Handle negative exponents: base^-n = 1 / base^n
    if (exp < 0) return 1 / power(base, -exp);

    // Base case: anything to the power of 0 is 1
    if (exp === 0) return 1;

    // Check cache before computing
    const key = `${base}_${exp}`;
    if (memo[key] !== undefined) return memo[key];

    // Recursive case: base^exp = base * base^(exp-1)
    memo[key] = base * power(base, exp - 1);
    return memo[key];
}

// Test Code
console.log(power(2, 5));  // Expected: 32
console.log(power(2, -2)); // Expected: 0.25



// TASK 5: Schema Validation Exception Handling
class ValidationError extends Error {
    constructor(fields) {
        super();
        this.fields = fields;
    }
}

function validateSchema(data, schema) {
    const invalidFields = [];

    for (const key in schema) {
        const expectedType = schema[key];
        // Flag field if missing OR if its type doesn't match the schema
        if (!(key in data) || typeof data[key] !== expectedType) {
            invalidFields.push(key);
        }
    }

    if (invalidFields.length > 0) {
        throw new ValidationError(invalidFields);
    }
}

function safeValidate(data, schema) {
    try {
        validateSchema(data, schema);
        return 'Valid';
    } catch (err) {
        if (err instanceof ValidationError) {
            // Join the invalid field names into a comma-separated string
            return err.fields.join(', ');
        }
        throw err;
    }
}

// Test Code
const userSchema = { name: 'string', age: 'number', active: 'boolean' };
const userData = { name: 'Alice', age: 'thirty', active: 1 };
console.log(safeValidate(userData, userSchema)); // Expected: "age, active"

// TASK 6: Case-Insensitive Unique Character
function firstUniqueChar(str) {
    const freqMap = {};

    // Build frequency map using lowercase keys, but store the original character
    for (const char of str) {
        const lower = char.toLowerCase();
        if (freqMap[lower] === undefined) {
            // First occurrence: store original character and count 1
            freqMap[lower] = { original: char, count: 1 };
        } else {
            freqMap[lower].count++;
        }
    }

    // Return the original-cased character of the first entry with count of 1
    for (const char of str) {
        if (freqMap[char.toLowerCase()].count === 1) {
            return char;
        }
    }

    return null; // No unique character found
}

// Test Code
console.log(firstUniqueChar('sTreSS')); // Expected: T
console.log(firstUniqueChar('aabbc'));  // Expected: c
