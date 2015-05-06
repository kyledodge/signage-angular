angular.module('app.signs.model', [
    'firebase'
])
    .service("SignsModel", ["$firebaseArray", function($firebaseArray) {
        /***
         * list array of signs
         */
        this.signs = $firebaseArray(new Firebase("https://bhhstrothsigns.firebaseio.com/signs")),

        /***
         * Retrives a list of signs
         * @param {string} query - filters the list of signs. optional.
         * @returns {array} array of sign objects
         */
        this.getSigns = function(query) {
            return this.signs;
        },

        /***
         * Retrives a sign
         * @param {number} signID - id of sign to be selected.
         * @returns {object} sign object
         */
        this.getSign = function(signID) {
            return this.signs.$getRecord(signID);
        },

        /***
         * Updates an existing sign
         * @param {sign} sign - sign object to be updated
         */
        this.updateSign = function(sign) {
            this.signs.$save(sign);
        },

        /***
         * Deletes an existing sign
         * @param {sign} sign - sign object to be removed
         */
        this.deleteSign = function(sign) {
            this.signs.$remove(sign);
        },

        /***
         * Inserts a new sign
         * @param {sign} sign - sign object to be inserted
         */
        this.insertSign = function(sign) {
            this.signs.$add(sign);
        }

    }]);