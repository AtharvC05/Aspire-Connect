function openEditProfile() {
    document.getElementById('edit-profile-window').style.display = 'block';
}

function closeEditProfile() {
    document.getElementById('edit-profile-window').style.display = 'none';
}

document.getElementById('edit-profile-form').addEventListener('submit', function(event) {
    event.preventDefault();

    // Get updated profile details
    const name = document.getElementById('mentor-name-input').value || 'None';
    const professionalTitle = document.getElementById('professional-title-input').value || 'None';
    const bio = document.getElementById('bio-input').value || 'None';
    const specializations = document.getElementById('specializations-input').value || 'None';
    const availability = document.getElementById('availability-input').value || 'None';
    const contactInfo = document.getElementById('contact-info-input').value || 'None';

    // Update profile page
    document.getElementById('mentor-name').innerText = name;
    document.getElementById('professional-title').innerText = professionalTitle;
    document.getElementById('bio').innerText = bio;
    
    // Handle specializations
    const specArray = specializations.split('\n').map(spec => spec.trim()).filter(spec => spec.length > 0);
    document.getElementById('specializations').innerHTML = specArray.length > 0 
        ? specArray.map(spec => `<li>${spec}</li>`).join('') 
        : 'None';

    document.getElementById('availability').innerText = availability;
    document.getElementById('contact-info').innerText = contactInfo;

    // Close the edit profile window
    closeEditProfile();
});