angular.module('myApp', []).controller('userCtrl', function($scope) {

    //edit data
    $scope.fName = '';
    $scope.lName = '';
    $scope.passw1 = '';
    $scope.passw2 = '';

    //init data
    $scope.users = [
        {id:1, fName:'Hege',lName:"Pege" },
        {id:2, fName:'Kim',lName:"Pim" },
        {id:3, fName:'Sal',lName:"Smith" },
        {id:4, fName:'Jack',lName:"Jones" },
        {id:5, fName:'John',lName:"Doe" }
    ];


    //status flag
    $scope.edit = true;
    $scope.error = false;
    $scope.incomplete = false;

    //save or update
    $scope.editUser = function(id) {
        if (id == 'new') {
            $scope.edit = true;
            $scope.incomplete = true;
            $scope.fName = '';
            $scope.lName = '';
            console.log('new- ',$scope);
        } else {
            $scope.edit = false;
            $scope.fName = $scope.users[id-1].fName;
            $scope.lName = $scope.users[id-1].lName;
            console.log('edit- ',$scope.users[id-1]);
        }
    };

    //TODO $watch not working when view import by ng-include
    $scope.$watch('passw1',function(newV,oldV) {
        $scope.test();
    });
    $scope.$watch('passw2',function() {$scope.test();});
    $scope.$watch('fName', function() {$scope.test();});
    $scope.$watch('lName', function() {$scope.test();});


    $scope.test = function() {
        if ($scope.passw1 !== $scope.passw2) {
            $scope.error = true;
        } else {
            $scope.error = false;
        }
        $scope.incomplete = false;
        if ($scope.edit && (!$scope.fName.length ||
                            !$scope.lName.length ||
                            !$scope.passw1.length || !$scope.passw2.length)) {
            $scope.incomplete = true;
        }
    };
})