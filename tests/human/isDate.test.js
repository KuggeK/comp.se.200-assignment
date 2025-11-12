import { describe, it } from "mocha"
import { expect } from "chai"

import isDate from "#src/isDate.js"

describe("isDate", () => {
    
    it("should return `true` for date objects", () => {
        expect(isDate(new Date())).to.be.true
        expect(isDate(Object(new Date()))).to.be.true
        expect(isDate(new Date("Invalid date"))).to.be.true
    })

    it("should return `false` for non-date values", () => {
        const nonDateValues = [
            undefined,
            null,
            true,
            false,
            42,
            "2021-01-01",
            [],
            {},
            () => {},
            /regex/,
            new RegExp("regex"),
            new Map(),
            new Set(),
        ]

        nonDateValues.forEach((value) => {
            expect(isDate(value)).to.be.false
        })
    })
})