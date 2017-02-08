web.controller('dashboardController',function($scope){

    $scope.panel = [

        {
            title: "Student Panel",
            Detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante in sapien blandit luctus sed ut lacus. Phasellus urna est, faucibus nec ultrices placerat, feugiat et ligula. Donec vestibulum magna a dui pharetra molestie. Fusce et dui urna.",
            icon:"",
            relation : [
                {
                link : "Section",
                state  : "section"
                },

                {
                    link : "Department",
                    state  : "section"
                },
                {
                    link : "History",
                    state  : "attendance"
                },
                {
                    link : "Student Record",
                    state  : "attendance"
                },
                {
                    link : "Fee Clearance",
                    state  : "attendance"
                }


            ]

        },
        {
            title: " Teacher Panel",
            Detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante in sapien blandit luctus sed ut lacus. Phasellus urna est, faucibus nec ultrices placerat, feugiat et ligula. Donec vestibulum magna a dui pharetra molestie. Fusce et dui urna.",
            icon:"",
            relation : [
                {
                    link : "Temperory Teacher",
                    state  : "section"
                },
                {
                    link : "Permanent Teacher",
                    state  : "section"
                },

                {
                    link : "Teacher History",
                    state  : "attendance"
                },
                {
                    link : "Teacher Record",
                    state  : "attendance"
                },
                {
                    link : "Teacher Package",
                    state  : "attendance"
                }


            ]
        },
        {
            title: "Staff Panel",
            Detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante in sapien blandit luctus sed ut lacus. Phasellus urna est, faucibus nec ultrices placerat, feugiat et ligula. Donec vestibulum magna a dui pharetra molestie. Fusce et dui urna.",
            icon:""
        },
        {
            title: "Attendance Panel",
            Detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante in sapien blandit luctus sed ut lacus. Phasellus urna est, faucibus nec ultrices placerat, feugiat et ligula. Donec vestibulum magna a dui pharetra molestie. Fusce et dui urna.",
            icon:""
        },
        {
            title: "Admission Panel",
            Detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante in sapien blandit luctus sed ut lacus. Phasellus urna est, faucibus nec ultrices placerat, feugiat et ligula. Donec vestibulum magna a dui pharetra molestie. Fusce et dui urna.",
            icon:""
        },
        {
            title: "Examination Panel",
            Detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante in sapien blandit luctus sed ut lacus. Phasellus urna est, faucibus nec ultrices placerat, feugiat et ligula. Donec vestibulum magna a dui pharetra molestie. Fusce et dui urna.",
            icon:""
        },
        {
            title: "Fee Panel",
            Detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante in sapien blandit luctus sed ut lacus. Phasellus urna est, faucibus nec ultrices placerat, feugiat et ligula. Donec vestibulum magna a dui pharetra molestie. Fusce et dui urna.",
            icon:""
        },
        {
            title: "Events Panel",
            Detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante in sapien blandit luctus sed ut lacus. Phasellus urna est, faucibus nec ultrices placerat, feugiat et ligula. Donec vestibulum magna a dui pharetra molestie. Fusce et dui urna.",
            icon:""
        },
        {
            title: "Career Panel",
            Detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante in sapien blandit luctus sed ut lacus. Phasellus urna est, faucibus nec ultrices placerat, feugiat et ligula. Donec vestibulum magna a dui pharetra molestie. Fusce et dui urna.",
            icon:""
        },
        {
            title: "Enrolment Panel",
            Detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante in sapien blandit luctus sed ut lacus. Phasellus urna est, faucibus nec ultrices placerat, feugiat et ligula. Donec vestibulum magna a dui pharetra molestie. Fusce et dui urna.",
            icon:""
        },
        {
            title: "Private Panel",
            Detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante in sapien blandit luctus sed ut lacus. Phasellus urna est, faucibus nec ultrices placerat, feugiat et ligula. Donec vestibulum magna a dui pharetra molestie. Fusce et dui urna.",
            icon:""
        },
        {
            title: "Student Panel",
            Detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante in sapien blandit luctus sed ut lacus. Phasellus urna est, faucibus nec ultrices placerat, feugiat et ligula. Donec vestibulum magna a dui pharetra molestie. Fusce et dui urna.",
            icon:""
        },
        {
            title: "Info Panel",
            Detail:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque ut ante in sapien blandit luctus sed ut lacus. Phasellus urna est, faucibus nec ultrices placerat, feugiat et ligula. Donec vestibulum magna a dui pharetra molestie. Fusce et dui urna.",
            icon:""
        }







    ];

$scope.selectPanel= function(relation){
$scope.$emit('list', relation);

}
});