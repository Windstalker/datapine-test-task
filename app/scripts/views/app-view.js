define([
    'jquery',
    'underscore',
    'layoutmanager',
    './menu',
    'text!../templates/app-view.html'
], function($, _, Layout, Menu, template) {
    'use strict';

    return Layout.extend({
        el: $('#app'),
        template: _.template(template),
        views: {
            '#menu': new Menu()
        }
    });
});
