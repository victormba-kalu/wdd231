const currentYear = new Date().getFullYear();
const yearElement = document.querySelector('#currentyear');
yearElement.textContent = currentYear;

const lastModifiedDate = document.lastModified;
const lastModifiedElement = document.querySelector('#lastmodified');
lastModifiedElement.textContent = lastModifiedDate;