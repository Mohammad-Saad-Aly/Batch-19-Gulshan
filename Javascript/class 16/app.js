// var str = "University of karachi"
// var convertToArray = str.split(' ').join(' ')
// console.log(convertToArray)

// let password;
// let isValid = false;

// while (!isValid) {
//     password = prompt("Enter your password:");

//     // Rule 1: Minimum length 6
//     if (password.length < 6) {
//         alert("Password must be at least 6 characters long.");
//         continue;
//     }

//     // Rule 2: Should not start with a number
//     let firstCharCode = password.charCodeAt(0);
//     if (firstCharCode >= 48 && firstCharCode <= 57) {
//         alert("Password should not start with a number.");
//         continue;
//     }

//     let hasAlphabet = false;
//     let hasNumber = false;

//     // Rule 3: Must contain alphabets and numbers
//     for (let i = 0; i < password.length; i++) {
//         let code = password.charCodeAt(i);

//         // A-Z or a-z
//         if (
//             (code >= 65 && code <= 90) ||
//             (code >= 97 && code <= 122)
//         ) {
//             hasAlphabet = true;
//         }

//         // 0-9
//         if (code >= 48 && code <= 57) {
//             hasNumber = true;
//         }
//     }

//     if (!hasAlphabet || !hasNumber) {
//         alert("Password must contain both alphabets and numbers.");
//         continue;
//     }

//     // If all conditions are satisfied
//     isValid = true;
//     alert("Password accepted!");
// }


// function foo(){
//     var test = "hello world"
//     console.log('local variable ==> ', test)
// }
// foo()
// console.log(test)


// var test = "hello world"

// function foo() {
//     test = "hello smit"
//     console.log("inside function ", test)
// }


// foo()
// console.log("outside function", test)


// var num = 5
// function updateNum(){
//     num = num + 10
//     console.log(num)
// }

// console.log("outer", num)
// updateNum()


// var num = 6
// if (num == 5) {
//     console.log("han bhai 5 hi hai.")
// }
// else if (num == 6) {
//     console.log("6 hai bhai")
// }
// else {
//     console.log("nahi 5 nahi hai.")
// }


// var user = prompt("Enter your name")
// switch (user) {
//     case "saad":
//         console.log("Welcome admin")
//         break;
//     case "rehman":
//         console.log("Welcome Employee")
//         break;
//     case "shivangi":
//         console.log("Bhangi saaley")
//         break
//     default:
//         console.log("random aaya")
// }


// var userAge = +prompt("Enter your age")

// switch (true) {
//     case userAge >= 60:
//         console.log("retired")
//         break
//     case userAge >= 18:
//         console.log("you are eligible for Job")
//         break;
//     case userAge < 18:
//         console.log("you are not eligible for job")
//         break;
// }


var colorName = prompt("Enter your color name")

switch (colorName) {
    case colorName:
        document.body.style.backgroundColor = colorName

}



// switch (colorName) {
//     case 'blue':
//         document.body.style.backgroundColor = 'blue'
//         break
//     case 'red':
//         document.body.style.backgroundColor = 'red'
//         break;
// }











