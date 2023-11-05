const tabel = document.querySelector("table");

const parseUsersDataArray = JSON.parse(
  localStorage.getItem("stringifyUsersDataArray")
);
console.log("saved data", parseUsersDataArray);

parseUsersDataArray.forEach((object, i) => {
  console.log(object);

  const userFullName = parseUsersDataArray[i].userFullName;
  const userProfessionalTitle = parseUsersDataArray[i].userProfessionalTitle;
  const userCountry = parseUsersDataArray[i].userCountry;
  const userCity = parseUsersDataArray[i].userCity;
  const userPhoneNumber = parseUsersDataArray[i].userPhoneNumber;
  const userEmail = parseUsersDataArray[i].userEmail;
  const userWebsite = parseUsersDataArray[i].userWebsite;

  const newTr = document.createElement("tr");
  newTr.innerHTML = `
    <td>${userFullName}</td>
    <td>${userProfessionalTitle}</td>
    <td>${userCountry}/ ${userCity}</td>
    <td>${userPhoneNumber}</td>
    <td>${userEmail}</td>
    <td>${userWebsite}</td>
`;
  tabel.appendChild(newTr);
});
