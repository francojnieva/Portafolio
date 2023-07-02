const projects = [
    {
        img: "../img/portafolio-.png",
        alt:"Imagen de proyecto portafolio",
        title:"Portafolio",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit rem repellendus nesciunt eos blanditiis quidem deserunt ducimus mollitia nihil expedita provident minus aliquid laborum saepe reprehenderit delectus doloremque, ea sint.",
        repo:"https://github.com/francojnieva/Portafolio.git",
    },
    {
        img: "../img/tecnoStore-.png",
        alt:"Imagen de proyecto e-commerce TecnoStore",
        title:"E-commerce",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit rem repellendus nesciunt eos blanditiis quidem deserunt ducimus mollitia nihil expedita provident minus aliquid laborum saepe reprehenderit delectus doloremque, ea sint.",
        repo:"https://github.com/francojnieva/RCS-TecnoStore.git",
    },
    {
        img: "img/educandoParaElFuturo-.png",
        alt:"Imagen de proyecto Educando para el futuro",
        title:"Educando para el futuro",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit rem repellendus nesciunt eos blanditiis quidem deserunt ducimus mollitia nihil expedita provident minus aliquid laborum saepe reprehenderit delectus doloremque, ea sint.",
        repo:"https://github.com/MigPalomares/RCS-Proyect-Education.git",
    },
    {
        img: "../img/lista-de-tareas.png",
        alt:"Imagen de proyecto e-commerce TecnoStore",
        title:"Lista de Tareas",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit rem repellendus nesciunt eos blanditiis quidem deserunt ducimus mollitia nihil expedita provident minus aliquid laborum saepe reprehenderit delectus doloremque, ea sint.",
        repo:"https://github.com/francojnieva/To-Do-List.git",
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
            <h5 class="card-title text-start text-white-50">${project.title}:</h5>
            <p class="card-text text-start text-white-50">${project.description}.</p>
            <div class="text-start">
                <a href="${project.repo}" target="_blank" class="btn me-1"><i class="bi bi-github"></i> Repositorio</a>
            </div>

        </div>
    `
    projectContainer.appendChild(projectItem)
})