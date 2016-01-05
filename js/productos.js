// JavaScript Document
function listarproductos(q)
{

	
	
	
	$.ajax({
url: 'http://dipadent.com.ar/aplicacion/consultas/productos_app.php?jsoncallback=?',
type: 'GET',
data: {
query:q,
key:'sakldjaskldjioewuoirju828734923h4kjasd',
},
dataType: 'json',
error: function(jqXHR, text_status, strError) {
alert("Sin Conexión");
},
timeout: 60000,
success: function(data) {

$('#listaproductos').html("");
if (data.validacion == "ok") {

productos = data.productos;
for(i in productos)
{
	$('#listaproductos').append('<ons-list-item><ons-row><ons-col width="15%"><strong>'+productos[i].codigo+'</strong></ons-col> <ons-col width="60%" >'+productos[i].detalle+'</ons-col> <ons-col width="20%"><strong>'+productos[i].precio+'</strong></ons-col></ons-row></ons-list-item>');
}



} else {
$('#listaproductos').html("Sin Resultados");
}

ons.compile(listaproductos);

}
});

	
}


function scanBarcode() {
        window.plugins.barcodeScanner.scan( function(result) {
			
			$('#buscar').val(result.text);
			listarproductos(result.text);
			
            }, function(error) {
                alert("Scanning failed: " + error);
            }
      );

      }