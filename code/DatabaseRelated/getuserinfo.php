<?php
$conn=mysqli_connect("localhost","magic947_arthur","sweng987$$$","magic947_toolshare");

$name=$_POST['name1'];

$result=mysqli_query($conn,"SELECT * FROM RegUsers WHERE
                     username='$name'");
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
