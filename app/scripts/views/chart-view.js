define([
    'jquery',
    'underscore',
    'marionette',
    'highcharts',
    'text!../templates/chart-view.html'
], function($, _, Mn, Highcharts, template) {
    'use strict';

    return Mn.ItemView.extend({
        className: 'page',
        template: _.template(template),
        ui: {
            typeSelect: '#switch-type',
            chartWrapper: '.chart-wrapper'
        },
        events: {
            'change @ui.typeSelect': 'changeType'
        },
        modelEvents: {
            'change:chart': 'plotChart'
        },
        changeType: function() {
            var type = this.ui.typeSelect.val();
            Mn.triggerMethodOn(this.model, 'type:changed', type);
        },
        onAttach: function() {
            this.plotChart();
        },
        plotChart: function() {
            var chartData = this.serializeData();
            var options = _.clone(chartData);
            options.chart.events = {
                load: function() {
                    this.reflow();
                }
            };
            this.ui.chartWrapper.highcharts(options);
        }
    });
});
