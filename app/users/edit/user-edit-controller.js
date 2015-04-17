angular.module('app')

    .controller('userEditController', [
        '$rootScope', '$scope', 'usersModel', '$stateParams', '$state',
        function($rootScope, $scope, usersModel, $stateParams, $state) {

            /***
             * updates an existing user and navigates to user list
             */
            $scope.updateUser = function() {
                usersModel.updateUser($scope.user);
                $state.go('users');
            };

            /***
             * deletes an existing user and navigates to user list
             */
            $scope.deleteUser = function() {
                usersModel.deleteUser($scope.user);
                $state.go('users');
            }

            /***
             * cancels editing existing user and navigates to user list
             */
            $scope.cancelUser = function() {
                $state.go('users');
            };

            /***
             * initializes the controller: fetches user based on route userID
             */
            $scope.init = function() {
                $scope.user = usersModel.getUser(Number($stateParams.userID));
            }

            $scope.init();
    }]);
