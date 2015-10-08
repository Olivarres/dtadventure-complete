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

        getStep: function (id) {
            return $http.get('http://localhost:3000/steps/' + id)
            .then(handleResponse)
        },

        action: function (action, user) {
            return ActionService[action.type](user, action.params)
        }
    }
}
