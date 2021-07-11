//MENU BUTTON SCRIPT
    let btn = document.getElementById('menuBtn')
    btn.addEventListener('click', togleMenu);
    function togleMenu(){
        btn.classList.toggle('activeMenuBtn');
        document.getElementById('navMenuContainer').classList.toggle('activenavMenuContainer');
    }
    let menuLinks = document.getElementsByClassName("navItem");
    for (let i = 0; i < menuLinks.length; i++) {
        menuLinks[i].addEventListener('click', togleMenu);
    }