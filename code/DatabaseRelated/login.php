<?php
$conn=mysqli_connect("localhost","magic947_arthur","sweng987$$$","magic947_toolshare");


$name=$_POST['name1'];
$pass=$_POST['password1'];

//should probably do some checking on email status/quality
$result=mysqli_query($conn,"SELECT * FROM RegUsers WHERE
                     username='$name' AND password='$pass'");
$data= mysqli_num_rows($result);
if (($data)==0){
  echo 'Username/password incorrect';
} else {
  echo 'Successful Login';
}
?>
