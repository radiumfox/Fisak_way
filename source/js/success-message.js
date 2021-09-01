const body = document.querySelector(".page-body");
const requestForm = document.querySelector(".request__form");
const successMessageTemplate = document.querySelector("#success").content.querySelector(".success");
const successCloseButton = successMessageTemplate.querySelector(".success__close");

const detectEscEvent = (evt) => evt.key === "Escape" || evt.key === "Esc";

const removeMessage = () => {
  const successMessage = document.querySelector(".success");
  if (successMessage) {
    successMessage.remove();
  }
}

const onPageClick = () => {
  removeMessage();
  removeEventListener("click", onPageClick);
};

const onEscPress = (evt) => {
  if (detectEscEvent(evt)) {
    removeMessage();
    document.removeEventListener("keydown", onEscPress);
  }
};

const onButtonPress = (evt) => {
  removeMessage();
  successCloseButton.removeEventListener("click", onButtonPress);
}

const showSuccessMessage = () => {
  const successMessage = successMessageTemplate.cloneNode(true);
  body.appendChild(successMessage);
}

requestForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  showSuccessMessage();

  if (isStorageSupport) {
    if(inputRequestPhone.value) {
      localStorage.setItem("phoneNumber", inputRequestPhone.value);
    }
    if(inputRequestEmail.value) {
      localStorage.setItem("email", inputRequestEmail.value);
    }
  };

  window.addEventListener("click", onPageClick);
  document.addEventListener("keydown", onEscPress);
  successCloseButton.addEventListener("click", onButtonPress);
});

modalForm.addEventListener("submit", (evt) => {
  evt.preventDefault();
  showSuccessMessage();

  if (isStorageSupport) {
    if(inputModalPhone.value) {
      localStorage.setItem("phoneNumber", inputModalPhone.value);
    }
    if(inputModalEmail.value) {
      localStorage.setItem("email", inputModalEmail.value);
    }
  };

  window.addEventListener("click", onPageClick);
  document.addEventListener("keydown", onEscPress);
  successCloseButton.addEventListener("click", onButtonPress);

  modalWindow.classList.remove("modal--show");
});
