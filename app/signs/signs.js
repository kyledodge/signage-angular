angular.module('app.signs', [
    'ui.router',
    'app.signs.model',
    'firebase'
])
    .config([
        '$stateProvider',
        function($stateProvider) {
        $stateProvider
            //signs list state
            .state('signs', {
                url: '/signs',
                templateUrl: 'app/signs/signs.template.html',
                controller: 'SignsController as signsCtrl',
                resolve: {
                    "currentAuth": ["AuthFactory",'$firebaseAuth', function(AuthFactory, $firebaseAuth) {
                        var auth = $firebaseAuth(AuthFactory);
                        return auth.$requireAuth();
                    }]
                }
            })
    }])

    .controller('SignsController', [
        'SignsModel',
        function(SignsModel) {
            var signsCtrl = this;

            /***
             * retrieves all signs for display in the sign list
             */
            signsCtrl.getAllSigns = function() {
                signsCtrl.signList = SignsModel.getSigns();
            }

            /***
             * initialize the datagrid
             */
            signsCtrl.initDatagrid = function() {
                signsCtrl.signGrid = {
                    data: signsCtrl.signList,
                    columnDefs: [
                        {name: 'id', displayName: 'Sign Number', enableColumnMenu: false},
                        {name: 'address', displayName: 'Address', enableColumnMenu: false},
                        {name: 'city', displayName: 'City', enableColumnMenu: false},
                        {name: 'state', displayName: 'State', enableColumnMenu: false},
                        {name: 'zip', displayName: 'Zip', enableColumnMenu: false},
                        {
                            name: 'Actions',
                            enableColumnMenu: false,
                            cellTemplate: '<div class="ui-grid-cell-contents"><a ui-sref="signEdit({signID: row.entity.$id})">' +
                            '<span class="glyphicon glyphicon-edit" aria-hidden="true"></span> ' +
                            'Edit</a></div>'
                        }
                    ]
                }
            }

            /***
             * initializes the controller: retrieves signs, inits datagrid
             */
            signsCtrl.init = function() {
                signsCtrl.getAllSigns();
                signsCtrl.initDatagrid();
            }

            signsCtrl.init();
        }
    ]);
