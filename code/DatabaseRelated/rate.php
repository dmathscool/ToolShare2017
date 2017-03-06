<?php
$conn=mysqli_connect("localhost","magic947_arthur","sweng987$$$","magic947_toolshare");

$name=$_POST['name1'];
$rating=$_POST['rating1'];

//TODO first check to see if the user actually has a transaction in the appropriate state
//      if not, return message like "No appropriate transaction found. Rating failed"

// $pass=$_POST['password1'];
// $zip=$_POST['zip'];

// //should probably do some checking on email status/quality
// $result=mysqli_query($conn,"SELECT * FROM RegUsers WHERE
//--                     username='$name'");
// $data= mysqli_num_rows($result);
// if (($data)==0){
//   $query=mysqli_query($conn,"INSERT INTO RegUsers(username,password,zipcode,email)
//--                     VALUES ('$name','$pass','$zip','$email')");
//   if($query){
//     echo "Successful Registration";
//   }
//   else {
//     echo "Error registering.";
//   }
// } else {
//   echo "Email already in use";
// }

echo $name;
echo " ";
echo $rating;

mysqli_close($conn);


?>
