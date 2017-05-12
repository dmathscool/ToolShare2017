<?php
$conn=mysqli_connect("localhost","someuser","somepassword","somedatabase");

$toolId=$_POST['toolid'];

$result=mysqli_query($conn,"DELETE from Tools WHERE idTool = $toolId");

if ($result) {
    echo "SUCCESS";
}
else {
    echo "Error deleting tool ".$result;
}

mysqli_close($conn);
?>
