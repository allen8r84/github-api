var app = angular.module('github-api');

app.controller('GitHubController', function($scope, githubService){
    $scope.getUserData = function(){
        githubService.getUser($scope.uesrText).then(function(res){
            $scope.user = res.data;
            console.log($scope.user);
        });
    }
    
    
});