function openMenu() {
    let selectors = document.querySelectorAll("header .container .navigation .navigation__item--open~li");

    for(let i=0; i<selectors.length; i++) {
        console.log(selectors[i]);
        selectors[i].classList.toggle("navigation__item--visible-mobile");
        selectors[i].classList.toggle("navigation__item--hidden-mobile");
        
    }
}

let open = document.getElementById("open");
open.addEventListener('click', openMenu);


document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});