$(document).ready(function(){

	//query the db and build the table
	//TABLE BUILDING SUPER QUICK AND DIRTY....
	$.post("../DatabaseRelated/get_tools.php", {username:loggedInAs()},
    	function(data) {
			if( data != '' ) {
				var toolinfo = JSON.parse(data);

				for (var i = 0; i<toolinfo.length; i++) {
					var thisTool = toolinfo[i];
					var row$=$('<tr/>');
					for (var key in thisTool) {
						var thisVal=thisTool[key];
						if (thisVal==null){thisVal=""};
						row$.append($('<td/>').html(thisVal));
						//this prints each entry as
						//image file,tool name,tool type, tool brand, tool condition, tool status (int)
					}
					//probably an a w f u l way to do this.
					row$.append($('<td/>').html(
						"<input onclick=\"editTool()\" type=\"submit\" value=\"Edit\" id=\"" + i.toString() + "\">"));
					$("#databaseTools").append(row$);
				}
			}
			else {
				console.log("something went awry")
			}
		}
	);

});
