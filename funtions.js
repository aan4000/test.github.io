// PROGRAMAR CITAS
// PROGRAMAR CITAS

const formCitas = document.getElementById('form');
const btnCitas = document.getElementById('button');

function limpiarCamposCitas() {
  ['name', 'date', 'time', 'email', 'message'].forEach(id => {
    const field = document.getElementById(id);
    if (field) field.value = '';
  });
}

if (formCitas && btnCitas) {
  formCitas.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = document.getElementById('name')?.value.trim();
    const date = document.getElementById('date')?.value.trim();
    const time = document.getElementById('time')?.value.trim();
    const email = document.getElementById('email')?.value.trim();
    const message = document.getElementById('message')?.value.trim();

    if (!name || !date || !time || !email || !message) {
      alert('Debes completar toda tu información ⚠');
      return;
    }

    btnCitas.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_f46xj6n';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btnCitas.value = 'Agendar cita';
        alert('¡Tu cita fue enviada correctamente!');
        limpiarCamposCitas();
      })
      .catch((err) => {
        btnCitas.value = 'Agendar cita';
        alert('Ocurrió un error al enviar la cita. Intenta nuevamente.');
        console.error(err);
      });
  });
}
