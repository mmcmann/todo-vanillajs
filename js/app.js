// Not a module, so not exporting.
(function (window) {
    'use strict';

    var TodoApp = (function () {
        var instance = null,
            model = (window.app.Model === undefined) ? {} : new window.app.Model(),
            view = (window.app.View === undefined) ? {} : new window.app.View(),
            controller = (window.app.Controller === undefined) ? {} : new window.app.Controller(model, view),
            dependencies = { model: model, view: view, controller: controller };

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
                    instance.inject(dependencies);
                }
                return instance;
            }
        };
    }());

    window.app = TodoApp.init();

    /**
     * Render the view when the window loads.
     *
     * @param {Event} e The Event object
     */
    function render(e) {
        console.log("Context: " + e.target);
        console.log("Render application at " + (new Date()));
        // TodoApp.getInstance.controller.setView();
    }

    window.addEventListener('load', render);

}(this));