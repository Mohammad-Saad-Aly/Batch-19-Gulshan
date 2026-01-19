// var user = "Saad"; // initialization
// var userName; // declaration


// var user;
// console.log(user) // undefined

// user = "Ahmed"
// console.log(user) // ahmed

// user = "Rehman"
// console.log(user) // rehman


// what is the diff bw undefined and (is not defined)

// is not defined ==> error
// undefined ==> datatype

// var admin;
// console.log(admin)

// var str = "Saad"
// var num = 10
// var bool = true
// var floatingNum = 90.5
// console.log(str, num, bool, floatingNum)


// var legal or illegal

// illegal ==> sare special characters
// _ and $ legal
// number se start nahi hona chahye ==> illegal
// number agar bech main ajae ya akhir mein aaaje to legal  
// var pearls;

// console.log(10 + 3 * 4 + (10 * 2))

// var num = 5
// var eq = num++ + ++num
// console.log(eq)


// var num = 3
// num += 5
// num = num + 5
// console.log(num)

// var str = "Saad"
// str *= 10
// console.log(str)


// var msg = "Enter your name"
// var storedValue = +prompt(msg, "Ahmed")
// console.log(typeof(''))

// parseInt(prompt("Enter any value"))
// parseFloat(prompt("Enter any value"))
// Number(prompt("Enter your number"))

// var username = prompt("Enter your username")
// var password = prompt("Enter your password")

// var myUsername = "admin"
// var myPass = "123456"

// if(username == myUsername || password == myPass ){
//     console.log("login success")
// }
// else {
//     console.log("invalid credentials")
// }


// var admin = prompt("Enter your name")

// if(admin == "taha" || admin == "rafay"){
//     console.log("login Okay")
// }
// else {
//     console.log("invalid Okay")
// }


// if (admin == "saad") {
//     console.log("login success")
// }
// else if (admin == "fasih") {
//     console.log("login success")
// }
// else if (admin == "rehman") {
//     console.log("login success")
// }
// else {
//     console.log("invalid")
// }


// 0
// false
// undefined
// ''
// null
// NaN

// console.log(
//     false && 0
// )


// if (6 >= 6) {

//     if (5 === "5") {
//         console.log("dekho main aagaya")
//     }
//     else {
//         console.log("andar wala galat hogaya")
//     }

// }
// else {
//     console.log("bahar wala galat hogaya")
// }

// var user = prompt("Enter pehle aane wala banda")
// var arr = ["bilal", "ahmed"]
// arr.unshift(user)
// console.log(arr)


// var arr = []

// arr.push("Bilal")
// arr.push("Rehman")
// arr.push("Osama")

// console.log(arr)

var phones = ["apple", "samsung", "motorola", "iphone"]
var newArray = phones.slice(1)
console.log(newArray)


// var str = "Mohammad Saad Ali"

// var copiedStr = str.slice(0, 1)
// var remain = str.slice(1)

// console.log(remain)



// phones.splice(1, 3, "nokia")

// document.writeln('<select>')
//     for (var i = 0; i < 4; i++) {
//         document.writeln(
//             `
//                 <option> ${phones[i]} </option> 
            
//             `
//         )
//     }
// document.writeln('</select>')


// 0 apple
// 1 sam
// 2 moto
// 3 iphone


// document.writeln(
//     `<select>
//         <option> ${phones[0]} </option>
//         <option> ${phones[1]} </option>
//         <option> ${phones[2]} </option>
//         <option> ${phones[3]} </option>
//     </select>
//     `
// )