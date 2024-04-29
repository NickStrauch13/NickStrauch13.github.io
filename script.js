// Function to show only one section at a time
function showSection(sectionId) {
    // Hide all sections
    document.querySelectorAll('.section').forEach(section => {
        section.style.display = 'none';
    });

    // Show the requested section
    document.getElementById(sectionId).style.display = 'flex';

    // Reset the background color of all link containers
    document.querySelectorAll('.link-subcontainer').forEach(container => {
        container.style.border = 'none'; 
    });

    // Change the background color of the active link container
    document.getElementById(sectionId + '-link').style.border = '1px solid #ffffff';
}

// Initially show the 'projects' section
window.onload = () => {
    showSection('projects');
};
