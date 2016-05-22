define([
    'underscore',
    'marionette',
    'text!../templates/about.html'
], function(_, Mn, template) {
    'use strict';

    return Mn.ItemView.extend({
        manage: true,
        template: _.template(template)
    });
});
