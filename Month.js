var getDaysInMonth = function(month, day) {
    // Here January is 1 based
 Day = "Monday"; 
   return new Day(day, month, 0).getDay();
  // Here January is 0 based
  // return new Date(year, month+1, 0).getDate();
  };
  console.log(getDaysInMonth(3, 2018));
  console.log(getDaysInMonth(6, 2020));