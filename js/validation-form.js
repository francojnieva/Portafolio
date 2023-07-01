function validarFormulario() {
    const name = document.getElementById("name").value
    const email = document.getElementById("email").value
    const cases = document.getElementById("case").value
    const message = document.getElementById("message").value

    if (name === "" || cases === "" || email === "" || message === "") {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor complete todos los campos',   
        })
        return false;
    }
  
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!emailRegex.test(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor ingrese un correo válido!',   
        });
        return false;
    }
  
    if (true) {
        Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Enviado!',
            showConfirmButton: false,
            timer: 1500
        }).then(() => {
            document.getElementById("name").value = ""
            document.getElementById("email").value = ""
            document.getElementById("case").value = ""
            document.getElementById("message").value = ""
        })
        return false
    }
}