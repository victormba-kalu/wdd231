 
document.addEventListener('DOMContentLoaded', () => {
   
    const urlParams = new URLSearchParams(window.location.search)
  
    const firstName = urlParams.get('first');
    const lastName = urlParams.get('last');
    const email = urlParams.get('email');
    const phone = urlParams.get('phone');
    const organizationName = urlParams.get('organizationName');
    const timestamp = urlParams.get('timestamp')
    // Display the values on the page
    document.getElementById('display-name').textContent = `${firstName || ''} ${lastName || ''}`;
    document.getElementById('display-email').textContent = email || 'N/A';
    document.getElementById('display-phone').textContent = phone || 'N/A';
    document.getElementById('display-org-name').textContent = organizationName || 'N/A'
  
    if (timestamp) {
        try {
            const dateObj = new Date(timestamp);
            // Example format: August 9, 2025 at 10:53:00 PM
            document.getElementById('display-timestamp').textContent = dateObj.toLocaleString('en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
                hour: 'numeric',
                minute: 'numeric',
                second: 'numeric',
                hour12: true
            });
        } catch (e) {
            document.getElementById('display-timestamp').textContent = 'Invalid Date';
            console.error("Error parsing timestamp:", e);
        }
    } else {
        document.getElementById('display-timestamp').textContent = 'N/A';
    }
});