document.addEventListener("DOMContentLoaded", () => {
    let date = document.getElementById("date");
    let now = new Date();

    let day = now.getDate();
    let month = now.getMonth() + 1;
    let year = now.getFullYear();

    let formattedDay = day < 10 ? `0${day}` : day;
    let formattedMonth = month < 10 ? `0${month}` : month;

    date.innerText += `${year}/${formattedMonth}/${formattedDay}`;
});