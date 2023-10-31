const table = document.querySelector("table");

export const addingTableContnet = () => {
  const newTr = document.createElement("tr");
  newTr.textContent = `
        <td>${userFullName}</td>
        <td>${userProfessionalTitle}</td>
        <td>${userCountry}/ ${userCity}}</td>
        <td>${userPhoneNumber}</td>
        <td>${userEmail}</td>
        <td>${userWebsite}</td>
    `;
  table.appendChild = newTr;
};
export default { addingTableContnet };
