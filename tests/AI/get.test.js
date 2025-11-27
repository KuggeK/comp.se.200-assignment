import { describe, it } from "mocha";
import { expect } from "chai";

import get from "#src/get.js";

describe("get", () => {
    const object = { 'a': [{ 'b': { 'c': 3 } }] };

    it("should retrieve nested properties using string path", () => {
        expect(get(object, 'a[0].b.c')).to.equal(3);
    });

    it("should retrieve nested properties using array path", () => {
        expect(get(object, ['a', '0', 'b', 'c'])).to.equal(3);
    });

    it("should return default value when path doesn't exist", () => {
        expect(get(object, 'a.b.c', 'default')).to.equal('default');
    });

    it("should return default value when path is invalid", () => {
        expect(get(object, 'invalid.path', 'default')).to.equal('default');
    });

    it("should return default value for null object", () => {
        expect(get(null, 'a.b.c', 'default')).to.equal('default');
    });

    it("should return default value for undefined object", () => {
        expect(get(undefined, 'a.b.c', 'default')).to.equal('default');
    });

    it("should return default value for empty object", () => {
        expect(get({}, 'a.b.c', 'default')).to.equal('default');
    });

    it("should handle wrong data types gracefully", () => {
        expect(get(123, 'a.b.c', 'default')).to.equal('default');
        expect(get("string", 'a.b.c', 'default')).to.equal('default');
        expect(get([], 'a.b.c', 'default')).to.equal('default');
    });
});
