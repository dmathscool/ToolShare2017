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

function kickToRatingPage(original, current) {
    var $ratedUser;
    if( original == loggedInAs() ) {
        $ratedUser = current;
    }
    else if ( current == loggedInAs() ) {
        $ratedUser = original;
    }
    else {
        console.log("neither user involved with this tool is the one logged in. we shouldn't have even gotten here");
    }

    console.log("rating user "+$ratedUser);
    window.location.replace("rateuser.html?name="+$ratedUser);
}

function rateOtherUser(toolId) {
    $.post("../DatabaseRelated/gettoolusernames.php",
            {toolid:toolId},
            function(data){
              if (data.startsWith("error")){
                  console.log("failed to get tool info " + data);
              }
			  else {
                  var toolinfo = JSON.parse(data);

                  console.log(data);
                  var $original = toolinfo[0]['origUser'];
                  var $current = toolinfo[0]['currUser'];

                  kickToRatingPage($original, $current);
              }
            });
}

// state parameter is state we want to transition to
function advanceTransactionState(state, id) {
    console.log("advance tool " + id + " to state " + state);

    if( state == "Returned" ) {
        changeState("Returned", id);
        rateOtherUser(id);
    }
    if( state == "Rate User" ) {
        rateOtherUser(id);
        changeState("Available", id);
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
                    if( thisToolState == "Loan Requested" || thisToolState == "Returned" ) {
                        row$.append($('<td/>').html(
                            getAdvanceButton(thisToolState, thisToolId)));
                    }
                    else {
                        row$.append($('<td/>'));
                    }
                    
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
                    if( thisToolState == "On Loan" ) {
                        row$.append($('<td/>').html(
                            getAdvanceButton(thisToolState, thisToolId)));
                    }
                    else {
                        row$.append($('<td/>'));
                    }
                    
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