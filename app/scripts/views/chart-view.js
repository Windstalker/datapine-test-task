define([
    'underscore',
    'marionette',
    'text!../templates/chart-view.html'
], function(_, Mn, template) {
    'use strict';

    return Mn.ItemView.extend({
        template: _.template(template)
    });
});
