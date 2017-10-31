app.controller("configuracaoCTRL", function ($scope, $http) {

    $scope.destravaSenha = false;
    $scope.label = "Mudar a senha";
    $scope.configuracaoView = {
        nome: "Finin", email: "finin@gmail.com", telefone: "44999857452", senha: "123456qwe", fotoUrl: "http://placehold.it/350x350"
    }

    $scope.senha = $scope.configuracaoView.senha;
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
    
    $scope.alterarDadosPessoais = function(){
        $scope.configuracaoView.senha = $scope.senha;
        console.log($scope.configuracaoView);
    }

})