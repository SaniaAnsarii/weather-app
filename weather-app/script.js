function navigate(section) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(sec => sec.style.display = 'none');
  
    // Show the selected section
    document.getElementById(section).style.display = 'block';
  }
  
  // Set Home as the default section
  window.onload = function() {
    navigate('home');
  };