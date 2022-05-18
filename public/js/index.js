function mandarMail(){
    var email = document.getElementById('EMail');
    var asunto = document.getElementById('Asunto');
    var mensaje = document.getElementById('Mensaje');
    var nombre = document.getElementById('Nombre');
    var xhr = new XMLHttpRequest();
    xhr.open("POST", "/mandarMail", true);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.send(JSON.stringify({
        asunto: nombre.value+": "+ asunto.value,
        mail: email.value,
        msg: mensaje.value,
      }));
    document.getElementById("formMail").reset();
}

