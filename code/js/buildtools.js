$(document).ready(function(){

	//query the db and build the table
	//TABLE BUILDING SUPER QUICK AND DIRTY....
	if (loggedInAs() == ''){
		allowBorrow=false;
	} else {
		allowBorrow=true;
	}

	$.post("../DatabaseRelated/get_tools.php", {username:"",toolname:"",tooltype:"",toolcondition:"",toolbrand:""},
    	function(data) {popluateToolsTable(data);});
});
