document.getElementById('click').onclick = function () {
    window.open("home.html")
}


function starttotype(){
    var typed = new Typed('#text-2', {
    strings: [' searching for An experienced web developer', ' searching for innovative problem solver', 'A passionate engineer','visit the portfolio to know me by clicking below.',],
    typeSpeed: 40,
    backSpeed: 40,
    cursorChar: '',
});
}
setTimeout(starttotype,4500)
// function appear(){
//     document.getElementById('click').style.opacity="1";
// }
// setTimeout(appear,24000)