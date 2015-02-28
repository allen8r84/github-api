var app = angular.module('github-api');

app.service('mainService', function($http, $q) {
  var id = "myCLientID";
  var sec = "mySecretKeyThing";
  var param = "?client_id=" + id + "&client_secret=" + sec;
});