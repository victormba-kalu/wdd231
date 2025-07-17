const url = "https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json"
const cards = document.querySelector("#cards")

async function getProphetData() {
        const response = await fetch(url);
        const data = await response.json();
        //console.table(data.prophets); // temporary testing of data response

        displayProphets(data.prophets); // note that you reference the prophets array of the JSON data object, not just the object
}

const displayProphets = (prophets) => {
        prophets.forEach((prophet) => {
            // Create elements to add to the div.cards element
            let card = document.createElement('section');
            let fullName = document.createElement('h2'); 
            let birthYear = document.createElement('p');
            let birthPlace = document.createElement('p');
            let portrait = document.createElement('img');

            // Build the h2 content out to show the prophet's full name
            fullName.textContent = `${prophet.name} ${prophet.lastname}`; 
            // Build the image portrait by setting all the relevant attributes
            birthYear.textContent = `Date of Birth: ${prophet.birthdate}`;
            birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
            portrait.setAttribute('src', prophet.imageurl);
            portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname}`); // fill in the blank
            portrait.setAttribute('loading', 'lazy');
            portrait.setAttribute('width', '340');
            portrait.setAttribute('height', '440');

            // Append the section(card) with the created elements
            card.appendChild(fullName); //fill in the blank
            card.appendChild(birthYear);
            card.appendChild(birthPlace);
            card.appendChild(portrait);

            cards.appendChild(card);
    });
}

getProphetData();