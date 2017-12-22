angular.module('gruntApp').component('comp-two', {
    template: '/component2.html',
    controller: comp2controller,
    bindings: {
        comptwo: '<',
        onDelete: '&',
        onUpdate: '&'
    },
});
