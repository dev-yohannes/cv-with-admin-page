const fullNameInput = document.querySelector("#full-name-input");
const proTitleInput = document.querySelector("#pro-title-input");
const countryInput = document.querySelector("#country-input");
const cityInput = document.querySelector("#city-input");
const phoneNumberInput = document.querySelector("#po-number-input");
const emailInput = document.querySelector("#email-input");
const websiteLinks = document.querySelector("#website-link-input");
const submitButton = document.querySelector("#submit");
const successErrorMessage = document.querySelector("#success-error-text");

successErrorMessage.style.display = "none";

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
    successErrorMessage.style.display = "block";
    successErrorMessage.textContent = "Error! check again";
    successErrorMessage.style.backgroundColor = "red";
    successErrorMessage.style.color = "white";

    setInterval(() => {
      successErrorMessage.style.display = "none";
    }, 1000);
  } else {
    successErrorMessage.style.display = "block";
    successErrorMessage.textContent = "Submitted";
    successErrorMessage.style.backgroundColor = "lightgreen";

    localStorage.setItem("userFullName", fullNameInput.value);
    const userFullName = localStorage.getItem("userFullName");
    localStorage.setItem("userProfessionalTitle", proTitleInput.value);
    const userProfessionalTitle = localStorage.getItem("userProfessionalTitle");
    localStorage.setItem("userCountry", countryInput.value);
    const userCountry = localStorage.getItem("userCountry");
    localStorage.setItem("userCity", cityInput.value);
    const userCity = localStorage.getItem("userCity");
    localStorage.setItem("userPhoneNumber", phoneNumberInput.value);
    const userPhoneNumber = localStorage.getItem("userPhoneNumber");
    localStorage.setItem("userEmail", emailInput.value);
    const userEmail = localStorage.getItem("userEmail");
    localStorage.setItem("userWebsite", websiteLinks.value);
    const userWebsite = localStorage.getItem("userWebsite");

    fullNameInput.value = "";
    proTitleInput.value = "";
    countryInput.value = "";
    cityInput.value = "";
    phoneNumberInput.value = "";
    emailInput.value = "";
    websiteLinks.value = "";

    setInterval(() => {
      successErrorMessage.style.display = "none";
    }, 2000);
  }
});
