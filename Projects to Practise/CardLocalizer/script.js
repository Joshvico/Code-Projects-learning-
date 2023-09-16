const cardValues = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
const cardSuits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];

const pokerCards = [];

for (const value of cardValues) {
  for (const suit of cardSuits) {
    const card = `${value} of ${suit}`;
    pokerCards.push(card);
  }
}

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

function shufflePokerCards() {
  const cardDisplay = document.getElementById('cardDisplay');
  cardDisplay.innerHTML = '';

  let currentIndex = 0;
  const interval = 5000;

  const showNextCard = () => {
    if (currentIndex < pokerCards.length) {
      const card = getRandomCard();
      displayCard(card);
      readCard(card);
      currentIndex++;
      setTimeout(showNextCard, interval);
    } else {
      cardDisplay.innerHTML = 'All cards shown!';
    }
  };

  showNextCard();
}
