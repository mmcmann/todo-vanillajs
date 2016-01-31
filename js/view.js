(function (window) {
    'use strict';

    /**
     * View that abstracts away the browser's DOM completely.
     *
     * It has two simple entry points:
     *
     *   - bind(eventName, handler)
     *     Takes a todo application event and registers the handler
     *
     *   - render(command, parameterObject)
     *     Renders the given command with the options
     *
     * @constructor
     */
    function View() {
        return;
    }

    // Export to window
    window.app = window.app || {};
    window.app.View = View;
}(this));