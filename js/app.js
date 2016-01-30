// Not a module, so not exporting.
(function (window) {
    'use strict';

    /**
     * Sets up a brand new Todo list.
     *
     * @param {string} name The name of your new to do list.
     */
    function Todo(name) {
        console.log("New application: '" + name + "'!");
        this.version = "0.0.1";
    }

    window.todoApp = new Todo('VanillaToDo');

    /**
     * Render the view when the window loads.
     *
     * @param {Event} e The Event object
     */
    function render(e) {
        console.log("Context: " + e.target);
        console.log("Render application");
    }

    window.addEventListener('load', render);

}(this));