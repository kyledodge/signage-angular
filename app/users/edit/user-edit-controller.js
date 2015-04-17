angular.module('app')

    .controller('userEditController', [
        '$rootScope', '$scope', 'usersModel', '$stateParams', function($rootScope, $scope, usersModel, $stateParams) {

        $scope.getUser = function(userID) {
            $scope.user = usersModel.getUser(userID);
        }

        $scope.init = function() {
            $scope.getUser(Number($stateParams.userID));
        }

        $scope.init();
    }]);
