function contactController( $scope, $http, $route ) {
	//contacts model
	$http.get('js/contacts.json').success(function(data){
		$scope.contacts = data;
	});

	console.log($route)
	//http://angular.github.com/angular-phonecat/step-5/app/phones/phones.json
	//adding to the model
	$scope.hello = "Bliggity Blam";

	//this neds to be set if it's being used in the view in a select menu
	$scope.orderProperty = "age";
}