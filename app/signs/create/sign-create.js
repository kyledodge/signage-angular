angular.module('app.signs.create', [
    'app.signs.model',
    'ui.router',
    'ngMessages'
])
    .config([
        '$stateProvider',
        function($stateProvider) {
        $stateProvider
            .state('signCreate', {
                url: '/signs/create',
                templateUrl: 'app/signs/create/sign-create.template.html',
                controller: 'SignCreateController as signCreateCtrl'
            })
    }])

    .controller('SignCreateController', [
        'SignsModel', '$stateParams', '$state',
        function(SignsModel, $stateParams, $state) {
            var signCreateCtrl = this;

            /***
             * model to hold new sign information from form
             */
            signCreateCtrl.newSignData = {};

            /***
             * handles new sign form submission
             */
            signCreateCtrl.submitForm = function() {
                if (signCreateCtrl.signForm.$valid) {
                    signCreateCtrl.insertSign();
                } else {
                    return false;
                }
            };

            /***
             * inserts a new sign and navigates to sign list
             */
            signCreateCtrl.insertSign = function() {
                SignsModel.insertSign(signCreateCtrl.newSignData);
                $state.go('signs');
            };


            /***
             * cancels new sign creation and navigates to sign list
             */
            signCreateCtrl.cancelSign = function() {
                $state.go('signs');
            };
        }
    ]);

