// var username = prompt("Enter your name ")
// document.writeln(username)

// var num1 = +prompt("Enter value", 10)
// var num2 = +prompt("Enter value")
// var add = num1 + num2
// document.writeln(add)

// var user = prompt("Enter your name")
// if(user == "saad"){
//     document.writeln("Welcome Admin")    
// }
// if(user == "hadi"){
//     document.writeln("Welcome Admin")
// }

// var num1 = +prompt("Enter value")
// var num2 = +prompt("Enter value")
// var operator = prompt("Enter your operator")

// if(operator == "+"){
//     document.writeln(num1 + num2)
// }

// if(operator == "-") {
//     document.writeln(num1 - num2)
// }


var student = prompt("Enter your name")
var maths = +prompt("Enter maths number")
var urdu = +prompt("Enter urdu number")
var english = +prompt("Enter english number")
var islamiat = +prompt("Enter islamiat number")
var physics = +prompt("Enter physics number")
var obtainedMarks = maths + urdu + english + islamiat + physics
var percentage = (obtainedMarks / 500) * 100
var grade;

if (percentage >= 80) {
    grade = "A+"
}
else if (percentage >= 70) {
    grade = "A"
}
else if (percentage >= 60) {
    grade = "B"
}
else if (percentage >= 50) {
    grade = "C"
}
else if (percentage >= 40) {
    grade = "D"
}
else {
    grade = "F"
}

document.writeln(
    `<table border='3px' width='70%' align='center'> 
    <tr> 
        <th> NAME </th>
        <th> MATHS </th>
        <th> URDU </th>
        <th> ENGLISH </th>
        <th> ISLAMIAT </th>
        <th> PHYSICS </th>
        <th> OBTAINED MARKS </th>
        <th> PERCENTAGE </th>
        <th> GRADE </th>
    </tr>

    <tr> 
        <td> ${student} </td>
        <td> ${maths} </td>
        <td> ${urdu} </td>
        <td> ${english} </td>
        <td> ${islamiat} </td>
        <td> ${physics} </td>
        <td> ${obtainedMarks} </td>
        <td> ${percentage.toFixed(2)} </td>
        <td> ${grade} </td>
    </tr>

    </table>`
)
