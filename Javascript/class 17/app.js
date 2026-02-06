// var i = 1
// while(i <= 10){
//     document.writeln(i + "<br>")
//     i++
// }

// var i = 1
// while (i <= 10) {
//     document.writeln(`2 x ${i} = ${2 * i} <br>`)
//     i++
// }

// var i = 21
// do {
//     document.writeln(i + "<br>")
//     i++
// }
// while (i <= 20)


/*

var choice;
do {
    console.log("Menu Options:");
    console.log("1. Play game");
    console.log("2. View settings");
    console.log("3. Exit");
    choice = parseInt(prompt("Enter your choice:"));
} while (choice !== 3);
console.log("Goodbye!");

*/

// function clickMe(){
//     alert("Hello world from Function")
// }


// function sum(){
//     var num1 = +prompt("Enter number 1")
//     var num2 = +prompt("Enter number 2")
//     console.log(num1 + num2)
// }

// function clickMe(){
//     var getField = document.getElementById('inp')
//     console.log(getField.value)
// }

var getField1 = document.getElementById('num1')
var getField2 = document.getElementById('num2')
var getPara = document.getElementById('text')

function add() {
    getPara.innerHTML = Number(getField1.value) + Number(getField2.value)
}

function sub() {
    getPara.innerHTML = Number(getField1.value) - Number(getField2.value)

}

function div() {
    getPara.innerHTML = Number(getField1.value) / Number(getField2.value)

}

function mul() {
    getPara.innerHTML = Number(getField1.value) * Number(getField2.value)
}