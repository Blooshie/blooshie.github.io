let paragrafi = document.querySelectorAll('.article p');
let gumb = document.querySelectorAll('.article button');
let social = document.querySelectorAll('#footer img');
console.log(social);
let artikli = document.querySelectorAll('.article');
window.onload = function() {

    for (let index = 0; index < paragrafi.length; index++) {
        const element = paragrafi[index];
        setTimeout(() => { element.style.opacity = 1 }, 500);

    }

    for (let index = 0; index < artikli.length; index++) {
        if (index % 2) {
            artikli[index].style.left = "50vw";
        } else {
            artikli[index].style.left = "0px";
        }

    }

    for (let index = 0; index < social.length; index++) {
        social[index].style.borderRadius = "48px";
    }


}
var i = 0;
let btn = document.getElementById('js-button');
btn.addEventListener("click", shift);

function shift() {
    if (i % 2 == 0) {
        for (let index = 0; index < artikli.length; index++) {
            if (index % 2) {
                artikli[index].style.left = "0vw";
            } else {
                artikli[index].style.left = "50vw";
            }

        }

    } else {
        for (let index = 0; index < artikli.length; index++) {
            if (index % 2) {
                artikli[index].style.left = "50vw";
            } else {
                artikli[index].style.left = "0px";
            }

        }
    }
    i++;
}