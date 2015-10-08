export default function ActionService ($location) {

    return {
        go: function(user, params) {
            user.step = params.step;
            $location.path('/play/' + params.step)
            return true
        },

        fight: function(user, params) {
            user.gold += params.gold
            user.life += params.life
            return user.life > 0
        },

        chest: function(user, params) {
            user.gold += params.gold
            user.life += params.life
            return user.life > 0
        }
    }
}
