export default function PlayStepController ($routeParams, $location, StepService, UserService) {

    StepService.getStep($routeParams.id)
    .then(function (step) {
        this.step = step
    }.bind(this))

    this.user = UserService

    this.selectAction = function (action) {
        StepService.action(action, this.user)
    }
    
    this.saveGame = function () {
        StepService.saveGame(this.user).then(
            function(){
                $location.path('/');   
            }
        )
    }

}
