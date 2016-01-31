(function (window) {
    'use strict';

    /**
     * Creates a new Model instance and hooks up the storage.
     *
     * @constructor
     */
    function Model() {
        return;
    }

    // Export to window
    window.app = window.todoApp || {};
    window.app.Model = Model;
}(this));