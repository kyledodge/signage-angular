angular.module('app.users.create', [
    'app.users.model',
    'ui.router'
])
    .config([
        '$stateProvider',
        function($stateProvider) {
        $stateProvider
            .state('userCreate', {
                url: '/users/create',
                templateUrl: 'app/users/create/user-create.template.html',
                controller: 'UserCreateController as userCreateCtrl'
            })
    }])

    .controller('UserCreateController', [
        'UsersModel', '$stateParams', '$state',
        function(UsersModel, $stateParams, $state) {
            var userCreateCtrl = this;

            /***
             * model to hold new user information from form
             */
            userCreateCtrl.newUserData = {};

            /***
             * inserts a new user and navigates to user list
             */
            userCreateCtrl.insertUser = function() {
                UsersModel.insertUser(userCreateCtrl.newUserData);
                $state.go('users');
            };

            /***
             * cancels new user creation and navigates to user list
             */
            userCreateCtrl.cancelUser = function() {
                $state.go('users');
            };
        }
    ]);

