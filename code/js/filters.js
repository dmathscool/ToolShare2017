function populateToolnameDropdown() {
		$.post("../DatabaseRelated/gettoolname.php", 
    	function(data) {
			if( data != '' ) {
				var toolnames = JSON.parse(data);

				console.log(toolnames);
				for (var i = 0; i<toolnames.length; i++) {
					$(".filtertoolname").append("<option value="+toolnames[i]['ToolName']+">"+toolnames[i]['ToolName']+"</option>");
				}

			}
			else {
				console.log("problem looking up tool names");
				// some error stuff here. 
			}
		}
	);
}

function populateTooltypeDropdown() {
		$.post("../DatabaseRelated/gettooltype.php", 
    	function(data) {
			if( data != '' ) {
				// TODO need to loop through all data here
				var tooltypes = JSON.parse(data);

				console.log(tooltypes);
				for (var i = 0; i<tooltypes.length; i++) {
					$(".filtertooltype").append("<option value="+tooltypes[i]['ToolType']+">"+tooltypes[i]['ToolType']+"</option>");
				}

			}
			else {
				console.log("problem looking up tool types");
				// some error stuff here. 
			}
		}
	);

}

function populateBrandDropdown() {
		$.post("../DatabaseRelated/gettoolbrand.php", 
    	function(data) {
			if( data != '' ) {
				var toolbrands = JSON.parse(data);

				console.log(toolbrands);
				for (var i = 0; i<toolbrands.length; i++) {
					$(".filterbrand").append("<option value="+toolbrands[i]['ToolBrand']+">"+toolbrands[i]['ToolBrand']+"</option>");
				}

			}
			else {
				console.log("problem looking up tool names");
				// some error stuff here. 
			}
		}
	);
}

function populateConditionDropdown() {
		$.post("../DatabaseRelated/gettoolcondition.php", 
    	function(data) {
			if( data != '' ) {
				// TODO need to loop through all data here
				var toolconditions = JSON.parse(data);

				console.log(toolconditions);
				for (var i = 0; i<toolconditions.length; i++) {
					$(".filtercondition").append("<option value="+toolconditions[i]['ToolCondition']+">"+toolconditions[i]['ToolCondition']+"</option>");
				}

			}
			else {
				console.log("problem looking up conditions");
				// some error stuff here. 
			}
		}
	);

}

function filterStuff() {
    
}