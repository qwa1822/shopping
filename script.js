// select all filter buttons and filteralbe Cards

const filterButtons = document.querySelectorAll(".filter_buttons button");
const SelectCard = document.querySelectorAll(".filterrable_cards .card");

console.log(filterButtons, SelectCard);

const MenuMove = e => {
  document.querySelector(".active").classList.remove("active");

  e.target.classList.add("active");

  SelectCard.forEach(card => {
    card.classList.add("hide");

    if (
      card.dataset.name === e.target.dataset.name ||
      e.target.dataset.name === "all"
    ) {
      card.classList.remove("hide");
    }
  });
};

filterButtons.forEach(button => button.addEventListener("click", MenuMove));
