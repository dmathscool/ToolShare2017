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
				$("#zipfield").val(userInfo[0]['zipcode']);
				$("#rating").text(userInfo[0]['rating']);
			}
			else {
				console.log("danger will robinson");
				// some error stuff here. maybe just make the page read "user [name] not found: error"?
			}
		}
	);

});

function updateEmail() {
	console.log("updating email");

	var username = document.getElementById('username').innerHTML;
    var newEmail = document.getElementById('emailfield').value;
    
    $.post("../DatabaseRelated/updateemail.php",
            {name:username,email:newEmail},
            function(data){
              if (data == "Success"){
                document.getElementById('updateresult').innerHTML = "";
				document.getElementById('updateresult').append("E-mail address successfully updated");
              }
			  else {
				document.getElementById('updateresult').innerHTML = "";
				document.getElementById('updateresult').append("Error updating e-mail address: " + data);
              }
            })
}

function updateZip() {
	console.log("updating zip");

	var username = document.getElementById('username').innerHTML;
	var newZip = document.getElementById('zipfield').value;
    
	document.getElementById('updateresult').innerHTML = "";
	document.getElementById('updateresult').append("ZIP code successfully updated");
}

function updatePassword() {
	console.log("updating password");

	var username = document.getElementById('username').innerHTML;
	var newPassword = document.getElementById('passwordfield').value;

	document.getElementById('updateresult').innerHTML = "";
	document.getElementById('updateresult').append("Password successfully updated");
}