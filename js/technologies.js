const technologiesContainer = document.getElementById("technologies-container")

const technologies = [
    {
        img: "../img/html.svg",
        alt: "Logo HTML",
        text: "HTML"
    },
    {
        img: "../img/css.svg",
        alt: "Logo CSS",
        text:"CSS"
    },
    {
        img: "../img/bootstrap-icon.svg",
        alt: "Logo Bootstrap",
        text:"Bootstrap"
    },
    {
        img: "../img/javascript_icon.svg",
        alt: "Logo JavaScript",
        text:"JavaScript"
    },
    {
        img: "./img/reactjs.svg",
        alt: "Logo ReactJS",
        text:"ReactJS"
    },
    {
        img: "../img/git.svg",
        alt: "Logo Git",
        text:"Git"
    },
    {
        img: "../img/visualstudiocode-icon.svg",
        alt: "Logo Visual Studio Code",
        text:"Visual Studio Code"
    },
    {
        img: "../img/github-icon.svg",
        alt: "Logo GitHub",
        text:"GitHub"
    },
    {
        img: "../img/trello-icon.svg",
        alt: "Logo Trello",
        text:"Trello"
    },
]

technologies.forEach((technologies) => {
    const technologiesItem = document.createElement("div")
    technologiesItem.className= "card card-technologies pt-3 m-md-3"
    technologiesItem.innerHTML = `
        <img src="${technologies.img}" class="card-img-top" alt="${technologies.alt}">
        <div class="card-body text-white">
            <p class="card-text text-center">${technologies.text}</p>
        </div>
    `
    technologiesContainer.appendChild(technologiesItem)
})

