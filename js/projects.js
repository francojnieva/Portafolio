const projects = [
    {
        img: "",
        alt:"Imagen de proyecto portafolio",
        title:"Portafolio - Proyecto personal",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit rem repellendus nesciunt eos blanditiis quidem deserunt ducimus mollitia nihil expedita provident minus aliquid laborum saepe reprehenderit delectus doloremque, ea sint.",
        repo:"",
        deploy:"",
        useTechnologies: {
            html:"../img/html.svg",
            css:"../img/css.svg",
            bootstrap: "../img/bootstrap-icon.svg",
            javascript:"../img/javascript_icon.svg"
        }
    },
    {
        img: "",
        alt:"Imagen de proyecto e-commerce TecnoStore",
        title:"E-commerce - Proyecto en equipo",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit rem repellendus nesciunt eos blanditiis quidem deserunt ducimus mollitia nihil expedita provident minus aliquid laborum saepe reprehenderit delectus doloremque, ea sint.",
        repo:"",
        deploy:"",
        useTechnologies: {
            html:"../img/html.svg",
            css:"../img/css.svg",
            bootstrap: "../img/bootstrap-icon.svg",
            javascript:"../img/javascript_icon.svg"
        }
    },
    {
        img: "",
        alt:"Imagen de proyecto Educando para el futuro",
        title:"Educando para el futuro - Proyecto en equipo",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit rem repellendus nesciunt eos blanditiis quidem deserunt ducimus mollitia nihil expedita provident minus aliquid laborum saepe reprehenderit delectus doloremque, ea sint.",
        repo:"",
        deploy:"",
        useTechnologies: {
            html:"../img/html.svg",
            css:"../img/css.svg",
            bootstrap: "../img/bootstrap-icon.svg"
        }
    },
]

const projectContainer = document.getElementById("project-container")

projects.forEach((project) => {
    const projectItem = document.createElement("div")
    projectItem.className = "card card-project mb-4 p-2"
    projectItem.innerHTML = `
        <img src="${project.img}" class="card-img-top" alt="${project.alt}">
        <div class="card-body">
            <h5 class="card-title text-start text-white-50">${project.title}:</h5>
            <p class="card-text text-start text-white-50">${project.description}.</p>
            <a href="#" class="btn me-1">Repositorio</a>
            <a href="#" class="btn">Ver Proyecto</a>
        </div>
    `
    projectContainer.appendChild(projectItem)
})