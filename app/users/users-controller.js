angular.module('app')

    .controller('usersController', [
        '$rootScope', '$scope', 'usersModel', '$stateParams', function($rootScope, $scope, usersModel, $stateParams) {
            $scope.getAllUsers = function() {
                $scope.userList = usersModel.getUsers();
            }

            $scope.showMe = function(x) {
                console.log(x);
            },

            $scope.initDatagrid = function() {
                $scope.userGrid = {
                    data: $scope.userList,
                    columnDefs: [
                        {name: 'id'},
                        {name: 'firstName'},
                        {name: 'lastName'},
                        {name: 'role'},
                        {name: 'Actions',
                            cellTemplate: '<a ui-sref="userEdit({userID: row.entity.id})">Edit</a>'
                        }
                    ]
                }
            }

            $scope.init = function() {
                $scope.getAllUsers();
                $scope.initDatagrid();
            }

            $scope.init();
    }]);
