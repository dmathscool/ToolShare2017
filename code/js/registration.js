$(document).ready(function(){

$("#register").click(function(){

	var name = $("#username").val();
	var email = $("#email").val();
	var password = $("#password").val();
	var zipcode= $("#zip").val();
	var isValidZip = /^[0-9]{5}(?:-[0-9]{4})?$/.test(zipcode);
	var isValidEmail = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email);

	if( name =='' || email =='' || password =='' || zipcode=='')
		{
		  alert("Please fill in all fields");
		}
	else if (!isValidZip)
		{
			alert("Please enter a valid zip code");
		}
	else if (!isValidEmail)
		{
			alert("Please enter a valid email address");
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
