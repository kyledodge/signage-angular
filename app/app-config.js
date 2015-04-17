angular.module('app.config', ['ui.router', 'ui.grid'])
    .config(function($stateProvider) {
        $stateProvider
            //default state
            .state('default', {
                url: '',
                templateUrl: 'app/home/home.template.html',
                controller: 'homeController'
            })

            //users list state
            .state('users', {
                url: '/users',
                templateUrl: 'app/users/users.template.html',
                controller: 'usersController'
            })

            //edit user state
            .state('userEdit', {
                url: '/users/:userID/edit',
                templateUrl: 'app/users/edit/user-edit.template.html',
                controller: 'userEditController'
            })

            //create new user state
            .state('userCreate', {
                url: '/users/create',
                templateUrl: 'app/users/create/user-create.template.html',
                controller: 'userCreateController'
            })
    });