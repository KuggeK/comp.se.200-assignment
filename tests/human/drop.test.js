import { describe, it } from "mocha"
import { expect } from "chai"

import drop from "#src/drop.js"

describe("drop", () => {
    it("should drop the first n elements from an array", () => {
        expect(drop([1, 2, 3, 4, 5], 2)).to.deep.equal([3, 4, 5])
        expect(drop(["a", "b", "c", "d"], 1)).to.deep.equal(["b", "c", "d"])
    })

    it("should return empty array if n is greater than the length", () => {
        expect(drop([1, 2, 3], 5)).to.deep.equal([])
        expect(drop([], 3)).to.deep.equal([])
    })

    it("should return original array if n is 0", () => {
        expect(drop([1, 2, 3], 0)).to.deep.equal([1, 2, 3])
        expect(drop(["a", "b", "c"], 0)).to.deep.equal(["a", "b", "c"])
    })

    it("should handle negative n by doing nothing", () => {
        expect(drop([1, 2, 3], -2)).to.deep.equal([1, 2, 3])
        expect(drop(["a", "b", "c"], -1)).to.deep.equal(["a", "b", "c"])
    })

    it("should return an empty array when called with null", () => {
        expect(drop(null, 2)).to.deep.equal([])
    })
})