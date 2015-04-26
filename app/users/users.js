angular.module('app.users', [
    'ui.router',
    'app.users.model',
    'firebase'
])
    .config([
        '$stateProvider',
        function($stateProvider) {
        $stateProvider
            //users list state
            .state('users', {
                url: '/users',
                templateUrl: 'app/users/users.template.html',
                controller: 'UsersController as usersCtrl',
                resolve: {
                    "currentAuth": ["AuthFactory",'$firebaseAuth', function(AuthFactory, $firebaseAuth) {
                        var auth = $firebaseAuth(AuthFactory);
                        return auth.$requireAuth();
                    }]
                }
            })
    }])

    .controller('UsersController', [
        'UsersModel',
        'currentAuth',
        function(UsersModel, currentAuth) {
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
                        {name: 'id', displayName: 'User ID', enableColumnMenu: false},
                        {name: 'firstName', displayName: 'First Name', enableColumnMenu: false},
                        {name: 'lastName', displayName: 'Last Name', enableColumnMenu: false},
                        {name: 'email', displayName: 'Email', enableColumnMenu: false},
                        {name: 'role.roleName', displayName: 'User Role', enableColumnMenu: false},
                        {
                            name: 'Actions',
                            enableColumnMenu: false,
                            cellTemplate: '<div class="ui-grid-cell-contents"><a ui-sref="userEdit({userID: row.entity.id})">' +
                            '<span class="glyphicon glyphicon-edit" aria-hidden="true"></span> ' +
                            'Edit</a></div>'
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
