app.controller("adoteCTRL", function($scope, $http){
	
	var url = "http://localhost:9090/animal/adocao?field="

	$scope.photoUrl = "http://placehold.it/900x900";
	$scope.animaisAdocao = [];


	$scope.init = function() {
		$http.get(url)
		.then(function(response) {
			console.log(response);
		});
	}

	$scope.salvarAnuncio = function(adocao){
		console.log(adocao);
	}

	$scope.carregarFoto = function(foto){
		$scope.photoUrl = foto;
		console.log(foto);
	}
})