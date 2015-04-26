angular.module('app.auth.model', [
])
    .service("AuthModel", function() {


        this.messages = {
            "invalidLogin": "The username and/or password was not recognized. Please try again."
        }


    });