<?php
$conn=mysqli_connect("localhost","someuser","somepassword","somedatabase");

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
