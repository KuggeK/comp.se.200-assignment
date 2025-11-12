import { describe, it } from "mocha"
import { expect } from "chai"

import isArrayLike from "#src/isArrayLike.js"

describe("isArrayLike", () => {

    it("should return true for arrays of any type", () => {
        expect(isArrayLike([])).to.equal(true)
        expect(isArrayLike([1, 2, 3])).to.equal(true)
        expect(isArrayLike(["a", "b", "c"])).to.equal(true)
        expect(isArrayLike([null, undefined, true, false])).to.equal(true)
    })

    it("should return true for strings", () => {
        expect(isArrayLike("")).to.equal(true)
        expect(isArrayLike("hello")).to.equal(true)
    })

    it("should return true for objects with numeric length", () => {
        expect(isArrayLike({ length: 2 })).to.equal(true)
        expect(isArrayLike({ otherField: "Haha", length: 3 })).to.equal(true)
    })

    it("should return false for non-array-like objects", () => {
        expect(isArrayLike({})).to.equal(false)
        expect(isArrayLike(21)).to.equal(false)
        expect(isArrayLike(null)).to.equal(false)
        expect(isArrayLike(undefined)).to.equal(false)
        expect(isArrayLike(() => {})).to.equal(false)
    })
    
    it("should accept only length of 0 <= l <= Number.MAX_SAFE_INTEGER", () => {
        let fakeArray = { length: -1 }
        expect(isArrayLike(fakeArray)).to.equal(false)

        fakeArray.length = Number.MAX_SAFE_INTEGER + 1
        expect(isArrayLike(fakeArray)).to.equal(false)

        fakeArray.length = 0
        expect(isArrayLike(fakeArray)).to.equal(true)

        fakeArray.length = 10
        expect(isArrayLike(fakeArray)).to.equal(true)

        fakeArray.length = Number.MAX_SAFE_INTEGER
        expect(isArrayLike(fakeArray)).to.equal(true)

        fakeArray.length = Number.MAX_SAFE_INTEGER - 1
        expect(isArrayLike(fakeArray)).to.equal(true)

        fakeArray.length = 3.14
        expect(isArrayLike(fakeArray)).to.equal(false)

        fakeArray.length = "10"
        expect(isArrayLike(fakeArray)).to.equal(false)
    })

})