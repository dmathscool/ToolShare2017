<?php
$conn=mysqli_connect("localhost","magic947_arthur","sweng987$$$","magic947_toolshare");

$name=$_POST['name1'];
$assignedRating=floatval($_POST['rating1']);

//TODO first check to see if the user actually has a transaction in the appropriate state
//      if not, return message like "No appropriate transaction found. Rating failed"

$result=mysqli_query($conn,"SELECT rating, numRatings FROM RegUsers WHERE
                     username='$name'");
$numrows= mysqli_num_rows($result);
if (($numrows)==0) {
    echo "No User";
    return;
}

if (($numrows) > 1) {
    echo "Duplicate User";
    return;
}

// we now know there's exactly 1 row in the results due to the above error checking
$row = array();
$row = $result->fetch_assoc();

$userRating = floatval($row['rating']);
// I don't want any weird roundoff error to occur if I make userRating a float here,
// especially when incrementing numRatings below.
// So I start it out as an int and change it to a float as necessary (in the new rating calculation below)
$numRatings = intval($row['numRatings']);

//echo "Rating was $userRating w/ $numRatings ratings. Assigned rating is $assignedRating.";

$userRating = ($userRating * floatval($numRatings) + $assignedRating) / ($numRatings + 1);
$numRatings = $numRatings + 1;

$query="UPDATE RegUsers SET rating=$userRating, numRatings=$numRatings WHERE username='$name'";
//echo $query;
$result=mysqli_query($conn,$query);

if($query){
    echo "Successful Rating";
}
else {
    echo "Error Rating";
}

mysqli_close($conn);
?>