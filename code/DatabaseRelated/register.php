<?php
$conn=mysqli_connect("localhost","someuser","somepassword","somedatabase");

$name=$_POST['name1'];
$email=$_POST['email1'];
$pass=$_POST['password1'];
$zip=$_POST['zip'];

//should probably do some checking on email status/quality
$result=mysqli_query($conn,"SELECT * FROM RegUsers WHERE
                    username='$name'");
$data= mysqli_num_rows($result);
if (($data)==0){
  $query=mysqli_query($conn,"INSERT INTO RegUsers(username,password,zipcode,email)
                    VALUES ('$name','$pass','$zip','$email')");
  if($query){
    echo "Successful Registration";
  }
  else {
    echo "Error registering.";
  }
} else {
  echo "Account name already in use";
}
mysqli_close($conn);
?>
