class CreateCard{
    img
    h1
    p
    constructor(h1, img, p){
        this.h1 = h1;
        this.img = img;
        this.p = p;
    }
}

const createCard = document.querySelector('.createCard');
const body = document.body

function createCardFunction(name, img, txt){
    const object = new CreateCard(name, img, txt)
    console.log(object)
    
    const h1Create = document.createElement('h1');
    h1Create.textContent = object.h1;
    const imgCreate = document.createElement('img');
    imgCreate.src = object.img
    imgCreate.className = "nouvelleImg" + name
    const pCreate = document.createElement('p')
    pCreate.textContent = object.p

    body.appendChild(h1Create)
    body.appendChild(imgCreate)
    body.appendChild(pCreate)
}

createCardFunction("Ironman", "img/ironman.png", "je suis ironman")
createCardFunction("La Reine des Neiges", "img/reinedesneige.jpg", "je suis la reine des neiges")
createCardFunction("Obiwan Kenobi", "img/obiwan.jpg", "Je suis obi")