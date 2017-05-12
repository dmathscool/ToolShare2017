<?php
//fetch tools belonging to this user. If it's empty then we do all of them
//otherwise we get the tools belogning to that specific user.
//that way this php script should be able to do the following:
//modifications may be made to this so that we can maybe get specific tools?
$conn=mysqli_connect("localhost","someuser","somepassword","somedatabase");

$name=$_POST['username'];

//so we want to find all tools such that the current_user == us
$result = mysqli_query($conn,"SELECT idRegisteredUsers FROM RegUsers WHERE
										  username = '$name' ");
$username=$result->fetch_assoc();
$username= $username["idRegisteredUsers"];

$result=mysqli_query($conn,"SELECT ImgFileLoc,ToolName,ToolType,ToolBrand,ToolCondition,
	IF(RegUsers_CurrentUser= '$username',username,(SELECT username FROM RegUsers WHERE RegUsers_CurrentUser=idRegisteredUsers )) as otherUser,
	IF(RegUsers_CurrentUser= '$username',email,(SELECT email FROM RegUsers WHERE RegUsers_CurrentUser=idRegisteredUsers )) as thisEmail,
	ToolLoanName,idTool
	FROM Tools
	INNER JOIN ToolLoanState ON idToolLoanState=Toolstate
	INNER JOIN RegUsers on RegUsers_OriginalUser = idRegisteredUsers
	WHERE (RegUsers_CurrentUser = '$username') AND (ToolState != '4')");
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
