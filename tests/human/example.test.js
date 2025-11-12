import { describe, it } from "mocha";
import { expect } from "chai";

import add from "#src/add.js";

describe("add", () => {
    it("should add two positive numbers", () => {
        expect(add(6, 4)).to.equal(10);
    });
})