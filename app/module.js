var web = angular.module ("form", ['ngFileUpload','firebase','ui.router','ngCookies','angularUtils.directives.dirPagination', 'angular.filter','ngDialog','toaster', 'ngAnimate']);

web.run(function($rootScope, $state){
    $rootScope
        .$on('$stateChangeStart',
            function (e, toState, toParams, fromState, fromParams) {

                if(toState.name == 'login' && $rootScope.user){
                    e.preventDefault();
                    $state.go('parent.student_record');
                }

            });
});

web.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/login');


    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: 'login.html',
            controller: "formcont"
        })
        .state('parent', {
            url: '/home',
            templateUrl: 'parent.html',
            controller: "formcont"

        })

        .state('parent.student_record', {
            url: '/student_record',
            templateUrl: 'student_record.html',
            dataname:'student_record',
            controller: "formcont"

        })


        .state('parent.library', {
            url: '/library',
            templateUrl: 'library.html',
            dataname:'library',
            controller: "formcont"


        })


        .state('parent.job', {
            url: '/job',
            templateUrl: 'job.html',
            dataname:'job',
            controller: "formcont"


        })


        .state('parent.events', {
            url: '/events',
            templateUrl: 'events.html',
            dataname:'events',
            controller: "formcont"


        })
});

