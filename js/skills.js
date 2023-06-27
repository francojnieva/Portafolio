const trainingContainer = document.getElementById("training-container")

const training = [
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

training.forEach((training) => {
    const trainingItem = document.createElement("div")
    trainingItem.className= "card card-training pt-3 m-md-3"
    trainingItem.innerHTML = `
        <img src="${training.img}" class="card-img-top" alt="${training.alt}">
        <div class="card-body text-white">
            <p class="card-text text-center">${training.text}</p>
        </div>
    `
    trainingContainer.appendChild(trainingItem)
})

