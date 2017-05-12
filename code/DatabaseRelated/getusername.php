<?php
$conn=mysqli_connect("localhost","someuser","somepassword","somedatabase");

$userid=$_POST['userid'];

$result=mysqli_query($conn,"SELECT username FROM RegUsers WHERE idRegisteredUsers = '$userid'");
$numRows= $result->num_rows;

if ($numRows != 1) {
  echo 'error: ToolLoanState returned ' . $numRows . ' rows (expected 1)';
}
else {
  $row = $result->fetch_assoc();
  echo $row['username'];
}

mysqli_close($conn);
?>
