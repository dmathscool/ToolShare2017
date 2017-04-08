<?php
//fetch tools belonging to this user. If it's empty then we do all of them
//otherwise we get the tools belogning to that specific user.
//that way this php script should be able to do the following:
//modifications may be made to this so that we can maybe get specific tools?
$conn=mysqli_connect("localhost","magic947_arthur","sweng987$$$","magic947_toolshare");

$name=$_POST['username'];

$result=mysqli_query($conn,"SELECT ImgFileLoc,ToolName,ToolType,ToolBrand,ToolCondition,ToolLoanName,idTool
    FROM Tools
		INNER JOIN ToolLoanState on idToolLoanState = ToolState
		INNER JOIN RegUsers on RegUsers_OriginalUser = idRegisteredUsers
		WHERE username = '$name'");


//grabbing from getuserinfo code
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

mysqli_close($conn);
?>
