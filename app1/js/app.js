var app = angular.module("myapp",[]);

app.controller("DataController",function($scope, $http){
  $scope.getCustomData = function(){
    $scope.name = "tom";
    $scope.age = "33";
  }

  $scope.data = [
    {name : "mithun", age : 24},
    {name : "tom", age : 24},
    {name : "harry", age : 24},
    {name : "london", age : 24},

  ];
});


app.service("VideoService",function($http){
  this.getData = function(){
        return $http.get("http://localhost/app1/api/rest-data.php");
};
});


app.controller("VideoContoller",function($scope, $http, VideoService){

    VideoService.getData().then(function(response){
      $scope.videos = response.data;
    },function(response){
      $scope.videos = "No videos";
    });
});
