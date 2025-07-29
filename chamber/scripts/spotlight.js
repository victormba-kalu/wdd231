const spotlights = document.querySelector('#spotlightContainer');

async function getpotlightsData() {
        spotlights.innerHTML = '<p class="loading-message">Loading featured members...</p>';
        const response = await fetch('Data/members.json');
        const data = await response.json();
        
        displaySpotlights(data.businesses);
}

const displaySpotlights = (members) => {

    const allMembers = members;
    const eligibleMembers = allMembers.filter(member =>
            member.membershipLevel === 2 || member.membershipLevel === 3
    );

    const shuffledMembers = eligibleMembers.sort(() => 0.5 - Math.random());

        
    const numberOfSpotlights = Math.min(shuffledMembers.length, 3); 
    const selectedSpotlights = shuffledMembers.slice(0, numberOfSpotlights);
    
    spotlightContainer.innerHTML = '';

    selectedSpotlights.forEach((member) => {

        let card = document.createElement('section');
        let name = document.createElement('h3');
        let logo = document.createElement('img');
        let phone = document.createElement('p');
        let address = document.createElement('p');
        let website = document.createElement('a');
        let level = document.createElement('p');
        let levelText = '';
        if (member.membershipLevel === 2) {
            levelText = 'Silver Member';
        } else if (member.membershipLevel === 3) {
            levelText = 'Gold Member';
        } else {
            levelText = 'Member'; 
        }

        name.textContent = member.name;

        logo.setAttribute('src', member.image);
        logo.setAttribute('alt', `This business belongs to ${member.name}`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');
        logo.setAttribute('height', '100');
        
        phone.textContent = member.phone;
        address.textContent = member.address;
        website.textContent = member.website;

        website.setAttribute('href', member.website);
        website.setAttribute('target', '_blank');
        website.style.color = '#36454F';

        level.textContent = levelText;
        level.style.color = '#715104';
        level.style.fontWeight = 'bold';
        level.style.fontSize = '1rem';

        card.appendChild(name);
        card.appendChild(logo);
        card.appendChild(phone);
        card.appendChild(address);
        card.appendChild(website);
        card.appendChild(level);

        spotlights.appendChild(card);



    });

}
getpotlightsData();