angular.module('app.auth.model', [
])
    .service("AuthModel", function() {
        var authModel = this;

        authModel.isLoggedIn = false;
        authModel.userInfo = {};
    });