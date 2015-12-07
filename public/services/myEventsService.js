app.factory('MyEventsService', function UserService($http) {

    var getUserEvents = function (username, callback) {
        $http.get("/api/findUserEvents/" + username)
            .success(callback);
    };

    var updateUserEvents = function (username, myEvents, callback) {
        console.log("Service-->"+username);
        console.log("Service-->"+myEvents);
        $http.put("/api/updateUserEvents/" + username, myEvents)
            .success(callback);
    }

    return {
        updateUserEvents: updateUserEvents,
        getUserEvents: getUserEvents
    }
});