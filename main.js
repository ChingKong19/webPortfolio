// Dropdown function from Skills container
function dropdown() {
    var dropdown = document.getElementById("dropdown");
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}
function dropdownTwo() {
    var dropdown = document.getElementById("dropdownTwo");
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}
function dropdownThree() {
    var dropdown = document.getElementById("dropdownThree");
    if (dropdown.style.display === "none") {
        dropdown.style.display = "block";
    } else {
        dropdown.style.display = "none";
    }
}

// Mobile Left Navigation

function leftNavOpen(){
    const slideright = document.getElementById('leftnav');
    slideright.style.left = '0';
}
function leftNavClose(){
    const slideleft = document.getElementById('leftnav');
    slideleft.style.left = '-50%';
}


function openCard(){
    let displayCard = document.getElementById('displayCard');
    displayCard.style.display = 'block';
}
function disposeCard(){
    let disposeCard = document.getElementById('displayCard');
    disposeCard.style.display = 'none';
}

function openCardTwo(){
    let displayCard = document.getElementById('displayCardTwo');
    displayCard.style.display = 'block';
}
function disposeCardTwo(){
    let disposeCard = document.getElementById('displayCardTwo');
    disposeCard.style.display = 'none';
}

function openCardThree(){
    let displayCard = document.getElementById('displayCardThree');
    displayCard.style.display = 'block';
}
function disposeCardThree(){
    let disposeCard = document.getElementById('displayCardThree');
    disposeCard.style.display = 'none';
}


function darkmode(){
    let item = document.querySelectorAll('.item');
    let leftnav = document.querySelector('.leftnav-container');
    let darkMode = document.getElementById('darkmode');
    let lightMode = document.getElementById('lightmode');

    item[0].classList.add('dark-theme');
    item[1].classList.add('dark-theme');
    item[2].classList.add('dark-theme');
    item[3].classList.add('dark-theme');
    item[4].classList.add('dark-theme');
    item[5].classList.add('dark-theme');
    item[6].classList.add('dark-theme');
    item[7].classList.add('dark-theme');
    item[8].classList.add('dark-theme');
    leftnav.classList.add('dark-theme');
    
    darkMode.style.display = 'none';
    lightMode.style.display = 'block';
}
function lightmode(){
    let item = document.querySelectorAll('.item');
    let leftnav = document.querySelector('.leftnav-container');
    let darkMode = document.getElementById('darkmode');
    let lightMode = document.getElementById('lightmode');

    item[0].classList.remove('dark-theme');
    item[1].classList.remove('dark-theme');
    item[2].classList.remove('dark-theme');
    item[3].classList.remove('dark-theme');
    item[4].classList.remove('dark-theme');
    item[5].classList.remove('dark-theme');
    item[6].classList.remove('dark-theme');
    item[7].classList.remove('dark-theme');
    item[8].classList.remove('dark-theme');
    leftnav.classList.remove('dark-theme');

    lightMode.style.display = 'none';
    darkMode.style.display = 'block';
}

// Slide when intersecting(EXAMPLE ONLY since it doesn't work)

// const observer = new IntersectionObserver(entries => (
//     entries.forEach(entry => {
//         if(entry.isIntersecting){
//             document.querySelector('.owner-img').classList.add('animation-left');
//         }
//     })
// ));

// observer.observe(document.querySelector('.about-container'));