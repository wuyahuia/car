var app = angular.module('myApp', ['ui.router']);
app.config(function ($stateProvider) {
    $stateProvider
        .state('all',{
            url:'/all',
            templateUrl:'./App/Views/all.html'
        })
        .state('out',{
            url:'/out',
            templateUrl:'./App/Views/out.html'
        });
});