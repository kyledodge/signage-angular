angular.module('app')

    .controller('usersController', [
        '$rootScope', '$scope', 'usersModel',
        function($rootScope, $scope, usersModel) {

            $scope.getAllUsers = function() {
                $scope.userList = usersModel.getUsers();
            }

            $scope.initDatagrid = function() {
                $scope.userGrid = {
                    data: $scope.userList,
                    columnDefs: [
                        {name: 'id'},
                        {name: 'firstName'},
                        {name: 'lastName'},
                        {name: 'role'},
                        {name: 'Actions', cellTemplate: '<a ui-sref="userEdit({userID: row.entity.id})"><span class="glyphicon glyphicon-edit" aria-hidden="true"></span> Edit</a>'}
                    ]
                }
            }

            $scope.init = function() {
                $scope.getAllUsers();
                $scope.initDatagrid();
            }

            $scope.init();
    }]);
