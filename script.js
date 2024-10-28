// Inicializamos los contadores desde localStorage al cargar la página
document.addEventListener('DOMContentLoaded', function() {
	const contador1 = document.getElementById('counter1');
	const contador2 = document.getElementById('counter2');

	// Obtenemos los valores almacenados o establecemos a '0' si no existen
	const puntos1 = localStorage.getItem('counter1') || '0';
	const puntos2 = localStorage.getItem('counter2') || '0';

	contador1.textContent = puntos1;
	contador2.textContent = puntos2;
});

function incrementar(idContador) {
	const contador = document.getElementById(idContador);
	let puntos = parseInt(contador.textContent);
	puntos++;
	contador.textContent = puntos;

	// Actualizamos el valor en localStorage
	localStorage.setItem(idContador, puntos);
}

// Función para restablecer los contadores a cero con confirmación
function restablecer() {
	// Mostramos el diálogo de confirmación
	const confirmar = confirm("¿Estás seguro de que deseas restablecer los contadores a cero?");
	if (confirmar) {
			document.getElementById('counter1').textContent = '0';
			document.getElementById('counter2').textContent = '0';
			localStorage.setItem('counter1', '0');
			localStorage.setItem('counter2', '0');
	}
}
