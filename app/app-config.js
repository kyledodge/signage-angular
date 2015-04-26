angular.module('app.config', [
    'ui.router',
    'ui.grid'
])

    .run(["$rootScope", "$location", function($rootScope, $location) {
        $rootScope.$on("$routeChangeError", function(event, next, previous, error) {
            console.log(error)
            if (error === "AUTH_REQUIRED") {
                $location.path("/home");
            }
        });
    }])

    .config([
        '$stateProvider', '$urlRouterProvider',
        function($stateProvider, $urlRouterProvider) {
        //alias an empty route to the root route
        $urlRouterProvider.when('', '/');

        //all unknown routes direct to the 404 route
        $urlRouterProvider.otherwise('/404');

        $stateProvider
            .state('404', {
                url: '/404',
                templateUrl: 'app/common/404.template.html'
            })
    }])