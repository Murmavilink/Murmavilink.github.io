const headers = document.querySelectorAll("[data-name='accordeon-title']");



headers.forEach(function(item){ 
    item.addEventListener('click', function() {
        
        this.classList.toggle('title-active');
        this.nextElementSibling.classList.toggle('hidden');
       
    });
});






const burgerButton = document.querySelector('.button-burger');

burgerButton.addEventListener('click', function() {
    document.querySelector('.menu').classList.toggle('menu-active');
}); 