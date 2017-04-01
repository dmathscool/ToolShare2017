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
					 window.location.replace("borrow.html");
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
function enable_editTool(obj) {
  var rowOfInterest=obj.parentNode.parentNode.rowIndex;
  var toolId=obj.id;
  var tooltable=document.getElementById("databaseTools");
  var tooltableRow=tooltable.rows[rowOfInterest];

  //do manually.
  //tool name
  var tempText=tooltableRow.cells[1].innerHTML;
  tooltableRow.cells[1].innerHTML="<input type=\"text\" id=\"toolname_"+rowOfInterest.toString()+"\"name=\"toolname\" value =\"" +tempText.toString() + "\">";
  //tool type
  tooltableRow.cells[2].innerHTML="<select class=\"filtertooltype\"  id=\"tooltype_"+rowOfInterest.toString()+"\"></select>";
  //tool brand
  var tempText=tooltableRow.cells[3].innerHTML;
  tooltableRow.cells[3].innerHTML="<input type=\"text\"  id=\"toolbrand_"+rowOfInterest.toString()+"\"name=\"toolbrand\" value =\"" +tempText.toString() + "\">";
  //tool type
  //tool condition
  tooltableRow.cells[4].innerHTML="<select class=\"filtercondition\" id=\"toolcondition_"+rowOfInterest.toString()+"\"></select>";
  populateTooltypeDropdown(0);
  populateConditionDropdown(0);

  //change the last two buttons to be SAVE EDIT & CANCEL EDIT
  tooltableRow.cells[6].innerHTML=
    "<input onclick=\"do_editTool(this)\" type=\"submit\" value=\"Save\" id=\"" + toolId.toString() + "\"> \
    <input onclick=\"cancel_editTool(this)\" type=\"submit\" value=\"Cancel\" id=\"" + toolId.toString() + "\">";

}

function do_editTool(obj){
  var rowOfInterest=obj.parentNode.parentNode.rowIndex;
  var toolId=obj.id;
  var tooltable=document.getElementById("databaseTools");
  var tooltableRow=tooltable.rows[rowOfInterest];

  //need to get whats inside the user textbox...
  var toolName=document.getElementById("toolname_"+rowOfInterest.toString()).value;
  var toolBrand=document.getElementById("toolbrand_"+rowOfInterest.toString()).value;

  var toolType = document.getElementById('tooltype_'+rowOfInterest.toString()).value;
  var toolCondition = document.getElementById('toolcondition_'+rowOfInterest.toString()).value;
//ok so let's basically grab the values.
console.log(toolName);
console.log(toolBrand);
console.log(toolId);
console.log(toolType);
console.log(toolCondition);
$.post("../DatabaseRelated/editusertool.php",
  {toolid:toolId,toolname:toolName,toolcondition:toolCondition,toolbrand:toolBrand,tooltype:toolType},
	function(data) {
		 if (data == "SUCCESS"){
			 window.location.replace("inventory.html");
		 } else {
			 alert("Borrow Failed: " + data);
	}})

}
function cancel_editTool(obj){
  //probably just easiest to reload the page el oh el
  //but inactuality it would probably better to undo what i had done.
  window.location.reload();
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
