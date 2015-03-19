function ValEntrada ()
{
	var UCode = $("#tbUserCode").val();
	var UName = $("#tbUserName").val();
	var UPwd  = $("#tbUserPassWord").val();
	
	if (UCode == "" || UName == "" || UPwd == "")
		alert ("Todos los campos son requeridos.");
	else
	{
		$("#loadingAJAX").show();
		$.post("http://www.tecdogt.com/app/mediadorT.php",
		{
			"user" : UName,
			"cod"  : UCode,
			"pwd"  : UPwd
		},
		function (data)
		{
			if (data.inicioExito == 1)
			{
				window.sessionStorage.UserLogin = UName;
				alert("Hola" + window.sessionStorage.UserLogin);
				window.location="home.html";
				
			}
			else
			{
				alert("Error al Iniciar Sesion");
			}
			
			$("#loadingAJAX").hide();
		},"json");
	}
}
