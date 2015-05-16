angular.module('app.auth', [
    'app.auth.model',
    'ui.router',
    'firebase'
])
    .config([
        '$stateProvider',
        function($stateProvider) {
        $stateProvider
            //users list state
            .state('auth', {
                url: '/auth',
                templateUrl: 'app/auth/auth.template.html',
                controller: 'AuthController as authCtrl'
            })
    }])

    .factory("AuthFactory", ["$firebaseAuth", function($firebaseAuth) {
        return new Firebase("https://bhhstrothsigns.firebaseio.com/");
    }])

    .controller('AuthController', [
        'AuthFactory',
        'AuthModel',
        '$state',
        '$scope',
        function(AuthFactory, AuthModel, $state, $scope) {
            var authCtrl = this;
            /***
             * initializes the controller:
             */
            authCtrl.init = function() {
                AuthFactory.unauth();
                authCtrl.message = '';
                authCtrl.loggingIn = false;
            },

            authCtrl.loginFormSubmit = function() {
                var username = authCtrl.loginForm.email.value,
                    password = authCtrl.loginForm.password.value

                authCtrl.login(username, password);
            },

            authCtrl.login = function(username, password) {
                authCtrl.loggingIn = true;

                AuthFactory.authWithPassword({
                    email: username,
                    password : password
                }, function(error, authData) {
                    if (error) {
                        AuthModel.isLoggedIn = false;
                        AuthModel.userInfo = {};

                        $scope.$apply(function(){
                            authCtrl.message = "Invalid username/password. Please try again.";
                            authCtrl.loggingIn = false;
                        });
                    } else {
                        AuthModel.isLoggedIn = true;
                        AuthModel.userInfo = authData;

                        $scope.$apply(function(){
                            authCtrl.message = "";
                            authCtrl.loggingIn = false;
                        });

                        $state.go("default");
                    }
                });
            },

            authCtrl.logout = function() {
                AuthFactory.unauth();
            }

            authCtrl.init();
        }
    ]);
