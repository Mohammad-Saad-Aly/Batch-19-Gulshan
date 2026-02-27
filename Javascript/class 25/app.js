// array of objects

// var mobiles = [
//     {
//         p_id: "01",
//         p_name: "iPhone",
//         p_price: 85000,
//         p_color: "black",
//         p_img: "https://assets.swappie.com/cdn-cgi/image/width=600,height=600,fit=contain,format=auto/swappie-iphone-12-white.png?v=13604f91"
//     },
//     {
//         p_id: "02",
//         p_name: "samsung",
//         p_price: 185000,
//         p_color: "gray",
//         p_img: "https://images.samsung.com/is/image/samsung/p6pim/pk/sm-s731bdbvpkd/gallery/pk-galaxy-s25-fe-sm-s731-sm-s731bdbvpkd-thumb-548713584"
//     },
//     {
//         p_id: "03",
//         p_name: "pixel",
//         p_price: 75000,
//         p_color: "white",
//         p_img: "https://lh3.googleusercontent.com/tj4SW73b7OsidTNijXYIDwbhufBRp_CO4v1oGbuVMeRtsEdDvyiZFM7tnRyci-j1bEeAe_8Eektt2Aq5_6AL0YkgOX92PmQtAA=s0"
//     }
// ]

// var getDiv = document.getElementById('main')

// for (var i = 0; i < mobiles.length; i++) {
//     var data = mobiles[i]
//     getDiv.innerHTML += `<div class="card mb-3" style="max-width: 540px;">
//   <div class="row g-0">
//     <div class="col-md-4">
//       <img
//         src=${data.p_img}
//         alt="Trendy Pants and Shoes"
//         class="img-fluid rounded-start"
//       />
//     </div>
//     <div class="col-md-8">
//       <div class="card-body">
//         <h5 class="card-title">${data.p_id}</h5>
//         <p class="card-text">

//         ${data.p_name}
//         </p>
//         <p class="card-text">
//           <small class="text-muted">${data.p_price}</small>
//         </p>
//       </div>
//     </div>
//   </div>
// </div>`
// }




// for (var i = 0; i < mobiles.length; i++) {
//     var data = mobiles[i]
//     for (var key in data) {
//         document.writeln(data[key] + "<br>")
//     }
//     document.writeln("<hr>")
// }


// -----------------------------------------------------------------------


var questions = [
    {
        question: 'What does HTML stand for?',
        option1: 'Hyperlinks and Text Markup Language',
        option2: 'Hypertext Markup Language',
        option3: 'Home Tool Markup Language',
    },
    {
        question: 'Who is making the Web standards?',
        option1: 'Google',
        option2: 'The World Wide Web Consortium',
        option3: 'Microsoft',
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        option1: '<heading>',
        option2: '<h6>',
        option3: '<h1>',
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        option1: '<linebreak>',
        option2: '<br>',
        option3: '<break>',
    },
    {
        question: 'What is the correct HTML for adding a background color?',
        option1: '<body bg="yellow">',
        option2: '<background>yellow</background>',
        option3: '<body style="background-color:yellow;">',
    },
    {
        question: 'Choose the correct HTML element to define important text:',
        option1: '<strong>',
        option2: '<b>',
        option3: '<i>',
    },
    {
        question: 'Choose the correct HTML element to define emphasized text:',
        option1: '<italic>',
        option2: '<i>',
        option3: '<em>',
    },
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        option1: '<a>http://www.w3schools.com</a>',
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
    },
    {
        question: 'Which character is used to indicate an end tag?',
        option1: '*',
        option2: '/',
        option3: '<',

    }
]


var getQuesion = document.getElementById('ques')

var opt1 = document.getElementById('opt1')
var opt2 = document.getElementById('opt2')
var opt3 = document.getElementById('opt3')

var index = 0

function next() {
    getQuesion.innerText = questions[index].question
    opt1.innerText = questions[index].option1
    opt2.innerText = questions[index].option2
    opt3.innerText = questions[index].option3
    index++
}

next()