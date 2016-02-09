(function (window) {
    'use strict';

    /**
     * Render the view when the window loads.
     *
     * @param {Event} e The Event object
     */
    function render(e) {
        var model = new window.app.Model(),
            view = new window.app.View(),
            controller = new window.app.Controller(model, view),
            dependencies = { model: model, view: view, controller: controller };
        // Create the main application
        window.app.init();
        window.app.inject(dependencies);
        console.log("Context: " + e.target);
        console.log("Render application at " + (new Date()));
    }

    // Render the application to the browser
    window.addEventListener('load', render);

}(this));