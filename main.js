// Nickname Generator CYU Assignment Kevin Patel

// Load data from files
let nicknameData;
fetch("data/nicknamedata.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (nicknameData = strData.split(/\r?\n/)));

// Output
let outputEl = document.getElementById("output");

// Button Event Listener
document.getElementById("btn").addEventListener("click", btnClicked);

function btnClicked() {
  let selection = document.getElementById("nickname-select").value;

  // Process Menu Selection
  if (selection === "displayall") {
    traverseDisplayAll();
  } else if (selection === "displayrandom") {
    traverseDisplayRandom();
  } else if (selection === "add") {
    traverseAdd();
  } else if (selection === "removelast") {
    traverseRemoveLast();
  } else if (selection === "removeindex") {
    traverseRemoveIndex();
  } else if (selection === "removename") {
    traverseRemoveName();
  }
}

// Menu Option Functions
function traverseDisplayAll() {
  outputEl.innerHTML = surveyData;
}
