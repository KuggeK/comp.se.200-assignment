import { describe, it } from "mocha"
import { expect } from "chai"

import isArrayLike from "#src/isArrayLike.js"

describe("isArrayLike", () => {
    it("should return true for an array", () => {
        expect(isArrayLike([1, 2, 3])).to.be.true;
    });

    it("should return true for an array-like object (e.g., NodeList)", () => {
        const arrayLikeObject = { length: 3, 0: "a", 1: "b", 2: "c" };
        expect(isArrayLike(arrayLikeObject)).to.be.true;
    });

    it("should return true for a string", () => {
        expect(isArrayLike("abc")).to.be.true;
    });

    it("should return false for a function", () => {
        expect(isArrayLike(function () {})).to.be.false;
    });

    it("should return false for null", () => {
        expect(isArrayLike(null)).to.be.false;
    });

    it("should return false for undefined", () => {
        expect(isArrayLike(undefined)).to.be.false;
    });

    it("should return false for an object without a length property", () => {
        expect(isArrayLike({})).to.be.false;
    });

    it("should return false for an object with a non-integer length property", () => {
        expect(isArrayLike({ length: "3" })).to.be.false;
    });

    it("should return false for an object with a negative length property", () => {
        expect(isArrayLike({ length: -1 })).to.be.false;
    });

    it("should return false for an object with a length property greater than Number.MAX_SAFE_INTEGER", () => {
        expect(isArrayLike({ length: Number.MAX_SAFE_INTEGER + 1 })).to.be.false;
    });

    it("should return true for an empty array", () => {
        expect(isArrayLike([])).to.be.true;
    });

    it("should return true for an object with a length of 0", () => {
        expect(isArrayLike({ length: 0 })).to.be.true;
    });
});
