import { describe, it } from "mocha"
import { expect } from "chai"

import difference from "#src/difference.js"

describe("difference.js", () => {

    it("should return a copy", () => {
        let source = [1, 2, 3]
        let values = [4, 5]
        let result = difference(source, values)
        expect(result).to.deep.equal([1, 2, 3])
        expect(result).to.not.equal(source)
    })

    it("should filter", () => {
        let source = [1, 2, 3, 4, 5]
        let values = [2, 4]
        let result = difference(source, values)
        expect(result).to.deep.equal([1, 3, 5])
    })

    it("should return original array if no values to remove", () => {
        let source = [1, 2, 3]
        let values = []
        let result = difference(source, values)
        expect(result).to.deep.equal([1, 2, 3])
        expect(result).to.not.equal(source)
    })

    it("should handle objects by identity as per SameValueZero", () => {
        let obj = { a: 2 }
        let source = [{ a: 1 }, obj, { a: 3 }]
        let newValue = [{ a: 2 }]

        let result = difference(source, newValue)
        expect(result).to.deep.equal([{ a: 1 }, { a: 2 }, { a: 3 }])

        let result2 = difference(source, [obj])
        expect(result2).to.deep.equal([{ a: 1 }, { a: 3 }])
    })

    it("should return empty array if all values are removed", () => {
        let source = [1, 2, 3]
        let values = [1, 2, 3]
        let result = difference(source, values)
        expect(result).to.deep.equal([])
    })

    it("should return empty array if original is empty", () => {
        let source = []
        let values = [1, 2, 3]
        let result = difference(source, values)
        expect(result).to.deep.equal([])
    })

    it("should handle mixed type arrays", () => {
        let source = [false, 1, "2", 3, null, undefined, true, { a: 1 }]
        let values = [true, "2", null]
        let result = difference(source, values)
        expect(result).to.deep.equal([false, 1, 3, undefined, { a: 1 }])
    })

    it("should handle multiple value arrays", () => {
        let source = [1, 2, 3, 4, 5, 6, 7]
        let values1 = [2]
        let values2 = [4]
        let values3 = [6]
        let result = difference(source, values1, values2, values3)
        expect(result).to.deep.equal([1, 3, 5, 7])
    })

    it ("should filter correctly with duplicates in source", () => {
        let source = [1, 2, 2, 3, 4, 4, 5]
        let values = [2, 4]
        let result = difference(source, values)
        expect(result).to.deep.equal([1, 3, 5])
    })

})