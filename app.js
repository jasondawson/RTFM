var app = angular.module('rtfmApp', ['firebase', 'ngRoute']);

app.config(function($routeProvider) {

$routeProvider
.when('/login', {
	templateUrl: 'login/login.html',
	controller: 'loginCtrl'
})
.when('/threads', {
	templateUrl: 'threads/threads.html',
	controller: 'threadsCtrl',
	resolve: {
		threadsRef: function(threadsService) {
			return threadsService.getThreads();
		}
	}
})
.when('/threads/:threadId', {
	templateUrl: 'threads/thread.html',
	controller: 'threadCtrl',
	resolve: {
		threadRef: function (threadsService, $route) {
			return threadsService.getThread($route.current.params.threadId);
		},
		commentsRef: function(threadsService, $route) {
			return threadsService.getComments($route.current.params.threadId);
		}
	}
})
.otherwise('/login')

})

app.run(function($rootScope, $location, EnvironmentService) {
	$rootScope.$on('$routeChangeStart', function(event, next, current) {
		if (EnvironmentService.getUsername()) {
			$rootScope.username = EnvironmentService.getUsername();
		} else {
			$location.path('/login');
		}

	})
})