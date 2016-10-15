angular.module('starter.controllers', [])

/*Log in*/
.controller('loginController', function($scope, $state, $http, $timeout){
  $scope.$on("$ionicView.enter", function(event, data){
    $scope.user = {};
  });

  $scope.login = function(){
    return $state.go('app.menu'); //FIXME


    if(!$scope.user.email){
      $timeout(function(){ $scope.errorMessage = ''; }, 1000);
      return $scope.errorMessage = "Invalid Email Address";
    }
    var request = $http.post('http://localhost:3000/login', $scope.user);

    request.success(function(){
      $state.go('app.menu');
    });

    request.error(function(error){
      $scope.errorMessage = error;
      $timeout(function(){
        $scope.errorMessage = '';
        //$state.go('app.menu'); //FIXME
      }, 1000);
    });
  };
})

/*Menu*/
.controller('menuController', function($scope, Menu, $state){
  $scope.menus = Menu.all();
  $scope.select = function(menu) {
    //TODO load from endpoint
    console.log('Look ma : ', menu.name);
    $state.go('app.map');
  };
})

/*Map*/
.controller('mapController', function($scope) {
  document.addEventListener("deviceready", function() {
    var div = document.getElementById("map_canvas");
    var map = plugin.google.maps.Map.getMap(div);
  });
})
