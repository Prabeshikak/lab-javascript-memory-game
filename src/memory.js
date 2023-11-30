class MemoryGame {
  constructor(cards) {
    this.cards = cards;
    this.pickedCards = [];
    this.pairsClicked = 0;
    this.pairsGuessed = 0;
    // add the rest of the class properties here
  }

  shuffleCards() {
    if (!this.card) {
      return undefined;
    }
    for (let i = this.cards.length - 1; i > 0; i--) {
      const j = math.floor(Math.random() * (i + 1));
      [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
    }
    // ... write your code here
  }

  checkIfPair(card1, card2) {
    // ... write your code here
  }

  checkIfFinished() {
    // ... write your code here
  }
}
