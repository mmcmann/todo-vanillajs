// Not a module, so not exporting.
(function (window) {
    'use strict';

    // Create the main application
    var TodoApp = (function () {

        var instance;

        /**
         * Constructor
         *
         * @constructor
         * @param {string} name The name of your new to do list.
         */
        function TodoApplication(name) {
            console.info("New application: '" + name + "'!");
            this.version = "0.0.2";
        }

        /**
         * Add necessary dependencies
         *
         * @param {object} object Object of dependencies to inject.
         */
        TodoApplication.prototype.inject = function (object) {
            var key, element;
            for (key in object) {
                if (object.hasOwnProperty(key)) {
                    element = object[key];
                    this[key] = element;
                }
            }
        };

        function init() {
            var object = new TodoApplication("Vanilla JS To Do List Application");
            return object;
        }

        return {
            init: function () {
                if (!instance) {
                    instance = init();
                }
                return instance;
            }
        };
    }());

    // Export to window
    // window.app = window.app || {};
    window.app = TodoApp;

}(this));