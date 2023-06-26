const modal = document.querySelector(".thankYu");
const openModalBtn = document.querySelector(".btn");
const closeModalBtn = document.querySelector(".btnClose");
const cardElement = document.querySelector(".card");
const form = document.querySelector('form');
const ratingElement = document.getElementById('rating');

openModalBtn.addEventListener("click", () => {
  cardElement.style.display = "none";
  modal.showModal();
});

closeModalBtn.addEventListener("click", () => {
  modal.close();
  cardElement.style.display = "block";
});

form.addEventListener('submit', function(event) {
  event.preventDefault();

  var selected = document.querySelector('input[name="rating"]:checked');

  if (selected) {
    var value = selected.value;
    ratingElement.textContent = value;
  } else {
    ratingElement.textContent = 'Nenhuma opção selecionada';
  }

  modal.showModal();
});
