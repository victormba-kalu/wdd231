// Get the current year and set it in the footer
const currentYearSpan = document.getElementById('currentyear');
if (currentYearSpan) {
    currentYearSpan.textContent = new Date().getFullYear();
}

// Get the last modification date of the document and set it in the footer
const lastModifiedSpan = document.getElementById('lastmodified');
if (lastModifiedSpan) {
    lastModifiedSpan.textContent = document.lastModified;
}
