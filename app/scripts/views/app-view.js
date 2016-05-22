define([
    'jquery',
    'underscore',
    'backbone',
    './menu',
    'text!../templates/app-view.html'
], function($, _, Backbone, Menu, template) {
    'use strict';

    return Backbone.View.extend({
        el: $('#app'),
        template: _.template(template),
        views: {
            '#menu': new Menu()
        }
    });
});
