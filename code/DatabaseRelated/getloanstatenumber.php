<?php
$conn=mysqli_connect("localhost","magic947_arthur","sweng987$$$","magic947_toolshare");

$statename=$_POST['stateText'];

$result=mysqli_query($conn,"SELECT idToolLoanState FROM ToolLoanState WHERE ToolLoanName = '$statename'");
$numRows= $result->num_rows;

if ($numRows != 1) {
  echo 'error: ToolLoanState returned ' . $numRows . ' rows (expected 1)';
}
else {
  $row = $result->fetch_assoc();
  echo $row['idToolLoanState'];
}

mysqli_close($conn);
?>
