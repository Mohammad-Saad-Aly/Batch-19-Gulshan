// var word = prompt("Enter any word")
// var copy = '';

// for (var i = word.length - 1; i >= 0; i--) {
//     copy += word[i]
// }

// if (copy == word) {
//     console.log(word+ " word is palindrome")
// }
// else {
//     console.log(word + " word is not palindrome")
// }


// var students = ['Sameer', "Ahmed", "shayan", "Jamal", "Ataullah"]
// var teacher = ["Saad", "Ali"]


// for (var i = 0; i < students.length; i++) { // sameer

//     for (j = 0; j < teacher.length; j++) {
//         console.log(students[i] + teacher[j]) 
//         // sameer Saad
//         // sameer Ali
//     }

// }


// for(var i=0; i < students.length; i++){
//     console.log(students[i] + " " + teacher )
// }

// sameer Saad, ali
// ahmed Saad, ali



// sameer Saad
// sameer Ali

// Ahmed Saad
// Ahmed Ali




// Sameer Saad
// Ahmed Saad
// and so on ...



// var names = ["Ali", "Rehman", "Shakir", "Jalal", "hadi"]
// var items = ["Chairs", "mouse", "keyboard", "speaker", "lcd", "CPU"]


// for (var i = 0; i < names.length; i++) {

//     if (names[i] == "Ali") {
//         for (var j = 2; j < 4; j++) {
//             document.writeln(names[i] + " " + items[j] + "<br>")
//         }
//     }
//     else {
//         for (var j = 0; j < items.length; j++) {
//             document.writeln(names[i] + " " + items[j] + "<br>")
//         }
//     }


// }

// for(var i = 1; i <= 100; i++){
//     document.writeln(i + "<br>")
// }

// 1 2 3 4 5 6 7 8 9 10
// 11 12 13 14 15 16 17 18 19 20

// 1
// 11
// 21
// 31
// 41
// 51
// 61
// 71 ------------- 80
// 81 ------------- 90
// 91 ------------- 100

// document.writeln("<table border='1px' align='center' width='70%'>")

// for (var i = 1; i <= 100; i = i + 10) {
//     document.writeln("<tr align='center'>")
//     for(var j = i; j < i + 10; j++){
//         document.writeln("<td>" + j + " " + "</td>") 
//     }
//     document.writeln("</tr>")
// }

// document.writeln("</table>")


// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5
// 1 2 3 4 5

// 5
// 5 4
// 5 4 3
// 5 4 3 2
// 5 4 3 2 1


// *
// * *
// * * *
// * * * *
// * * * * *


for (var i = 1; i <= 5; i++) {

    for (var j = 1; j <= i; j++) {
        document.writeln("*" + " ")
    }
    document.writeln("<br>")
}