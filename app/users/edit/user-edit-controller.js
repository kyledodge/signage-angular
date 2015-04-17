angular.module('app')

    .controller('userEditController', [
        '$rootScope', '$scope', 'usersModel', '$stateParams', '$state',
        function($rootScope, $scope, usersModel, $stateParams, $state) {

            $scope.updateUser = function() {
                usersModel.updateUser($scope.user);
                $state.go('users');
            };

            $scope.deleteUser = function() {
                usersModel.deleteUser($scope.user);
                $state.go('users');
            }

            $scope.cancelUser = function() {
                $state.go('users');
            };
                
            $scope.init = function() {
                $scope.user = usersModel.getUser(Number($stateParams.userID));
            }

            $scope.init();
    }]);
