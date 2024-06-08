let userName : string []=["user6","user2","user9","user4"]
let newUserName : string[]=["User6","User7","User8","User9"]
newUserName.forEach(newUserName => {
    if (userName.some(userName => userName.toLowerCase() === newUserName.toLowerCase())) {
        console.log(`${newUserName} will need to enter a new username.`);
    } else {
        console.log(`${newUserName} is available.`);
    }
});
