angular.module('gruntApp', []);

angular.module('gruntApp').component('uiView', {
    templateUrl: '/component/component1.html',
    controller: mainUiController,
    bindings: {
        hero: '<',
        onDelete: '&',
        onUpdate: '&'
    },
});;angular.module('gruntApp').component('autocompletecomp', {
    template: '/component1.html',
    controller: comp2controller,
    bindings: {
        compone: '<',
        onDelete: '&',
        onUpdate: '&'
    },
});
;angular.module('gruntApp').component('comp-two', {
    template: '/component2.html',
    controller: comp2controller,
    bindings: {
        comptwo: '<',
        onDelete: '&',
        onUpdate: '&'
    },
});
