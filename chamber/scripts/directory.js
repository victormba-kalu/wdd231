const cards = document.querySelector('#directory');

async function getBusinessData() {
        const response = await fetch('Data/members.json');
        const data = await response.json();
        

        displayBusiness(data.businesses);
}

const displayBusiness = (businesses) => {
    businesses.forEach((business) => {

        let card = document.createElement('section');
        let logo = document.createElement('img');
        let address = document.createElement('p');
        let number = document.createElement('p');
        let website = document.createElement('p');

        logo.setAttribute('src', business.image);
        logo.setAttribute('alt', `This business belongs to ${business.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');
        logo.setAttribute('height', '100');

        address.textContent = business.address;
        number.textContent = business.phone;
        website.textContent = business.website;

        card.appendChild(logo);
        card.appendChild(address);
        card.appendChild(number);
        card.appendChild(website);

        cards.appendChild(card);
        
    });
} 
getBusinessData();