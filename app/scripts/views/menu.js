define([
    'underscore',
    'marionette',
    'text!../templates/menu.html'
], function(_, Mn, template) {
    'use strict';

    return Mn.ItemView.extend({
        template: _.template(template)
    });
});
