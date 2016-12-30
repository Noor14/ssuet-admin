web.controller('formcont', function($rootScope, $scope, $state){

    $scope.getdata=[];
    $scope.data = {};
    $scope.node=$state.current.name;
    $rootScope.current_page = $state.current.title;

$scope.allData= function(node) {


    var ref = firebase.database().ref(node);
    ref.push($scope.data);
    $scope.data = {};


};
    var ref = firebase.database().ref($state.current.name);
    //var ref = firebase.database().ref();

    //ref.on("value", function(snapshot) {


        //console.log(snapshot.val());
    //    snapshot.forEach(function(childSnapshot) {
    //        //console.log(childSnapshot.key);
    //        //gt = {};
    //        //gt.value = childSnapshot.val();
    //        //gt.key = childSnapshot.key;
    //        //
    //        //$scope.getdata.push(gt);
    //        console.log(childSnapshot.val(),'Noor');
    //    });
    //}, function (error) {
    //    console.log("Error: " + error.code);
    //});
   ref.on("child_added", function(data, prevChildKey) {
       //console.log(data.val(),"data");
               gt = {};
               gt.value = data.val();

               $scope.getdata.push(gt);

        console.log(prevChildKey,"noor");
    });

$scope.delete = function(node){
    console.log("jj");

    var ref = firebase.database().ref(node);
ref.child(key).remove();
//    ref.off('value', function(childSnapshot.key) {
//        console.log("jj",childSnapshot.key);
//    }, function (error) {
//        console.log("Error: " + error.code);
//    });
}


});