<?php
$conn=mysqli_connect("localhost","someuser","somepassword","somedatabase");


$name=$_POST['name1'];
$pass=$_POST['password1'];

//should probably do some checking on email status/quality
$result=mysqli_query($conn,"SELECT * FROM RegUsers WHERE
                     username= BINARY '$name' AND password= BINARY '$pass'");
$data= mysqli_num_rows($result);
if (($data)==0){
  echo 'Username/password incorrect';
} else {
  echo 'Successful Login';
}
mysqli_close($conn);
?>
