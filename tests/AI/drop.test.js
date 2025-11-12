import { describe, it } from "mocha"
import { expect } from "chai"

import drop from "#src/drop.js"

describe("drop", () => {
    it("should drop the first element by default", () => {
        expect(drop([1, 2, 3])).to.deep.equal([2, 3])
    })

    it("should drop the specified number of elements", () => {
        expect(drop([1, 2, 3], 2)).to.deep.equal([3])
    })

    it("should return an empty array if n is greater than the array length", () => {
        expect(drop([1, 2, 3], 5)).to.deep.equal([])
    })

    it("should return the original array if n is 0", () => {
        expect(drop([1, 2, 3], 0)).to.deep.equal([1, 2, 3])
    })

    it("should return an empty array if the input array is null or undefined", () => {
        expect(drop(null)).to.deep.equal([])
        expect(drop(undefined)).to.deep.equal([])
    })

    it("should handle negative n values by treating them as 0", () => {
        expect(drop([1, 2, 3], -1)).to.deep.equal([1, 2, 3])
    })

    it("should handle non-integer n values by converting them to integers", () => {
        expect(drop([1, 2, 3], 1.5)).to.deep.equal([2, 3])
        expect(drop([1, 2, 3], "2")).to.deep.equal([3])
    })

    it("should return an empty array if the input array is empty", () => {
        expect(drop([], 2)).to.deep.equal([])
    })
})
