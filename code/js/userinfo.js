$(document).ready(function(){

	console.log("ready to roll");
	var username = loggedInAs();
	console.log("looking for username " + username);

	$.post("../DatabaseRelated/getuserinfo.php", {name1:username},
    	function(data) {
			if( data != '' ) {
				// check if size > 1? not sure this will ever happen. are usernames required to be unique? they should be if not
				var userInfo = JSON.parse(data);

				console.log(userInfo);

				$("#username").text(userInfo[0]['username']);
				$("#emailfield").val(userInfo[0]['email']);
				$("#zipcodefield").val(userInfo[0]['zipcode']);
				$("#rating").text(userInfo[0]['rating']);
			}
			else {
				console.log("danger will robinson");
				// some error stuff here. maybe just make the page read "user [name] not found: error"?
			}
		}
	);

});

// input is the text name of the field to be changed.
// this needs to match the id of the text box containing it (which should be "[name]field").
// this also needs to match the name of the column in the database
function updateSomething(modifiedField) {
	console.log("updating " + modifiedField);

	var username = document.getElementById('username').innerHTML;
    var newVal = document.getElementById(modifiedField+'field').value;
    
    $.post("../DatabaseRelated/updateuserfield.php",
            {name:username,field:modifiedField,newval:newVal},
            function(data){
              if (data == "Success"){
                document.getElementById('updateresult').innerHTML = "";
				document.getElementById('updateresult').append(modifiedField + " successfully updated");
              }
			  else {
				document.getElementById('updateresult').innerHTML = "";
				document.getElementById('updateresult').append("Error updating " + modifiedField + ": " + data);
              }
            })
}

function updateEmail() {
	updateSomething('email');
}

function updateZipcode() {
	updateSomething('zipcode');
}

function updatePassword() {
	updateSomething('password');
	document.getElementById('passwordfield').value = "";
}