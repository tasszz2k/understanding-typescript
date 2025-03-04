console.log('Happy developing ✨')

const add = (...numbers: number[]) => {
  return numbers.reduce((curResult, curValue) => {
    return curResult + curValue;
  }, 0);
}

const addedNumbers = add(5, 10, 2, 3.7);
console.log(addedNumbers);

const person = {
  firstName: "John",
  age: 30
}

const {firstName: userName, age} = person;

console.log(userName, age);