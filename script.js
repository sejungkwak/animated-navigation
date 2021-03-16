const btn = document.querySelector('.toggle');
const box = document.querySelector('.container');
const liItem = document.querySelectorAll('.nav-item');

btn.addEventListener('click', () => {
    box.classList.toggle('active');
    liItem.forEach((item) => 
    item.classList.toggle('rotating'));
})