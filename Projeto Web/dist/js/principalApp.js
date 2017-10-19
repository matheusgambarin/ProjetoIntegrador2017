var app = angular.module("AdoteUmPet", ["ngRoute", "angularUtils.directives.dirPagination"]);

app.config(function($routeProvider, $locationProvider) {
    $routeProvider
//     .when("/", {
//         templateUrl : "index.html"
//     })
    .when("/adocao", {
        templateUrl : "view/adocao/adocao.html",
        controller : "adoteCTRL"
    })
    .when("/achados", {
         templateUrl : "view/achados/achados.html",
         controller: "achadosCTRL"
    })
   .when("/vendas", {
         templateUrl : "view/vendas/vendas.html",
        controller :  "vendasCTRL"
    })
    .when("/produtos", {
        templateUrl : "view/produtos/produtos.html",
        controller :  "produtosCTRL"
    })
    .when("/anuncios", {
        templateUrl : "view/sAnuncios/sAnuncios.html",
        controller :  "sAnunciosCTRL"
    })
    .when("/configuracao", {
        templateUrl : "view/configuracao/configuracao.html",
        controller :  "configuracaoCTRL"
    });
});
 