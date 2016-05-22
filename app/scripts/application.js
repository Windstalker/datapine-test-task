define([
    'backbone',
    'marionette',
    'router/router'
], function(Backbone, Mn, Router) {
    'use strict';

    function onStart() {
        Backbone.history.start();
    }

    return Mn.Application.extend({
        initialize: function() {
            this.router = new Router();
            this.on('start', onStart);
        }
    });
});
