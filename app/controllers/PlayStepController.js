export default function PlayStepController ($routeParams, StepService, UserService, SaveService) {

    StepService.getStep($routeParams.id)
    .then(function (step) {
        this.step = step
    }.bind(this))

    this.user = UserService

    this.selectAction = function (action) {
        StepService.action(action, this.user)
    }
    
    this.save = function () {
        SaveService.save(this.user).then(
            function(){
                $location.path('/');   
            }
        )
    }

}
