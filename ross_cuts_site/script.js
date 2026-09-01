// ROSS CUTS
// When your Acuity scheduling page is ready, replace the '#' in index.html
// on #acuity-link with your Acuity booking URL.
// Example: https://app.acuityscheduling.com/schedule.php?owner=YOUR_OWNER_ID

document.querySelectorAll('a[href="#booking"]').forEach((link) => {
  link.addEventListener('click', () => {
    // Booking section is intentionally kept on-site for now.
  });
});
