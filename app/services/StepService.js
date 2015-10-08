export default function StepService ($http, ActionService) {

    function handleResponse(response) {
        return response.data
    }

    return {
        getSteps: function () {
            return $http.get('http://localhost:3000/steps')
            .then(handleResponse)
        },

        // createStep: function (step) {
        //     return $http.post('http://localhost:3000/steps', step)
        //     .then(handleResponse)
        // },
        saveStep: function(step) {
          return $http.put('http://localhost:3000/steps/' + step.id, step)
          .then(handleResponse);
        },

        getStep: function (id) {
            return $http.get('http://localhost:3000/steps/' + id)
            .then(handleResponse)
        },

        deleteStep: function (step) {
            return $http.delete('http://localhost:3000/steps/' + step.id)
            .then(handleResponse)
        },
		
        saveGame: function(user) {
			return $http.put("http://localhost:3000/saves/"+user.id, user).then(
				handleResponse
			)
		},
		
		loadGame: function(id) {
			return $http.get('http://localhost:3000/saves/' + id).then(
				handleResponse
			)
        },

        action: function (action, user) {
            return ActionService[action.type](user, action.params)
        }
    }
}
