angular.module('app.users.model', [
])
    .service("UsersModel", function() {
        /***
         * list array of users
         */
        this.users = [
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
         * Retrives a list of users
         * @param {string} query - filters the list of users. optional.
         * @returns {array} array of user objects
         */
        this.getUsers = function(query) {
            return this.users;
        },

        /***
         * Retrives a user
         * @param {number} userID - id of user to be selected.
         * @returns {object} user object
         */
        this.getUser = function(userID) {
            var userIndex = this.getUserIndexByID(userID);
            return this.users[userIndex];
        },

        /***
         * Retrieves the index in the list for a given user
         * @param {number} userID - id of user to be selected.
         * @returns {number} user list index of user
         */
        this.getUserIndexByID = function(userID) {
            for(var i=0; i < this.users.length; i++) {
                if(this.users[i].id == Number(userID)) {
                    return i
                }
            }
        },

        /***
         * Updates an existing user
         * @param {user} user - user object to be updated
         */
        this.updateUser = function(user) {
            var userIndex = this.getUserIndexByID(user.id);

            this.users[userIndex] = user;
        },

        /***
         * Deletes an existing user
         * @param {user} user - user object to be removed
         */
        this.deleteUser = function(user) {
            var userIndex = this.getUserIndexByID(user.id);

            this.users.splice(userIndex, 1);
        },

        /***
         * Inserts a new user
         * @param {user} user - user object to be inserted
         */
        this.insertUser = function(user) {
            user.id = this.users[this.users.length-1].id + 1;
            this.users.push(user);
        }

    });