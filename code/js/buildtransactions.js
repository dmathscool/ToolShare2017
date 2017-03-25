$(document).ready(function(){

	//query the db and build the table
	//TABLE BUILDING SUPER QUICK AND DIRTY....
	if (loggedInAs() == ''){
		allowBorrow=false;
	} else {
		allowBorrow=true;
	}

	$.post("../DatabaseRelated/get_loaned_tools.php", {username:loggedInAs()},
    	function(data) {
			if( data != '' ) {
                console.log("stuff")
				console.log(data)
				// var toolinfo = JSON.parse(data);

				// for (var i = 0; i<toolinfo.length; i++) {
				// 	var thisTool = toolinfo[i];
				// 	var row$=$('<tr/>');
				// 	for (var key in thisTool) {
				// 		if (key != 'idTool'){
				// 			var thisVal=thisTool[key];
				// 			if (thisVal==null){thisVal=""};
				// 			row$.append($('<td/>').html(thisVal));
				// 		}
				// 		//this prints each entry as
				// 		//image file,tool name,tool type, tool brand, tool condition, tool status (int)
				// 	}
				// 	//probably an a w f u l way to do this.
				// 	if (allowBorrow){
				// 		var thisToolId= thisTool['idTool'];
				// 		row$.append($('<td/>').html(
				// 			"<input onclick=\"borrowTool()\" type=\"submit\" value=\"Borrow\" id=\"" + thisToolId.toString() + "\">"));
				// 	} else {
				// 		row$.append($('<td/>').html("Register to Borrow!"));
				// 	}
				// 	$("#databaseTools").append(row$);
				// }
			}
			else {
				console.log("something went awry")
			}
		}
	);

});
