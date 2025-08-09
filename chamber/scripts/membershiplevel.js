
const membershipLevelsData = [
  {
    level: "NP Membership",
    description: "Designed for non-profit organizations committed to community health. There is no fee for this foundational membership level.",
    benefits: [
      "Basic access to provider directory",
      "Listing in community resource section",
      "Access to basic health information resources",
      "Opportunity to post community health events"
    ]
  },
  {
    level: "Bronze Membership",
    description: "An affordable option for smaller organizations and individual practitioners looking to expand their reach. This level includes a moderate annual fee.",
    benefits: [
      "All NP Membership benefits",
      "Enhanced listing in provider directory",
      "Access to introductory training webinars",
      "10% discount on PortHarcourt City Chamber events and workshops"
    ]
  },
  {
    level: "Silver Membership",
    description: "Ideal for growing clinics and organizations seeking increased visibility and deeper engagement with the PortHarcourt City Chamber network. This level includes a substantial annual fee.",
    benefits: [
      "All Bronze Membership benefits",
      "Priority placement in provider search results",
      "Access to exclusive monthly training sessions and industry insights",
      "25% discount on PortHarcourt City Chamber events and workshops",
      "Opportunity for 'Featured Service' highlight in newsletters"
    ]
  },
  {
    level: "Gold Membership",
    description: "Our premium tier for established healthcare providers and larger organizations desiring maximum exposure and exclusive benefits. This level includes a higher annual fee.",
    benefits: [
      "All Silver Membership benefits",
      "Spotlight position on the PortHarcourt City Chamber homepage (rotating)",
      "Access to quarterly exclusive networking events with industry leaders",
      "50% discount on PortHarcourt City Chamber events and workshops",
      "Customizable dedicated profile page with advanced features",
      "Early access to new platform functionalities"
    ]
  }
];

// Get DOM elements
const cardsContainer = document.getElementById('levels'); 
const modalDialog = document.getElementById('level-details'); 

function displayMembershipLevelDetails(levelData) {
    
    modalDialog.innerHTML = ''; 

    const closeButton = document.createElement('button');
    closeButton.innerHTML = '&times;'; 
    closeButton.className = 'modal-close-btn'; 
    closeButton.addEventListener('click', () => modalDialog.close()); 

    const levelTitle = document.createElement('h2');
    levelTitle.textContent = levelData.level;
    levelTitle.className = 'modal-title'; 

    const descriptionPara = document.createElement('p');
    descriptionPara.textContent = levelData.description;
    descriptionPara.className = 'modal-description';

    const benefitsHeading = document.createElement('h3');
    benefitsHeading.textContent = 'Benefits:';
    benefitsHeading.className = 'modal-benefits-heading';

    const benefitsList = document.createElement('ul');
    benefitsList.className = 'modal-benefits-list'; 

    levelData.benefits.forEach(benefit => {
        const listItem = document.createElement('li');
        listItem.textContent = benefit;
        benefitsList.appendChild(listItem);
    });


    modalDialog.appendChild(closeButton);
    modalDialog.appendChild(levelTitle);
    modalDialog.appendChild(descriptionPara);
    modalDialog.appendChild(benefitsHeading);
    modalDialog.appendChild(benefitsList);

  
    modalDialog.showModal();
}


function displayLevels(memLevels) {
    cardsContainer.innerHTML = ''; 

    memLevels.forEach((memlevel, index) => {
        const card = document.createElement('div');
        card.className = 'membership-card'; 

        const headElement = document.createElement('h3');
        headElement.className = 'membership-card-title'; 
        headElement.textContent = memlevel.level;

        const learnButton = document.createElement('button');
        learnButton.className = "learn-more-btn"; 
        learnButton.textContent = "Learn More";

        
        learnButton.dataset.levelIndex = index; // Used to retrieve the correct data for modal

        card.appendChild(headElement);
        card.appendChild(learnButton);
        cardsContainer.appendChild(card);
    });
}

document.addEventListener('click', (event) => {
    // Check if the clicked element (or its parent) is a "Learn More" button
    const learnMoreBtn = event.target.closest('.learn-more-btn');
    if (learnMoreBtn) {
        const levelIndex = learnMoreBtn.dataset.levelIndex;
        // Ensure index is valid and corresponds to data
        if (levelIndex !== undefined && membershipLevelsData[levelIndex]) {
            displayMembershipLevelDetails(membershipLevelsData[levelIndex]);
        }
    }
});

// Initial call to display levels when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayLevels(membershipLevelsData);
});