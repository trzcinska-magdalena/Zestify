function openMenu() {
    let selectors = document.querySelectorAll("header nav .navigation li.open~li");

    for(let i=0; i<selectors.length; i++) {
        console.log(selectors[i]);
        selectors[i].classList.toggle("visible-mobile");
        selectors[i].classList.toggle("hidden-mobile");
        
    }
}

let open = document.getElementById("open");
open.addEventListener('click', openMenu);