<?php
$conn=mysqli_connect("localhost","magic947_arthur","sweng987$$$","magic947_toolshare");

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
