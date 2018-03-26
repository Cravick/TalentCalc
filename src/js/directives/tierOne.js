tc.directive('talent', function() {
    return {
        restrict: 'E',
        scope: {
            t1: '='
        },
        templateUrl: 'js/directives/tierOne.html'
    };
});