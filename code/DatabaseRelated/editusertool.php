<?php
$conn=mysqli_connect("localhost","magic947_arthur","sweng987$$$","magic947_toolshare");

$toolId=$_POST['toolid'];
$toolName=$_POST['toolname'];
$toolCondition=$_POST['toolcondition'];
$toolBrand=$_POST['toolbrand'];
$toolType=$_POST['tooltype'];


$result=mysqli_query($conn,"UPDATE tools SET ToolName = '$toolName',
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
