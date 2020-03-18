//Change this to your username & password, to make more users just copy from { to }, and past it under the first user//
var objPeople = [
	{
		username: "Admin",
		password: "Admin"
	},

]
//This is the function that check if the username & password is correct//
function getInfo() {
	var username = document.getElementById('username').value
	var password = document.getElementById('password').value

	for(var i = 0; i < objPeople.length; i++) {
		//if its correct this wil executed//
		if(username == objPeople[i].username && password == objPeople[i].password) {
            //If you open the console you will see this message//
            console.log(username + " is logged in!!!")
            //Change this to your logged in page//
            open('yourloggedinfile.html')
			return
		}
    }
    //This will be executed if the information is incorrect//
    console.log("incorrect username or password")
    alert("incorrect username or password")
}