$(document).ready(function(){

$("#login").click(function(){

	var name = $("#username").val();
	var password = $("#password").val();

	if( name =='' || password =='')
		{
		  alert("Please fill in all fields");
		}
	else
	   {
	     $.post("../DatabaseRelated/login.php",
       {name1:name,password1:password},
       function(data) {
				 if (data == "Successful Login"){
					 //put login+refresh method here
					 	logIn(name);
						window.location.replace("index.html");
				 } else {
					 alert(data);}
				 });
	   }

	});

});
