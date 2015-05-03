angular.module('app.signs.model', [
])
    .service("SignsModel", function() {
        /***
         * list array of signs
         */
        this.signs = [
            {
                id: 1,
                address: "1234 State St",
                city: "Lancaster",
                state: "CA",
                zip: "93534",
                agent: {
                    id: 1,
                    name: "John Smith"
                },
                status: {
                    id: 2,
                    name: "Repair"
                },
                type: {
                    id: 1,
                    name: "Custom Sign"
                }
            }
        ];

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
            var signIndex = this.getSignIndexByID(signID);
            return this.signs[signIndex];
        },

        /***
         * Retrieves the index in the list for a given sign
         * @param {number} signID - id of sign to be selected.
         * @returns {number} sign list index of sign
         */
        this.getSignIndexByID = function(signID) {
            for(var i=0; i < this.signs.length; i++) {
                if(this.signs[i].id == Number(signID)) {
                    return i
                }
            }
        },

        /***
         * Updates an existing sign
         * @param {sign} sign - sign object to be updated
         */
        this.updateSign = function(sign) {
            var signIndex = this.getSignIndexByID(sign.id);

            this.signs[signIndex] = sign;
        },

        /***
         * Deletes an existing sign
         * @param {sign} sign - sign object to be removed
         */
        this.deleteSign = function(sign) {
            var signIndex = this.getSignIndexByID(sign.id);

            this.signs.splice(signIndex, 1);
        },

        /***
         * Inserts a new sign
         * @param {sign} sign - sign object to be inserted
         */
        this.insertSign = function(sign) {
            sign.id = this.signs[this.signs.length-1].id + 1;
            this.signs.push(sign);
        }

    });