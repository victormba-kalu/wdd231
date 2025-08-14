const providerCardsContainer = document.getElementById('provider-cards-container');
const searchInput = document.getElementById('search-input');
const specialtyFilter = document.getElementById('specialty-filter');
const loadingMessage = document.querySelector('.loading-message');
const errorMessage = document.querySelector('.error-message');

const providerModal = document.getElementById('providerModal');
const modalCloseBtn = providerModal.querySelector('.modal-close-btn');
const modalProviderName = document.getElementById('modal-provider-name');
const modalProviderSpecialty = document.getElementById('modal-provider-specialty');
const modalProviderLocation = document.getElementById('modal-provider-location');
const modalProviderContact = document.getElementById('modal-provider-contact');
const modalProviderDescription = document.getElementById('modal-provider-description');

let allProviders = [];

function renderProviders(providersToDisplay) {
    providerCardsContainer.innerHTML = '';

    if (providersToDisplay.length === 0) {
        providerCardsContainer.innerHTML = '<p class="no-results-message">No providers found matching your criteria.</p>';
        return;
    }

    providersToDisplay.forEach(provider => {
        const card = document.createElement('div');
        card.className = 'provider-card';

        card.innerHTML = `
            <img src="${provider.imageUrl}" alt="Photo of ${provider.name}" loading="lazy" width="100" height="100">
            <h3>${provider.name}</h3>
            <p class="specialty">${provider.specialty}</p>
            <p>${provider.location}</p>
            <button class="contact-btn" data-id="${provider.id}">View Details</button>
        `;
        providerCardsContainer.appendChild(card);
    });

    document.querySelectorAll('.contact-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const providerId = event.target.dataset.id;
            const selectedProvider = allProviders.find(p => p.id === providerId);
            if (selectedProvider) {
                openModal(selectedProvider);
            }
        });
    });
}

function openModal(provider) {
    modalProviderName.textContent = provider.name;
    modalProviderSpecialty.textContent = `Specialty: ${provider.specialty}`;
    modalProviderLocation.textContent = `Location: ${provider.location}`;
    modalProviderContact.textContent = `Contact: ${provider.phone} | ${provider.email}`;
    modalProviderDescription.textContent = provider.description;

    providerModal.classList.add('open');
}

function closeModal() {
    providerModal.classList.remove('open');
}

modalCloseBtn.addEventListener('click', closeModal);
providerModal.addEventListener('click', (event) => {
    if (event.target === providerModal) {
        closeModal();
    }
});

function filterAndSearchProviders() {
    const searchTerm = searchInput.value.toLowerCase();
    const selectedSpecialty = specialtyFilter.value;

    const filteredProviders = allProviders.filter(provider => {
        const matchesSearch = provider.name.toLowerCase().includes(searchTerm) ||
                              provider.specialty.toLowerCase().includes(searchTerm) ||
                              provider.location.toLowerCase().includes(searchTerm);

        const matchesSpecialty = selectedSpecialty === '' || provider.specialty === selectedSpecialty;

        return matchesSearch && matchesSpecialty;
    });

    renderProviders(filteredProviders);
}

searchInput.addEventListener('input', filterAndSearchProviders);
specialtyFilter.addEventListener('change', filterAndSearchProviders);

async function fetchProviders() {
    loadingMessage.style.display = 'block';
    errorMessage.style.display = 'none';
    providerCardsContainer.innerHTML = '';

    try {
        const response = await fetch('data/data.json');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        allProviders = await response.json();
        renderProviders(allProviders);
    } catch (error) {
        console.error('Error fetching providers:', error);
        errorMessage.textContent = 'Failed to load providers. Please try again later.';
        errorMessage.style.display = 'block';
    } finally {
        loadingMessage.style.display = 'none';
    }
}

document.addEventListener('DOMContentLoaded', fetchProviders);

document.addEventListener('DOMContentLoaded', () => {
    const savedSearchTerm = localStorage.getItem('cececonnect_search_term');
    const savedSpecialty = localStorage.getItem('cececonnect_specialty_filter');

    if (savedSearchTerm) {
        searchInput.value = savedSearchTerm;
    }
    if (savedSpecialty) {
        specialtyFilter.value = savedSpecialty;
    }

    fetchProviders().then(() => {
        if (savedSearchTerm || savedSpecialty) {
            filterAndSearchProviders();
        }
    });
});

searchInput.addEventListener('input', () => {
    localStorage.setItem('cececonnect_search_term', searchInput.value);
});

specialtyFilter.addEventListener('change', () => {
    localStorage.setItem('cececonnect_specialty_filter', specialtyFilter.value);
});
