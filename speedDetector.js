const speedDetector = require("prompt-sync");
const prompt = speedDetector();

function speedMonitor() {
  let speed = prompt("Ask for speed.");
  if (speed <= 70) {
    consolelog("OK");
  } else if (speed >= 70 && speed <= 130) {
    let demeritpoint = (speed - 70) / 5;
    consolelog(`points: ${demeritsPoint}`);
  } else {
    consolelog("Licence suspended");
  }
}

speedMonitor;
