const userName = document.getElementById("username");
const startBtn = document.getElementById("startBtn");
const option1 = document.getElementById("Option1");
const option2 = document.getElementById("Option2");
const area = document.getElementById("area");
const prompt = document.getElementById("prompt");
const validation = document.getElementById("validation");

//userName validation
startBtn.addEventListener("click", (event) => {
  if (userName.value.trim() === "") {
    event.preventDefault(); // Prevent navigation
    validation.textContent = "Please enter your name";
  }
});

// post request will need to test
await fetch("http://localhost:8080/username", {
  method: "POST",
  headers: {
    "content-type": "application/json",
  },
  body: JSON.stringify(username),
});

// get funtion: area/prompt
const getPrompts = async () => {
  const res = await fetch("http://localhost:8080/gameprompts");
  const data = await res.json();
  console.log(data);
  area.textContent = data[0].location;
  prompt.textContent = data[0].prompt;
};

getPrompts();
