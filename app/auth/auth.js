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
        function(AuthFactory, AuthModel, $state) {
            var authCtrl = this;
            /***
             * initializes the controller:
             */
            authCtrl.init = function() {
            },

            authCtrl.loginFormSubmit = function() {
                var username = authCtrl.loginForm.email.value,
                    password = authCtrl.loginForm.password.value

                authCtrl.login(username, password);
            },

            authCtrl.login = function(username, password) {
                AuthFactory.authWithPassword({
                    email: username,
                    password : password
                }, function(error, authData) {
                    if (error) {
                        console.log("Login Failed!", error);
                    } else {
                        console.log("Authenticated successfully with payload:", authData);
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
