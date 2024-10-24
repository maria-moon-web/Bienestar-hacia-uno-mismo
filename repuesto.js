// Seleccionar el formulario
const form = document.querySelector('form');

// Agregar evento submit al formulario
form.addEventListener('submit', (e) => {
  e.preventDefault(); // Evitar envío del formulario por defecto

  // Obtener valores de los campos
  const nombres = document.getElementById('nombres').value;
  const apellido = document.getElementById('apellido').value;
  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  // Validar campos
  if (nombres === '' || apellido === '' || email === '' || password === '') {
    alert('Por favor, complete todos los campos');
    return;
  }

  // Guardar datos del usuario en localStorage
  localStorage.setItem('nombre', nombres);
  localStorage.setItem('apellido', apellido);
  localStorage.setItem('email', email);
  localStorage.setItem('password', password);

  // Mostrar navegación y ocultar registro
  document.getElementById('registro').style.display = 'none';
  document.getElementById('navegacion').style.display = 'block';
  document.getElementById('titulo').innerHTML = 'Bienestar hacia uno mismo';
  document.getElementById('nombre-usuario').innerHTML = nombres;

  // Seleccionar todos los botones
  const buttons = document.querySelectorAll('button');

  // Agregar evento click a cada botón
  buttons.forEach((button) => {
    button.addEventListener('click', (e) => {
      // Obtener el texto del botón clickeado
      const buttonText = e.target.textContent;

      // Realizar acciones según el botón clickeado
      switch (buttonText) {
        case 'Deporte':
          console.log('Deporte');
          break;
        case 'Higiene':
          console.log('Higiene');
          break;
        case 'Limpieza social':
          console.log('Limpieza social');
          break;
        case 'Estética':
          console.log('Estética');
          break;
        default:
          console.log('Botón desconocido');
      }
    });
  });
});

