// Not a module, so not exporting.
(function (window, app) {
    'use strict';

    var TodoApp = (function () {
        var instance = null;

        /**
         * Constructor
         *
         * @constructor
         * @param {string} name The name of your new to do list.
         */
        function TodoApplication(name) {
            console.info("New application: '" + name + "'!");
            this.version = "0.0.1";
            this.Model = new app.Model();
            this.View = new app.View();
            this.Controller = new app.Controller();
        }

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

    window.todoApp = TodoApp.init();

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

}(this, window.app || {}));