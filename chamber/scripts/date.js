

document.addEventListener('DOMContentLoaded', () => {
    // Set current year for copyright
    const currentYearSpan = document.getElementById('currentyear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    // Set last modification date (This is usually for the file itself)
    const lastModifiedSpan = document.getElementById('lastmodified');
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }
});


document.addEventListener('DOMContentLoaded', () => {
    const visitMessageBanner = document.getElementById('last-visit-message');
    const lastVisit = localStorage.getItem('lastVisit'); 
    const currentDate = new Date();

    if (visitMessageBanner) { 
        if (lastVisit) {
            
            const lastVisitDate = new Date(parseInt(lastVisit)); 
            
        
            const diffTime = Math.abs(currentDate.getTime() - lastVisitDate.getTime());
            
         
            const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

            if (diffDays === 0) {
                visitMessageBanner.textContent = "Back so soon! Welcome back to the Chamber of Commerce.";
            } else if (diffDays === 1) {
                visitMessageBanner.textContent = "Welcome back! It's been 1 day since your last visit.";
            } else {
                visitMessageBanner.textContent = `Welcome back! It's been ${diffDays} days since your last visit.`;
            }
        } else {
           
            visitMessageBanner.textContent = "Welcome to the Port-Harcourt City Chamber of Commerce! We're glad to have you.";
        }

       
        if (visitMessageBanner.textContent) {
            visitMessageBanner.style.display = 'block';
        }
    }
    localStorage.setItem('lastVisit', currentDate.getTime());
});