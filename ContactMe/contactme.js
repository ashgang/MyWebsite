window.onload=pgLoadGreetings;
var GetLostErrMsg = "You don\'t provide your name! you don\'t deserve to contact me either!";

function ValidateNameNMailID() {
	if (document.ContactMe.name.value) //If yes ask for name
	{
		//var yourName = alert("Your name is " + document.ContactMe.name.value);
		if(isNaN(document.ContactMe.name.value))
		{
			alert("Its good to meet you, " + document.ContactMe.name.value + "!");
		}
		else
		{
			alert(GetLostErrMsg);
			window.top.location.href="../index.html";
		}
	}
	else //If no he does not deserve to contace me. So go back home.
	{
		alert(GetLostErrMsg);
		window.top.location.href="../index.html";
	}
}

function pgLoadGreetings()
{
	alert("Hello depressed soul, please fill in the form to contact me!");
}