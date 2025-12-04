import { describe, it } from "mocha";
import { expect } from "chai";

import compact from "#src/compact.js";

describe("compact", () => {

     it("should remove falsy values from arrays", () => {
        const result = compact([0, 1, 3, false, "", true, null, "hi", undefined, NaN]);
        expect(result).to.deep.equal([1, 3, true, "hi"]);
    })

    it("should return an empty array when all values are falsy", () => {
        const result = compact([0, false, "", null, undefined, NaN]);
        expect(result).to.deep.equal([]);
    })

     it("should return the same array when no falsy values are present", () => {
        const result = compact([1, 2, 3, "hello", true]);
        expect(result).to.deep.equal([1, 2, 3, "hello", true]);
    })

    it("should handle empty arrays", () => {
        const result = compact([]);
        expect(result).to.deep.equal([]);
    })

     it("should handle non-array inputs", () => {
        expect(compact(null)).to.deep.equal([]);
        expect(compact(undefined)).to.deep.equal([]);
    })
});