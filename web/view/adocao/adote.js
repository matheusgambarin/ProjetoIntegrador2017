app.controller("adoteCTRL", function ($scope, $http, $location) {

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
		$http.get(url + "adocao?filter=" + $scope.busca).then(function (response) {
			$scope.animaisAdocao = response.data;
		});
	}


	$scope.init = function () {
		$http.get(url + "adocao?filter=").then(function (response) {
			$scope.animaisAdocao = response.data;
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
		adocao.tipo = 1;
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