var app = angular.module('rtfmApp');

app.controller('loginCtrl', function($scope, EnvironmentService, $location) {
	
	$scope.env = EnvironmentService.getEnv();

	$scope.logMeIn = function(username) {
			EnvironmentService.saveUsername($scope.username);
			$location.path('/threads');
		
	}	
})