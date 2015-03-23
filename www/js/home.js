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
	{
		//get datos...
	}
	else
	{
		new Messi('Error, Faltan par&aacute;metros... por favor reinicie la aplicaci&oacute;n', 
				{
					title: 'TecDo GPS Tracker', 
					titleClass: 'anim error', 
					buttons: 
						[
							{
								id: 0, 
								label: 'Cerrar', 
								val: 'X'
							}
						],
					modal: true,
					width: (window.innerWidth - 25)
				});
	}
	
}
