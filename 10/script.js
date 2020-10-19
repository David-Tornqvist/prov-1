function isDividableByThree(numbers){
    return numbers.filter(element => element % 3 === 0);
}

console.log(isDividableByThree([0,3,5]));