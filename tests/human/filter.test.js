import { describe, it } from "mocha";
import { expect } from "chai";

import filter from "#src/filter.js";

describe("filter", () => {
    
    it("should filter arrays correclty", () => {
        const result = filter([1, 2, 3, 4], n => n % 2 === 0);
        expect(result).to.deep.equal([2, 4]);
    })

/*     it("should return empty array when no elements match", () => {
        const result = filter([1, 2, 3], () => false);
        expect(result).to.deep.equal([]);
    }) */

    it("should return similar array when all elements match", () => {
        const result = filter([1, 2, 3], () => true);
        expect(result).to.deep.equal([1, 2, 3]);
    })

/*     it("should handle empty arrays", () => {
        const result = filter([], () => true);
        expect(result).to.deep.equal([]);
    })

    it("should handle non-array inputs", () => {
        expect(filter(null, () => true)).to.deep.equal([]);
        expect(filter(undefined, () => true)).to.deep.equal([]);
    }) */
})