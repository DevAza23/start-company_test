let mouse = document.querySelector('.part-one_btn');

mouse.addEventListener('mouseover', () => {
    mouse.style.backgroundColor = '#2bff00';
});



mouse.addEventListener('mouseleave', () => {
    mouse.style.backgroundColor = 'white';
});


mouse.addEventListener('touchstart', () => {
    mouse.style.backgroundColor = '#2bff00';
});

mouse.addEventListener('touchend', () => {
    mouse.style.backgroundColor = 'white';
});














mouse.addEventListener('click', () => {
    mouse.style.transition = 'transform 0.2s, background-color 0.2s';
    mouse.style.transform = 'scale(0.95)';
    mouse.style.backgroundColor = 'white';
    mouse.innerHTML = 'goood'

    setTimeout(() => {
        mouse.style.transform = 'scale(1)';
        mouse.style.backgroundColor = 'green';
    }, 200);

    setTimeout(() => {
        mouse.style.transition = '';
        mouse.innerHTML = 'Explore'
    }, 400);
});



function adjustLayout() {
    const width = window.innerWidth;
    const navList = document.querySelector('.nav-list');
    const burger = document.querySelector('.burger');
    const partOneFather = document.querySelector('.part-one-father');
    const partOneImg = document.querySelector('.part-one-img');

    if (width < 768) {
        burger.style.display = 'flex';
        navList.style.display = 'none';
        partOneFather.style.flexDirection = 'column';
        partOneFather.style.textAlign = 'center';
        partOneImg.style.display = 'none';
    } else {
        burger.style.display = 'none';
        navList.style.display = 'flex';
        partOneFather.style.flexDirection = 'row';
        partOneFather.style.textAlign = 'left';
        partOneImg.style.display = 'block';

    }
}

document.querySelector('.burger').addEventListener('click', () => {
    const navList = document.querySelector('.nav-list');
    if (navList.style.display === 'flex') {
        navList.style.display = 'none';
    } else {
        navList.style.display = 'flex';
    }
});

window.addEventListener('resize', adjustLayout);
window.addEventListener('load', adjustLayout);