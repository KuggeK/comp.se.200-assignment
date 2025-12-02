import { describe, it } from "mocha";
import { expect } from "chai";

import at from "#src/at.js";

const testObj = {
    a: { b: 2 },
    c: 3 
}

describe("at", () => {

    it("should return an array of values corresponding to paths of an object", () => {
        const result = at(testObj, ['a.b', 'c']);
        expect(result).to.deep.equal([2, 3]);
    })

    it("should return undefined for non existing paths", () => {
        const result = at(testObj, ['a.x', 'd']);
        expect(result).to.deep.equal([undefined, undefined]);
    })

    it("should handle mixed existing and non-existing paths", () => {
        const result = at(testObj, ['a.b', 'd']);
        expect(result).to.deep.equal([2, undefined]);
    })

    it("should return an empty array when no paths are provided", () => {
        const result = at(testObj, []);
        expect(result).to.deep.equal([]);
    })

    it("should handle empty object", () => {
        const result = at({}, ['a.b', 'c']);
        expect(result).to.deep.equal([undefined, undefined]);
    })

    it("should handle non-object inputs", () => {
        expect(at(null, ['a.b', 'c'])).to.deep.equal([undefined, undefined]);
        expect(at(undefined, ['a.b', 'c'])).to.deep.equal([undefined, undefined]);
        expect(at(123, ['a.b', 'c'])).to.deep.equal([undefined, undefined]);
    })
});