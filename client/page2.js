// JavaScript to toggle settings sidebar
document.getElementById("menuButton").addEventListener("click", () => {
  const settings = document.querySelector(".settings");
  settings.classList.toggle("show");
  settings.classList.toggle("hide");
});

let currentPromptid = 1;

const userName = document.getElementById("username");
const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const area = document.getElementById("area");
const prompt = document.getElementById("prompt");
const validation = document.getElementById("validation");

// update page from api
const render = async () => {
  const res = await fetch("http://localhost:8080/everything");
  const data = await res.json();
  console.log(data);
  prompt.textContent = data[0].prompt;
  option1.textContent = data[0].optionone;
  option2.textContent = data[0].optiontwo;
};

/*const updatePage = () => {
  const currentstoryobj = data.find((item) => item.id === currentPromptid);
  area.textContent = currentstoryobj.prompt;
  option1.textContent = currentstoryobj.optionone;
  option2.textContent = currentstoryobj.optiontwo;
  updatePage();
};*/

//option1.addEventListener("click", handle1);
//option2.addEventListener("click", handle2);
const handle1 = () => {
  // get id next prompt#
  const currentstoryobj = data.find((item) => item.id === currentPromptid);

  // update current prompt id
  currentPromptid = currentstoryobj.next_story_one;
  updatePage();
  //update page
};

const handle2 = () => {
  const currentstoryobj = data.find((item) => item.id === currentPromptid);
  currentPromptid = currentstoryobj.next_story_two;
  updatePage();
};
// get funtion: options
//const getOptions = async () => {
//const res = await fetch("http://localhost:8080/options");
//const data = await res.json();
// console.log(data);
//area.textContent = data[0].location;
//option1.textContent = data[0].optionone;
//option2.textContent = data[0].optiontwo;
//};

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
  const res = await fetch("http://localhost:8080/username");
  //const res = await fetch("http://localhost:5174/username");
  const data = await res.json();
  console.log(data);
};

//getPrompts();

//getOptions();

render();
