angular.module('gruntApp', []);

angular.module('gruntApp').component('uiView', {
    templateUrl: '/component/component1.html',
    controller: mainUiController,
    bindings: {
        hero: '<',
        onDelete: '&',
        onUpdate: '&'
    },
});