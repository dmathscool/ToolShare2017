<?php
$conn=mysqli_connect("localhost","someuser","somepassword","somedatabase");

$result=mysqli_query($conn,"SELECT * FROM tooltype order by ToolType asc");
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
