import menu from './menu.js';

// variables
const buttons = document.querySelectorAll('.nav__button');
const menuContent = document.querySelector('#menu');

menu.forEach( food => {
    const { name, price, img, text } = food;

    menuContent.innerHTML += `
    <article class="food">
        <img class="food__img" src="${img}" alt="">
        <div class="food__info">
            <div class="food__title">
                <h4 class="food__name">${name} </h4>
                <p class="food__price">$${price} </p>
            </div>
            <p class="food__text">${text}</p>
        </div>
    </article>
    `;
});

document.addEventListener('DOMContentLoaded', () => {
    buttons.forEach( button => {

        button.addEventListener('click', e => {

            eliminarSeleccion();

            let selection;
        
            if(e.target.id === 'bebidas') {
                selection = menu.filter( food => food.category === 'bebida' );

            } else if(e.target.id === 'postres'){
                selection = menu.filter( food => food.category === 'postre' );

            } else if(e.target.id === 'pltsFuertes') {
                selection = menu.filter( food => food.category === 'comida-fuerte' );

            } else {
                selection = menu;
                
            }

            button.classList.add('nav__button--select');

            limpiarHTML();

            selection.forEach( food => {
                const { name, text, price, img } = food;

                menuContent.innerHTML += `
                <article class="food">
                    <img class="food__img" src="${img}" alt="">
                    <div class="food__info">
                        <div class="food__title">
                            <h4 class="food__name">${name} </h4>
                            <p class="food__price">$${price} </p>
                        </div>
                        <p class="food__text">${text}</p>
                    </div>
                </article>
                `;
            });
        });
    });
});

function limpiarHTML() {
    while(menuContent.firstChild) {
        menuContent.removeChild(menuContent.firstChild);
    }
}

function eliminarSeleccion() {
    buttons.forEach( button => {
        button.classList.remove('nav__button--select');
    });
}