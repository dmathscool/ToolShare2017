// this will probably need a parameter to indicate the item
function borrowTool() {
    if( isLoggedIn() ) {
        alert("Tool is yours! You are free to break it");
    }
    else {
        alert("Please log in to borrow a tool.");
    }
}

// this will probably need a parameter to indicate the item
function editTool() {
    console.log("editing tool");
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