angular.module('app')

    .controller('userCreateController', [
        '$rootScope', '$scope', 'usersModel', '$stateParams', '$state',
        function($rootScope, $scope, usersModel, $stateParams, $state) {

            $scope.newUserData = {};

            $scope.insertUser = function() {
                usersModel.insertUser($scope.newUserData);
                $state.go('users');
            };

            $scope.cancelUser = function() {
                $state.go('users');
            };
    }])

