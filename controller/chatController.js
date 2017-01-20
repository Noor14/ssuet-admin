web.controller('chatController', function($rootScope, $scope, $state, $cookies, ngDialog, toaster, Upload){

$scope.chatMember = [
    {
        name:"Mueed",
        Status:"online"
    },
    {
        name:"shehroz",
        Status:"offline"
    },

    {
        name:"Arif",
        Status:"online"
    },

    {
        name:"Ashfaq",
        Status:"online"
    },

    {
        name:"Noor",
        Status:"offline"
    },
    {
        name:"Taleaa",
        Status:"offline"
    },
    {
        name:"Inam ul Haq",
        Status:"online"
    },
    {
        name:"Abrar",
        Status:"online"
    }



];
    $scope.chatDiv=[];

    $scope.chatBox = function(chat){
        $scope.chatDiv.push(chat);
        console.log($scope.chatDiv,"chat")
    }


});
