// multiply each number in the array by 2, using.reduce();

const numbers = [1, 2, 3, 4, 5, 6];

const numbers_doubles = numbers.reduce((acc, num) => {
    acc.push(num*2);
    return acc;
}, []);

console.log("doubled numbers", numbers_doubles);
console.log("numbers", numbers);


// multiply each number in the array by 2, using.map();

const doubledNumbers2 = numbers.map(num => num * 2);
console.log('doubled numbers', doubledNumbers2);
console.log('numbers', numbers);


// return only numbers greater than 3, using .reduce();

const numbersGreaterThan3 = numbers.reduce((acc, num) => {
    num > 3 ? acc.push(num) : acc
    return acc
}, [])

console.log(numbersGreaterThan3);

// // return only numbers greater than 3, using .filter();

const numbersGreaterThan3_v2 = numbers.filter(num => num > 3);
console.log(numbersGreaterThan3_v2);