// elementos a validar

const firstName = document.getElementById("firstName");

const lastName = document.getElementById("lastName");

const email = document.getElementById("email");

const birthday = document.getElementById("birthday");

const knewQuestion = document.getElementById("knewQuestion");

const country = document.getElementById("country");

const question = document.getElementById("question");

const agree = document.getElementById("agreement");

// variaveis globais

let isFormValid = false;

const brazil = document.getElementById("brazil");
const portugal = document.getElementById("portugal");

// functions de validaçoes

function checkFirstNameField() {
  if (firstName.value.trim() === "") {
    //o Trim serve pra retirar espaços vazios, caso o usuario so acrescente espaços no input
    isFormValid = false;
    addMessageError(firstName, "Você deve forncer um nome!");
  } else {
    clearErrorMessage(firstName);
  }
}

function checkLastNameField() {
  if (lastName.value.trim() === "") {
    //o Trim serve pra retirar espaços vazios, caso o usuario so acrescente espaços no input
    isFormValid = false;
    addMessageError(lastName, "Você deve forncer um sobrenome!");
  } else {
    clearErrorMessage(lastName);
  }
}

function checkEmailField() {
  if (email.value.trim() === "") {
    //o Trim serve pra retirar espaços vazios, caso o usuario so acrescente espaços no input
    isFormValid = false;
    addMessageError(email, "Você deve forncer um e-mail!");
  } else if (!email.value.includes("@")) {
    //o includes valida se ha um determinado elemento no valor que estamos :'o valor de email NÂO inclui o @? . Entao executa o codigo dentro do if else.
    isFormValid = false;
    addMessageError(email, "Você deve forncer um e-mail válido!");
  } else {
    clearErrorMessage(email);
  }
}

function checkBirthdayField() {
  if (birthday.value.trim() === "") {
    //o Trim serve pra retirar espaços vazios, caso o usuario so acrescente espaços no input
    isFormValid = false;
    addMessageError(birthday, "Você deve forncer uma data!");
  } else {
    clearErrorMessage(birthday);
  }
}

function checkKnewQuestionField() {
  if (knewQuestion.value.trim() === "") {
    //o Trim serve pra retirar espaços vazios, caso o usuario so acrescente espaços no input
    isFormValid = false;
    addMessageError(knewQuestion, "Você deve escolher uma opção!");
  } else {
    clearErrorMessage(knewQuestion);
  }
}

function checkCountryField() {
  const hasCountry = brazil.checked || portugal.checked; // o operador logico || (diferente) pode validar varios items, mas se 1 deles estiver a true o resultado retornara true, diferente do && que se forem diferentes os resultados ja retorna false

  if (!hasCountry) {
    isFormValid = false;
    addMessageError(brazil, "Voce deve selecionar um país!");
  } else {
    clearErrorMessage(brazil);
  }
}

function checkQuestionField() {
  if (question.value.trim() === "") {
    isFormValid = false;
    addMessageError(question, "Você deve fornecer uma resposta!");
  } else {
    clearErrorMessage(question);
  }
}

function checkAgreementField() {
  if (!agree.checked) {
    isFormValid = false;
    addMessageError(agree, "Você deve concordar com os termos!");
  } else {
    clearErrorMessage(agree);
  }
}

function addMessageError(input, message) {
  const formItem = input.parentElement;
  const textElement = formItem.querySelector(".error-message");

  textElement.innerText = message;
  formItem.classList.add("error");
}

function clearErrorMessage(input) {
  const formItem = input.parentElement;
  const textElement = formItem.querySelector(".error-message");

  textElement.innerText = "";
  formItem.classList.remove("error");
}

function sendForm() {
  alert("Formulário enviado com sucesso!");
}

function clearForm() {
  document.querySelector("form").reset();
  agree.checked = false;
}

document.getElementById("btnSubmit").addEventListener("click", () => {
  isFormValid = true;

  checkFirstNameField();
  checkLastNameField();
  checkEmailField();
  checkBirthdayField();
  checkKnewQuestionField();
  checkCountryField();
  checkQuestionField();

  if (isFormValid) {
    checkAgreementField();
    if (isFormValid) {
      sendForm();
      clearForm();
    }
  }
});
