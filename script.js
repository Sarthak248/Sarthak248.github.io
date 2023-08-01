const backToTop = document.getElementById('back-to-top');
// Show/hide the "Back to Top" link based on scroll position
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTop.style.display = 'block';
  } else {
    backToTop.style.display = 'none';
  }
});

// Smooth scroll to the top when the link is clicked
backToTop.addEventListener('click', (event) => {
  alert("Hello! I am an alert box!!");
  event.preventDefault();
  const scrollTop = 0;
  const scrollOptions = {
    top: scrollTop,
    behavior: 'smooth',
  };
  window.scrollTo(scrollOptions);
});