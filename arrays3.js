// multiply each number in the array by 2, using.reduce();

const numbers = [1, 2, 3, 4, 5, 6];

const numbers_doubles = numbers.reduce((acc, num) => {
    acc.push(num*2);
    return acc;
}, []);

console.log("doubled numbers", numbers_doubles);
console.log("numbers", numbers);


// multiply each number in the array by 2, using.map();

const numbers2 = [1, 2, 3, 4, 5, 6];

const doubledNumbers2 = numbers2.map(num => num * 2);
console.log('doubled numbers', doubledNumbers2);
console.log('numbers', numbers2);