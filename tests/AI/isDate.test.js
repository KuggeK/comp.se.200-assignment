import { describe, it } from "mocha"
import { expect } from "chai"

import isDate from "#src/isDate.js"

describe("isDate", () => {
    it("should return true for a valid Date object", () => {
        const result = isDate(new Date());
        expect(result).to.be.true;
    });

    it("should return false for a string representing a date", () => {
        const result = isDate("Mon April 23 2012");
        expect(result).to.be.false;
    });

    it("should return false for a number", () => {
        const result = isDate(123456789);
        expect(result).to.be.false;
    });

    it("should return false for an object that is not a Date", () => {
        const result = isDate({ year: 2023, month: 10, day: 5 });
        expect(result).to.be.false;
    });

    it("should return false for an array", () => {
        const result = isDate([2023, 10, 5]);
        expect(result).to.be.false;
    });

    it("should return false for null", () => {
        const result = isDate(null);
        expect(result).to.be.false;
    });

    it("should return false for undefined", () => {
        const result = isDate(undefined);
        expect(result).to.be.false;
    });

    it("should return false for a boolean value", () => {
        const result = isDate(true);
        expect(result).to.be.false;
    });

    it("should return false for a function", () => {
        const result = isDate(() => {});
        expect(result).to.be.false;
    });

    it("should return false for a symbol", () => {
        const result = isDate(Symbol("date"));
        expect(result).to.be.false;
    });
});
