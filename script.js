const modal= document.querySelector(".thankYu");

const openModalBtn = document.querySelector(".btn");

const closeModalBtn = document.querySelector(".btnClose");
 
const cardElement = document.querySelector(".card");

const form = document.querySelector('form');

const ratingElement = document.getElementsByClassName('rating');


openModalBtn.addEventListener("click",() => {
    cardElement.style.display = "none";
    modal.show();
});

closeModalBtn.addEventListener("click",()=> { 
    modal.close();
    cardElement.style.display = "block";
});

