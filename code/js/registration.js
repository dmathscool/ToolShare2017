$(document).ready(function(){

$("#register").click(function(){

	var name = $("#username").val();
	var email = $("#email").val();
	var password = $("#password").val();
	var zipcode= $("#zip").val();

	if( name =='' || email =='' || password =='' || zipcode=='')
		{
		  alert("Please fill in all fields");
		}
	else
	   {
	     $.post("../DatabaseRelated/register.php",
       {name1:name,email1:email,password1:password,zip:zipcode},
			 function(data) {
				 if (data == "Successful Registration"){
					 //put login+refresh method here
					  logIn(name);
						window.location.replace("index.html");
				 } else {
					 alert(data);}
				 });
       //in addition to or instead of the alert(data) part, could also put a
			 //method to refresh the page or go to a different page..
	   }

	});

});
