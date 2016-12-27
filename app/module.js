var web = angular.module ("form", ['firebase','ui.router']);



web.config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/student_record');


    $stateProvider

        .state('login', {
            url: '/login',
            templateUrl: 'login.html',
            title: 'Login'
            //controller: "formcont"

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

