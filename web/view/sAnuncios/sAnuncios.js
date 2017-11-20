app.controller("sAnunciosCTRL", function($scope, $http){
        
        var url = "http://localhost:9090/animal/";
        $scope.detalhes;

        $scope.carregaDetalhes = function(anuncio){
                $scope.detalhes = anuncio;
                console.log($scope.detalhes);
        }

        $scope.init = function () {
                $http.get(url + "meusanuncios/1").then(function (response) {
                        $scope.anunciosView = response.data;
                });
        }

        $scope.alterarAnuncio = function (adocao) {
                $http.put(url, adocao).then(function (response) {
                        window.location.reload();
                });

	}
        
})