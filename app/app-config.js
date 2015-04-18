angular.module('app.config', [
    'ui.router',
    'ui.grid'
])
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
    }]);