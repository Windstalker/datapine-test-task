define([
    'underscore',
    'backbone',
    'text!../templates/chart-view.html'
], function(_, Backbone, template) {
    'use strict';

    return Backbone.View.extend({
        template: _.template(template)
    });
});
