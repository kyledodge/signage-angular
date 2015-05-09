angular.module('app.agents.edit', [
    'app.agents.model',
    'ui.router',
    'ngMessages'
])
    .config([
        '$stateProvider',
        function($stateProvider) {
        $stateProvider
            .state('agentEdit', {
                url: '/agents/:agentID/edit',
                templateUrl: 'app/agents/edit/agent-edit.template.html',
                controller: 'AgentEditController as agentEditCtrl',
                resolve: {
                    "currentAuth": ["AuthFactory",'$firebaseAuth', function(AuthFactory, $firebaseAuth) {
                        var auth = $firebaseAuth(AuthFactory);
                        return auth.$requireAuth();
                    }]
                }
            })
    }])

    .controller('AgentEditController', [
        'AgentsModel', '$stateParams', '$state',
        function(AgentsModel, $stateParams, $state) {
            var agentEditCtrl = this;

            /***
             * handles agent form submission
             */
            agentEditCtrl.submitForm = function() {
                if (agentEditCtrl.agentForm.$valid) {
                    agentEditCtrl.updateAgent();
                } else {
                    return false;
                }
            };

            /***
             * updates an existing agent and navigates to agent list
             */
            agentEditCtrl.updateAgent = function() {
                AgentsModel.updateAgent(agentEditCtrl.agent);
                $state.go('agents');
            };

            /***
             * deletes an existing agent and navigates to agent list
             */
            agentEditCtrl.deleteAgent = function() {
                AgentsModel.deleteAgent(agentEditCtrl.agent);
                setTimeout(function(){$state.go('agents')},1000);
            }

            /***
             * cancels editing existing agent and navigates to agent list
             */
            agentEditCtrl.cancelAgent = function() {
                $state.go('agents');
            };

            /***
             * initializes the controller: fetches agent based on route agentID
             */
            agentEditCtrl.init = function() {
                agentEditCtrl.agent = AgentsModel.getAgent($stateParams.agentID);
            }

            agentEditCtrl.init();
        }
    ]);
