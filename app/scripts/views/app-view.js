define([
    'jquery',
    'underscore',
    'marionette',
    './menu',
    'text!../templates/app-view.html'
], function($, _, Mn, Menu, template) {
    'use strict';

    return Mn.LayoutView.extend({
        el: '#app',
        template: _.template(template),
        regions: {
            menu: '#menu',
            page: '#page'
        }
    });
});
