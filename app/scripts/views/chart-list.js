define([
    'underscore',
    'marionette',
    'text!../templates/chart-list.html'
], function(_, Mn, template) {
    'use strict';

    return Mn.ItemView.extend({
        className: 'page',
        template: _.template(template),
        collectionEvents: {
            'sync': 'render',
            'fetch:thumbnails': 'render'
        }
    });
});
