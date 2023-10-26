const cardValues = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
const cardSuits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

const pokerCards = [];

for (const value of cardValues) {
  for (const suit of cardSuits) {
    const card = `${value} of ${suit}`;
    pokerCards.push(card);
  }
}

let stopShuffling = false; // Initialize the stop flag

function getRandomCard() {
  const randomIndex = Math.floor(Math.random() * pokerCards.length);
  return pokerCards[randomIndex];
}

function displayCard(card) {
  const cardDisplay = document.getElementById('cardDisplay');
  cardDisplay.innerHTML = card;
}

function readCard(card) {
  const speechSynthesis = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(card);
  speechSynthesis.speak(utterance);
}

function stopShuffle() {
  stopShuffling = true; // Set the stop flag to stop shuffling
}

function shufflePokerCards() {
  const cardDisplay = document.getElementById('cardDisplay');
  cardDisplay.innerHTML = '';

  let currentIndex = 0;
  const interval = 5000;

  const showNextCard = () => {
    if (stopShuffling || currentIndex >= pokerCards.length) {
      cardDisplay.innerHTML = 'You are Done!';
      stopShuffling = false; // Reset the stop flag
      return;
    }

    const card = getRandomCard();
    displayCard(card);
    readCard(card);
    currentIndex++;
    setTimeout(showNextCard, interval);
  };

  stopShuffling = false; // Reset the stop flag before starting
  showNextCard();
}

