
function checkerNumber (numbers){
    return function(num){
        return numbers.includes(num)
    }
}
const myNumber = [1,2,3,4,5]
const checknum =checkerNumber(myNumber)
console.log(checknum(3));
console.log(checkerNumber(6))