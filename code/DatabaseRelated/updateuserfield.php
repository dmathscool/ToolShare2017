<?php
$conn=mysqli_connect("localhost","magic947_arthur","sweng987$$$","magic947_toolshare");

$username=$_POST['name'];
$field=$_POST['field'];
$newval=$_POST['newval'];

$result=mysqli_query($conn,"UPDATE RegUsers SET $field='$newval' WHERE username='$username'");

if ($result) {
    echo "Success";
}
else {
    echo "Error updating $field";
}

mysqli_close($conn);
?>
