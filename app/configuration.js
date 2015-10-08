export default function configuration ($routeProvider) {

    $routeProvider

    .when('/', {
        templateUrl : 'views/home.html',
        controller  : 'HomeController',
        controllerAs: 'ctrl'
    })

    .when('/play/:id', {
        templateUrl : 'views/play.html',
        controller  : 'PlayStepController',
        controllerAs: 'ctrl'
    })

    .when('/edit/:id', {
      templateUrl   : 'views/editStepForm.html',
      controller    : 'EditStepController',
      controllerAs  : 'ctrl'
    })

    .otherwise({
        redirectTo: '/'
    })

}
