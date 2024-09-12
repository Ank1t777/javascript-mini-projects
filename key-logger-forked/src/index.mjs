const startBtn = document.querySelector(".app--btn--start");
const stopBtn = document.querySelector(".app--btn--stop");
const keyLog = document.querySelector(".key--log");
const keyState = document.querySelector(".key--state");

startBtn.addEventListener("click", () => {
  //   console.log("start");
  document.addEventListener("keyup", handleKeyUp);
  document.addEventListener("keydown", handleKeyDown);
  startBtn.disabled = true;
  stopBtn.disabled = false;
});

stopBtn.addEventListener("click", () => {
  //   console.log("stop");
  document.removeEventListener("keydown", handleKeyUp);
  document.removeEventListener("keydown", handleKeyDown);
  keyLog.textContent = "";
  keyState.textContent = "";
  startBtn.disabled = false;
  stopBtn.disabled = false;
});

const handleKeyUp = (e) => {
  keyLog.textContent = `The key ${e.key} pressed up`;
  keyState.textContent = "key is up";
};

const handleKeyDown = (e) => {
  keyLog.textContent = `The key ${e.key} pressed down`;
  keyState.textContent = "key is down";
};
