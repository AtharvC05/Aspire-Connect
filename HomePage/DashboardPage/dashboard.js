document.getElementById('profile-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default link behavior

    // Open modal
    document.getElementById('student-modal').style.display = 'flex';
    document.getElementById('student-frame').src = 'ProfilePage/student_profile.html'; // Load student.html into iframe
});

function closeModal() {
    document.getElementById('student-modal').style.display = 'none';
    document.getElementById('student-frame').src = ''; // Clear iframe source
}