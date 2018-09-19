/*
 * Build a poker checking function that takes in two arrays of five elements,
 * where each array represents a player's hand and
 * each element represents a card from a standard deck of cards:
 * 52 cards, 2 - Ace, NO suits. (Jack = 11, Queen = 12, King = 13, Ace = 14)
 *
 * The function should return either "Player 1 wins",
 * "Player 2 wins", or "Draw" using the following ranking system:
 *
 * 4-of-a-kind > full house > straight > 3-of-a-kind > 2-pair > 1-pair > high card
 * Example: poker([3,5,5,5,2], [4,6,7,8,8]) -> "Player 1 wins"
 *
 * If two players have the same rank, then player with the highest card wins.
 * Example: [4, 4, 4, 2, 14] beats [8, 8, 8, 4, 5] because the first hand has the highest card.
 *
 * Clearly real-world poker has more complex rules for tied ranks, but we want you
 * to focus on overall architecture rather than edge cases. Have fun!
 * 
 * BONUS: Account for suits and add in Flush & Straight Flush/Royal Flush.
 * BONUS2: Create a deck of cards function that generates two random hands for you.
 */
function poker(hand1, hand2) {
  if (!hand1 || !hand2) return hand1 ? hand1 : hand2;
  let values = {
    Jack: 11,
    Queen: 12,
    King: 13,
    Ace: 14,
  };
  hand1 = hand1.sort((a, b) => a - b);
  hand2 = hand2.sort((a, b) => a - b);
  const rank = hand => {
    if (hand.every(x => x === hand[0])) return 1;
    let cardsInArow = hand.reduce((acc, x, i) => {
      let sequential = true;
      if (i > 0) {
        x = values[x] || x;
        let previous = values[hand[i - 1]] || hand[i - 1];
        sequential = x === previous + 1;
      }
      return sequential ? acc + 1 : acc;
    }, 0);
    if (cardsInArow === 5) return 2;
    let max = [0, null];
    let matches = {};
    hand.forEach(x => {
      if (values[x]) x = values[x];
      if (matches[x]) matches[x] += 1;
      else matches[x] = 1;
      if (max[0] < matches[x]) {
        max[0] = matches[x];
        max[1] = x;
      }
    });
    if(max0 === )
    return max[0];
  };
  let hand1Rank = rank(hand1);
  let hand2Rank = rank(hand2);
  if (hand1Rank === hand2Rank) {
    return Math.max(...hand1) > Math.max(...hand2) ? 'Player 1 wins' : 'Player 2 wins';
  }
  return hand1Rank > hand2Rank ? 'Player 1 wins' : 'Player 2 wins';
}

console.log(poker([10, 10, 10, 'jack', 'queen'], [8, 8, 8, 4, 5]));
module.exports = poker;
