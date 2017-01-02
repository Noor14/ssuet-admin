var web = angular.module ("form", ['firebase','ui.router']);

web.run(function($rootScope, $state){

    $rootScope.logout= function(){

        firebase.auth().signOut().then(function() {
            console.log("Logged out!");
            $rootScope.user='';
            $state.go("login");
        }, function(error) {
            console.log(error.code);
            console.log(error.message);
        });
    };
    $rootScope
        .$on('$stateChangeSuccess',
            function () {


                $rootScope.state = false;
                $rootScope.class="panel-body";
                $rootScope.panel="panel-default";
                $rootScope.main = "col-sm-9 col-sm-offset-3";

                if($state.current.name == "login"){
                    $rootScope.state = true;
                    $rootScope.class="my_class";
                    $rootScope.panel = "my_panel";
                    $rootScope.main = "my_main";

                }


            });


    $rootScope
        .$on('$stateChangeStart',
            function (e, toState, toParams, fromState, fromParams) {

                if(toState.name == 'login' && $rootScope.user){
                    e.preventDefault();
                    $state.go('student_record');
                }

            });
});

web.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');


    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: 'login.html',
            title: 'Login',
            controller: "formcont"
        })

        .state('student_record', {
            url: '/student_record',
            templateUrl: 'student_record.html',
            title: 'Student Record',
            controller: "formcont"

        })


        .state('library', {
            url: '/library',
            templateUrl: 'library.html',
            title : 'Library',
            controller: "formcont"


        })


        .state('job', {
            url: '/job',
            templateUrl: 'job.html',
            title: 'Jobs',
            controller: "formcont"


        })


        .state('events', {
            url: '/events',
            templateUrl: 'events.html',
            title:'Events',
            controller: "formcont"


        })
});

