// Mostrar secciones con animación cuando estén en la vista del usuario
document.addEventListener('scroll', function () {
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        if (sectionPosition < window.innerHeight - 100) {
            section.classList.add('visible');
        }
    });
});

//SIN USO PARA MOVIMIENTO 
document.addEventListener('DOMContentLoaded', function () {
    // Efectos de Acordeón
    const accordionItems = document.querySelectorAll('.accordion-item');

    accordionItems.forEach(item => {
        item.addEventListener('click', function () {
            item.classList.toggle('open');
        });
    });

    // Simulación de Movimiento
    document.getElementById("move-arm").addEventListener("click", function () {
        alert('¡Movimiento activado en el brazo hidráulico!');
        // Integración futura con modelos 3D interactivos
    });
});

//CALCULADORA DE PASCAL
document.addEventListener('DOMContentLoaded', function () {
    // Asegúrate de que el DOM esté cargado antes de agregar el evento
    const calculateButton = document.getElementById('calculate');
    
    // Asegúrate de que el botón esté disponible
    if (calculateButton) {
        calculateButton.addEventListener('click', calculatePascal);
    }
});

function calculatePascal() {
    // Obtener valores del input o usar valores predeterminados
    const force1 = parseFloat(document.getElementById('force1').value) || 50;
    const area1 = parseFloat(document.getElementById('area1').value) || 0.005;
    const area2 = parseFloat(document.getElementById('area2').value) || 0.1;

    if (isNaN(force1) || isNaN(area1) || isNaN(area2) || area1 === 0) {
        alert("Por favor ingresa valores válidos.");
        return;
    }

    const pressure = force1 / area1;
    const force2 = pressure * area2;

    // Mostrar los resultados
    document.getElementById('force2').textContent = force2.toFixed(2);
    document.getElementById('pressure').textContent = pressure.toFixed(2);

    // Asegurarse de que el resultado sea visible
    const resultElement = document.getElementById('result');
    resultElement.classList.remove('hidden');

    // Forzar la re-renderización
    resultElement.style.display = 'block';
    setTimeout(function() {
        resultElement.style.display = ''; // Restaurar display después de un pequeño retraso
    }, 10); // Esto forzará una actualización en algunos navegadores si el problema persiste
}

