// function noFunction() {
//     var getBtn = document.getElementById('no')
//     getBtn.className += " no"
// }

// function disapperImage() {
//     var getImage = document.getElementById('blobfish')
//     getImage.className = "main"
// }

// function readMore() {
//     var text = "Slow lorises are a group of several species of strepsirrhine primates which make up the genusNycticebus. They have a round head, narrow snout, large eyes, and a variety of distinctive colorationpatterns that are species-dependent. The hands and feet of slow lorises have several adaptationsthat give them a pincer-like grip and enable them to grasp branches for long periods of time. Slowlorises have a toxic bite, a rare trait among mammals"
//     var getPara = document.getElementById('para2')
//     getPara.innerHTML = text
//     document.getElementById('anc').innerHTML = ''
// }


// function readData() {
//     var getData = document.getElementById('para')
//     console.log(getData.innerText)
// }

function onBulb(){
    var getImage = document.getElementById('bulb')
    getImage.style.width = '180px'
    getImage.src = './images/on.png' 
}

function offBulb(){
    var getImage = document.getElementById('bulb')
    getImage.style.width = '180px'
    getImage.src = './images/off.png' 
}