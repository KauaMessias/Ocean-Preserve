const btnMobile = document.getElementById('btn-mobile');

function toggleMenu(){
    const nav = document.getElementById('navigation');
    nav.classList.toggle('active');
}

btnMobile.addEventListener('click', toggleMenu);