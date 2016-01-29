# Vanilla JavaScript TodoMVC Example

> JavaScript® (often shortened to JS) is a lightweight, interpreted, object-oriented 
> language with first-class functions, most known as the scripting language for Web pages,
> but used in many non-browser environments as well such as node.js or Apache CouchDB.

> _[JavaScript - developer.mozilla.org](http://developer.mozilla.org/en-US/docs/JavaScript)

## Steps

### v0.0.0

- Initial file setup. Vary basic setup with Jasmine for testing.

### v0.0.1

- Download template from [Initializr](http://www.initializr.com/)
    - Twitter Bootstrap
    - Modernizr
    - plugins.js
- `diff -DINITIALIZR index.html initializr/index.html > merged-index.html`
- `cp initializr/js/plugins.js js/ && rm -rf initializr`
- Install bootstrap@3.3.6 & jquery@2.2.0 (included)
- Install bignumber.js@2.1.2, lodash@3.10.1, underscore@1.8.3