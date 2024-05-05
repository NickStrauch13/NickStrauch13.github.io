// Function to show only one section at a time
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the requested section
    document.getElementById(sectionId).style.display = 'flex';

    // Reset the background color of all link containers and active link containers
    document.querySelectorAll('.link-subcontainer' ).forEach(container => {
        container.className = 'link-subcontainer'; 
    });
    document.querySelectorAll('.link-subcontainer-active' ).forEach(container => {
        container.className = 'link-subcontainer'; 
    });

    // Change the background color of the active link container
    document.getElementById(sectionId + '-link').className = 'link-subcontainer-active';
}

// Initially show the 'projects' section
window.onload = () => {
    showSection('projects');
};
