import { places } from "../Data/places.mjs";

const cardsContainer = document.querySelector("#allplaces");

function displayItems(places) {
    places.forEach(element => {
        const card = document.createElement('div')
        
        const photo = document.createElement('img')
        photo.src = `images/${element.photo_url}`
        photo.alt = element.name
        photo.loading = "lazy";

        card.appendChild(photo)

        const title = document.createElement('h2')
        title.innerText = element.name
        card.appendChild(title)

        const address = document.createElement('address')
        address.innerText = element.address
        card.appendChild(address)

        const description = document.createElement('p')
        description.innerText = element.description
        card.appendChild(description)

        const thebuttoncontainer = document.createElement('div')
        thebuttoncontainer.className = `buttoncontainer`
        
        const thebutton = document.createElement('button')
        thebutton.innerText = `learn more`
        thebuttoncontainer.appendChild(thebutton)
        card.appendChild(thebuttoncontainer)
        

        cardsContainer.appendChild(card)
        
    });
}

displayItems(places);