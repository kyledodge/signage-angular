angular.module('app')
    .controller('usersController', [
        '$rootScope', '$scope', 'usersModel',
        function($rootScope, $scope, usersModel) {

            /***
             * retrieves all users for display in the user list
             */
            $scope.getAllUsers = function() {
                $scope.userList = usersModel.getUsers();
            }

            /***
             * initialize the datagrid
             */
            $scope.initDatagrid = function() {
                $scope.userGrid = {
                    data: $scope.userList,
                    columnDefs: [
                        {name: 'id'},
                        {name: 'firstName'},
                        {name: 'lastName'},
                        {name: 'role'},
                        {
                            name: 'Actions',
                            cellTemplate: '<a ui-sref="userEdit({userID: row.entity.id})">' +
                            '<span class="glyphicon glyphicon-edit" aria-hidden="true"></span>' +
                            'Edit</a>'
                        }
                    ]
                }
            }

            /***
             * initializes the controller: retrieves users, inits datagrid
             */
            $scope.init = function() {
                $scope.getAllUsers();
                $scope.initDatagrid();
            }

            $scope.init();
        }
    ]);
