// You run an e-commerce website and want to record the last N order ids in a log. Implement a data structure to accomplish this, with the following API:

// record(order_id): adds the order_id to the log
// get_last(i): gets the ith last element from the log. i is guaranteed to be smaller than or equal to N.
// You should be as efficient with time and space as possible.

class OrderIdLog {
  constructor() {
    this.count = 0;
    this.logs = {};
  }
  record(id) {
    this.count += 1;
    this.logs[this.count] = id;
  }
  getLast(i) {
    console.log(this.count);
    console.log(this.logs);
    return this.logs[this.count + 1 - i];
  }
}

const Orders = new OrderIdLog();
Orders.record("a1");
Orders.record("b17");
Orders.record("c4");

console.log(Orders.getLast(1));
