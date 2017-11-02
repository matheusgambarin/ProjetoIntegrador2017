app.controller("sAnunciosCTRL", function($scope, $http){
        $scope.detalhes;
        $scope.anunciosView = [
        {nomeAnuncio: "Pote de Ração", dataAnuncio: "14/10/2017", tipo: 0}, //Vendas
        {nomeAnuncio: "Pote de Ração", dataAnuncio: "14/10/2017",tipo: 1}, //Adoção
        {nomeAnuncio: "Pote de Ração", dataAnuncio: "14/10/2017", tipo: 2}, //Achados e perdidos
        {nomeAnuncio: "Pote de Ração", dataAnuncio: "14/10/2017"},
        {nomeAnuncio: "Pote de Ração", dataAnuncio: "14/10/2017"},
        {nomeAnuncio: "Pote de Ração", dataAnuncio: "14/10/2017"},
        {nomeAnuncio: "Pote de Ração", dataAnuncio: "14/10/2017"},
        {nomeAnuncio: "Pote de Ração", dataAnuncio: "14/10/2017"},
        {nomeAnuncio: "Pote de Ração", dataAnuncio: "14/10/2017"},
        {nomeAnuncio: "Pote de Ração", dataAnuncio: "14/10/2017"},
        {nomeAnuncio: "Pote de Ração", dataAnuncio: "14/10/2017"},
        {nomeAnuncio: "Pote de Ração", dataAnuncio: "14/10/2017"},
        {nomeAnuncio: "Pote de Ração", dataAnuncio: "14/10/2017"},
        {nomeAnuncio: "Pote de Ração", dataAnuncio: "14/10/2017"},
        {nomeAnuncio: "Pote de Ração", dataAnuncio: "14/10/2017"},
        {nomeAnuncio: "Pote de Ração", dataAnuncio: "14/10/2017"},
        {nomeAnuncio: "Pote de Ração", dataAnuncio: "14/10/2017"},
        {nomeAnuncio: "Pote de Ração", dataAnuncio: "14/10/2017"},
        {nomeAnuncio: "Pote de Ração", dataAnuncio: "14/10/2017"},
        {nomeAnuncio: "Pote de Ração", dataAnuncio: "14/10/2017"},
        {nomeAnuncio: "Pote de Ração", dataAnuncio: "14/10/2017"}
        ];
        
        $scope.carregaDetalhes = function(anuncio){
                $scope.detalhes = anuncio;
                console.log($scope.detalhes);
        }
})