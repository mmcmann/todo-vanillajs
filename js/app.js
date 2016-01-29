/* globals window */
// Not a module, so not exporting.
(function (win) {
    'use strict';

    /**
     * Sets up a brand new Todo list.
     *
     * @param {string} name The name of your new to do list.
     */
    function Todo(name) {
        console.log("New application: '" + name + "'!");
    }

    win.todoApp = new Todo('VanillaToDo');

    /**
     * Render the view when the window loads.
     *
     * @param {Event} e The Event object
     */
    function render(e) {
        console.log(e + "; Render application");
    }

    win.addEventListener('load', render);

}(window));