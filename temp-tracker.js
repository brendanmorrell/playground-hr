class TempTracker {
  constructor() {
    // For mode
    this.occurrences = new Array(111).fill(0); // Array of 0s at indices 0..110
    this.maxOccurrences = 0;
    this.mode = null;

    // For mean
    this.numberOfReadings = 0;
    this.totalSum = 0;
    this.mean = null;

    // For min and max
    this.minTemp = null;
    this.maxTemp = null;
  }

  insert(temperature) {
    // For mode
    this.occurrences[temperature]++;
    if (this.occurrences[temperature] > this.maxOccurrences) {
      this.mode = temperature;
      this.maxOccurrences = this.occurrences[temperature];
    }

    // For mean
    this.numberOfReadings++;
    this.totalSum += temperature;
    this.mean = this.totalSum / this.numberOfReadings;

    // For min and max
    if (this.maxTemp === null || temperature > this.maxTemp) {
      this.maxTemp = temperature;
    }
    if (this.minTemp === null || temperature < this.minTemp) {
      this.minTemp = temperature;
    }
  }

  getMax() {
    return this.maxTemp;
  }

  getMin() {
    return this.minTemp;
  }

  getMean() {
    return this.mean;
  }

  getMode() {
    return this.mode;
  }
}
