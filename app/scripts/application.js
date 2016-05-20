define([
    'backbone',
    'router/router'
], function(Backbone, Router) {
    'use strict';

    function initialize() {
        var router = new Router();
        Backbone.history.start();
    }

    return {
        init: initialize
    };
});
