define(['underscore', 'backbone'], function(_, Backbone) {
    'use strict';
    return Backbone.Model.extend({
        defaults: {
            availableTypes: [],
            thumbnail: ''
        },
        idAttribute: 'id',
        onTypeChanged: function(type) {
            var chartAttr = this.get('chart');
            this.set('chart', _.extend({}, chartAttr, {type: type}));
        }
    });
});
