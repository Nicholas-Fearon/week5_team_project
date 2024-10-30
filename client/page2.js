
// JavaScript to toggle settings sidebar
document.getElementById('menuButton').addEventListener('click', () => {
    const settings = document.querySelector('.settings');
    settings.classList.toggle('show');
});

const userName = document.getElementById("username");
const option1 = document.getElementById("Option1");
const option2 = document.getElementById("Option2");
const area = document.getElementById("area");
const prompt = document.getElementById("prompt");
const validation = document.getElementById("validation");

//TODO username local storage

// get funtion: area/prompt
const getPrompts = async () => {
  const res = await fetch("http://localhost:8080/gameprompts");
  const data = await res.json();
  console.log(data);
  area.textContent = data[1].location.toUpperCase();
  prompt.textContent = data[1].prompt;
};

getPrompts();
