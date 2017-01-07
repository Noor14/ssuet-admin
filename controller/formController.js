web.controller('formcont', function($rootScope, $scope, $state, $cookies, ngDialog, toaster){
    $scope.data = {};
    $scope.user = {};
    $scope.node = $state.current.name;
    $rootScope.current_page = $state.current.title;
    $scope.loadingImage = "images/load.gif";
    $scope.active = true;
    $scope.insert = false;
    $scope.update = false;

    $scope.semester = ["Semester 1st", "Semester 2nd", "Semester 3rd", "Semester 4th", "Semester 5th", "Semester 6th", "Semester 7th", "Semester 8th"]

    $scope.tabOne = false;
    $scope.tabTwo = true;

    $scope.user.email = $cookies.get('email');
    $scope.user.password = $cookies.get('password');

    $scope.insertform = function(){
        $scope.tabOne = false;
        $scope.tabTwo = true;
        //console.log($scope.tabOne,$scope.tabTwo,"noor");

    };

    $scope.form = function(){
        $scope.tabOne = true;
        $scope.tabTwo = false;
        $scope.insert = false;
        $scope.update = false;
        $scope.data = {};
        //console.log($scope.tabOne,$scope.tabTwo,"noor");


    };
$scope.allData= function(node) {


    var ref = firebase.database().ref(node);
    ref.push($scope.data);
    $scope.data = {};
    $scope.retrieve();
    toaster.pop(

        {
            type: 'success',
            title: 'Insert',
            body: 'Your data has been inserted'
        }
    );



};

    $scope.deletePopup = function (node,key) {
       $scope.dialog = ngDialog.open({
            template: 'dialogbox.html',
            controller : function($scope){

                $scope.delete = function(){

                    var ref = firebase.database().ref(node);
                    ref.child(key).remove();
                    //    ref.off('value', function(childSnapshot.key) {
                    //        console.log("jj",childSnapshot.key);
                    //    }, function (error) {
                    //        console.log("Error: " + error.code);
                    //    });
                    $scope.confirmation = "Your selected item has been deleted";
                    $scope.closeThisDialog();


                };


            }

    });
        $scope.dialog.closePromise.then(function (data) {
            $scope.retrieve();

            console.log(data + ' has been dismissed.');
        });
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
    //        console.log(childSnapshot.key,childSnapshot.val(),childSnapshot.name,'Noor');
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
        $scope.invalid = "";

        firebase.auth().signInWithEmailAndPassword($scope.user.email, $scope.user.password).then(function(succ) {

            if(!succ.code){
                $cookies.put('email', $scope.user.email);
                $cookies.put('password', $scope.user.password);
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
    $scope.updateData = function(node, key){

        var ref = firebase.database().ref(node);
        ref.child(key).update($scope.data);
        $scope.data={};
        $scope.insert = false;
        $scope.update = false;
        $scope.retrieve();
        toaster.pop(

            {
                type: 'success',
                title: 'Edit',
                body: 'Your data has been updated'
            }
        );
    };
$scope.edit = function(data){
    $scope.data = data.value;
    $scope.key = data.key;
    console.log($scope.data.semester,'nms');
    $scope.insert = true;
    $scope.update = true;
    $scope.tabOne = false;
    $scope.tabTwo = true;
    //var ref = firebase.database().ref(node);
    //ref.child(key).remove();
    //$scope.retrieve();


}


});