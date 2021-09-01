const modalButtons = document.querySelectorAll(".button--buy");
const modalWindow = document.querySelector(".modal");
const modalCloseButton = document.querySelector(".modal__close");

const modalForm = modalWindow.querySelector(".modal__form");
const modalPhone = modalWindow.querySelector(".modal__control--phone");
const modalEmail = modalWindow.querySelector(".modal__control--email");

let isStorageSupport = true;
let phoneStorage = "";
let emailStorage = "";

try {
  phoneStorage = localStorage.getItem("phoneNumber");
  emailStorage = localStorage.getItem("email")
} catch (err) {
  isStorageSupport = false;
}

modalButtons.forEach(button => {
  button.addEventListener("click", (evt) => {
    evt.preventDefault();
    modalWindow.classList.add("modal--show");

    if(phoneStorage) {
      inputModalPhone.value = phoneStorage;
      inputModalEmail.focus();
    } else if(emailStorage) {
      inputModalEmail.value = emailStorage;
      inputModalPhone.focus();
    } else if (phoneStorage || emailStorage) {
      inputModalPhone.value = phoneStorage;
      inputModalEmail.value = emailStorage;
    } else {
      inputModalPhone.focus();
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
