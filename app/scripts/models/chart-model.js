define(['underscore', 'backbone'], function(_, Backbone) {
    'use strict';
    return Backbone.Model.extend({
        defaults: {
            availableTypes: [],
            thumbnail: ''
        },
        idAttribute: 'id',
        exportUrl: 'http://export.highcharts.com/',
        onTypeChanged: function(type) {
            var chartAttr = this.get('chart');
            this.set('chart', _.extend({}, chartAttr, {type: type}));
        },
        fetchThumbnail: function() {
            var self = this;
            var exportUrl = this.exportUrl;
            return Backbone.ajax({
                method: 'POST',
                url: exportUrl,
                data: {
                    async: true,
                    width: 400,
                    type: 'png',
                    options: JSON.stringify(self.toJSON())
                }
            }).done(function(response) {
                self.set('thumbnail', exportUrl + response);
            });
        }
    });
});
