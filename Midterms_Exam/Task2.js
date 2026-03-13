function getInventoryValuation(inventory) {
    const resulta = {};
    for (const item of inventory) {
    if (item.qty <= 0) continue;
    
    const balyu = item.qty * item.price;

    if (resulta[item.category] === undefined) {
        resulta[item.category] = 0;
    }
    resulta[item.category] += balyu;
    }
return resulta;
}

// Test Code
const testInventory = [
    { name: 'Monitor', qty: 2, price: 200, category: 'Tech' },
    { name: 'Mouse', qty: 0, price: 50, category: 'Tech' },
    { name: 'Desk', qty: 1, price: 300, category: 'Furniture' },
    { name: 'Lamp', qty: 2, price: 50, category: 'Furniture' }
];
console.log(getInventoryValuation(testInventory)); 
