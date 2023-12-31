const projects = [
    {
        img: "../img/ecommerce-motofly.png",
        alt:"Imagen de proyecto Ecommerce - MotoFly",
        title:"E-commerce",
        description:"Proyecto desarrollado con el stack MERN (MongoDB, ExpressJS, ReactJS, NodeJS), Git para el sistema de control de versiones, Trello para gestionar las tareas y SCRUM para tener un marco de trabajo ágil. Llevado a cabo por un equipo de 5 integrantes durante el curso en Rolling Code School",
        repo:"https://github.com/ErikaCV/proyecto-final.git",
    },
    {
        img: "../img/portafolio-.png",
        alt:"Imagen de proyecto portafolio",
        title:"Portafolio",
        description:"Es una página web desarrollada utilizando HTML, CSS y JavaScript. Este portafolio digital brinda una presentación creativa y visualmente atractiva de los proyectos y habilidades. Con un diseño responsive y fácil navegación, proporciona información personal y un formulario para contacto profesional",
        repo:"https://github.com/francojnieva/Portafolio.git",
    },
    {
        img: "../img/tecnoStore-.png",
        alt:"Imagen de proyecto e-commerce TecnoStore",
        title:"E-commerce",
        description:"Es un sitio web desarrollado en HTML, CSS, Bootstrap y JavaScript. Fue llevado a cabo por un equipo de 3 integrantes mientras aprendíamos JavaScript en Rolling Code School. El objetivo principal del ecommerce fue lograr la persistencia de datos, permitiendo a los usuarios agregar productos al carrito",
        repo:"https://github.com/francojnieva/RCS-TecnoStore.git",
    },
    {
        img: "img/educandoParaElFuturo-.png",
        alt:"Imagen de proyecto Educando para el futuro",
        title:"Educando para el futuro",
        description:"Es un sitio web estático desarrollado utilizando HTML, CSS y Bootstrap. Es un proyecto realizado por 4 integrantes en el curso de Rolling Code School. El objetivo principal fue maquetar y estilizar un sitio web, trabajando de manera colaborativa a través de GitHub y gestionando las tareas por medio de Trello",
        repo:"https://github.com/MigPalomares/RCS-Proyect-Education.git",
    },
    {
        img: "../img/app-clima.png",
        alt:"Imagen del proyecto aplicación del clima",
        title:"Aplicación del clima",
        description:"Aplicación simple del clima que utiliza HTML, CSS, Bootstrap y JavaScript para obtener información climática a través de un pedido a la API de OpenWeatherMap. Muestra la temperatura actual, la sensación térmica, la temperatura máxima/mínima, y la humedad de las ciudades del mundo",
        repo:"https://github.com/francojnieva/app-clima.git",
    },
    {
        img: "../img/calculadorabasica.png",
        alt:"Imagen de proyecto calculadora",
        title:"Calculadora",
        description:"Proyecto de una calculadora que realiza las operaciones básicas, como suma, resta, multiplicación, división y potenciación. La calculadora ha sido desarrollada utilizando HTML, CSS y JavaScript para brindar una experiencia funcional y visualmente agradable",
        repo:"https://github.com/francojnieva/calculadora.git",
    },
    {
        img: "../img/lista-de-tareas.png",
        alt:"Imagen de proyecto e-commerce TecnoStore",
        title:"Lista de Tareas",
        description:"Es una página web creada con HTML, CSS, Bootstrap y JavaScript. Con un elegante diseño en tonos oscuros, esta lista de tareas ofrece una experiencia responsive y amigable para el usuario. Permite crear, marcar tareas completadas de manera sencilla y borrarlas",
        repo:"https://github.com/francojnieva/To-Do-List.git",
    },
    {
        img: "../img/ta-te-ti.png",
        alt:"Imagen del proyecto ta-te-tie",
        title:"Juego del Ta-Te-Ti",
        description:"Es una versión digital del popular juego de mesa. El objetivo del juego es simple: dos jugadores compiten para ser el primero en alinear tres de sus fichas en línea recta, ya sea horizontal, vertical o diagonal, en un tablero de 3x3. Desarrollado utilizando HTML, CSS y JavaScript",
        repo:"https://github.com/francojnieva/ta-te-ti.git",
    }
]

const projectContainer = document.getElementById("project-container")

projects.forEach((project) => {
    const projectItem = document.createElement("div")
    projectItem.className = "card card-project mb-4"
    projectItem.setAttribute("data-aos", "flip-left")
    projectItem.innerHTML = `
        <img src="${project.img}" class="card-img-top" alt="${project.alt}">
        <div class="card-body">
            <h5 class="card-title text-start text-white">${project.title}:</h5>
            <p class="card-text text-start text-white-50">${project.description}.</p>
            <div class="text-start">
                <a href="${project.repo}" target="_blank" class="btn me-1"><i class="bi bi-github"></i> Repositorio</a>
            </div>

        </div>
    `
    projectContainer.appendChild(projectItem)
})