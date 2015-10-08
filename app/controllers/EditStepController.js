export default function EditStepController ($routeParams, StepService, $location) {

    this.typeActions = ["go", "chest", "fight"]

    StepService.getStep($routeParams.id)
    .then(function (step) {
        this.step = step

        // transform parameters of actions
        this.step.actions = this.step.actions.map(function (action) {
            action.params = obj2str(action.params)
            return action
        })
    }.bind(this))

    this.save = function () {
        if (this.stepForm.$invalid) {
            alert('Erreur') // @todo : améliorer ça
            return
        }

        // transform parameters of actions
        this.step.actions = this.step.actions.map(function (action) {
            action.params = str2obj(action.params)
            return action
        })

        StepService.saveStep(this.step)
        .then(function () {
            $location.path('/')
        })
    }

    this.delete = function () {
        StepService.deleteStep(this.step.id)
        .then(function () {
            $location.path('/')
        })
    }

    this.addAction = function () {
        this.step.actions.push({
            type: this.typeActions[0],
            name: "",
            params: {}
        })
    }

    this.removeAction = function (index) {
        this.step.actions.splice(index, 1)
    }

    function obj2str (obj) {
        var a = []
        for (var param in obj) {
            a.push(param + ':' + obj[param])
        }
        return a.join('\n')
    }

    function str2obj (str) {
        var a = str.split("\n")
        var obj = {}
        a.forEach(function (substr) {
            var subarray = substr.split(':')
            obj[subarray[0]] = subarray[1]
        })
        return obj
    }

}