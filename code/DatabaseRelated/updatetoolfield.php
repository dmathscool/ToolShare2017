<?php
$conn=mysqli_connect("localhost","someuser","somepassword","somedatabase");

$toolid=$_POST['toolID'];
$field=$_POST['field'];
$newval=$_POST['newval'];

if( $newval != "NULL" ) {
    $newval = "'" . $newval . "'";
}

$query = "UPDATE Tools SET $field=$newval WHERE idTool='$toolid'";
$result=mysqli_query($conn,$query);

if ($result) {
    echo "Success ". $query ;
}
else {
    echo "Error updating $field " . $query;
}

mysqli_close($conn);
?>