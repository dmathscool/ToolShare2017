<?php
//fetch tools belonging to this user. If it's empty then we do all of them
//otherwise we get the tools belogning to that specific user.
//that way this php script should be able to do the following:
//modifications may be made to this so that we can maybe get specific tools?
$conn=mysqli_connect("localhost","magic947_arthur","sweng987$$$","magic947_toolshare");

$name=$_POST['username'];

//so we want to find all tools such that the original user == us AND current user == not null
//AND current_user == us
$result = mysqli_query($conn,"SELECT idRegisteredUsers FROM RegUsers WHERE
										  username = '$name' ")
$username=$result->fetch_assoc();
$username= $username["idRegisteredUsers"];

$result=mysqli_query($conn,"SELECT ImgFileLoc,ToolName,ToolType,ToolBrand,ToolCondition,ToolState,idTool
	FROM Tools
	WHERE (RegUsers_OriginalUser = ' $username ' AND RegUsers_CurrentUser IS NOT NULL)
	OR (RegUsers_CurrentUser = '$username')";

$numRows= $result->num_rows;
$to_encode = array();
while( $row = $result->fetch_assoc() ) {
	  $to_encode[] = $row;
}
$jsonString = json_encode($to_encode);
if (($jsonString)==FALSE) {
	  echo '';
} else {
	  echo $jsonString;
}

//currently idTool is just a number and not linked to the foreign table

mysqli_close($conn);
?>
