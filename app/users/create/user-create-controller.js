angular.module('app.users.create', [
    'app.users.model',
    'ui.router'
])
    .config(function($stateProvider) {
        $stateProvider
            .state('userCreate', {
                url: '/users/create',
                templateUrl: 'app/users/create/user-create.template.html',
                controller: 'UserCreateController'
            })
    })

    .controller('UserCreateController', [
        '$rootScope', '$scope', 'usersModel', '$stateParams', '$state',
        function($rootScope, $scope, usersModel, $stateParams, $state) {
            /***
             * model to hold new user information from form
             */
            $scope.newUserData = {};

            /***
             * inserts a new user and navigates to user list
             */
            $scope.insertUser = function() {
                usersModel.insertUser($scope.newUserData);
                $state.go('users');
            };

            /***
             * cancels new user creation and navigates to user list
             */
            $scope.cancelUser = function() {
                $state.go('users');
            };
        }
    ]);

