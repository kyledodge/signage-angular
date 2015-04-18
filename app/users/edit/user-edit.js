angular.module('app.users.edit', [
    'app.users.model',
    'ui.router'
])
    .config([
        '$stateProvider',
        function($stateProvider) {
        $stateProvider
            .state('userEdit', {
                url: '/users/:userID/edit',
                templateUrl: 'app/users/edit/user-edit.template.html',
                controller: 'UserEditController as userEditCtrl'
            })
    }])

    .controller('UserEditController', [
        'UsersModel', '$stateParams', '$state',
        function(UsersModel, $stateParams, $state) {
            var userEditCtrl = this;

            /***
             * updates an existing user and navigates to user list
             */
            userEditCtrl.updateUser = function() {
                UsersModel.updateUser(userEditCtrl.user);
                $state.go('users');
            };

            /***
             * deletes an existing user and navigates to user list
             */
            userEditCtrl.deleteUser = function() {
                UsersModel.deleteUser(userEditCtrl.user);
                $state.go('users');
            }

            /***
             * cancels editing existing user and navigates to user list
             */
            userEditCtrl.cancelUser = function() {
                $state.go('users');
            };

            /***
             * initializes the controller: fetches user based on route userID
             */
            userEditCtrl.init = function() {
                userEditCtrl.user = UsersModel.getUser(Number($stateParams.userID));
            }

            userEditCtrl.init();
        }
    ]);
