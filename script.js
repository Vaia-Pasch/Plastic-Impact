getPrice = function() {
    const numVal1 = Number(document.getElementById("price").value);
    const numVal2 = Number(document.getElementById("count").value);
    let totalValue = (numVal1 * numVal2) * 7;
    document.getElementById("total").value = totalValue.toFixed(0);
}