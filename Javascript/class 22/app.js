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

function addTask() {
    var getInput = document.getElementById('form12')

    if (getInput.value == '') {
        Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Please enter some value!"
        });
    }
    else {
        getList.innerHTML += `<li class="list-group-item d-flex justify-content-between align-items-center"> <span> ${getInput.value} </span> <span> <button onclick='editList(this)' type="button" class="btn btn-outline-info" data-mdb-ripple-init data-mdb-ripple-color="dark"> Edit </button> <button onclick='delList(this)' type="button" class="btn btn-outline-danger" data-mdb-ripple-init data-mdb-ripple-color="dark"> Delete </button> </span>  </li>`
        getInput.value = ''
    }


}


function delList(item) {

    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!"
    }).then((result) => {
        if (result.isConfirmed) {
            Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
            });
            item.parentNode.parentNode.remove()
        }
    });
}


function editList(item) {
    var updatedValue = prompt("Enter updated value", item.parentNode.parentNode.childNodes[1].textContent)
    item.parentNode.parentNode.childNodes[1].textContent = updatedValue
}