angular.module('gruntApp').component('autocompletecomp', {
    template: '/component1.html',
    controller: comp2controller,
    bindings: {
        compone: '<',
        onDelete: '&',
        onUpdate: '&'
    },
});
