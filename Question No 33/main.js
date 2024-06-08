var userName = ["user6", "user2", "user9", "user4"];
var newUserName = ["User6", "User7", "User8", "User9"];
newUserName.forEach(function (newUserName) {
    if (userName.some(function (userName) { return userName.toLowerCase() === newUserName.toLowerCase(); })) {
        console.log("".concat(newUserName, " will need to enter a new username."));
    }
    else {
        console.log("".concat(newUserName, " is available."));
    }
});
