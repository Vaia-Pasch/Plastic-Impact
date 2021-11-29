calculate = function (type, firstInput, secondInput, straw) {
      const inputA = Number(document.getElementById(firstInput).value);
      const inputB = Number(document.getElementById(secondInput).value);
      const strawOptionValue = straw && Number(document.getElementById(straw).value);
  
    if (type === "bottle") {
      let weeklyValue = inputA * inputB;
      let monthlyValue = weeklyValue * 4;
      let yearlyValue = weeklyValue * 52;
  
      document.getElementById("total").value = weeklyValue.toFixed(2);
      document.getElementById("month").value = monthlyValue.toFixed(2);
      document.getElementById("year").value = yearlyValue.toFixed(2);
    }
 
    if (type === "plastic") {
        const straws = strawOptionValue ? inputB : 0;
        let getTotalWeek = inputA * 2 + straws;
        let getTotalMonth = getTotalWeek * 4;
        let getTotalYear = getTotalWeek * 52;
    
        document.getElementById("sumOfWeek").value = getTotalWeek.toFixed(0);
        document.getElementById("sumOfMonth").value = getTotalMonth.toFixed(0);
        document.getElementById("sumOfYear").value = getTotalYear.toFixed(0);
      }
  };
