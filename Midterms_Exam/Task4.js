const memo = {};
function power(base, exp) {
    let Exp = 1;

    for (let i = 0; i < Math.abs(exp); i++) 
        Exp = Exp * base;

    if (exp < 0)
        return 1 / Exp;

    return Exp;
}

console.log(power(2, 5));
console.log(power(2, -2));
