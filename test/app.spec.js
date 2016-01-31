/*global app, jasmine, describe, it, beforeEach, expect */

describe("Main Application", function () {
    'use strict';

    var model = {},
        view = {},
        controller = { model: model, view: view },
        dependencies = { model: model, view: view, controller: controller };

    beforeEach(function () {
        app.inject(dependencies);
    });

    it("should be automatically instantiated", function () {
        expect(app).toBeDefined();
        expect(app.version).toMatch(/^\d{1,2}\.\d{1,2}\.\d{1,2}$/);
    });
});