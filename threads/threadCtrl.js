var app = angular.module('rtfmApp');

app.controller('threadCtrl', function($scope, threadRef, commentsRef) {

	var thread = threadRef.$asObject();

	thread.$bindTo($scope, 'thread');

	$scope.comments = commentsRef.$asArray();

	$scope.createComment = function(username, text) {

		$scope.comments.$add({
			username: username,
			text: text
		});
	}
});