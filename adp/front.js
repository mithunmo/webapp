

var app = angular.module("myapp",[]);

app.service("BattleService",function($http){    
    console.log("coming here");
    this.getBattles = function(){
        return $http.get("http://localhost:3000/battles");
    }

    this.getKings = function(){
        return $http.get("http://localhost:3000/kings");
    }


    this.getDetails = function(name){
        return $http.get("http://localhost:3000/BattleDetails?name=" + name);
    }


});

app.controller("GOTController",function($scope,$http,BattleService){
    BattleService.getBattles().then(function(response){
        $scope.battles = response.data;
    },function(response){
        $scope.battles = "No records";
    })

    BattleService.getKings().then(function(response){
        $scope.kings = response.data;
    },function(response){
        $scope.kings = "No records";
    })

    $scope.getBattleDetails = function(item){
        BattleService.getDetails(item).then(function(response){
            //console.log(response.data);
            $scope.wardetail = response.data;
            console.log($scope.wardetail);
        },function(response){
            $scope.wardetail = "No record"
        })        
        
    } 

});

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

app.controller("FormCtrl",[ '$scope', function($scope){
    $scope.groceryList = [
        {name : "tomatoes" , purchased : false},
        {name : "potato" , purchased : false},
        {name : "onion" , purchased : false},
        {name : "cabbage" , purchased : false},
        {name : "bell peper" , purchased : false},
        {name : "lettuce" , purchased : false}
    ];

    $scope.addItem = function(newItemm){
        $scope.groceryList.push(
            { name : newItemm , purchased : false}
        );
    }

}]);


/*
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
*/