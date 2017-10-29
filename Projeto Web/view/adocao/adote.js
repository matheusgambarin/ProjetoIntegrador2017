app.controller("adoteCTRL", function($scope, $http){
	$scope.photoUrl = "http://placehold.it/900x900";
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
	$scope.salvarAnuncio = function(adocao){
		console.log(adocao);
	}
	$scope.carregarFoto = function(foto){
		$scope.photoUrl = foto;
		console.log(foto);
	}
})