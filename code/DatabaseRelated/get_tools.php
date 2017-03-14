<?php
//fetch tools belonging to this user. If it's empty then we do all of them
//otherwise we get the tools belogning to that specific user.
//that way this php script should be able to do the following:
//modifications may be made to this so that we can maybe get specific tools?
$conn=mysqli_connect("localhost","magic947_arthur","sweng987$$$","magic947_toolshare");

$name=$_POST['username'];
$toolname=$_POST['toolname'];
$tooltype=$_POST['tooltype'];
$toolcondition=$_POST['toolcondition'];
$toolbrand=$_POST['toolbrand'];
//build up the where clause if any of the search fields are populated
$whereclause = "WHERE ";
if (!empty($toolname)) {
	$whereclause .= "ToolName LIKE '"+$toolname . "' ";
}
else{
	$whereclause .= "ToolName LIKE '%' ";
}
if (!empty($tooltype)) {
	$whereclause .= "AND ToolType='".$tooltype . "' ";
}
else{
	$whereclause .= "AND ToolType LIKE '%' ";
}
if (!empty($toolcondition)) {
	$whereclause .= "AND ToolCondition='".$toolcondition . "' ";
}
else{
	$whereclause .= "AND ToolCondition LIKE '%' ";
}
if (!empty($toolbrand)) {
	$whereclause .= "AND ToolBrand='".$toolbrand . "' ";
}
else{
	$whereclause .= "AND ToolBrand LIKE '%' ";
}
//echo $whereclause;
if (empty($name)){
  $result=mysqli_query($conn,"SELECT ImgFileLoc,ToolName,ToolType,ToolBrand,ToolCondition,ToolState
    FROM Tools ".$whereclause);
} else {
  $result=mysqli_query($conn,"SELECT ImgFileLoc,ToolName,ToolType,ToolBrand,ToolCondition,ToolState
    FROM Tools INNER JOIN RegUsers on RegUsers_OriginalUser = idRegisteredUsers
    WHERE username = '$name'");

}

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
