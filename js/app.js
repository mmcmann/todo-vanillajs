// Not a module, so not exporting.
(function (window) {
    'use strict';

    var TodoApp = (function () {
        var instance = null;
    
        /**
         * Constructor
         *
        * @param {string} name The name of your new to do list.
        */
        function TodoApp(name) {
            console.log("New application: '" + name + "'!");
            this.version = "0.0.1";
        }

        function _init() {
            var object = new TodoApp("Vanilla JS To Do List Application");
            return object;
        }
    
        return {
            init: function () {
                if (!instance) {
                    instance = _init();
                }
                return instance;
            }
        };
    })();

    window.todoApp = TodoApp.init();

    /**
     * Render the view when the window loads.
     *
     * @param {Event} e The Event object
     */
    function render(e) {
        console.log("Context: " + e.target);
        console.log("Render application");
        // TodoApp.getInstance.controller.setView();
    }

    window.addEventListener('load', render);

}(this));