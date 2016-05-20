define([
    'underscore',
    'backbone',
    'text!../templates/chart-list.html'
], function(_, Backbone, template) {
    'use strict';

    return Backbone.View.extend({
        manage: true,
        template: _.template(template)
    });
});
