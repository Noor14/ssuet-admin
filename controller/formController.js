web.controller('formcont', function($rootScope, $scope, $state){

    $scope.data = {};
    $rootScope.current_page = $state.current.title;
    console.log("hhh ", $state);

$scope.allData= function(key) {


    var ref = firebase.database().ref(key);
    ref.push($scope.data);
    $scope.data = {};


};





});