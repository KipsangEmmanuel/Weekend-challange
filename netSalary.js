var payee, NHIFDeductions, NSSFDeductions, grossSalary, netSalary;

grossSalary = parseInt(prompt("Enter Your Grosspay"));

if (grossSalary <= 24000) {
  payee = grossSalary * 0.1;
  if (grossSalary <= 5999) {
    NHIFDeductions = 150;
  } else if (grossSalary >= 6000 && grossSalary <= 7999) {
    NHIFDeductions = 300;
  } else if (grossSalary >= 8000 && grossSalary <= 11999) {
    NHIFDeductions = 400;
  } else if (grossSalary >= 12000 && grossSalary <= 14999) {
    NHIFDeductions = 500;
  } else {
    NHIFDeductions = 750;
  }
  NSSFDeductions = grossSalary * 0.06;

  netSalary = grossSalary - (payee + NHIFDeductions + NSSFDeductions);
  document.write("your salary is" + netSalary);
} else {
  payee = grossSalary * 0.3;
  if (grossSalary >= 32333 && grossSalary <= 34999) {
    NHIFDeductions = 900;
  } else if (grossSalary >= 35000 && grossSalary <= 39999) {
    NHIFDeductions = 950;
  } else if (grossSalary >= 40000 && grossSalary <= 44999) {
    NHIFDeductions = 1000;
  } else if (grossSalary >= 45000 && grossSalary <= 49999) {
    NHIFDeductions = 1100;
  } else if (grossSalary >= 50000 && grossSalary <= 59999) {
    NHIFDeductions = 1200;
  } else {
    NHIFDeductions = 2000;
  }

  NSSFDeductions = grossSalary * 0.06;

  netSalary = grossSalary - (payee + NHIFDeductions + NSSFDeductions);
  document.write("Your Net Salary is" + netSalary);
}
