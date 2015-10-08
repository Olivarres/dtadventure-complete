export default function EditStepController ($routeParams, StepService, UserService, $location) {

  var ctrl = this;

  StepService.getStep($routeParams.id)
  .then(function(step) {
        ctrl.editStep = step;
    });

  ctrl.saveEditForm = function(editStep) {
    if (ctrl.editStepForm.$invalid)
      alert("error");

      StepService.saveStep(editStep)
      .then(function() {
        $location.path('/');
      })
  };
}
