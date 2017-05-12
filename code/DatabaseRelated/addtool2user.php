<?php
$conn=mysqli_connect("localhost","someuser","somepassword","somedatabase");

$toolName=$_POST['name'];
$toolType=$_POST['type'];
$toolBrand=$_POST['brand'];
$toolCondition=$_POST['stat'];
$username=$_POST['user'];
$img=$_POST['imgfile'];


// grab the primary id for this username
$result=mysqli_query($conn,"SELECT idRegisteredUsers FROM RegUsers WHERE username = '$username'");

$data = mysqli_num_rows($result);
if ($data == 1 ){
  // then add an entry into the tool table (allow nonunique)
  // RegUsers_OriginalUser
  // ToolState
  // ToolName
  // ToolType
  // ToolBrand
  // ToolCondition
  // ToolImg
  $username=$result->fetch_assoc();
  $username= $username["idRegisteredUsers"];

  $query=mysqli_query($conn,"INSERT INTO Tools(RegUsers_OriginalUser,ToolName,ToolBrand,ToolType,ToolCondition,ImgFileLoc)
                    VALUES ('$username','$toolName','$toolBrand','$toolType','$toolCondition','$img')");
  if ($query){
    echo 'Success';
  } else {
    echo 'Error adding tool';
  }

} else {
  //something went quite wrong...
  echo "ERROR FINDING UNIQUE USER ID";
}

mysqli_close($conn);
?>
