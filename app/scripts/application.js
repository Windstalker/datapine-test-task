define([
    'backbone',
    'layoutmanager',
    'router/router'
], function(Backbone, Layout, Router) {
    'use strict';

    Layout.configure({
        manage: true
    });

    function initialize() {
        var router = new Router();
        Backbone.history.start();
    }

    return {
        init: initialize
    };
});
