define([
    'underscore',
    'backbone',
    'text!../templates/menu.html'
], function(_, Backbone, template) {
    'use strict';

    return Backbone.View.extend({
        manage: true,
        template: _.template(template)
    });
});
