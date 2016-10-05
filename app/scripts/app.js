var app = angular.module('app' , ['ui.bootstrap' , 'ngAnimate' ,'ngRoute' , 'sticky' , 'duParallax' , 'angular-scroll-animate']);


app.config(routing);

function routing($routeProvider) {
    $routeProvider
        .when('/' , {
            templateUrl : 'templates/cars.html'
        })
        .when('/whatever' , {
            templateUrl : 'templates/whatever.html'
        })
        .when('/contact' , {
            templateUrl : 'templates/contact.html'
        })
        .when('/car/:carId' , {
            template : '<car-detail></car-detail>'
        })
        .otherwise({
            redirectTo : '/'
        }); 

}