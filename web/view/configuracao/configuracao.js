app.controller("configuracaoCTRL", function ($scope, $http) {


    var url = "http://localhost:9090/usuario/";

    $scope.destravaSenha = false;
    $scope.label = "Mudar a senha";
    $scope.configuracaoView;
    $scope.mudarSenha = function(){
        if($scope.destravaSenha == false){
            $scope.destravaSenha = true;
            $scope.senha = null;
            $scope.label = "Cancelar";
        }else{
            $scope.destravaSenha = false;
            $scope.senha = $scope.configuracaoView.senha;
            $scope.label = "Mudar a senha";
        }
    }

    $scope.init = function () {
        $http.get(url + "1").then(function (response) {
			$scope.configuracaoView = response.data;
		});
    }
    
    $scope.alterarDadosPessoais = function(){
        $scope.configuracaoView.senha = $scope.senha;
        console.log($scope.configuracaoView);
    }

})