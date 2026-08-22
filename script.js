// FORMULARIO DE CONTACTO
const terms = document.getElementById("terms");
const bterms = document.getElementById("bterms");
const showTerms = document.getElementById("showTerms");
const btnContacto = document.getElementById('button');
const formContacto = document.getElementById('form');
const campos = document.querySelectorAll('.inp, .area');

formContacto.addEventListener('submit', function(event) {
  event.preventDefault();

  // Convertimos la NodeList a Array para usar el método .some()
  // Comprobamos si al menos UN campo está vacío después de quitar espacios
  const hayCampoVacio = Array.from(campos).some(campo => !campo.value.trim());

  if (hayCampoVacio) {
    alert("Debes completar toda tu información ⚠");
    return; // Detenemos la ejecución si hay campos vacíos
  }

  btnContacto.value = 'Enviando...';

  const serviceID = 'default_service';
  const templateID = 'template_ud00jsu';

  // EmailJS lee la información del formulario (this)
  emailjs.sendForm(serviceID, templateID, this)
    .then(() => {
      btnContacto.value = 'Enviar mensaje';
      alert('¡Su mensaje fue enviado correctamente!');
      
      // Limpiamos los campos SOLAMENTE después de enviar con éxito
      campos.forEach((campo) => {
        campo.value = "";
      });
    })
    .catch((err) => {
      btnContacto.value = 'Enviar mensaje';
      alert('Ocurrió un error al enviar el mensaje. Intente nuevamente.');
      console.error(err);
    });
});


// !!!!!!!!!TERMS AND CONDITIONS *///

terms.addEventListener("change",()=>{

  showTerms.classList.toggle("active")

});

 const in_btn = document.querySelector(".in_btn");

 in_btn.disabled = true
 in_btn.style.opacity = "55%"
 
 
 bterms.addEventListener("click",()=>{
   
    in_btn.style.opacity = "1"
    showTerms.style.display = "none"
    in_btn.disabled = false

 });




// *****BARRA DE NAVEGACION *******//////////
document.addEventListener("DOMContentLoaded", () => {
    const navContainer = document.getElementById("nav-container");

    if (!navContainer) return;

    fetch("nav.html")
        .then(response => {
            if (!response.ok) {
                throw new Error("No se pudo cargar nav.html");
            }
            return response.text();
        })
        .then(html => {
            navContainer.innerHTML = html;
        })
        .catch(error => console.error("Error al cargar el nav:", error));
});

// Delegación de eventos global para apertura y cierre del menú móvil
document.addEventListener("click", (event) => {
    const nav = document.getElementById("respNav");
    if (!nav) return;

    // Detecta si se presionó el botón de hamburguesa o alguno de sus elementos internos
    if (event.target.closest("#resMenu")) {
        nav.classList.add("showMe");
    }

    // Detecta si se presionó el botón de cerrar 'X'
    if (event.target.closest("#close")) {
        nav.classList.remove("showMe");
    }
});




