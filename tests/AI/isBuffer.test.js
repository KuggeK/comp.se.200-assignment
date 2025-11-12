import { describe, it } from "mocha"
import { expect } from "chai"

import isBuffer from "#src/isBuffer.js"
import { Buffer } from "buffer"

describe("isBuffer", () => {
    it("should return true for a Buffer instance", () => {
        const buffer = Buffer.from([1, 2, 3]);
        expect(isBuffer(buffer)).to.be.true;
    });

    it("should return false for a Uint8Array instance", () => {
        const uint8Array = new Uint8Array([1, 2, 3]);
        expect(isBuffer(uint8Array)).to.be.false;
    });

    it("should return false for a plain object", () => {
        const obj = { key: "value" };
        expect(isBuffer(obj)).to.be.false;
    });

    it("should return false for a string", () => {
        const str = "hello";
        expect(isBuffer(str)).to.be.false;
    });

    it("should return false for a number", () => {
        const num = 123;
        expect(isBuffer(num)).to.be.false;
    });

    it("should return false for null", () => {
        expect(isBuffer(null)).to.be.false;
    });

    it("should return false for undefined", () => {
        expect(isBuffer(undefined)).to.be.false;
    });

    it("should return false for an array", () => {
        const arr = [1, 2, 3];
        expect(isBuffer(arr)).to.be.false;
    });

    it("should return false for a function", () => {
        const func = () => {};
        expect(isBuffer(func)).to.be.false;
    });

    it("should return false for a boolean", () => {
        expect(isBuffer(true)).to.be.false;
        expect(isBuffer(false)).to.be.false;
    });
});
