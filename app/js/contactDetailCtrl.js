function contactDetailCtrl ($scope, $routeParams, $http) {
	//Lets get the detail information from the server again
	$http.get('js/' + $routeParams.contactId+ '.json').success(function(data){
		$scope.contact = data;
	});

	$scope.showEmail = function(msg){
		$("#changeme").html(msg);
	};

	$scope.contactId = $routeParams.contactId;
}