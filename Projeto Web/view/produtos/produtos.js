app.controller("produtosCTRL", function($scope, $http){
	$scope.produtosView = [
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Brasil", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Brasil", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Brasil", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Brasil", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Brasil", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Brasil", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Brasil", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Brasil", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Brasil", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Ração", loja: "Maringá", estado: "Brasil", fotoUrl: "http://placehold.it/750x500"}
	];
	/*var carregaDados = function(){
			$http.get("https://api.github.com/gists/public").then(function (response) {
        		$scope.adoteView = response.data;
        		console.log($scope.adoteView);
			});
	}

	carregaDados(); */

})