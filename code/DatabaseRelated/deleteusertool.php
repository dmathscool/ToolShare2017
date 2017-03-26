<?php
$conn=mysqli_connect("localhost","magic947_arthur","sweng987$$$","magic947_toolshare");

$toolId=$_POST['toolid'];

$result=mysqli_query($conn,"DELETE from tools WHERE idTool = $toolId");

if ($result) {
    echo "SUCCESS";
}
else {
    echo "Error updating $field";
}

mysqli_close($conn);
?>
