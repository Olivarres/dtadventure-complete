export default function HomeController (StepService) {

    StepService.getSteps()
    .then(function (steps) {
        this.steps = steps
    }.bind(this))

}
