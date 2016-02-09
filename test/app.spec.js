/*global app, jasmine, describe, it, beforeEach, expect */

describe("Main Application", function () {
    'use strict';

    var testApp,
        model = {},
        view = {},
        controller = { model: model, view: view },
        dependencies = { model: model, view: view, controller: controller };

    beforeEach(function () {
        testApp = app.init(); 
        testApp.inject(dependencies);
    });

    it("should be automatically instantiated", function () {
        expect(testApp).toBeDefined();
    });

    it("should be have a semantic version number", function () {
        expect(testApp.version).toMatch(/^\d{1,2}\.\d{1,2}\.\d{1,2}$/);
    });
});