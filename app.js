function toogleMenu(){
    let navbar =document.querySelector('.navbar');
    let burger =document.querySelector('.burger');
    burger.addEventListener('click', () =>{
        navbar.classList.toggle('show-nav');
 } )
} toogleMenu();