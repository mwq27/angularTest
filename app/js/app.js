angular.module('contactscat', ['contactcatFilters']).
	config(['$routeProvider', function($routeProvider) {
		$routeProvider.
			when('/contacts', {templateUrl: 'templates/contact-list.html', controller: contactController
		}).
			when('/contacts/:contactId', {templateUrl: 'templates/contact-detail.html', controller: contactDetailCtrl
		}).
			otherwise({redirectTo: 'index.html'})
	}]);
