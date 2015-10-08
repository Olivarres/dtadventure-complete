export default function HomeController (StepService) {
    var homeCtrl = this;
	
    StepService.getSteps()
    .then(function (steps) {
        this.steps = steps
    }.bind(this))
	
	//valeur par defaut du tri
	this.reverse = true;
	this.predicate = "name";
	
	homeCtrl.sortBy = function(attrib){
		this.predicate = attrib;
		this.reverse = !this.reverse
	}

}
