// document.childNodes[1].childNodes[2].childNodes[1].childNodes[1].textContent = "hello saad"

// var getUl = document.getElementById('list')
// getUl.lastChild.textContent = "hello smit"

// var getList2 = document.getElementById('list2')
// console.log(getList2.firstElementChild)

// function check(){
//     var getInp = document.getElementsByTagName('input')
//     console.log(getInp[0].removeAttribute('id'))
// }

// attributes -- sare 
// hasAttribute -- true false
// getAttribute -- balke uske andar ki value
// setAttribute -- set karwa dega attribute

// todo app 
// CRUD operaions

// c create
// r read 
// u update
// d delete

var getList = document.getElementById('list')

function addTask(){
    var getInput = document.getElementById('form12')
    getList.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center"> <span> ${getInput.value} </span> <span> <button type="button" class="btn btn-outline-info" data-mdb-ripple-init data-mdb-ripple-color="dark"> Edit </button> <button type="button" class="btn btn-outline-danger" data-mdb-ripple-init data-mdb-ripple-color="dark"> Delete </button> </span>  </li>`
    getInput.value = ''
}

