define(['backbone', 'chart-model'], function(Backbone, Chart) {
    return Backbone.Collection.extend({
        model: Chart
    });
});
