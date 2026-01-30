// for (let i = 0; i < pwd; i++) {
//     code = Math.random();
//     if (code > 0.5) {
//         char = String.fromCharCode(Math.floor(((code) * 26)) + 65);
//         // let character = String.fromCharCode(code);
//     }
//     else {
//         char = String.fromCharCode(Math.floor(((code) * 26)) + 97);
//     }
//     pass += char;
// }
// alert("Your Password:  " + pass);


// let length = prompt("Password ki length likho (6 se 8):");

// function generatePassword() {
//   let password = "";
//   // 6 se 8 digits ka random length
//   let length = Math.floor(Math.random() * 3) + 6;
//   for (let i = 0; i < length; i++) {
//     let digit = Math.floor(Math.random() * 10); // 0–9
//     password += digit;
//   }
//   return password;
// }
// // Example
// console.log(generatePassword());

// let str = "50"
// console.log(typeof(+(str)))

// var num = 10
// console.log(num.toString() + 20 )


// var num = 2.3454564534
// console.log(num.toFixed(2))

// var printDate = new Date().toString()
// var copyDate = printDate.slice(16, 24)
// console.log(copyDate)

// var date = new Date().getTime()
// console.log(date)



// var days = ['sun', 'mon', 'tues', 'wed', 'thurs', 'fri', 'sat']
// var date = new Date().getDay()
// console.log(days[date])


var user = prompt("Enter your name")
var check = new Date(prompt("Enter your date of birth")).getTime()
var age = new Date().getTime()
var a = age - check
var formula = a / (1000 * 60 * 60 * 24 * 365)


document.writeln(
    `<hr> ${user} your age is = ${Math.floor(formula)} <hr>`
)









