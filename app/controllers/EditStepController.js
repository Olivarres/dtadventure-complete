export default function EditStepController ($routeParams, StepService, UserService) {

  var ctrl = this;

  StepService.getStep($routeParams.id)
  .then(function(step) {
        ctrl.editStep = step;
    });

  ctrl.saveEditForm = function(editStep) {
    if (ctrl.editStepForm.$invalid)
      alert("error");


  };
}
