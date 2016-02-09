(function (window) {
    'use strict';

    /**
     * Creates a new Model instance and hooks up the storage.
     *
     * @constructor
     */
    function Model() {
        this.name = "Model";
        return;
    }

    // Export to window
    window.app = window.app || {};
    window.app.Model = Model;
}(this));