// JavaScript Document
$(document).ready(function(e) {
    //watchID se refier a actual
	
	var watchID=null;
	document.addEventListener("deviceready",Dispositivo_Listo,false);
	
	//cuando esta listo el dispositivo
	function Dispositivo_Listo(){
		comienza();
	}
	
	//empieza la observacion de la aceleracion
	function Comienza(){
		
		//actualiza la aceleracion cada 2 segundos
		//
		var opciones={frequency:2000};
		
		watchID=navigator.accelerometer.watchAcceleration(Correcto,Error,opciones);
		navigator.geolocation.getCurrentPosition(Localiza,ErrorLocalizacion);
	}
	//Detiene la observacion de la aceleracion
	
	function Detente(){
		if(watchID){
			navigator.accelerometer.clearWatch (watchID);
			watchID=null;
		}
	}
	//correcto:toma una captura de la aceleracion
	function Correcto(aceleration){
		var element=document.getElementByld('acelerometro');
		
		element.innerHTML='Aceleracion en X:'+acceleration.x+'<br/>'+
		'Aceleracion en Y:'+acceleration.Y+'<br/>'+
		'Intervalo:'+acceleration.timestamp+'<br/>';
	}
	
	//error:falla al obtener la aceleracion
	function Error(){
		alert('Error!');
	}
	//Exito al localizar
	function Localiza(posicion){
		var element=document.getElementById('geolocalizacion');
		element.innerHTML='Latitud:'+posicion.coords.latitude+'<br/>'+
		'Longitud:'+posicion.coords.longitude+'<br/>'+
		'Precision:'+posicion.coords.accuracy+'<br/>'+
		'Intervalo:'+posicion.timestamp+'<br/>';
	}
	//error en la geolocalizacion
	function ErrorLocalizacion(error){
		alert('codigo:'+error.code+'\n'+
		'mensaje:'+error.message+'\n');
}
});//document ready

