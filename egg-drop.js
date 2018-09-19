const eggDrop = () => {
  let breakCheck = n => {};
  let highest = 3;
  let eggs = true;
  while (eggs) {
    if (breakCheck(highest)) {
      if (breakCheck(highest - 1)) {
        eggs = false;
        highest = highest - 2;
      } else {
        highest = highest - 1;
      }
    } else {
      highest += 3;
    }
  }
  return highest;
};
