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