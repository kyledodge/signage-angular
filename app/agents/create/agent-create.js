angular.module('app.agents.create', [
    'app.agents.model',
    'ui.router',
    'ngMessages'
])
    .config([
        '$stateProvider',
        function($stateProvider) {
        $stateProvider
            .state('agentCreate', {
                url: '/agents/create',
                templateUrl: 'app/agents/create/agent-create.template.html',
                controller: 'AgentCreateController as agentCreateCtrl'
            })
    }])

    .controller('AgentCreateController', [
        'AgentsModel', '$stateParams', '$state',
        function(AgentsModel, $stateParams, $state) {
            var agentCreateCtrl = this;

            /***
             * model to hold new agent information from form
             */
            agentCreateCtrl.newAgentData = {};
            agentCreateCtrl.agentRoles = AgentsModel.roles;

            /***
             * handles new agent form submission
             */
            agentCreateCtrl.submitForm = function() {
                if (agentCreateCtrl.agentForm.$valid) {
                    agentCreateCtrl.insertAgent();
                } else {
                    return false;
                }
            };

            /***
             * inserts a new agent and navigates to agent list
             */
            agentCreateCtrl.insertAgent = function() {
                agentsModel.insertAgent(agentCreateCtrl.newAgentData);
                $state.go('agents');
            };


            /***
             * cancels new agent creation and navigates to agent list
             */
            agentCreateCtrl.cancelAgent = function() {
                $state.go('agents');
            };
        }
    ]);

