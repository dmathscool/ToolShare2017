<?php
$conn=mysqli_connect("localhost","someuser","somepassword","somedatabase");
//assume we know the following:
//borrowingUser (the user who is actively borrowing the tool)
//the toolID (the tool we are borrowing)


$borrowingUser=$_POST['borrowingUser'];
$toolId=intval($_POST['toolId']);
$newState=$_POST['newToolState'];

if ($newState == "Available"){
  //this represents going from Returned -> Available, here we increment the state
  //and remove the currentUser (set to null)
  $result = mysqli_query($conn,
                        "UPDATE Tools SET RegUsers_CurrentUser = NULL,
                        ToolState = 1
                        WHERE idTool = $toolId");
}
elseif ($newState == "Returned"){
  //this represents going from On Loan -> Returned, basically just increment the state
  $result = mysqli_query($conn,
                        "UPDATE Tools SET ToolState = 4
                        WHERE idTool = $toolId");
}
elseif ($newState == "On Loan"){
    //this represents going from Loan Requested -> on loan, basically just increment the state
    $result = mysqli_query($conn,
                          "UPDATE Tools SET ToolState = 3
                          WHERE idTool = $toolId");
}
elseif ($newState =="Loan Requested") {
  // GO FROM AVAILABLE -> LOAN REQUESTED
  // grab the primary id for this username
  $result=mysqli_query($conn,"SELECT idRegisteredUsers FROM RegUsers WHERE username = '$borrowingUser'");
  $data = mysqli_num_rows($result);

  if ($data == 1 ){
    //here''s what we gotta do
    //Change the CurrentUserField to the id for the borrowingUser
    //increment to the newState and we're done
    $id = array();
    $id = $result->fetch_assoc(); $id=intval($id['idRegisteredUsers']);
    $result=mysqli_query($conn,
                          "UPDATE Tools SET RegUsers_CurrentUser = $id,
                          ToolState = 2 WHERE idTool = $toolId");
  }
}

if ($result) {
  echo "SUCCESS";
}
else {
  echo "FAIL";
}

mysqli_close($conn);
?>
