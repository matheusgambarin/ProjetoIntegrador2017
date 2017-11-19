app.controller("vendasCTRL", function($scope, $http){

	var url = "http://localhost:9090/animal/";

	$scope.photoUrl = "http://placehold.it/900x900";
	$scope.animaisAdocao = [];
	$scope.uploadme;
	$scope.file;
	$scope.busca;

	$scope.fileName= function(element) {
	   $scope.$apply(function($scope) {
	      $scope.file = element.files[0];
	   });
	};

	$scope.buscarAnimal = function () {
		$http.get(url + "venda?filter=" + $scope.busca).then(function (response) {
			$scope.vendaView = response.data;
		});
	}


	$scope.init = function () {
		$http.get(url + "venda?filter=").then(function (response) {
			$scope.vendaView = response.data;
		});
	}

	function dataURItoBlob(dataURI) {
		var binary = atob(dataURI.split(',')[1]);
		var mimeString = dataURI.split(',')[0].split(':')[1].split(';')[0];
		var array = [];
		for (var i = 0; i < binary.length; i++) {
			array.push(binary.charCodeAt(i));
		}
		return new Blob([new Uint8Array(array)], {
			type: mimeString,
		});
	}

	$scope.uploadTrigger = function () {
		setTimeout(function () {
			angular.element('#imgInput').trigger('click');
		}, 0);
	};

	$scope.salvarAnuncio = function (adocao) {
		adocao.usuarioid = 1;
		adocao.tipo = 0;
		var fd = new FormData();
		fd.append("file", $scope.file);

		$http.post(url + "/imagem", fd, {
			transformRequest: angular.identity,
			headers: {
				"Content-Type": undefined
			}
		}
		).then(function (response) {
			adocao.url = response.data.url
			$http.post(url, adocao).then(function (response) {
				window.location.reload();
			});
		})

	}
})