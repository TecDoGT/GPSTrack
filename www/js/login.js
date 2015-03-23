function ValEntrada ()
{
	var UCode = $("#tbUserCode").val();
	var UName = $("#tbUserName").val();
	var UPwd  = $("#tbUserPassWord").val();
	
	if (UCode == "" || UName == "" || UPwd == "")
	new Messi('Todos los campos son requeridos.', 
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
				window.sessionStorage.UserCode = UCode;
				window.sessionStorage.UserEmpresa = 1;
				
				var Mensage = 'Hola. ' + UName;
				
				new Messi(Mensage, 
				{
					title: 'TecDo GPS Tracker', 
					titleClass: 'success', 
					buttons: 
						[
							{
								id: 0, 
								label: 'Close', 
								val: 'X'
							}
						],
					modal: true,
					width: (window.innerWidth - 25),
					callback: function (info)
					{
						window.location="home.html";
					}
				});
			}
			else
			{
				new Messi('Error al Iniciar Sesi&oacute;n...', 
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
			
			$("#loadingAJAX").hide();
			
		},"json");
	}
}
