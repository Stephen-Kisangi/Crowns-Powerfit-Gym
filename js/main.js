
const scrollToTopButton = document.querySelector('.scroll-to-top');

window.addEventListener('scroll', function () {
    const scrollPosition = window.scrollY;
    const documentHeight = document.documentElement.scrollHeight;
    const windowHeight = window.innerHeight;

  
    if (scrollPosition + windowHeight >= documentHeight - 200) { 
        scrollToTopButton.classList.remove('hide');
    } else {
        scrollToTopButton.classList.add('hide');
    }
});


scrollToTopButton.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});


// JavaScript to handle the hamburger menu toggle
document.querySelector('.hamburger').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show');
});



