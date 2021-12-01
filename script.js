calculate = function (type, firstInput, secondInput) {
  const inputA = Number(document.getElementById(firstInput).value);
  const inputB = Number(document.getElementById(secondInput).value);

  if (type === "bottle") {
    let weeklyValue = inputA * inputB;
    let monthlyValue = weeklyValue * 4;
    let yearlyValue = weeklyValue * 52;

    document.getElementById("total").value = weeklyValue.toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("month").value = monthlyValue.toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("year").value = yearlyValue.toFixed(2).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  } else type === "plastic";
  {
    let getTotalWeek = inputA * 2 + inputB;
    let getTotalMonth = getTotalWeek * 4;
    let getTotalYear = getTotalWeek * 52;

    document.getElementById("sumOfWeek").value = getTotalWeek.toFixed(0).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("sumOfMonth").value = getTotalMonth.toFixed(0).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
    document.getElementById("sumOfYear").value = getTotalYear.toFixed(0).replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
  }
};
selection = function (option) {
  const value = option.value;
  const element = document.getElementById("counting");
  switch (value) {
    case "0":
      element.style.display = "none";
      break;
    case "1":
      element.style.display = "block";
      break;
    default:
      // do nothing
      break;
  }
};

// COUNTER

// 1,000,000 is being sold every minute, roughly 17,000 every second

let count = 0; 

function sold()
{   
    count+=17000;
    const stuff = document.getElementById('stuff');
    stuff.innerHTML = count.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}

function begin() {
    
    sold();
    // changed it from setTimeout
    setInterval(sold, 1000, window);
}

document.addEventListener('DOMContentLoaded', function () {    
    begin();
});
