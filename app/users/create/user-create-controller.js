angular.module('app')
    .controller('userCreateController', [
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

