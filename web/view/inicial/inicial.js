app.controller("inicialCTRL", function($scope, $http){
	
	var url = "http://localhost:9090/animal/";

	$scope.photoUrl = "http://placehold.it/900x900";
	$scope.uploadme;
	$scope.file;
	$scope.busca;

	$scope.init = function () {
		$http.get(url + "?filter=").then(function (response) {
			$scope.aimais = response.data;
		});
	}

})