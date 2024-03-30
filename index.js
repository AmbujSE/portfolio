document.addEventListener("DOMContentLoaded", function() {
    const currentDate = new Date().toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
    const lastUpdatedElement = document.querySelector('.last-updated');
    lastUpdatedElement.textContent = `Last Updated: ${currentDate}`;
});
