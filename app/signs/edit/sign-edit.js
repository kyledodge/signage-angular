angular.module('app.signs.edit', [
    'app.signs.model',
    'ui.router',
    'ngMessages'
])
    .config([
        '$stateProvider',
        function($stateProvider) {
        $stateProvider
            .state('signEdit', {
                url: '/signs/:signID/edit',
                templateUrl: 'app/signs/edit/sign-edit.template.html',
                controller: 'SignEditController as signEditCtrl'
            })
    }])

    .controller('SignEditController', [
        'SignsModel', '$stateParams', '$state',
        function(SignsModel, $stateParams, $state) {
            var signEditCtrl = this;

            /***
             * handles sign form submission
             */
            signEditCtrl.submitForm = function() {
                if (signEditCtrl.signForm.$valid) {
                    signEditCtrl.updateSign();
                } else {
                    return false;
                }
            };

            /***
             * updates an existing sign and navigates to sign list
             */
            signEditCtrl.updateSign = function() {
                SignsModel.updateSign(signEditCtrl.sign);
                $state.go('signs');
            };

            /***
             * deletes an existing sign and navigates to sign list
             */
            signEditCtrl.deleteSign = function() {
                SignsModel.deleteSign(signEditCtrl.sign);
                setTimeout(function(){$state.go('signs')},1000);
            }

            /***
             * cancels editing existing sign and navigates to sign list
             */
            signEditCtrl.cancelSign = function() {
                $state.go('signs');
            };

            /***
             * initializes the controller: fetches sign based on route signID
             */
            signEditCtrl.init = function() {
                signEditCtrl.sign = SignsModel.getSign($stateParams.signID);
            }

            signEditCtrl.init();
        }
    ]);
