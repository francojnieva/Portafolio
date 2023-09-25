function validateForm() {
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
        return false
    }

    if (name.lenght <= 2 || name.lenght > 20) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La cantidad de caracteres debe estar entre 2 y 20',   
        })
        return false
    }

    if (cases.lenght <= 2 || cases.lenght > 20) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'La cantidad de caracteres debe estar entre 2 y 20',   
        })
        return false
    }
  
    const emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
    if (!emailRegex.test(email)) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Por favor, ingrese un correo válido',   
        });
        return false;
    }

    if (message.lenght > 250) {
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'El mensaje no debe superar los 250 caracteres',   
        })
        return false
    }
}