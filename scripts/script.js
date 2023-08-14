// script.js
// alert("Hello! I am an alert box!!");

// function loadGoogleForm() {
//     const googleFormContainer = document.getElementById("google-form");
//     googleFormContainer.innerHTML = `
//       <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdxUUnogm_tfphi6WmA-5W1jgjdBgOwRwjiwIWiig24PiqOEA/viewform?embedded=true" width="640" height="661" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
//     `;
//   }
// loadGoogleForm();

// Function to center the cursor on the screen
function centerCursor() {
  const cursor = document.getElementById("cursor");
  const centerX = window.innerWidth / 2;
  const centerY = window.innerHeight / 2;
  cursor.style.top = centerY + "px";
  cursor.style.left = centerX + "px";
}

// Call the function once when the page loads to center the cursor
// centerCursor();

//cursor effects on mousemove
let timeout;
const cursor = document.getElementById("cursor");

document.addEventListener("mousemove", (e) => {
  cursor.style.top = e.clientY + "px"; // Use clientY to get viewport-relative Y coordinate
  cursor.style.left = e.clientX + "px"; // Use clientX to get viewport-relative X coordinate
  cursor.style.display = "block";
  cursor.style.opacity = "1";

  // Clear the previous timeout to prevent conflicting timers
  clearTimeout(timeout);

  // Set a new timeout for the cursor to start fading out after 1 second (1000ms)
  timeout = setTimeout(() => {
    fadeOutCursor();
  }, 1000);
});

function fadeOutCursor() {
  let opacity = 1;
  const fadeOutInterval = setInterval(() => {
    opacity -= 0.05; // Adjust the step size for the desired fading speed
    cursor.style.opacity = opacity;
    if (opacity <= 0) {
      clearInterval(fadeOutInterval);
      cursor.style.display = "none";
    }
  }, 50); // Adjust the interval (in milliseconds) for the desired smoothness
}


//cursor effects on mouse out
// document.body.addEventListener("mouseout", () =>{
//   cursor.style.display = "none";
// });
document.body.addEventListener("mouseenter", () => {
  const cursor = document.getElementById("cursor");
  cursor.style.display = "block";
});

// document.addEventListener("mousemove", (e) => {
//   let x = e.pageX; //replace pageX for clientX
//   let y = e.pageY; // replace  pageY for clientY
// }

// Show/hide the "Back to Top" link based on scroll position
const backToTop = document.getElementById('back-to-top');
window.addEventListener('scroll', () => {
  if (window.scrollY > 200) {
    backToTop.style.display = 'block';}
  // } else {
  //   backToTop.style.display = 'none';
  // }
});

// Smooth scroll to the top when the link is clicked
backToTop.addEventListener('click', (event) => {
  event.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
});

const projectLinks = document.querySelectorAll(".project-link");
const offset = 75; // Adjust the offset value as needed

projectLinks.forEach((link) => {
  link.addEventListener("click", (event) => {
    event.preventDefault();
    const targetId = link.getAttribute("href");
    const targetElement = document.querySelector(targetId);

    if (targetElement) {
      const scrollOptions = {
        top: targetElement.offsetTop - offset,
        behavior: "smooth",
      };
      window.scrollTo(scrollOptions);
    }
  });
});

// const darkModeToggle = document.getElementById('dark-mode-checkbox');
// const body = document.body;

// function toggleDarkMode() {
//   if (darkModeToggle.checked) {
//     body.classList.add('dark-mode');
//   } else {
//     body.classList.remove('dark-mode');
//   }
// }

// darkModeToggle.addEventListener('change', toggleDarkMode);

const readMoreButtons = document.querySelectorAll('.read-more-button');
const lessButtons = document.querySelectorAll('.less-button');
const additionalInfo = document.querySelectorAll('.additional-info'); // Use a class for all additional info sections

// Loop through each button and add click event listeners
readMoreButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    additionalInfo[index].classList.add('show');
    button.classList.add('hidden');
  });
});

// Loop through each "Less" button and add click event listeners
lessButtons.forEach((button, index) => {
  button.addEventListener('click', () => {
    additionalInfo[index].classList.remove('show');
    readMoreButtons[index].classList.remove('hidden');
  });
});

