// JavaScript to toggle settings sidebar
document.getElementById('menuButton').addEventListener('click', () => {
    const settings = document.querySelector('.settings');
    settings.classList.toggle('show');
    settings.classList.toggle('hide');
});

const userName = document.getElementById("username");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const area = document.getElementById("area");
const prompt = document.getElementById("prompt");
const validation = document.getElementById("validation");

// get funtion: area/prompt
const getPrompts = async () => {
  const res = await fetch("http://localhost:5174/gameprompts");
  const data = await res.json();
  console.log(data);
  area.textContent = data[1].location.toUpperCase();
  prompt.textContent = data[1].prompt;
};

// get funtion: options
const getOptions = async () => {
  const res = await fetch("http://localhost:5174/options");
  const data = await res.json();
  console.log(data);
  area.textContent = data[0].location;
  option1.textContent = data[0].optionone;
  option2.textContent = data[0].optiontwo;
};

/* get funtion: outcomes
const getOutcomes = async () => {
  const res = await fetch("http://localhost:8080/outcomes");
  const data = await res.json();
  console.log(data);
};*/

/* get funtion: monsters
const getMonsters = async () => {
  const res = await fetch("http://localhost:8080/monsters");
  const data = await res.json();
  console.log(data);
};*/

/* get funtion: room
const getRoom = async () => {
  const res = await fetch("http://localhost:8080/room");
  const data = await res.json();
  console.log(data);
};*/

// get funtion: options
const getUsername = async () => {
  const res = await fetch("http://localhost:5174/username");
  const data = await res.json();
  console.log(data);
};

getPrompts();

getOptions();
