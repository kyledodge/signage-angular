angular.module('app.agents.model', [
])
    .service("AgentsModel", function() {
        /***
         * list array of agents
         */
        this.agents = [
            {
                id: 1,
                firstName: "John",
                lastName: "Smith",
                role: {
                    id: 1,
                    roleName: "Member"
                },
                email: "john@test.com",
                lastLogin: "01/02/2015"
            },
            {
                id: 2,
                firstName: "Mike",
                lastName: "Jones",
                role: {
                    id: 1,
                    roleName: "Member"
                },
                email: "mike@test.com",
                lastLogin: "04/04/2015"
            },
            {
                id: 3,
                firstName: "James",
                lastName: "Anderson",
                role: {
                    id: 1,
                    roleName: "Member"
                },
                email: "james@test.com",
                lastLogin: "03/02/2015"
            }
        ];

        this.roles = [
            {
                id: 1,
                roleName: "Member"
            },
            {
                id: 2,
                roleName: "Developer"
            },
            {
                id: 3,
                roleName: "Administrator"
            }
        ];

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
            var agentIndex = this.getAgentIndexByID(agentID);
            return this.agents[agentIndex];
        },

        /***
         * Retrieves the index in the list for a given agent
         * @param {number} agentID - id of agent to be selected.
         * @returns {number} agent list index of agent
         */
        this.getAgentIndexByID = function(agentID) {
            for(var i=0; i < this.agents.length; i++) {
                if(this.agents[i].id == Number(agentID)) {
                    return i
                }
            }
        },

        /***
         * Updates an existing agent
         * @param {agent} agent - agent object to be updated
         */
        this.updateAgent = function(agent) {
            var agentIndex = this.getAgentIndexByID(agent.id);

            this.agents[agentIndex] = agent;
        },

        /***
         * Deletes an existing agent
         * @param {agent} agent - agent object to be removed
         */
        this.deleteAgent = function(agent) {
            var agentIndex = this.getagentIndexByID(agent.id);

            this.agents.splice(agentIndex, 1);
        },

        /***
         * Inserts a new agent
         * @param {agent} agent - agent object to be inserted
         */
        this.insertAgent = function(agent) {
            agent.id = this.agents[this.agents.length-1].id + 1;
            this.agents.push(agent);
        }

    });