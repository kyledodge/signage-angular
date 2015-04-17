angular.module('app')

    .service("usersModel", ['$rootScope', function($rootScope) {
        this.users = [
            {
                id: 1,
                firstName: "John",
                lastName: "Smith",
                userType: "Member",
                lastLogin: "01/02/2015"
            },
            {
                id: 2,
                firstName: "Mike",
                lastName: "Jones",
                userType: "Member",
                lastLogin: "04/04/2015"
            },
            {
                id: 3,
                firstName: "James",
                lastName: "Anderson",
                userType: "Administrator",
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
            for(var i=0; i < this.users.length; i++) {
                if(this.users[i].id === userID) {
                    return this.users[i];
                }
            }
        }

    }]);