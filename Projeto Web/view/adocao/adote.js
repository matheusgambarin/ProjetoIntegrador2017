app.controller("adoteCTRL", function($scope, $http){
	$scope.adoteView = [
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Brasil", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Brasil", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Brasil", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Brasil", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Brasil", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Brasil", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Brasil", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Brasil", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Brasil", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Brasil", fotoUrl: "http://placehold.it/750x500"}
	];
	/*var carregaDados = function(){
			$http.get("https://api.github.com/gists/public").then(function (response) {
        		$scope.adoteView = response.data;
        		console.log($scope.adoteView);
			});
	}

	carregaDados(); */
})