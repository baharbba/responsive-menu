const navShow = () => {
    const burger = document.querySelector('.burger');
    const nav = document.querySelector('.mid-nav');
    const links = document.querySelectorAll('.mid-nav li');

    burger.addEventListener('click',()=>{nav.classList.toggle('nav-active');

    links.forEach((link,index)=>{
        link.style.animation = 'linksFade 0.5s ease forwards ${index /5 +0.2}s';
    });
});
}

navShow();