// script.js

// Modal management
function toggleModal(modalId, show) {
  const modal = document.getElementById(modalId);
  modal.style.display = show ? 'block' : 'none';
}

// Event listeners for opening modals
document.addEventListener('click', function(event) {
  if (event.target.id === 'login-btn') {
    toggleModal('login-options', true);
  } else if (event.target.id === 'register-btn') {
    toggleModal('registration-modal', true);
  }
});

// Event listeners for closing modals
document.addEventListener('click', function(event) {
  if (event.target.classList.contains('close')) {
    const modal = event.target.closest('.modal');
    toggleModal(modal.id, false);
  }
});

// Event listeners for switching between login and registration modals
document.addEventListener('click', function(event) {
  if (event.target.id === 'register-link') {
    toggleModal('loginModal', false);
    toggleModal('registration-modal', true);
  } else if (event.target.id === 'login-link') {
    toggleModal('registration-modal', false);
    toggleModal('loginModal', true);
  }
});

// Form submission handling
document.addEventListener('submit', function(event) {
  if (event.target.id === 'login-form') {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    const password = formData.get('password');
    // Add your login logic here
  } else if (event.target.id === 'forgot-password-form') {
    event.preventDefault();
    const formData = new FormData(event.target);
    const email = formData.get('email');
    // Add your forgot password logic here
  } else if (event.target.id === 'registration-form') {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    const password = formData.get('password');
    const userType = formData.get('userType');
    // Add your registration logic here
  }
});

// Login options event listeners
document.addEventListener('click', function(event) {
  if (event.target.id === 'login-student' || event.target.id === 'login-mentor') {
    toggleModal('login-options', false);
    toggleModal('loginModal', true);
  }
});
// Function to load notices
function loadNotices() {
  fetch('notices.json')
      .then(response => response.json())
      .then(data => {
          const noticesList = document.getElementById('notice-list'); // Corrected ID
          noticesList.innerHTML = ''; // Clear any existing notices

          data.notices.forEach(notice => {
              const listItem = document.createElement('li');
              listItem.textContent = notice;
              noticesList.appendChild(listItem);
          });
      })
      .catch(error => {
          console.error('Error loading notices:', error);
      });
}

// Call the function to load notices when the page loads
window.onload = loadNotices;
document.addEventListener('DOMContentLoaded', function () {
  const loginBtn = document.getElementById('login-btn');
  const loginModal = document.getElementById('loginModal');
  const loginOptions = document.getElementById('login-options');
  const closeModalButtons = document.querySelectorAll('.close');
  const loginStudentBtn = document.getElementById('login-student');
  const loginMentorBtn = document.getElementById('login-mentor');

  loginBtn.addEventListener('click', function (event) {
      event.preventDefault();
      loginOptions.style.display = loginOptions.style.display === 'none' ? 'block' : 'none';
  });

  loginStudentBtn.addEventListener('click', function () {
      showLoginModal('student');
  });

  loginMentorBtn.addEventListener('click', function () {
      showLoginModal('mentor');
  });

  closeModalButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
          loginModal.style.display = 'none';
      });
  });

  window.addEventListener('click', function (event) {
      if (event.target === loginModal) {
          loginModal.style.display = 'none';
      }
  });

  function showLoginModal(role) {
      loginModal.style.display = 'block';
      document.querySelectorAll('.login-form').forEach(function (form) {
          form.style.display = form.getAttribute('data-role') === role ? 'block' : 'none';
      });
  }
});
