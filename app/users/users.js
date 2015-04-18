angular.module('app.users', [
    'ui.router',
    'app.users.model'
])
    .config([
        '$stateProvider',
        function($stateProvider) {
        $stateProvider
            //users list state
            .state('users', {
                url: '/users',
                templateUrl: 'app/users/users.template.html',
                controller: 'UsersController as usersCtrl'
            })
    }])

    .controller('UsersController', [
        'UsersModel',
        function(UsersModel) {
            var usersCtrl = this;

            /***
             * retrieves all users for display in the user list
             */
            usersCtrl.getAllUsers = function() {
                usersCtrl.userList = UsersModel.getUsers();
            }

            /***
             * initialize the datagrid
             */
            usersCtrl.initDatagrid = function() {
                usersCtrl.userGrid = {
                    data: usersCtrl.userList,
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
            usersCtrl.init = function() {
                usersCtrl.getAllUsers();
                usersCtrl.initDatagrid();
            }

            usersCtrl.init();
        }
    ]);
