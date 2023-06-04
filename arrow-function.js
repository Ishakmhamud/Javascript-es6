//  old method to write a Function-1

function add (num1, num2){
    return num1 + num2
}
const result = add( 30 , 50)
console.log(result)

//  old method to write a Function-2

const doubleIt = function(number){
    return number * 2
}
const result2 = doubleIt(10)
console.log(result2)

// New method of function in Es6 (single parameter)

const double = (number1) => number1 * 2
const result3 = double(35)
console.log(result3)

// New method of function in Es6 (double parameter)

const joog = (num1,num2) => num1+num2
const result4 = joog(40 ,50)
console.log(result4)

// New method of function in Es6 (no parameter)

const show = () => 55
const result5 = show()
console.log(result5)

// New method of function in Es6 ( if you wanna write more lines within it you can)

const math = (x ,y) =>{
    const sum = x + y
    const diff = x - y
    return sum * diff
}
const result6 = math ( 7,5)
console.log(result6)