angular.module('app', [
    'app.auth',
    'app.config',
    'app.home',
    'app.agents',
    'app.agents.create',
    'app.agents.edit',
    'app.signs',
    'app.signs.create',
    'app.signs.edit',
    'ui.router'
])
    .run(["$rootScope", "$state", function($rootScope, $state) {
        $rootScope.$on("$stateChangeError", function(event, toState, toParams, fromState, fromParams, error) {
            if (error === "AUTH_REQUIRED") {
                $state.go("auth");
            }
        });
    }]);