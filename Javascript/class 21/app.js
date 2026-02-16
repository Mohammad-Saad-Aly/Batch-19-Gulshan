// function applyCSS(){
//     var getPara = document.getElementById('para')
//     getPara.style.backgroundColor = "black"
//     getPara.style.color = "white"
// }


// var arr = ["abcd", "xyz", "123"]
// for(var i=0; i < arr.length; i++){
//     document.writeln(arr[i] + "<br>")
// }


// function applyCSS() {
//     var getParas = document.getElementsByTagName('p')    
//     for (var i = 0; i < getParas.length; i++) {
//         getParas[i].className = "amirAnsari"
//         getParas[i].style.color = "red"
//     }
// }


function applyCSS() {
    var getDiv = document.getElementById('amir')
    var getPars = getDiv.getElementsByTagName('p')
    for (var i = 0; i < getPars.length; i++) {
        getPars[i].style.transition = "4s"
        getPars[i].style.backgroundColor = "black"
        getPars[i].style.color = "aqua"
    }
}