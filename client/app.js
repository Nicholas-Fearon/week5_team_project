const userName = document.getElementById("username");
const startBtn = document.getElementById("startBtn");
const option1 = document.getElementById("Option1");
const option2 = document.getElementById("Option2");
const area = document.getElementById("area");
const prompt = document.getElementById("prompt");
const validation = document.getElementById("validation");

//userName validation
startBtn.addEventListener("click", async (event) => {
  if (userName.value.trim() === "") {
    event.preventDefault(); // Prevent navigation
    validation.textContent = "Please enter your name.";
  }
  await fetch("http://localhost:8080/username", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify(userName),
  });
});

// post request will need to test
//await fetch("http://localhost:8080/username", {
//method: "POST",
//headers: {
//"content-type": "application/json",
// },
// body: JSON.stringify(userName),
//});

// get funtion: area/prompt
const getPrompts = async () => {
  // Check if there's a saved location in local storage
  const savedLocation = localStorage.getItem("playerLocation");

  let data;
  // Using the saved location as the player's starting point
  if (savedLocation) {
    data = JSON.parse(savedLocation);
  } else {
    // Fetching new data if no saved location is found
    const res = await fetch("http://localhost:8080/gameprompts");
    data = await res.json();
    // Save the initial location to local storage
    localStorage.setItem("playerLocation", JSON.stringify(data[0]));
  }

  console.log(data); //Log the data to check

  // Update HTML elements with the current location and prompt
  area.textContent = data.location;
  prompt.textContent = data.prompt;
};

// Function to save the player's current location to local storage
const savePlayerLocation = (newLocationData) => {
  localStorage.setItem("playerLocation", JSON.stringify(newLocationData));
};

getPrompts();
