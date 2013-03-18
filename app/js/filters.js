angular.module('contactcatFilters', []).filter('checkmark', function() {
	return function(input){
		//if input is true, show u2713
		//else show u2718
		return input ? '\u2713' : '\u2718';
	}
});