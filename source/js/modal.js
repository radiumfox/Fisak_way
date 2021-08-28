const modalButtons = document.querySelectorAll(".button--buy");
const modalWindow = document.querySelector(".modal");
const modalClose = document.querySelector(".modal__close");

const modalForm = modalWindow.querySelector(".modal__form");
const modalPhone = modalWindow.querySelector(".modal__control--phone");
const modalEmail = modalWindow.querySelector(".modal__control--email");

let isStorageSupport = true;
let storage = "";

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

modalClose.addEventListener("click", (evt) => {
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



// modalForm.addEventListener("submit", (evt) => {
//   if (!modalPhone.value || !modalEmail.value) {
//     evt.preventDefault();
//     modalWindow.classList.add("modal--error");
//   } else {
//     if (isStorageSupport) {
//       localStorage.setItem("name", modalPhone.value);
//     }
//   }
// });
