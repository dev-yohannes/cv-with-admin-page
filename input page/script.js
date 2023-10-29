const fullNameInput = document.querySelector("#full-name-input");
const proTitleInput = document.querySelector("#pro-title-input");
const countryInput = document.querySelector("#country-input");
const cityInput = document.querySelector("#city-input");
const phoneNumberInput = document.querySelector("#po-number-input");
const emailInput = document.querySelector("#email-input");
const websiteLinks = document.querySelector("#website-link-input");
const submitButton = document.querySelector("#submit");

submitButton.addEventListener("click", (e) => {
  e.preventDefault();

  if (
    fullNameInput.value === "" ||
    proTitleInput.value === "" ||
    countryInput.value === "" ||
    cityInput.value === "" ||
    phoneNumberInput.value === "" ||
    emailInput.value === "" ||
    websiteLinks.value === ""
  ) {
    alert("Please fill all the fields");
  } else {
    localStorage.setItem("userFullName", fullNameInput.value);
    localStorage.setItem("proTitle", proTitleInput.value);
    alert("good");
    console.log(localStorage.getItem("userFullName"));
  }
});
