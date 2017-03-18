<?php
$conn=mysqli_connect("localhost","magic947_arthur","sweng987$$$","magic947_toolshare");
//assume we know the following:
//borrowingUser (the user who is actively borrowing the tool)
//the toolID (the tool we are borrowing)


$borrowingUser=$_POST['borrowingUser'];
$toolId=$_POST['toolId'];
$newState=$_POST['newToolState']

if ($newState == 4){
  //this represents going from Returned -> Available, here we increment the state
  //and remove the currentUser (set to null)
}
elseif ($newState == 3){
  //this represents going from On Loan -> Returned, basically just increment the state
}
elseif ($newState == 2){
    //this represents going from Loan Requested -> on loan, basically just increment the state
}
elseif ($newState ==1) {
  // grab the primary id for this username
  $result=mysqli_query($conn,"SELECT idRegisteredUsers FROM RegUsers WHERE username = '$borrowingUser'");
  $data = mysqli_num_rows($result);

  if ($data == 1 ){
    //here''s what we gotta do
    //Change the CurrentUserField to the id for the borrowingUser
    //increment to the newState and we're done
  }
}

mysqli_close($conn);
?>
