const modalButtons = document.querySelectorAll(".button--buy");
const modalWindow = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modal__close");

const modalForm = modalWindow.querySelector(".modal__form");
const modalPhone = modalWindow.querySelector(".modal__control--phone");
const modalEmail = modalWindow.querySelector(".modal__control--email");

// const successMessage = document.querySelector(".success");
// const successCloseButton = successMessage.querySelector(".success__close");

let isStorageSupport = true;
let storage = "";

// modal window

try {
  storage = localStorage.getItem("name");
} catch (err) {
  isStorageSupport = false;
}

modalButtons.forEach(button => {
  button.addEventListener("click", (evt) => {
    evt.preventDefault();
    modalWindow.classList.add("modal--show");

    if (storage) {
      modalPhone.value = storage;
      modalEmail.focus();
    } else {
      modalPhone.focus();
    }
  })
});

modalCloseButton.addEventListener("click", (evt) => {
  evt.preventDefault();
  modalWindow.classList.remove("modal--show");
});

window.addEventListener("keydown", (evt) => {
  if (evt.keyCode === 27) {
    if (modalWindow.classList.contains("modal--show")) {
      evt.preventDefault();
      modalWindow.classList.remove("modal--show");
    }
  }
});

if (modalWindow.classList.contains("modal--show")) {
  window.addEventListener("click", () => {
    modalWindow.classList.remove("modal--show");
  })
};


// const submitModalButton = document.querySelector(".modal__button");
// submitModalButton.addEventListener("click", (evt)=> {
//   evt.preventDefault();
//   showSuccessMessage();
// });
