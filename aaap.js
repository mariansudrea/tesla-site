app = angular.module('teslaSolutions', ['ui.router']);

app.config([
'$stateProvider',
'$urlRouterProvider',
function($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('test', {
        url: '/test',
        templateUrl: 'test/_test.html',
        //controller: 'testController'
    });
    $stateProvider
        .state('main', {
        url: '/main',
        templateUrl: 'main/_main.html',
        //controller: 'mainController'
    });
    $stateProvider
        .state('electrical_design', {
        url: '/electrical_design',
        templateUrl: 'main/_electrical_design.html',
        //controller: 'mainController'
    });
    $stateProvider
        .state('about', {
		cache:false,
        url: '/about',
        templateUrl: 'main/_about.html',
        //controller: 'mainController'
    });
    $stateProvider
        .state('portfolio', {
        url: '/portfolio',
        templateUrl: 'main/_portfolio.html',
        //controller: 'mainController'
    });
    $stateProvider
        .state('contact', {
        url: '/contact',
        templateUrl: 'main/_contact.html',
        //controller: 'mainController'
    });
    $stateProvider
        .state('rebates', {
        url: '/rebates',
        templateUrl: 'main/_rebates.html',
        //controller: 'mainController'
    });
    $stateProvider
        .state('business_rebates', {
        url: '/business_rebates',
        templateUrl: 'main/_business_rebates.html',
        //controller: 'mainController'
    });
    $stateProvider
        .state('lighting', {
        url: '/lighting',
        templateUrl: 'main/_lighting.html',
        //controller: 'mainController'
    });
    $stateProvider
        .state('recessed_lights', {
        url: '/recessed_lights',
        templateUrl: 'main/_recessed_lights.html',
        //controller: 'mainController'
    });
    $stateProvider
        .state('electrical_upgrades', {
        url: '/electrical_upgrades',
        templateUrl: 'main/_electrical_upgrades.html',
        //controller: 'mainController'
    });

  	$urlRouterProvider.otherwise('about');

}]);



