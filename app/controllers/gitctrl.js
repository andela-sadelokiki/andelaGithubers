angular.module('Githubers')
  .controller('GitCtrl', ['$scope', 'GitService', function($scope, GitService) {
    $scope.githubers = [];

    $scope.getGithubers = function() {
      GitService.getAll().then(function(res) {
        console.log(res.data);
        $scope.githubers = res.data
      });
    }
    $scope.getGithubers();
  }]);
