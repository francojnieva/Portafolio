const training = [
    {
        img:"../img/Rolling-Code-logo3.jpg",
        alt: "Logo de Rolling Code School",
        name:"Rolling Code School",
        study: "Full Stack Developer MERN",
        period: "2022 - Actual"
    },
    {
        img:"../img/logo-one2.png",
        alt: "Logo de Programa ONE",
        name:"Programa ONE - Oracle Next Education",
        study: "Full Stack Developer",
        period: "2022 - 2023"
    },
    {
        img:"../img/aticana.png",
        alt: "Logo de Aticana",
        name:"Aticana",
        study: "Inglés",
        period: "2019 - 2021"
    }
]

const trainingContainer = document.getElementById("training-container")

training.forEach((training) => {
    const trainingItem = document.createElement("div")
    trainingItem.className = "card card-training mb-4"
    trainingItem.innerHTML = `
    <img src="${training.img}" class="card-img-top" alt="${training.alt}">
    <div class="card-body text-white">
        <p class="card-text text-center m-0">${training.study}</p>
        <p class="card-text text-center">${training.period}</p>
    </div>
    `
    trainingContainer.appendChild(trainingItem)
})