// FORMULARIO DE CONTACTO

const btnContacto = document.getElementById('button');
const formContacto = document.getElementById('form');

if (formContacto && btnContacto) {
  formContacto.addEventListener('submit', function (event) {
    event.preventDefault();

    btnContacto.value = 'Enviando...';

    const serviceID = 'default_service';
    const templateID = 'template_ud00jsu';

    emailjs.sendForm(serviceID, templateID, this)
      .then(() => {
        btnContacto.value = 'Enviar mensaje';
        alert('¡Su mensaje fue enviado correctamente!');
      })
      .catch((err) => {
        btnContacto.value = 'Enviar mensaje';
        alert('Ocurrió un error al enviar el mensaje. Intente nuevamente.');
        console.error(err);
      });
  });
}









