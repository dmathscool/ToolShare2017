$(document).ready(function(){

	//query the db and build the table
	//TABLE BUILDING SUPER QUICK AND DIRTY....
	if (loggedInAs() == ''){
		allowBorrow=false;
	} else {
		allowBorrow=true;
	}

	$.post("../DatabaseRelated/get_tools.php", {username:loggedInAs(),toolname:"",tooltype:"",toolcondition:"",toolbrand:"",searchkeyword:""},
    	function(data) {popluateToolsTable(data);});
});
