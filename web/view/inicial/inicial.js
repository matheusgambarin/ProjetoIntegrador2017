app.controller("inicialCTRL", function($scope, $http){
	$scope.photoUrl = "http://placehold.it/900x900";
	$scope.adoteView = [
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"}		
	];
    $scope.achadosView = [
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"}
    ];
    $scope.vendaView = [
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500", preco: 150.00},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500", preco: 150.00},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500"}
    ];
    $scope.vendaView = [
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500", preco: 1500.00},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500", preco: 1100.00},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500", preco: 1500.00},
		{nome: "Cachorro", cidade: "Maringá", estado: "Paraná", fotoUrl: "http://placehold.it/750x500", preco: 1600.00}
    ]
	$scope.carregarFoto = function(foto){
		$scope.photoUrl = foto;
		console.log(foto);
	}
})