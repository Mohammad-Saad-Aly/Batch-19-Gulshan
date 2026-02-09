// function readField(){
//     var getField = document.getElementById('inp')
//     document.writeln(getField.value)
//     getField.value = ""
// }

// function setValue(){
//     var getText = prompt("Enter the text you wanna add in prompt")
//     var getField = document.getElementById('inp')
//     getField.value = getText
// }

var getInp = document.getElementById('inp')

function btnClick(e){
    getInp.value += e 
}

function equalValues(){
    getInp.value = eval(getInp.value)
}   


function clrall(){
    getInp.value = ''
}

function clr(){
    getInp.value = getInp.value.slice(0, -1)
}