

var app = angular.module("myapp",[]);

app.provider("myProvider", function() {
    this.$get = function() {
        var i = 1;
        console.log("MyProviderFunction.$get() called."); // ADDED this line
        return i;
    };
});

app.service("TransactionService",function($http){
  this.getData = function(){
        return $http.get("http://localhost/app3/api/rest-data.php");
};
});

app.directive("w3TestDirective",function(){
  return {
    template : "<h2> New directive {{ keyword}} </h2>"
  };
});


app.controller("BankController",function($scope, $http, TransactionService, myProvider){
$scope.transactions = [];
$scope.asc=0;
$scope.dsc=0;
console.log("calling provider");
console.log(myProvider);
  TransactionService.getData().then(function(response){
      $scope.transactions = response.data;
    },function(response){
      $scope.transactions = "No Transactions";

  });

/*
 $scope.$watch("keyword",function(val,oldval,scope){
    console.log("neval"  + val);
    console.log("oldval"  + oldval);
    //console.log(val.split("").reverse().join(""));
    scope.keyword = val.split("").reverse().join("");
 });
*/
 $scope.sortBY = function(){
          if ( $scope.asc == 0 ) {
              $scope.asc=1;
              $scope.dsc=0;

              $scope.transactions.sort(function(a, b) {
                return parseFloat(a.Amount) - parseFloat(b.Amount);
              });
          } else {
            $scope.dsc=1;
            $scope.asc=0;
            $scope.transactions.sort(function(a, b) {
              return parseFloat(b.Amount) - parseFloat(a.Amount);
            });

          }


};

});
