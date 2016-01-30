/*global todoApp, jasmine, describe, it, beforeEach, expect */

describe("Main Application:", function () {
    'use strict';

    beforeEach(function () {
        return;
    });

    it("should be automatically instantiated", function () {
        expect(todoApp).toBeDefined();
        expect(todoApp.version).toBeDefined();
    });
});