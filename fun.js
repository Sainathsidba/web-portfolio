document.getElementById('click').onclick = function () {
    window.open("home.html","_blank")
}


function starttotype(){
    var typed = new Typed('#text-2', {
    strings: [' searching for An experienced web developer', ' searching for innovative problem solver', 'A passionate engineer','if your visit is in search of an software developer'],
    typeSpeed: 40,
    backSpeed: 40,
    cursorChar: '',
    loop: true,
});
}
setTimeout(starttotype,4500)