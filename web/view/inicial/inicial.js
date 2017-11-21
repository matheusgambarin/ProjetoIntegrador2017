app.controller("inicialCTRL", function($scope, $http){
	
	var url = "http://localhost:9090/animal/";

	$scope.photoUrl = "http://placehold.it/900x900";
	$scope.uploadme;
	$scope.file;
	$scope.busca;

	$scope.init = function () {
		$http.get(url + "venda?filter=").then(function (response) {
			$scope.vendaView = response.data;
		});
		$http.get(url + "perdido?filter=").then(function (response) {
			$scope.achadosView = response.data;
		});
		$http.get(url + "adocao?filter=").then(function (response) {
			$scope.adoteView = response.data;
		});
	}

})