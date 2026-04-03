// toggle icon navbar

let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

// Scroll Sections Active Links

let sections = document.querySelectorAll("section");
let navLinks = document.querySelectorAll("header nav a");

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;
    let id = sec.getAttribute("id");

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // Sticky navbar

  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);

  //    remove toggle icon and navbar when click navbar link

  menuIcon.classList.remove("bx-x");
  navbar.classList.remove("active");
};

// scroll reveal

ScrollReveal({
//   reset: true,
  distance: "80px",
  duration: 2000,
  delay: 200,
});
ScrollReveal().reveal(".home-content, .heading", { origin: "top" });
ScrollReveal().reveal(".home-img, .services-container, .portfolio-box, .contact form", { origin: "bottom" });
ScrollReveal().reveal(".home-content h1, .about-img", { origin: "left" });
ScrollReveal().reveal(".home-content p, .about-content", { origin: "right" });

// Skills boxes ko niche se upar aane ke liye
// LEFT side se "Tools" wala box aayega (jo HTML mein dusra .skills-box hai)
ScrollReveal().reveal('.skills-box:nth-child(2)', { 
    origin: 'left', 
    distance: '100px', 
    duration: 1200, 
    delay: 160 
});

// RIGHT side se "Skills" wala box aayega (jo HTML mein pehla .skills-box hai)
ScrollReveal().reveal('.skills-box:nth-child(1)', { 
    origin: 'right', 
    distance: '100px', 
    duration: 1200, 
    delay: 160 
});

// Andar ke chote items (skill-item) ke liye stagger effect
ScrollReveal().reveal('.skill-item', { 
    origin: 'bottom', 
    interval: 100, 
    delay: 800 
});

// typed js

const typed = new Typed('.multiple-text', {
    strings: ['System Administrator', 'Cloud Engineer' ,'RHCSA Certified Engineer', 'Linux Enthusiast'],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
    });

// Contact Form Submission Popup Fix
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault(); // Page ko reload hone se rokta hai

        const formData = new FormData(this);
        
        try {
            const response = await fetch(this.action, {
                method: 'POST',
                body: formData,
                headers: { 'Accept': 'application/json' }
            });

            if (response.ok) {
                // Success Popup
                alert("Message send successful! Thank you Divy will contact you soon."); 
                contactForm.reset(); // Form khali karne ke liye
            } else {
                alert("Oops! There was a problem. Please try again.");
            }
        } catch (error) {
            alert("Network error! Check your connection.");
        }
    });
}