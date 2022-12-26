const carMarkers = ['ford', 'toyata', 'chevy'];
const dates = [new Date(), new Date()];

const carsByMake: string[][] = [];

//help with inference whem extracting values

const car = carMarkers[0];
const myCar = carMarkers.pop();

//Prevent incompatible values

carMarkers.push(100);

//Help with 'map

carMarkers.map((car: string): string => {
  return car.toUpperCase();
});

//Flexible types

const importantDates: (Date | string)[] = [new Date()];
importantDates.push('2030-10-10');
importantDates.push(new Date());
