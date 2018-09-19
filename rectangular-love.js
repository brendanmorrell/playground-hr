const rectangularLove = (a, b) => {
  const overlap = (point1, length1, point2, length2) => {
    const start = Math.max(point1, point2);
    const end = Math.min(point1 + length1, point2 + length2);
    return start <= end ? { start, length: end - start } : { start: 0, length: 0 };
  };
  const { start: leftX, length: width } = overlap(a.leftX, a.width, b.leftX, b.width);
  const { start: bottomY, length: height } = overlap(a.bottomY, a.height, b.bottomY, b.height);
  return { leftX, bottomY, width, height };
};

let obja = {
  leftX: 0,
  bottomY: 0,
  width: 3,
  height: 3,
};
let objb = {
  leftX: 1,
  bottomY: 1,
  width: 1,
  height: 100,
};
console.log(rectangularLove(obja, objb));
