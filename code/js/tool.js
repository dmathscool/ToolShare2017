// this will probably need a parameter to indicate the item
function borrowTool(clicked_id) {
    if( isLoggedIn() ) {
		var username = loggedInAs();
		var borrowtoolId=clicked_id;

		$.post("../DatabaseRelated/borrow_tool.php",
			{borrowingUser:username,toolId:borrowtoolId,newToolState:"Loan Requested"},
			function(data) {
				 if (data == "SUCCESS"){
					 //alert("Borrow Success");
					 window.location.reload();
				 } else {
					 alert("Borrow Failed: " + data);
			}})
    }
    else {
        alert("Please log in to borrow a tool.");
    }
}

// function to edit a tool based on id
// TODO - probably needs to happen in two parts 
// First part gives user edit access to tool stuff
// Second part commits the edit to database
function editTool(clicked_id) {
	var toolName = document.getElementById('toolname'+clicked_id).value;
    var toolType = document.getElementById('tooltype'+clicked_id).value;
    var toolBrand = document.getElementById('toolbrand'+clicked_id).value;
    var toolCondition = document.getElementById('toolcondition'+clicked_id).value;
	$.post("../DatabaseRelated/editusertool.php",
		{toolid:clicked_id,toolname:toolName,toolcondition:toolCondition,toolbrand:toolBrand,tooltype:toolType},
		function(data) {
			 if (data == "SUCCESS"){
				 window.location.reload();
			 } else {
				 alert("Borrow Failed: " + data);
		}})
}

// function to delete tool based on id
function deleteTool(clicked_id) {
	$.post("../DatabaseRelated/deleteusertool.php",
		{toolid:clicked_id},
		function(data) {
			 if (data == "SUCCESS"){
				 window.location.reload();
			 } else {
				 alert("Borrow Failed: " + data);
		}})
}

function createTool() {
    console.log("creating tool");
    //get the entry for each thing
    //TOOL NAME
    //TOOL TYPE
    //BRAND
    //CONDITION
    //DEFAULT STATUS IS "AVAILABLE"

    var toolName = document.getElementById('toolname').value;
    var toolType = document.getElementById('tooltype').value;
    var toolBrand = document.getElementById('toolbrand').value;
    var toolCondition = document.getElementById('toolcondition').value;
    var thisUserName= Cookies.get("username");
    var imgfileloc = ''; //for now leave it empty

    var success=true;
    if (toolName == ''){
      document.getElementById('toolname').style.background = "red";
      success=false;
    } else {document.getElementById('toolname').style.background = "white";}
    if (toolType == ''){
      document.getElementById('tooltype').style.background = "red";
      success=false;
    } else {document.getElementById('tooltype').style.background = "white";}
    if (toolBrand == ''){
      document.getElementById('toolbrand').style.background = "red";
      success=false;
    } else {document.getElementById('toolbrand').style.background = "white";}
    if (toolCondition  == '')
    {
      document.getElementById('toolcondition').style.background = "red";
      success=false;
    } else {document.getElementById('toolcondition').style.background = "white";}

    if (success==true){
      $.post("../DatabaseRelated/addtool2user.php",
            {name:toolName,type:toolType,
            brand:toolBrand,stat:toolCondition,
            user:thisUserName,imgfile:imgfileloc},
            function(data){
              if (data == "Success"){
                window.location.replace("inventory.html");
              } else {
                alert(data)
              }
            })
    }
}

// attempting to do this as a call to PHP was proving to be a pain.
// returning a value from the $.post call is tricky. don't feel like monkeying with it
// for values that aren't likely to change anyway... I hope
function loanStateNumber(stateAsText) {
    if( stateAsText == "Available" ) return 1;
    else if( stateAsText == "Loan Requested" ) return 2;
    else if( stateAsText == "On Loan" ) return 3;
    else if( stateAsText == "Returned" ) return 4;
    else return -1;
}