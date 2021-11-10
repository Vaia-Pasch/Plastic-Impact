getPrice = function() {
    const valueOfPrice = Number(document.getElementById("price").value);
    const perWeek = Number(document.getElementById("count").value);
    let totalValue = (valueOfPrice * perWeek) * 7;
    document.getElementById("total").value = totalValue.toFixed(0);
}

getPlastic = function() {
    const amountOfCups = Number(document.getElementById("cup").value);
    let getTotal = amountOfCups * 2;
    document.getElementById("sum").value = getTotal.toFixed(0);
}

getStraw = function() {
    const withStraw = Number(document.getElementById("straw").value);
    let SumUp = withStraw * 3;
    document.getElementById("sum").value = SumUp.toFixed(0);
}