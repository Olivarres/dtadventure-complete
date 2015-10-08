export default function HomeController (StepService) {
    var homeCtrl = this;

    StepService.getSteps()
    .then(function (steps) {
        this.steps = steps
    }.bind(this))
	
	//methodes
	homeCtrl.sortBy = function(attrib){
		this.predicate = attrib;
		this.reverse = !this.reverse
	}

}
