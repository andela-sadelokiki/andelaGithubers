angular.module('Githubers')
  .factory('GitService', ['$http', 'baseurl', function($http, baseurl) {
    var User = {
      getAll: function() {
        return $http.get(baseurl)
      }
    }
    return User;
  }]);
