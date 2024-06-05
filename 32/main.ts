// Array of Current Users
let current_users = ["Murtaza", "Asad", "Mansub", "Elaf", "Jamshed"]

// Array of New Users
let new_users = ["Kerem", "Ryan", "Asad", "Patrick", "Mansub"]

// Loop through new_users to check for usernames avaibility
new_users.forEach(new_one_user => {
    
    // Making a Condition for username already exist and save in our_condition varible
    let our_condition = current_users.some(current_one_user => current_one_user.toLowerCase() === new_one_user.toLowerCase())
    
    // Print Different massages using If-Else statemantes
    if(our_condition){
        console.log(`Sorry ${new_one_user} is already taken!`)
    }else{
        console.log(`This Username ${new_one_user} is available`)
    }
})