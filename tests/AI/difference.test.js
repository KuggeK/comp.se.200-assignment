import { describe, it } from "mocha"
import { expect } from "chai"

import difference from "#src/difference.js"

describe("difference", () => {
    it("should return the difference of two arrays", () => {
        const result = difference([2, 1], [2, 3])
        expect(result).to.deep.equal([1])
    })

    it("should return an empty array when the first array is empty", () => {
        const result = difference([], [1, 2, 3])
        expect(result).to.deep.equal([])
    })

    it("should return the original array when the second array is empty", () => {
        const result = difference([1, 2, 3], [])
        expect(result).to.deep.equal([1, 2, 3])
    })

    it("should return an empty array when both arrays are empty", () => {
        const result = difference([], [])
        expect(result).to.deep.equal([])
    })

    it("should handle arrays with duplicate values correctly", () => {
        const result = difference([1, 2, 2, 3], [2])
        expect(result).to.deep.equal([1, 3])
    })

    it("should handle multiple arrays to exclude values from", () => {
        const result = difference([1, 2, 3, 4], [2, 3], [4])
        expect(result).to.deep.equal([1])
    })

    it("should return an empty array when all values are excluded", () => {
        const result = difference([1, 2, 3], [1, 2, 3])
        expect(result).to.deep.equal([])
    })

    it("should handle non-array inputs gracefully", () => {
        const result = difference([1, 2, 3], null, undefined, [2])
        expect(result).to.deep.equal([1, 3])
    })

    it("should handle non-array-like objects as the first argument", () => {
        const result = difference(null, [1, 2, 3])
        expect(result).to.deep.equal([])
    })

    it("should handle deeply nested arrays correctly", () => {
        const result = difference([1, [2, 3]], [[2, 3]])
        expect(result).to.deep.equal([1, [2, 3]])
    })
})
