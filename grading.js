const grade = require("prompt-sync");
const prompt = grade();

function generator() {
  let grade = prompt("Enter your marks:");
  if (grade >= 80 && grade <= 100) {
    consolelog("A");
  } else if (grade >= 60 && grade <= 79) {
    consolelog("B");
  } else if (grade >= 50 && grade <= 59) {
    consolelog("C");
  } else if (grade >= 30 && grade <= 49) {
    consolelog("D");
  } else if (grade >= 10 && grade <= 29) {
    consolelog("E");
  }
}
