function openEditProfile() {
    document.getElementById('edit-profile-window').style.display = 'block';
}

function closeEditProfile() {
    document.getElementById('edit-profile-window').style.display = 'none';
}

document.getElementById('edit-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const defaultText = 'None';
    const formData = new FormData(event.target);
    const updatedData = {};
    
    formData.forEach((value, key) => {
        updatedData[key] = value.trim() || defaultText;
    });
    
    // Update profile sections with new values or default text
    document.getElementById('profile-name').textContent = updatedData['student-name'];
    document.getElementById('profile-major').textContent = updatedData['course-major'];
    document.getElementById('skills-list').innerHTML = updatedData['skills']
        .split(',').map(skill => `<li>${skill.trim() || defaultText}</li>`).join('');
    document.getElementById('bio').textContent = updatedData['bio'];
    document.getElementById('appointment-history-text').textContent = updatedData['appointment-history'];
    document.getElementById('contact-info-text').textContent = updatedData['contact-info'];
    
    closeEditProfile();
});