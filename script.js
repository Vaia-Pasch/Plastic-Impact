getPrice = function () {
    const valueOfPrice = Number(document.getElementById("price").value);
    const perWeek = Number(document.getElementById("week").value);
    // const perMonth = Number(document.getElementById("month").value);
    // const perYear = Number(document.getElementById("year").value);
    let weeklyValue = valueOfPrice * perWeek;
    let monthlyValue = weeklyValue * 4;
    let yearlyValue = weeklyValue * 52;
    document.getElementById("total").value = weeklyValue.toFixed(2);
    document.getElementById("month").value = monthlyValue.toFixed(2);
    document.getElementById("year").value = yearlyValue.toFixed(2);
}

getPlastic = function () {
    const amountOfCups = Number(document.getElementById("cup").value);
    let getTotalWeek = amountOfCups * 2;
    let getTotalMonth = getTotalWeek * 4;
    let getTotalYear = getTotalWeek * 52;
    document.getElementById("sumOfWeek").value = getTotalWeek.toFixed(0);
    document.getElementById("sumOfMonth").value = getTotalMonth.toFixed(0);
    document.getElementById("sumOfYear").value = getTotalYear.toFixed(0);
}