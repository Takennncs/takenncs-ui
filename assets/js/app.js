// Toggle sidebar
$(document).ready(function() {
  $("#menu-toggle").click(function(e) {
    e.preventDefault();
    $("#sidebar").toggleClass("active");
    $(this).find('i').toggleClass('fa-bars fa-times');
  });
  
  // Set current year in footer
  $('#year').text(new Date().getFullYear());
  
  // Add active class to current page in sidebar
  var currentPage = window.location.pathname.split('/').pop();
  $('nav#sidebar a').each(function() {
    var linkPage = $(this).attr('href').split('/').pop();
    if (linkPage === currentPage) {
      $(this).parent().addClass('active');
    }
  });
  
  // Auto-hide sidebar on mobile when clicking a link
  if ($(window).width() < 768) {
    $('nav#sidebar a').click(function() {
      $("#sidebar").addClass("active");
      $("#menu-toggle").find('i').removeClass('fa-times').addClass('fa-bars');
    });
  }
  
  // Update active state on window resize
  $(window).resize(function() {
    if ($(window).width() < 768) {
      $("#sidebar").addClass("active");
    } else {
      $("#sidebar").removeClass("active");
    }
  });
  
  // Initialize tooltips
  $('[data-toggle="tooltip"]').tooltip();
  
  // Initialize popovers
  $('[data-toggle="popover"]').popover();
});

// Utility functions
function showNotification(message, type = 'info') {
  // Create notification element
  var alertClass = 'alert-' + type;
  var notification = $('<div class="alert ' + alertClass + ' alert-dismissible fade show" role="alert">' +
    message +
    '<button type="button" class="close" data-dismiss="alert" aria-label="Close">' +
    '<span aria-hidden="true">&times;</span>' +
    '</button>' +
    '</div>');
  
  // Add to page
  $('.container-fluid').prepend(notification);
  
  // Auto remove after 5 seconds
  setTimeout(function() {
    notification.alert('close');
  }, 5000);
}

// Example usage:
// showNotification('This is a success message!', 'success');
// showNotification('This is an error message!', 'danger');

// Form validation helper
function validateForm(formId) {
  var form = document.getElementById(formId);
  if (form.checkValidity() === false) {
    event.preventDefault();
    event.stopPropagation();
  }
  form.classList.add('was-validated');
  return form.checkValidity();
}

// Toggle password visibility
function togglePasswordVisibility(inputId) {
  var passwordInput = document.getElementById(inputId);
  var type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
  passwordInput.setAttribute('type', type);
}