// pobieramy element wyświetlacza
const screen = document.querySelector(".typescreen"); 

// pobieramy wszystkie przyciski numeryczne
const buttons = document.querySelectorAll(".button1");
const buttonC = document.querySelector(".button1:nth-of-type(1)");
const buttonDelete = document.querySelector(".button1:nth-of-type(2)");
const buttonEquals = document.querySelector(".button3");

function updateScreen(value) {
  if (value === "C") {
    screen.textContent = "";
  } else if (value === "<") {
    screen.textContent = screen.textContent.slice(0, -1);
  } else if (value === "=") {
    screen.textContent = eval(screen.textContent);
  } else {
    screen.textContent += value;
  }
}

// dodajemy zdarzenie "click" do każdego przycisku numerycznego
buttons.forEach((button) => {
  button.addEventListener("click", () => {
    // wyświetlamy wybraną liczbę na ekranie
    updateScreen(button.textContent);
  });
});

buttonC.addEventListener("click", () => {
  updateScreen("C");
});

buttonDelete.addEventListener("click", () => {
  updateScreen("<");
});

buttonEquals.addEventListener("click", () => {
  updateScreen("=");
});
