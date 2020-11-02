window.addEventListener('DOMContentLoaded', () => {

    //Movement Animation to happen
    const card = document.querySelector('.card');
    const container = document.querySelector('.container');

    const sneaker = document.querySelector('.sneaker__img');
    const name = document.querySelector('.sneaker__name');
    const description = document.querySelector('.sneaker__description');
    const sizes = document.querySelector('.sneaker__sizes');
    const purchase = document.querySelector('.sneaker__purchase');

    //Moving Animation Event
    container.addEventListener('mousemove', (evt) => {
        let xAxis = (evt.pageX - (window.innerWidth / 2)) * 0.03;
        let yAxis = ((window.innerHeight / 2) - evt.pageY) * 0.03;
        card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
    })

    container.addEventListener('mouseenter', (evt) => {

        sneaker.style.transform = 'translateZ(120px) rotateZ(10deg)';
        name.style.transform = 'translateZ(100px)';
        description.style.transform = 'translateZ(80px)';
        sizes.style.transform = 'translateZ(70px)';
        purchase.style.transform = 'translateZ(60px)';

    })

    //Restore positions
    container.addEventListener('mouseleave', (evt) => {

        card.style.transform = `rotateY(${0}deg) rotateX(${0}deg)`;
        sneaker.style.transform = 'translateZ(0px)';
        name.style.transform = 'translateZ(0px)';
        description.style.transform = 'translateZ(0px)';
        sizes.style.transform = 'translateZ(0px)';
        purchase.style.transform = 'translateZ(0px)';
    })

})