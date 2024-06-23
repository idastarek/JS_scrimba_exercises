// Challenge: 
// Use reduce() to sum the weights of all the cars
// Stretch goal: 
// Use reduce to sum the weights of only the electric cars 

const cars = [
    { name: "Toyota", isElectric: false, weight: 1320 },
    { name: "Ford", isElectric: false, weight: 1400 },
    { name: "Volkswagen", isElectric: false, weight: 1370 },
    { name: "Honda", isElectric: false, weight: 1375 },
    { name: "Tesla", isElectric: true, weight: 1750 },
    { name: "BMW", isElectric: true, weight: 1350 },  
  ];
  
  const weights = cars.reduce((accumulator, car) => {
      console.log(
          `accumulator: ${accumulator},
          cars weight: ${car.weight}
      `);
      return accumulator + car.weight;
  },0);
  
  console.log(weights);
  
  const weights_electric = cars.reduce((accumulator, car) => {
      if (car.isElectric) {
          console.log(`
          accumulator: ${accumulator}
          cars weight: ${car.weight}
      `);
      return accumulator + car.weight;
      }
      return accumulator
  },0);
  
  console.log(weights_electric);