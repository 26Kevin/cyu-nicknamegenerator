// Nickname Generator CYU Assignment Kevin Patel

let nicknames;
fetch("nickname-data.txt")
  .then((rawData) => rawData.text())
  .then((strData) => (nicknames = strData.split(/\r?\n/)));

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
  }
}

// Menu Option Functions
function traverseDisplayAll() {
  // Input
  let first = document.getElementById("first").value;
  let last = document.getElementById("last").value;

  // Output Results
  outputEl.innerHTML = "";
  for (let i = 0; i < nicknames.length; i++) {
    outputEl.innerHTML += `<p>${i}: ${first} "${nicknames[i]}" ${last}</p>`;
  }
}

function traverseDisplayRandom() {
  // Input
  let first = document.getElementById("first").value;
  let last = document.getElementById("last").value;

  // Output Results
  outputEl.innerHTML = "";
  let randNickname = randomElement(nicknames);
  outputEl.innerHTML += `<p>${first} "${randNickname}" ${last}</p>`;
}

function traverseAdd() {
  // Input
  outputEl.innerHTML = "";
  let newNickname = prompt("Enter a new nickname: ");

  outputEl.innerHTML += `<p>Added Nickname: ${newNickname}`;
  nicknames.push(newNickname);
}

function traverseRemoveLast() {
  // Input
  let last = nicknames.pop();
  outputEl.innerHTML = `<p>Last Nickname Removed: ${last}`;
}

function traverseRemoveIndex() {
  // Input
  let index = +prompt("Enter a number");
  if (index >= 0 && index < nicknames.length) {
    let nicknameindex = nicknames.splice(index, 1);
    outputEl.innerHTML = `<p>Nickname Remove at index ${index}: ${nicknameindex}`;
  } else {
    outputEl.innerHTML = `<p>Invalid Index`;
  }
}
