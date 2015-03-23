if (window.sessionStorage.UserLogin)
{
	$("#lMensage").val("Hola : " + window.sessionStorage.UserLogin);
}
else
{
	window.location="login.html";
}

function getGeoPoints()
{
	if (window.sessionStorage.UserLogin && window.sessionStorage.UserCode && window.sessionStorage.UserEmpresa)
	{}
	else
	{
		
	}
	
}