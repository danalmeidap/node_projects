var cash = require ("../../src/index.js");
describe("Cash greedy algorithm tests", function() {
    

    it("Recieves the minimum value", ()=>{
      let change = cash.change_owned(1);
      expect(change).toBe(1);
    });


    it("Should recieves one nickel", ()=>{
      let change = cash.change_owned(5);
      expect(change).toBe(1);
    });


    it("Should recieves one dimes", ()=>{
      let change = cash.change_owned(10);
      expect(change).toBe(1);
    });


    it("Should recieves one quarter", ()=>{
      let change = cash.change_owned(25);
      expect(change).toBe(1);
    });

    it("Should recieves two coins", ()=>{
      let change = cash.change_owned(15);
      expect(change).toBe(2);
    });

    it("Should recieve four coins ", ()=>{
      let change = cash.change_owned(41);
      expect(change).toBe(4);
    });

    it("Should recieves seven coins", ()=>{
      let change = cash.change_owned(160);
      expect(change).toBe(7);
    });

    it("Should recieves ninety two coins", ()=>{
      let change = cash.change_owned(2300);
      expect(change).toBe(92);
    });

    it("Should recieves eighteen coins", ()=>{
      let change = cash.change_owned(420);
      expect(change).toBe(18);
    });

    it("Should recieves negative value", ()=>{
      let change = cash.change_owned(-1);
      expect(change).toBe("invalid number");
    });

    it("Should recies a non-numeric valor", ()=>{
      let change = cash.change_owned("foo");
      expect(change).toBe("the value must to be a number");
    });

  });