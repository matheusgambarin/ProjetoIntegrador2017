var app = angular.module("indexApp", ["ngRoute"]);
app.config(function($routeProvider) {
    $routeProvider
    .when("/", {
        templateUrl : "view/index.html",
        controller :  "indexCTRL"
    })
    .when("/adocao", {
        templateUrl : "view/adocao.html",
        controller :  "adocaoCTRL"
    })
    .when("/achados", {
        templateUrl : "view/achados.html",
        controller :  "achadosCTRL"
    })
    .when("/vendas", {
        templateUrl : "view/vendas.htm.",
        controller :  "vendasCTRL"
    })
    .when("/produtos", {
        templateUrl : "view/produtos.html",
        controller :  "produtosCTRL"
    })
    .when("/anuncios", {
        templateUrl : "view/sAnuncios.html",
        controller :  "sAnunciosCTRL"
    })
    .when("/configuracao", {
        templateUrl : "view/configuracao.html",
        controller :  "configuracaoCTRL"
    })
    .controller("indexCTRL", function($scope){

    })
    .controller("adocaoCTRL", function($scope){

    })
    .controller("achadosCTRL", function($scope){

    })
    .controller("vendasCTRL", function($scope){

    })
    .controller("produtosCTRL", function($scope){

    })
    .controller("anunciosCTRL", function($scope){

    })
    .controller("configuracaoCTRL", function($scope){

    })
});