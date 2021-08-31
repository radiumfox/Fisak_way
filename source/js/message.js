const successMessageTemplate = document.querySelector('#success').content.querySelector('.success');

const detectEscEvent = (evt) => evt.key === "Escape" || evt.key === "Esc";

const removeMessage = () => {
  const successMessage = document.querySelector(".success");
  successMessage.remove();
};

const onPageClick = () => {
  removeMessage();
  removeEventListener("click", onPageClick);
};

const onButtonPress = () => {
  removeMessage();
  successCloseButton.removeEventListener("click", onButtonPress);
};

const onEscPress = (evt) => {
  if (detectEscEvent(evt)) {
    removeMessage();
    document.removeEventListener("keydown", onEscPress);
  }
};

const showSuccessMessage = () => {
  const body = document.querySelector(".page-body");
  const successMessage = successMessageTemplate.cloneNode(true);
  body.appendChild(successMessage);
  document.addEventListener("click", onPageClick);
  document.addEventListener("keydown", onEscPress);
};
