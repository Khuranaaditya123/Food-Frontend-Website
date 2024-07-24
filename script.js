// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Hamburger Menu Toggle
document.querySelector('.hamburger-menu').addEventListener('click', () => {
    document.querySelector('.mobile-menu').classList.toggle('active');
});

// Image Hover Effect
const galleryImages = document.querySelectorAll('.gallary_image img');

galleryImages.forEach(image => {
    image.addEventListener('mouseover', () => {
        image.style.opacity = '0.4';
    });
    image.addEventListener('mouseout', () => {
        image.style.opacity = '1';
    });
});

// Form Validation
document.querySelector('form').addEventListener('submit', function(e) {
    const inputs = this.querySelectorAll('input');
    let valid = true;
    
    inputs.forEach(input => {
        if (!input.value) {
            valid = false;
            input.style.border = '2px solid red';
        } else {
            input.style.border = '2px solid #cccccc';
        }
    });
    
    if (!valid) e.preventDefault(); // Prevent form submission if invalid
});

// Back to Top Button
const backToTopButton = document.createElement('button');
backToTopButton.id = 'backToTop';
backToTopButton.textContent = '↑';
document.body.appendChild(backToTopButton);

backToTopButton.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Show button only when scrolling down
window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTopButton.style.display = 'block';
    } else {
        backToTopButton.style.display = 'none';
    }
});
