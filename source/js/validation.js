const phoneRegExp = /^[+]*[(]{0,1}[0-9]{1,4}[)]{0,1}[-\s\./0-9]*$/;
const emailRegExp = /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

const inputRequestPhone = document.querySelector("#request-phone");
const inputRequestEmail = document.querySelector("#request-email");
const inputModalPhone = document.querySelector("#modal-phone");
const inputModalEmail = document.querySelector("#modal-email");

const requestPhoneControl = document.querySelector(".request__control--phone");
const requestEmailControl = document.querySelector(".request__control--email");
const modalPhoneControl = document.querySelector(".modal__control--phone");
const modalEmailControl = document.querySelector(".modal__control--email");

const requestPhoneMessage = requestPhoneControl.querySelector(".invalid-data");
const requestEmailMessage = requestEmailControl.querySelector(".invalid-data");
const modalPhoneMessage = modalPhoneControl.querySelector(".invalid-data");
const modalEmailMessage = modalEmailControl.querySelector(".invalid-data");

const onRequestPhoneInput = () => {
  if(inputRequestPhone.value){
    if (phoneRegExp.test(inputRequestPhone.value)){
      requestPhoneMessage.textContent = "";
      requestPhoneMessage.classList.remove("invalid-data--show");
      inputRequestPhone.classList.remove("form__input--invalid");
    } else {
      requestPhoneMessage.textContent = "Данные не верны";
      requestPhoneMessage.classList.add("invalid-data--show");
      inputRequestPhone.classList.add("form__input--invalid");
    }
  } else {
    requestPhoneMessage.textContent = "";
    requestPhoneMessage.classList.remove("invalid-data--show");
    inputRequestPhone.classList.remove("form__input--invalid");
  }
};

const onRequestEmailInput = () => {
  if(inputRequestEmail.value){
    if (emailRegExp.test(inputRequestEmail.value)){
      requestEmailMessage.textContent = "";
      requestEmailMessage.classList.remove("invalid-data--show");
      inputRequestEmail.classList.remove("form__input--invalid");
    } else {
      requestEmailMessage.textContent = "Данные не верны";
      requestEmailMessage.classList.add("invalid-data--show");
      inputRequestEmail.classList.add("form__input--invalid");
    }
  } else {
    requestEmailMessage.textContent = "";
    requestEmailMessage.classList.remove("invalid-data--show");
    inputRequestEmail.classList.remove("form__input--invalid");
  }
};

const onModalPhoneInput = () => {
  if(inputModalPhone.value){
    if (phoneRegExp.test(inputModalPhone.value)){
      modalPhoneMessage.textContent = "";
      modalPhoneMessage.classList.remove("invalid-data--show");
      inputModalPhone.classList.remove("form__input--invalid");
    } else {
      modalPhoneMessage.textContent = "Данные не верны";
      modalPhoneMessage.classList.add("invalid-data--show");
      inputModalPhone.classList.add("form__input--invalid");
    }
  } else {
    modalPhoneMessage.textContent = "";
    modalPhoneMessage.classList.remove("invalid-data--show");
    inputModalPhone.classList.remove("form__input--invalid");
  }
};

const onModalEmailInput = () => {
  if(inputModalEmail.value){
    if (emailRegExp.test(inputModalEmail.value)){
      modalEmailMessage.textContent = "";
      modalEmailMessage.classList.remove("invalid-data--show");
      inputModalEmail.classList.remove("form__input--invalid");
    } else {
      modalEmailMessage.textContent = "Данные не верны";
      modalEmailMessage.classList.add("invalid-data--show");
      inputModalEmail.classList.add("form__input--invalid");
    }
  } else {
    modalEmailMessage.textContent = "";
    modalEmailMessage.classList.remove("invalid-data--show");
    inputModalEmail.classList.remove("form__input--invalid");
  }
};

inputRequestPhone.addEventListener("input", onRequestPhoneInput);
inputRequestEmail.addEventListener("input", onRequestEmailInput);
inputModalPhone.addEventListener("input", onModalPhoneInput);
inputModalEmail.addEventListener("input", onModalEmailInput);
