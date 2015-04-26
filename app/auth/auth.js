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
        var ref = new Firebase("https://bhhstrothsigns.firebaseio.com/");
        return $firebaseAuth(ref);
    }])

    .controller('AuthController', [
        'AuthFactory',
        'AuthModel',
        function(authFactory, authModel) {
            var authCtrl = this;
            /***
             * initializes the controller:
             */
            authCtrl.init = function() {
            },

            authCtrl.loginFormSubmit = function() {
                authFactory.$authWithPassword({
                    email: authCtrl.loginForm.email,
                    password : authCtrl.loginForm.password
                }, function(error, authData) {
                    if (error) {
                        console.log("Login Failed!", error);
                    } else {
                        console.log("Authenticated successfully with payload:", authData);
                    }
                });
            },

            authCtrl.logout = function() {
                authFactory.$unauth();

            }

            authCtrl.init();
        }
    ]);
