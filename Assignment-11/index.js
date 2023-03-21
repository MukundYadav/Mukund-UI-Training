obj = {
    add: (num1,num2) => {
        var sum = num1+num2;
        return sum;
    },
    sub: (num1,num2) => {
        var diff = num1 - num2;
        return diff;
    },
    mul: (num1,num2) => {
        var product = num1 * num2;
        return product;
    },
    div: (num1,num2) => {
        var quotient = num1 / num2;
        return quotient;
    },
}

console.log(obj.add(1,2));