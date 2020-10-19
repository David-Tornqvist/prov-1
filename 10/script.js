function isDividableByThree(numbers){
    return numbers.filter(x => x % 3 === 0);
}

console.log(isDividableByThree([0,3,5]));