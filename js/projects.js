const projects = [
    {
        img: "",
        alt:"Imagen de proyecto portafolio",
        title:"Portafolio",
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
        img: "../img/tecnoStore.png",
        alt:"Imagen de proyecto e-commerce TecnoStore",
        title:"E-commerce",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit rem repellendus nesciunt eos blanditiis quidem deserunt ducimus mollitia nihil expedita provident minus aliquid laborum saepe reprehenderit delectus doloremque, ea sint.",
        repo:"https://github.com/francojnieva/RCS-TecnoStore.git",
        deploy:"https://tecnostore-group2.netlify.app",
        useTechnologies: {
            html:"../img/html.svg",
            css:"../img/css.svg",
            bootstrap: "../img/bootstrap-icon.svg",
            javascript:"../img/javascript_icon.svg"
        }
    },
    {
        img: "img/educandoParaElFuturo.png",
        alt:"Imagen de proyecto Educando para el futuro",
        title:"Educando para el futuro",
        description:"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit rem repellendus nesciunt eos blanditiis quidem deserunt ducimus mollitia nihil expedita provident minus aliquid laborum saepe reprehenderit delectus doloremque, ea sint.",
        repo:"https://github.com/MigPalomares/RCS-Proyect-Education.git",
        deploy:"https://rsc-proyect-education.netlify.app",
        useTechnologies: {
            html:"../img/html.svg",
            css:"../img/css.svg",
            bootstrap: "../img/bootstrap-icon.svg"
        }
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
            <a href="${project.repo}" target="_blank" class="btn me-1">Repositorio</a>
            <a href="${project.deploy}" target="_blank" class="btn">Ver Proyecto</a>
        </div>
    `
    projectContainer.appendChild(projectItem)
})