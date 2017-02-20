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
				$("#email").val(userInfo[0]['email']);
				$("#zip").val(userInfo[0]['zipcode']);
				$("#rating").text(userInfo[0]['rating']);
			}
			else {
				console.log("danger will robinson");
				// some error stuff here. maybe just make the page read "user [name] not found: error"?
			}
		}
	);

});