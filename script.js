// Typewriter Effect
function typeWriter(text, elementId, speed) {
    let index = 0;
    const element = document.getElementById(elementId);
  
    function type() {
      if (index < text.length) {
        element.textContent += text.charAt(index);
        index++;
        setTimeout(type, speed);
      }
    }
  
    type();
  }
  
  function startTypewriterEffect() {
    const text = "Welcome, I'm Sunny Hardyal";
    const speed = 110;
    typeWriter(text, "typewriter-text", speed);
  }
  
// Rotating Text with Fade Effect
function rotateTextWithFade(phrases, elementId, interval) {
    let index = 0;
    const element = document.getElementById(elementId);
  
    function updateText() {
      element.textContent = phrases[index]; // Update the text content
      index = (index + 1) % phrases.length; // Cycle through the phrases
    }
  
    updateText(); // Set the first text immediately
  
    setInterval(() => {
      updateText();
    }, interval); // Rotate text at the given interval
  }
  
  // Initialize the rotating text animation on page load
  function startRotatingText() {
    const phrases = [
      "First Generation American",
      "First Generation College Graduate",
      "First Generation High-School Graduate",
      "And I won't Be The Last"
    ];
    rotateTextWithFade(phrases, "rotating-text", 4000); // Rotate every 4s
  }
    
// Dark Mode Toggle with Text Change
function enableDarkModeToggle() {
    const button = document.getElementById("dark-mode-toggle");
  
    // Set the button text based on the current mode
    function updateButtonText() {
      if (document.body.classList.contains("dark-mode")) {
        button.textContent = "Light Mode";
      } else {
        button.textContent = "Dark Mode";
      }
    }
  
    // Check if dark mode is enabled on page load
    const isDarkMode = localStorage.getItem("dark-mode") === "enabled";
    if (isDarkMode) {
      document.body.classList.add("dark-mode");
    }
    updateButtonText(); // Update button text on page load
  
    // Toggle dark mode and update button text
    button.addEventListener("click", () => {
      document.body.classList.toggle("dark-mode");
      const darkModeEnabled = document.body.classList.contains("dark-mode");
      localStorage.setItem("dark-mode", darkModeEnabled ? "enabled" : "disabled");
      updateButtonText(); // Update button text after toggling
    });
  }
  
  // Initialize All Features on Page Load
  window.onload = function () {
    startTypewriterEffect();
    startRotatingText();
    enableDarkModeToggle();
  };

  let lastScrollPosition = 0;

window.addEventListener('scroll', function () {
  const header = document.querySelector('header');
  
  if (window.scrollY > lastScrollPosition) {
    // User scrolled down, hide the header
    header.classList.add('hidden');
  } else if (window.scrollY === 0) {
    // User is back at the top, show the header
    header.classList.remove('hidden');
  }

  lastScrollPosition = window.scrollY;
});

  