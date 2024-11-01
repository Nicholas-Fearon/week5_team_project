const option1 = document.getElementById("option1");
const option2 = document.getElementById("option2");
const prompt = document.getElementById("prompt");
let currentPromptid = 1;
let data = []; // Holds the entire dataset

// Toggle settings sidebar
document.getElementById("menuButton").addEventListener("click", () => {
  const settings = document.querySelector(".settings");
  settings.classList.toggle("show");
  settings.classList.toggle("hide");
});

// fetch and render initial data
const render = async () => {
  const res = await fetch("http://localhost:8080/everything");
  data = await res.json(); // Store the data in the global array
  updatePage(); // Initial page update based on currentPromptid
};

// updates the page using currentPromptid
const updatePage = () => {
  const currentstoryobj = data.find((item) => item.id === currentPromptid);
  if (currentstoryobj) {
    prompt.textContent = currentstoryobj.prompt;
    option1.textContent = currentstoryobj.optionone;
    option2.textContent = currentstoryobj.optiontwo;
  } else {
    console.error("Prompt not found for ID:", currentPromptid);
  }
};

// handle option 1 click
const handle1 = () => {
  const currentstoryobj = data.find((item) => item.id === currentPromptid);
  if (currentstoryobj) {
    currentPromptid = currentstoryobj.next_story_one;
    updatePage();
  }
};

// handle option 2 click
const handle2 = () => {
  const currentstoryobj = data.find((item) => item.id === currentPromptid);
  if (currentstoryobj) {
    currentPromptid = currentstoryobj.next_story_two;
    updatePage();
  }
};

// event listeners for option buttons
option1.addEventListener("click", handle1);
option2.addEventListener("click", handle2);

// Initial render call
render();
