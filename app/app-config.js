angular.module('app.config', [
    'ui.router',
    'ui.grid'
])
    .config(function($stateProvider, $urlRouterProvider) {
        // the known route, with missing '/' - let's create alias
        $urlRouterProvider.when('', '/');

        // the unknown
        $urlRouterProvider.otherwise('/404');

        $stateProvider
            .state('404', {
                url: '/404',
                templateUrl: 'app/common/404.template.html'
            })
    });