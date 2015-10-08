export default function SaveService ($http) {

    function handleResponse(response) {
        return response.data
    }
	
	return {
		save: function(user) {
			return $http.put("http://localhost:3000/saves/"+user.id, user).then(
				handleResponse
			)
		}
	}	
}