angular.module('app')

    .service("usersModel", function() {
        /***
         * list array of users
         */
        this.users = [
            {
                id: 1,
                firstName: "John",
                lastName: "Smith",
                role: "Member",
                lastLogin: "01/02/2015"
            },
            {
                id: 2,
                firstName: "Mike",
                lastName: "Jones",
                role: "Member",
                lastLogin: "04/04/2015"
            },
            {
                id: 3,
                firstName: "James",
                lastName: "Anderson",
                role: "Administrator",
                lastLogin: "03/02/2015"
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
                    console.log('found ' + this.users[i].id)
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

            if(userIndex && (typeof userIndex == 'number' && !isNaN(userIndex))) {
                this.users[userIndex] = user;
            }
        },

        /***
         * Deletes an existing user
         * @param {user} user - user object to be removed
         */
        this.deleteUser = function(user) {
            var userIndex = this.getUserIndexByID(user.id);

            if(userIndex && (typeof userIndex == 'number' && !isNaN(userIndex))) {
                this.users.splice(userIndex, 1);
            }
        },
        /***
         * Inserts a new user
         * @param {user} user - user object to be inserted
         */
        this.insertUser = function(user) {
            this.users.push(user);
        }

    });