export default function configuration ($routeProvider) {

    $routeProvider

    .when('/', {
        templateUrl: 'views/home.html',
        controller: 'HomeController',
        controllerAs: 'ctrl'
    })

    .when('/play/:id', {
        templateUrl: 'views/play.html',
        controller: 'PlayStepController',
        controllerAs: 'ctrl'
    })

    .otherwise({
        redirectTo: '/'
    })

}
