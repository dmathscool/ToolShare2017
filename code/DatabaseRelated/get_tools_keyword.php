<?php
//fetch tools that have the specified keyword in either the name or type
$conn=mysqli_connect("localhost","magic947_arthur","sweng987$$$","magic947_toolshare");

$keyword=$_POST['searchkeyword'];
//build up the where clause
$whereclause = "";
if (!empty($keyword)) {
	$whereclause = " WHERE ToolName LIKE '%".$keyword . "%' OR ToolBrand LIKE '%".$keyword."%' OR ToolType LIKE '%".$keyword."%'";
}

$result=mysqli_query($conn,"SELECT ImgFileLoc,ToolName,ToolType,ToolBrand,ToolCondition,ToolLoanName,idTool
  FROM Tools
	INNER JOIN ToolLoanState on idToolLoanState = ToolState".$whereclause);

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
