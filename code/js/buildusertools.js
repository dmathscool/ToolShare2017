$(document).ready(function(){

	//query the db and build the table
	//TABLE BUILDING SUPER QUICK AND DIRTY....
	$.post("../DatabaseRelated/get_own_tools.php", {username:loggedInAs()},
    	function(data) {
			if( data != '' ) {
				var toolinfo = JSON.parse(data);

				for (var i = 0; i<toolinfo.length; i++) {
					var thisTool = toolinfo[i];
					var row$=$('<tr/>');
					for (var key in thisTool) {
						if( key == 'ImgFileLoc' ) {
                            var tooltype = thisTool['ToolType'].toLowerCase().replace(/\s/g, '');
                            row$.append($('<td/>').html("<img class='tooltype' src='img/tooltype/" + tooltype + ".png'>"));
                        }
                        else if (key != 'idTool'){
							var thisVal=thisTool[key];
							if (thisVal==null){thisVal=""};
							row$.append($('<td/>').html(thisVal));
						}
						//this prints each entry as
						//image file,tool name,tool type, tool brand, tool condition, tool status (int)
					}
					//probably an a w f u l way to do this.
					var thisToolId= thisTool['idTool'];
					row$.append($('<td/>').html(
						"<input onclick=\"enable_editTool(this)\" type=\"submit\" value=\"Edit\" id=\"" + thisToolId.toString() + "\"> \
						<input onclick=\"deleteTool(this.id)\" type=\"submit\" value=\"Delete\" id=\"" + thisToolId.toString() + "\">"));
					$("#databaseTools").append(row$);
				}
			var lastrow$ =  "<tr> <td><!--img--></td> <td><input type=\"text\" name=\"toolname\" id=\"toolname\"></td> \
				<td><select class=\"filtertooltype\"  id=\"tooltype\"></select></td> \
				<td><input type=\"text\" name=\"toolbrand\" id=\"toolbrand\"></td> \
				<td><select class=\"filtercondition\" id=\"toolcondition\"></select></td> \
				<td><!--status--></td> \
				<td><input onclick=\"createTool()\" type=\"submit\" value=\"Add\" id=\"submit\"></td></tr>"
			$("#databaseTools").append(lastrow$);
			populateTooltypeDropdown(0);
			populateConditionDropdown(0);
			}
			else {
				console.log("something went awry")
			}
		}
	);

});
