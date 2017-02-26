<?php
$conn=mysqli_connect("localhost","magic947_arthur","sweng987$$$","magic947_toolshare");

$username=$_POST['name'];
$email=$_POST['email'];

// do e-mail address error checking so we can spit out a valuable error message for malformed addresses?
// or does that belong in JS?

$result=mysqli_query($conn,"UPDATE RegUsers SET email='$email' WHERE username='$username'");

if ($result) {
    echo 'Success';
}
else {
    echo 'Error updating e-mail';
}

mysqli_close($conn);
?>