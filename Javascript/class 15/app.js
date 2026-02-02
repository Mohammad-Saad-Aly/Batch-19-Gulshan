// function greet(){
//     alert("Welcome user")
// }
// greet()


// function printTable() {
//     for (var i = 1; i <= 10; i++) {
//         document.writeln(`2 x ${i} = ${2 * i} <br>`)
//     }
// }

// printTable()
// document.writeln("<hr> Some text <hr>")
// printTable()


// function print(){
//     document.writeln("hello world")
// }
// print()


// function sum(a, b) {
//     return a + b
// }

// var getValue1 = sum(10, 20)
// var getValue2 = sum(20, 20)
// var getValue3 = sum(30, 20)
// var getValue4 = sum(40, 20)

// console.log(getValue1, getValue2, getValue3, getValue4)

// function check(a, b){
//     return "hello world"
// }

// var getValue = check(10, 20)
// console.log(getValue)


// function sum(a = 2, b = 2) {
//     return a + b
// }

// var getValue = sum(20, 20)
// console.log(getValue)

// function calculator() {
//     var num1 = +prompt("Enter value 1")
//     var num2 = +prompt("Enter value 2")
//     var op = prompt("Enter operator")

//     if (op == "+") {
//         return num1 + num2
//     }
//     else if (op == "-") {
//         return num1 - num2
//     }
//     else if (op == "*" || op == "x") {
//         return num1 * num2
//     }
//     else if (op == "/") {
//         return num1 / num2
//     }
// }

// var getValue = calculator()
// console.log(getValue)

// function calculator(num1, num2, op) {

//     if (op == "+") {
//         return num1 + num2
//     }
//     else if (op == "-") {
//         return num1 - num2
//     }
//     else if (op == "*" || op == "x") {
//         return num1 * num2
//     }
//     else if (op == "/") {
//         return num1 / num2
//     }
// }

// var getValue1 = calculator(+prompt(), +prompt(), prompt("Operator"))
// var getValue2 = calculator(10, 10, '+')
// var getValue3 = calculator(10, 10, '/')
// var getValue4 = calculator(10, 10, 'x')
// console.log(getValue1, getValue2, getValue3, getValue4)

// function factorial(n) {
//     if (n === 0 || n === 1) {
//         return 1
//     }
//     else {
//         return n * factorial(n - 1)
//     }
// }

// var getValue = factorial(6)
// console.log(getValue)

// 6 x 5 x 4 x 3 x 2 x 1 = 720


// 8
// 8 x 7 x 6 x 5 x 4 x 3 x 2 x 1 = 40320

// 5 x 4 x 3 x 2 x 1 = 120

// 1
// 1 x 1 = 1

// 0
// 0 x 1 = 0