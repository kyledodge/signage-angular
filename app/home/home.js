angular.module('app.home', [
    'ui.router'
])
    .config([
        '$stateProvider',
        function($stateProvider) {
        $stateProvider
            //default state
            .state('default', {
                url: '/',
                templateUrl: 'app/home/home.template.html',
                controller: 'HomeController as homeCtrl'
            })
    }])

    .controller('HomeController', function() {
        var homeCtrl = this;
    });