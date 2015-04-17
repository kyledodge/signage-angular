angular.module('app')

    .controller('usersController', [
        '$rootScope', '$scope', 'usersModel', '$stateParams', function($rootScope, $scope, usersModel, $stateParams) {

        $scope.getAllUsers = function() {
            $scope.userList = usersModel.getUsers();
        }

        $scope.getUser = function() {
            $scope.user = usersModel.getUser(Number($stateParams.userID));
        }

        $scope.init = function() {
            $scope.getAllUsers();
            $scope.getUser();
        }

        $scope.init();

    }])