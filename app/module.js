var web = angular.module ("form", ['ngFileUpload','firebase','ui.router','ngCookies','angularUtils.directives.dirPagination', 'angular.filter','ngDialog','toaster', 'ngAnimate']);

web.run(function($rootScope, $state){
    $rootScope
        .$on('$stateChangeStart',
            function (e, toState, toParams, fromState, fromParams) {
                if(toState.name == 'login' && $rootScope.user){
                    e.preventDefault();
                    $state.go('home.dashboard');
                }

            });
});

web.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/');


    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: 'login.html',
            controller: "formcont"
        })
        .state('home', {
            url: '',
            templateUrl: 'home.html',
            controller: "formcont",
            abstract: true
        })

        .state('home.dashboard', {
            url: '/',
            templateUrl: 'dashboard.html',
            dataname:'student_record',
            controller: "formcont"

        })
        .state('home.student_record', {
            url: '/student_record',
            templateUrl: 'student_record.html',
            dataname:'student_record',
            controller: "formcont"

        })


        .state('home.library', {
            url: '/library',
            templateUrl: 'library.html',
            dataname:'library',
            controller: "formcont"


        }).state('home.employee_record', {
            url: '/employee',
            templateUrl: 'employee.html',
            dataname:'employee_record',
            controller: "formcont"


        })


        .state('home.job', {
            url: '/job',
            templateUrl: 'job.html',
            dataname:'job',
            controller: "formcont"


        })


        .state('home.events', {
            url: '/events',
            templateUrl: 'events.html',
            dataname:'events',
            controller: "formcont"


        })
});

