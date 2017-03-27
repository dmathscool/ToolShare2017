<?php
$conn=mysqli_connect("localhost","magic947_arthur","sweng987$$$","magic947_toolshare");

$toolid = $_POST['toolid'];

$result=mysqli_query($conn,"SELECT origUsers.username as origUser, currUsers.username as currUser FROM Tools
LEFT JOIN RegUsers origUsers ON Tools.RegUsers_OriginalUser = origUsers.idRegisteredUsers
LEFT JOIN RegUsers currUsers ON Tools.RegUsers_CurrentUser = currUsers.idRegisteredUsers
WHERE idTool = $toolid");
$numRows= $result->num_rows;

if( $numRows != 1 ) {
  echo 'error: did not find exactly one tool with id ' . $toolid . '. found ' . $numRows;
}
else {
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
}

mysqli_close($conn);
?>
