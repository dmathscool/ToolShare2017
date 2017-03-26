function advanceTransactionState() {
    console.log("oh yeah! advance it!")
}

// Yes, these next two functions have a ton of copy/paste code.
// ...k

function makeLoanedToolsTable() {
//query the db and build the table
	//TABLE BUILDING SUPER QUICK AND DIRTY....
	$.post("../DatabaseRelated/get_loaned_tools.php", {username:loggedInAs()},
    	function(data) {
			if( data != '' ) {
				var toolinfo = JSON.parse(data);

				for (var i = 0; i<toolinfo.length; i++) {
				 	var thisTool = toolinfo[i];
                    console.log(thisTool)
					var row$=$('<tr/>');
					for (var key in thisTool) {
						if (key != 'idTool'){
							var thisVal=thisTool[key];
							if (thisVal==null){thisVal=""};
							row$.append($('<td/>').html(thisVal));
						}
						//this prints each entry as
						//image file,tool name,tool type, tool brand, tool condition, tool status (int)
					}
					//probably an a w f u l way to do this.
                    var thisToolId= thisTool['idTool'];
                    row$.append($('<td/>').html(
                        "<input onclick=\"advanceTransactionState()\" type=\"submit\" value=\"[Next Step]\" id=\"" + thisToolId.toString() + "\">"));
					$("#loanedTools").append(row$);
				}
			}
			else {
				console.log("problem making loaned tools table");
			}
		}
	);
}

function makeBorrowedToolsTable() {
//query the db and build the table
	//TABLE BUILDING SUPER QUICK AND DIRTY....
	$.post("../DatabaseRelated/get_borrowed_tools.php", {username:loggedInAs()},
    	function(data) {
			if( data != '' ) {
				var toolinfo = JSON.parse(data);

				for (var i = 0; i<toolinfo.length; i++) {
				 	var thisTool = toolinfo[i];
                    console.log(thisTool)
					var row$=$('<tr/>');
					for (var key in thisTool) {
						if (key != 'idTool'){
							var thisVal=thisTool[key];
							if (thisVal==null){thisVal=""};
							row$.append($('<td/>').html(thisVal));
						}
						//this prints each entry as
						//image file,tool name,tool type, tool brand, tool condition, tool status (int)
					}
					//probably an a w f u l way to do this.
                    var thisToolId= thisTool['idTool'];
                    row$.append($('<td/>').html(
                        "<input onclick=\"advanceTransactionState()\" type=\"submit\" value=\"[Next Step]\" id=\"" + thisToolId.toString() + "\">"));
					$("#borrowedTools").append(row$);
				}
			}
			else {
				console.log("problem making borrowed tools table");
			}
		}
	);
}

$(document).ready(function(){
    makeLoanedToolsTable();
    makeBorrowedToolsTable();
});
