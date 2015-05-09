angular.module('app.agents.model', [
    'firebase'
])
    .service("AgentsModel", ["$firebaseArray", function($firebaseArray) {
        /***
         * list array of agents
         */
        this.agents = $firebaseArray(new Firebase("https://bhhstrothsigns.firebaseio.com/agents")),

        /***
         * Retrives a list of agents
         * @param {string} query - filters the list of agents. optional.
         * @returns {array} array of agent objects
         */
        this.getAgents = function(query) {
            return this.agents;
        },

        /***
         * Retrives a agent
         * @param {number} agentID - id of agent to be selected.
         * @returns {object} agent object
         */
        this.getAgent = function(agentID) {
            return this.agents.$getRecord(agentID);
        },

        /***
         * Updates an existing agent
         * @param {agent} agent - agent object to be updated
         */
        this.updateAgent = function(agent) {
            this.agents.$save(agent);
        },

        /***
         * Deletes an existing agent
         * @param {agent} agent - agent object to be removed
         */
        this.deleteAgent = function(agent) {
            this.agents.$remove(agent);
        },

        /***
         * Inserts a new agent
         * @param {agent} agent - agent object to be inserted
         */
        this.insertAgent = function(agent) {
            this.agents.$add(agent);
        }

    }]);