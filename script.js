document.addEventListener('DOMContentLoaded', function () {
  // Get all tab links
  const tabLinks = document.querySelectorAll('.tab-link');

  // Attach click event to each tab link
  tabLinks.forEach((link) => {
    link.addEventListener('click', (e) => {
      e.preventDefault();

      // Get the target tab
      const targetTab = link.getAttribute('data-tab');

      // Hide all sections
      document.querySelectorAll('.wrapper').forEach((section) => {
        section.style.display = 'none';
      });

      // Show the selected section
      document.getElementById(targetTab).style.display = 'block';
    });
  });
});
