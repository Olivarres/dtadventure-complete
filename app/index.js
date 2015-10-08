import angular from 'angular'
import ngRoute from 'angular-route'

import configuration from './configuration'
import HomeController from './controllers/HomeController'
import PlayStepController from './controllers/PlayStepController'
//import EditStepController from './controllers/EditStepController'
import StepService from './services/StepService'
import ActionService from './services/ActionService'
import UserService from './services/UserService'

angular.module('DTAdventure', [ngRoute])

// configuration
.config(configuration)

// controllers
.controller('HomeController', HomeController)
.controller('PlayStepController', PlayStepController)
//.controller('EditStepController', EditStepController)


// filters

// services
.factory('StepService', StepService)
.factory('ActionService', ActionService)
.factory('UserService', UserService)
