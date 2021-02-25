var cash = require ("../../src/index.js");
describe("Cash greedy algorithm tests", function() {
    it("should welcome user", function() {
      let hello_message = cash.hello();
      expect(hello_message).toBe("Ola mundo!");
    });
  });