/**
 * Created by Think on 2016/7/19.
 */

var app=angular.module("myApp",[]);

app.run(function ($rootScope) {
    $rootScope.name="Aya Stark";
});

app.controller("ParentController",function ($scope) {
    $scope.person={
        greeted:false
    };
});

app.controller("ChildController",function ($scope) {
  $scope.sayHello=function () {
      $scope.person.greeted=true;
  }
})

app.controller("PlayerController",['$scope',function ($scope) {
    $scope.playing=false;
    $scope.audio=document.createElement('audio');
    $scope.audio.src='/media/music-box.mp4';
    $scope.play=function () {
        $scope.audio.play();
        $scope.playing=true;
    };
    $scope.stop=function () {
        $scope.audio.pause();
        $scope.playing=false;
    };
    $scope.audio.addEventListener('ended',function () {
        $scope.$apply(function () {
            $scope.stop();
        });
    });
}]);

app.controller('RelatedController',['$scope',function ($scope) {

}])
