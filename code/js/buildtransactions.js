// input is the text name of the field to be changed.
// this needs to match the id of the text box containing it (which should be "[name]field").
// this also needs to match the name of the column in the database

// function changeState() {
// 	var username = document.getElementById('username').innerHTML;
//     var newVal = document.getElementById(modifiedField+'field').value;

//     $.post("../DatabaseRelated/updateuserfield.php",
//             {name:username,field:modifiedField,newval:newVal},
//             function(data){
//               if (data == "Success"){
// 				document.getElementById('updateresult').innerHTML = modifiedField + " successfully updated";
//               }
// 			  else {
// 				document.getElementById('updateresult').innerHTML = "Error updating " + modifiedField + ": " + data;
//               }
//             })
// }

// parameter is state we want to transition to
function advanceTransactionState(state) {
    console.log("advance to state " + state);
}

// Yes, the hard-coded states in the next couple functions should be pulled from the tool state table or something
// ...k
function buttonHTML(textValue, id) {
    var textNoSpaces = textValue.replace(/\s/g, '');

    console.log(textValue);

    var nextState;
    if( textValue == "Accept" ) {
        nextState = "On Loan";
    }
    else if( textValue == "Decline" ) {
        nextState = "Available";
    }
    else if( textValue == "Returned" ) {
        nextState = "Returned";
    }
    else if( textValue == "Accept return" ) {
        nextState = "Rate User";
    }
    else {
        nextState = "Hamburger";
        console.log("missing button text");
    }

    var theHTML = "<input onclick=\"advanceTransactionState('" + nextState + "')\" type=\"submit\" value=\"" + textValue + "\" id=\"" + textNoSpaces + id.toString() + "\">";
    console.log(theHTML);
    return theHTML;
}

function getAdvanceButton(state, toolId) {
    if( state == "Loan Requested" ) {
        return buttonHTML("Accept", toolId) + "<br>" + buttonHTML("Decline", toolId);
    }
    else if( state == "On Loan" ) {
        return buttonHTML("Returned", toolId);
    }
    else if( state == "Returned" ) {
        return buttonHTML("Accept return", toolId);
    }
    else {
        return buttonHTML("Missing State", toolId);
    }
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
                    var thisToolState = thisTool['ToolLoanName'];
                    row$.append($('<td/>').html(
                        getAdvanceButton(thisToolState, thisToolId)));
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
                    var thisToolState = thisTool['ToolLoanName'];
                    row$.append($('<td/>').html(
                        getAdvanceButton(thisToolState, thisToolId)));
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