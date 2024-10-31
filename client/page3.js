const userName = document.getElementById("username");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const area = document.getElementById("area");
const prompt = document.getElementById("prompt");
const validation = document.getElementById("validation");

const getPrompts = async () => {
  const res = await fetch("http://localhost:8080/gameprompts");
  const data = await res.json();
  console.log(data);
  area.textContent = data[5].location.toUpperCase();
  prompt.textContent = data[5].prompt;
};

const getOptions = async () => {
  const res = await fetch("http://localhost:8080/options");
  const data = await res.json();
  console.log(data);
  area.textContent = data[0].location;
  option1.textContent = data[0].optionone;
  option2.textContent = data[0].optiontwo;
};
