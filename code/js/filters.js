function populateToolnameDropdown(addblankrow) {
		$.post("../DatabaseRelated/gettoolname.php",
    	function(data) {
			if (addblankrow != 0) {
				    $(".filtertoolname").append('<option value=""></option>');
			}
			if( data != '' ) {
				var toolnames = JSON.parse(data);

				console.log(toolnames);
				for (var i = 0; i<toolnames.length; i++) {
					$(".filtertoolname").append("<option value='"+toolnames[i]['ToolName']+"'>"+toolnames[i]['ToolName']+"</option>");
				}

			}
			else {
				console.log("problem looking up tool names");
				// some error stuff here.
			}
		}
	);
}

function populateTooltypeDropdown(addblankrow) {
		$.post("../DatabaseRelated/gettooltype.php",
    	function(data) {
			if (addblankrow != 0) {
				    $(".filtertooltype").append('<option value=""></option>');
			}
			if( data != '' ) {
				// TODO need to loop through all data here
				var tooltypes = JSON.parse(data);

				console.log(tooltypes);
				$(".filtertooltype").empty();
				for (var i = 0; i<tooltypes.length; i++) {
					$(".filtertooltype").append("<option value='"+tooltypes[i]['ToolType']+"'>"+tooltypes[i]['ToolType']+"</option>");
				}

			}
			else {
				console.log("problem looking up tool types");
				// some error stuff here.
			}
		}
	);

}

function populateBrandDropdown(addblankrow) {
		$.post("../DatabaseRelated/gettoolbrand.php",
    	function(data) {
			if (addblankrow != 0) {
				    $(".filterbrand").append('<option value=""></option>');
			}
			if( data != '' ) {
				var toolbrands = JSON.parse(data);

				console.log(toolbrands);
				for (var i = 0; i<toolbrands.length; i++) {
					$(".filterbrand").append("<option value='"+toolbrands[i]['ToolBrand']+"'>"+toolbrands[i]['ToolBrand']+"</option>");
				}

			}
			else {
				console.log("problem looking up tool names");
				// some error stuff here.
			}
		}
	);
}

function populateConditionDropdown(addblankrow) {
		$.post("../DatabaseRelated/gettoolcondition.php",
    	function(data) {
			if (addblankrow != 0) {
				    $(".filtercondition").append('<option value=""></option>');
			}
			if( data != '' ) {
				// TODO need to loop through all data here
				var toolconditions = JSON.parse(data);

				console.log(toolconditions);
				$(".filtercondition").empty();
				for (var i = 0; i<toolconditions.length; i++) {
					$(".filtercondition").append("<option value='"+toolconditions[i]['ToolCondition']+"'>"+toolconditions[i]['ToolCondition']+"</option>");
				}

			}
			else {
				console.log("problem looking up conditions");
				// some error stuff here.
			}
		}
	);

}
function popluateToolsTable(data) {
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
			var thistoolstate = thisTool['ToolLoanName'];
			if (!allowBorrow) {
				row$.append($('<td/>').html("Register to Borrow!"));
			}
			else if (thistoolstate == "Available"){

				var thisToolId= thisTool['idTool'];
				row$.append($('<td/>').html(
					"<input onclick=\"borrowTool(this.id)\" type=\"submit\" value=\"Borrow\" id=\"" + thisToolId.toString() + "\">"));
			}
			else {
				row$.append($('<td/>').html(""));
			}
			$("#databaseTools").append(row$);
		}
		var lastrow$ =  "<tr> <td><!--img--></td><td></td><td><select class=\"filtertooltype\"  \
			id=\"tooltype\"></select></td><td><select class=\"filterbrand\" id=\"toolbrand\"> \
			</select></td><td><select class=\"filtercondition\" id=\"toolcondition\"></select></td><td></td> \
            <td><input onclick=\"filterStuff()\" type=\"submit\" value=\"Filter Results\" id=\"submit\"></td> </tr>"
		$("#databaseTools").append(lastrow$);
		populateTooltypeDropdown(1);
		populateBrandDropdown(1);
		populateConditionDropdown(1);
	}
	else {
		console.log("something went awry")
	}

}
function filterStuff() {
	//query the db and rebuild the table
	//TABLE BUILDING SUPER QUICK AND DIRTY....
	if (loggedInAs() == ''){
		allowBorrow=false;
	} else {
		allowBorrow=true;
	}
	var condition = document.getElementById('toolcondition').value;
	var brand= document.getElementById('toolbrand').value;
	var type= document.getElementById('tooltype').value;
	var keyword = document.getElementById('searchkeyword').value;
	$("#databaseTools tr").remove(); //Clear the table to rebuild
	$.post("../DatabaseRelated/get_tools.php", {username:"", toolcondition:condition,toolname:"",tooltype:type,toolbrand:brand,searchkeyword:keyword},
    	function(data) {popluateToolsTable(data);});
}
function searchKeyword() {
	if (loggedInAs() == ''){
		allowBorrow=false;
	} else {
		allowBorrow=true;
	}
	var condition = document.getElementById('toolcondition').value;
	var brand= document.getElementById('toolbrand').value;
	var type= document.getElementById('tooltype').value;
	var keyword = document.getElementById('searchkeyword').value;
	$("#databaseTools tr").remove(); //Clear the table to rebuild
	$.post("../DatabaseRelated/get_tools.php", {username:"", toolcondition:condition,toolname:"",tooltype:type,toolbrand:brand,searchkeyword:keyword},
    	function(data) {popluateToolsTable(data);});


}
