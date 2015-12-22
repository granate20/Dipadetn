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
	$('#listaproductos').append('<ons-list-item modifier="chevron"><strong>'+productos[i].codigo+'</strong> '+productos[i].detalle+' <strong>'+productos[i].precio+'</strong></ons-list-item>');
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