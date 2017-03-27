// input is the text name of the field to be changed.
// this needs to match the id of the text box containing it (which should be "[name]field").
// this also needs to match the name of the column in the database

function changeState(state, id) {
    console.log("change state " + state + " " + id);

    var $newStateId = loanStateNumber(state);

    console.log("changing tool state");
    $.post("../DatabaseRelated/updatetoolfield.php",
            {toolID:id,field:'ToolState',newval:$newStateId},
            function(data){
              if (data.startsWith("Success")){
                  console.log("changed state with query " + data);
              }
			  else {
				  console.log("failed to change tool state with query " + data);
              }
            });
    
    if( state == "Available" ) {
        console.log("changing current user");
        // we also need to set RegUsers_CurrentUser to NULL so this doesn't
        // show up in people's transactions when it's not involved presently

        $.post("../DatabaseRelated/updatetoolfield.php",
            {toolID:id,field:'RegUsers_CurrentUser',newval:"NULL"},
            function(data){
              if (data.startsWith("Success")){
                  console.log("changed current user to null with query " + data);
              }
			  else {
				  console.log("failed to change current user with query " + data);
              }
            });
    }
}

// state parameter is state we want to transition to
function advanceTransactionState(state, id) {
    console.log("advance tool " + id + " to state " + state);

    if( state == "Returned" ) {
        changeState("Returned", id);
        // then ask user to rate the other user
    }
    if( state == "Rate User" ) {
        changeState("Available", id);
        // then ask user to rate the other user
        //window.location.href = "rateuser.html?name=" + ;
    }
    else {
        changeState(state, id);
    }
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
    else if( textValue == "Return tool" ) {
        nextState = "Returned";
    }
    else if( textValue == "Accept return" ) {
        nextState = "Rate User";
    }
    else {
        nextState = "Hamburger";
        console.log("missing button text");
    }

    var theHTML = "<input onclick=\"advanceTransactionState('" + nextState + "', " + id.toString() + ")\" type=\"submit\" value=\"" + textValue + "\" id=\"" + textNoSpaces + id.toString() + "\">";
    console.log(theHTML);
    return theHTML;
}

function getAdvanceButton(state, toolId) {
    if( state == "Loan Requested" ) {
        return buttonHTML("Accept", toolId) + "<br>" + buttonHTML("Decline", toolId);
    }
    else if( state == "On Loan" ) {
        return buttonHTML("Return tool", toolId);
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
                    //console.log(thisTool)
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