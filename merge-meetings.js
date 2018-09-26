const mergeRanges = meetings => {
  const arrangeByStartTime = arr => arr.sort((a, b) => a.startTime - b.startTime);
  const removeOverlap = ([a, b]) => {
    if (
      (a.startTime <= b.startTime && a.endTime >= b.startTime) ||
      (b.startTime <= a.startTime && b.endTime >= a.startTime)
    ) {
      return [
        null,
        {
          startTime: Math.min(a.startTime, b.startTime),
          endTime: Math.max(a.endTime, b.endTime),
        },
      ];
    }
    return [a, b];
  };
  let arrangedMeetings = arrangeByStartTime(meetings);
  for (let i = 0; i < arrangedMeetings.length - 1; i++) {
    const a = arrangedMeetings[i];
    const b = arrangedMeetings[i + 1];
    const [A, B] = removeOverlap([a, b]);
    arrangedMeetings[i] = A;
    arrangedMeetings[i + 1] = B;
  }
  return arrangedMeetings.filter(x => x);
};

const meetings = [
  { startTime: 0, endTime: 1 },
  { startTime: 3, endTime: 5 },
  { startTime: 4, endTime: 8 },
  { startTime: 10, endTime: 12 },
  { startTime: 9, endTime: 10 },
  { startTime: 20, endTime: 30 },
  { startTime: 24, endTime: 26 },
];
// [
//   { startTime: 0, endTime: 1 },
//   { startTime: 3, endTime: 8 },
//   { startTime: 9, endTime: 12 }
// ];
// console.log(mergeRanges(meetings));

const retryingLater = arr => {
  const result = [];
  const sorted = arr.sort((a, b) => a.startTime - b.startTime);
  console.log(sorted);
  for (let i = 0; i < sorted.length; i += 1) {
    const current = sorted[i];
    const next = sorted[i + 1];
    if (!next || current.endTime < next.startTime) {
      result.push(current);
    } else {
      next.startTime = current.startTime;
      next.endTime = Math.max(current.endTime, next.endTime);
    }
  }
  return result;
};

console.log(retryingLater(meetings));
