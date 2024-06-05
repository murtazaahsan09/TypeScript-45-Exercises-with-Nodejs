// Array of Current Users
var current_users = ["Murtaza", "Asad", "Mansub", "Elaf", "Jamshed"];
// Array of New Users
var new_users = ["Kerem", "Ryan", "Asad", "Patrick", "Mansub"];
// Loop through new_users to check for usernames avaibility
new_users.forEach(function (new_one_user) {
    // Making a Condition for username already exist and save in our_condition varible
    var our_condition = current_users.some(function (current_one_user) { return current_one_user.toLowerCase() === new_one_user.toLowerCase(); });
    // Print Different massages using If-Else statemantes
    if (our_condition) {
        console.log("Sorry ".concat(new_one_user, " is already taken!"));
    }
    else {
        console.log("This Username ".concat(new_one_user, " is available"));
    }
});
