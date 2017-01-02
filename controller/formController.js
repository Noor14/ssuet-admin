web.controller('formcont', function($rootScope, $scope, $state){
    $scope.data = {};
    $scope.user = {};
    $scope.node = $state.current.name;
    $rootScope.current_page = $state.current.title;
    $scope.loadingImage = "images/load.gif";
    $scope.active = true;


    $scope.tabOne = false;
    $scope.tabTwo = true;

    $scope.insertform = function(){
        $scope.tabOne = false;
        $scope.tabTwo = true;
        //console.log($scope.tabOne,$scope.tabTwo,"noor");

    };

    $scope.form = function(){
        $scope.tabOne = true;
        $scope.tabTwo = false;
        //console.log($scope.tabOne,$scope.tabTwo,"noor");


    };
$scope.allData= function(node) {


    var ref = firebase.database().ref(node);
    ref.push($scope.data);
    $scope.data = {};
    $scope.retrieve();



};


    firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
            console.log(user.email);
            $rootScope.user = user.email;
            //$state.go("student_record");

        }
        else{

            $state.go("login");
        }
    });




    $scope.retrieve = function(){


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
    //        console.log(childSnapshot.key,'Noor');
    //    });
    //}, function (error) {
    //    console.log("Error: " + error.code);
    //});
        $scope.getdata=[];

        ref.on("child_added", function(data, prevChildKey) {
       //console.log(data.val(),"data");
            $scope.gt = {};
       $scope.gt.value = data.val();
       $scope.gt.key = data.key;

               $scope.getdata.push($scope.gt);

        console.log($scope.gt.key,"noor");
    });
    };
    $scope.retrieve();

    $scope.login = function(){
        $scope.active = false;


        firebase.auth().signInWithEmailAndPassword($scope.user.email, $scope.user.password).then(function(succ) {

            if(!succ.code){
                    $scope.active = true;
                    $state.go("student_record");
                }

        },function(error){

            $scope.$apply(function(){

                console.log(error.code);
                console.log(error.message);
                $scope.invalid = "Invalid email or password";
                $scope.active = true;
            })


        });


    };
$scope.delete = function(node,key){

    var ref = firebase.database().ref(node);
    //console.log(ref.child(key).remove(),"ll");
    ref.child(key).remove();
    $scope.retrieve();

//    ref.off('value', function(childSnapshot.key) {
//        console.log("jj",childSnapshot.key);
//    }, function (error) {
//        console.log("Error: " + error.code);
//    });
}


});