<?php
$conn=mysqli_connect("localhost","someuser","somepassword","somedatabase");

$toolId=$_POST['toolid'];
$toolName=$_POST['toolname'];
$toolCondition=$_POST['toolcondition'];
$toolBrand=$_POST['toolbrand'];
$toolType=$_POST['tooltype'];


$result=mysqli_query($conn,"UPDATE Tools SET ToolName = '$toolName',
                        ToolType = '$toolType',
						            ToolBrand = '$toolBrand',
						            ToolCondition = '$toolCondition'
                        WHERE idTool = $toolId");

if ($result) {
    echo "SUCCESS";
}
else {

    echo mysqli_error($conn);
}

mysqli_close($conn);
?>
