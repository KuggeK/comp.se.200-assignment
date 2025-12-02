import { describe, it } from "mocha";
import { expect } from "chai";

import add from "#src/add.js";

describe("add", () => {

    it("should add two positive numbers correctyly", () => {
        expect(add(2, 5)).to.equal(7);
    })

    it("should positive to negative number correctly", () => {
        expect(add(-1, 2)).to.equal(1);
    })

    it("should add two negative numbers correclty", () => {
        expect(add(-2. -2)).to.equal(-4);
    })

    it("should add decimal numbers correctly", () => {
        expect(add(1.5, 2.3)).to.equal(3.8);
    })

    it("should add string numbers correctly", () => {
        expect(add("2", "5")).to.equal("25");
    }) 

    it("should treat null and undefined as 0", () => {
        expect(add(null, 2)).to.equal(2);
        expect(add(2, undefined)).to.equal(2);
    })
    
})