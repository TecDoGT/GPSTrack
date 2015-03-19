if (window.sessionStorage.UserLogin)
{
	$("#lMensage").val("Hola : " + window.sessionStorage.UserLogin);
}
else
{
	window.location="login.html";
}