angular.module('app.agents', [
    'ui.router',
    'app.agents.model',
    'firebase'
])
    .config([
        '$stateProvider',
        function($stateProvider) {
        $stateProvider
            //agents list state
            .state('agents', {
                url: '/agents',
                templateUrl: 'app/agents/agents.template.html',
                controller: 'AgentsController as agentsCtrl',
                resolve: {
                    "currentAuth": ["AuthFactory",'$firebaseAuth', function(AuthFactory, $firebaseAuth) {
                        var auth = $firebaseAuth(AuthFactory);
                        return auth.$requireAuth();
                    }]
                }
            })
    }])

    .controller('AgentsController', [
        'AgentsModel',
        'currentAuth',
        function(AgentsModel, currentAuth) {
            var agentsCtrl = this;
            /***
             * retrieves all agents for display in the agent list
             */
            agentsCtrl.getAllAgents = function() {
                agentsCtrl.agentList = AgentsModel.getAgents();
            }

            /***
             * initialize the datagrid
             */
            agentsCtrl.initDatagrid = function() {
                agentsCtrl.agentGrid = {
                    data: agentsCtrl.agentList,
                    columnDefs: [
                        {name: 'id', displayName: 'Agent ID', enableColumnMenu: false},
                        {name: 'firstName', displayName: 'First Name', enableColumnMenu: false},
                        {name: 'lastName', displayName: 'Last Name', enableColumnMenu: false},
                        {name: 'email', displayName: 'Email', enableColumnMenu: false},
                        {name: 'role.roleName', displayName: 'Agent Role', enableColumnMenu: false},
                        {
                            name: 'Actions',
                            enableColumnMenu: false,
                            cellTemplate: '<div class="ui-grid-cell-contents"><a ui-sref="agentEdit({agentID: row.entity.id})">' +
                            '<span class="glyphicon glyphicon-edit" aria-hidden="true"></span> ' +
                            'Edit</a></div>'
                        }
                    ]
                }
            }

            /***
             * initializes the controller: retrieves agents, inits datagrid
             */
            agentsCtrl.init = function() {
                agentsCtrl.getAllAgents();
                agentsCtrl.initDatagrid();
            }

            agentsCtrl.init();
        }
    ]);
