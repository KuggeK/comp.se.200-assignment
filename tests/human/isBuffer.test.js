import { describe, it } from "mocha"
import { expect } from "chai"

import isBuffer from "#src/isBuffer.js"
import { Buffer } from "buffer"

describe("isBuffer", () => {
    
    it("should return true for Buffer objects", () => {
        let buf = Buffer.from("hello")
        expect(isBuffer(buf)).to.equal(true)

        let emptyBuf = Buffer.alloc(0)
        expect(isBuffer(emptyBuf)).to.equal(true)

        let largeBuf = Buffer.alloc(1024)
        expect(isBuffer(largeBuf)).to.equal(true)

        let bufFromArray = Buffer.from([1, 2, 3, 4])
        expect(isBuffer(bufFromArray)).to.equal(true)
    })

    it("should return false for non-Buffer objects", () => {
        expect(isBuffer([])).to.equal(false)
        expect(isBuffer({})).to.equal(false)
        expect(isBuffer("string")).to.equal(false)
        expect(isBuffer(123)).to.equal(false)
        expect(isBuffer(null)).to.equal(false)
        expect(isBuffer(undefined)).to.equal(false)
        expect(isBuffer(new Uint8Array([1, 2, 3]))).to.equal(false)
        expect(isBuffer(() => {})).to.equal(false)
    })
})