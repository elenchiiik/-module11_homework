function two(x) {
    return function four(y) {
        return x + y;
    }
}

const x = two(2);
console.log(x(4));
console.log(x(3));

const y = two(4);
console.log(y(4));
console.log(y(6));