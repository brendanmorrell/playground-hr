const cakeTypes = [{ weight: 7, value: 160 }, { weight: 3, value: 90 }, { weight: 2, value: 15 }];
this.world = 12;
const capacity = 20;
const maxDuffelBagValue = (cakes, capacity) => {
  let maxCombo = { combo: null,
  totalValue: 0 }
  const combos = [];
  // try combos of including this cake, and not including this cake
  // when we reach either 0 or negative, don't add that value, and return;
  // loop through combos, and find the max value
  const checkAllCombos = (currentCombo,remainingCakes, remainingWeight) => {
    if (remainingCakes.length && remainingWeight) {
      const withThisCake = remainingCakes.slice();
      const withoutThisCake = remainingCakes.slice(1);
      if (currentCombo)

    }
  }
  console.log(this.world);
};
maxDuffelBagValue(cakeTypes, capacity);
