export default function HomeController ($location, StepService, UserService) {
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
		this.reverse = !this.reverse;
	}
	
	homeCtrl.loadGame = function(id){
		StepService.loadGame(id).then(
			function(game){
				$location.path('/play/'+game.step);
				UserService.id = id;
				UserService.gold = game.gold;
				UserService.life = game.life;
			}
		)
	}
	
	homeCtrl.startGame = function(id){
		$location.path('/play/1');
		UserService.id = id;
		UserService.gold = 0;
		UserService.life = 100;
		UserService.step = 1;
	}

}
