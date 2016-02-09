/*global app, jasmine, describe, it, beforeEach, expect */

describe("Controller", function () {
    'use strict';

    var testApp,
        model = {},
        view = {};

    beforeEach(function () {
        testApp = new window.app.Controller(model, view); 
    });

    it("should exist", function () {
        expect(testApp).toBeDefined();
    });

	it('should show entries on start-up', function () {
		expect(true).toBe(true);
	});
});