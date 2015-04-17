angular.module('app.home', [
    'ui.router'
])
    .config(function($stateProvider) {
        $stateProvider
            //default state
            .state('default', {
                url: '/',
                templateUrl: 'app/home/home.template.html',
                controller: 'HomeController'
            })
    })

    .controller('HomeController', function($scope) {

    });