/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

const suits = ["club", "spade", "diamond", "heart"];
const numbers = [2, 3, 4, 5, 6, 7, 8, 9, 10, "J", "Q", "K"];

const card = document.getElementById("card");
const btnGenerate = document.getElementById("btnGenerate");

window.onload = generateCard;

// =================== LISTENERS ===================== //
btnGenerate.addEventListener("click", generateCard);

// =================== FUNCTIONS ===================== //
function generateCard() {
  const randomSuit = getRandomElement(suits);
  const redSuit = randomSuit === "heart" || randomSuit === "diamond" || false;

  const randomNumber = getRandomElement(numbers);

  const htmlContent = `
    <span class="${
      redSuit ? "card_symbol redColor" : "card_symbol"
    }"><i class="bi bi-suit-${randomSuit}-fill"></i></span>
    <span class="card_number my-2">${randomNumber}</span>
    <span class="${
      redSuit ? "card_symbol redColor" : "card_symbol"
    }"><i class="bi bi-suit-${randomSuit}-fill"></i></span>
  `;

  card.innerHTML = htmlContent;
}

function getRandomElement(array) {
  return array[Math.floor(Math.random() * array.length)];
}
