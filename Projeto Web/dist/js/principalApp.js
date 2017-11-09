var app = angular.module("AdoteUmPet", ["ngRoute", "angularUtils.directives.dirPagination", "ng-mfb"]);
app.controller("AdoteUmPetCTRL", function ($scope, $http) {

        var url = "http://localhost:9090/usuario/";

        $scope.criarCadastro = function (user) {
                user.enderecoid = 1;
                $http.post(url, user).then(function (response) {
                        console.log(response);
                });
        }

        $scope.logar = function (login) {
                console.log(login);
        }
})

app.config(function ($routeProvider, $locationProvider) {
        $routeProvider
                .when("/", {
                        templateUrl : "view/inicial/inicial.html",
                        controller: "inicialCTRL"
                })
                .when("/adocao", {
                        templateUrl: "view/adocao/adocao.html",
                        controller: "adoteCTRL"
                })
                .when("/achados", {
                        templateUrl: "view/achados/achados.html",
                        controller: "achadosCTRL"
                })
                .when("/vendas", {
                        templateUrl: "view/vendas/vendas.html",
                        controller: "vendasCTRL"
                })
                .when("/produtos", {
                        templateUrl: "view/produtos/produtos.html",
                        controller: "produtosCTRL"
                })
                .when("/anuncios", {
                        templateUrl: "view/sAnuncios/sAnuncios.html",
                        controller: "sAnunciosCTRL"
                })
                .when("/configuracao", {
                        templateUrl: "view/configuracao/configuracao.html",
                        controller: "configuracaoCTRL"
                });
});
