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
