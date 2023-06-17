const modal = document.querySelector(".modal");

const openModalBtn = document.querySelector(".open");

const closeModalBtn = document.querySelector(".closeBtn");


openModalBtn.addEventListener("click",() => modal.showModal());

closeModalBtn.addEventListener("click",()=> modal.closest());

