
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');
const currentTheme = localStorage.getItem('theme');


if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {
        toggleSwitch.checked = true;
    }
}


function switchTheme(e) {
    if (e.target.checked) {
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
    } else {
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
    }
}

toggleSwitch.addEventListener('change', switchTheme, false);


function revealOnScroll() {
    const cards = document.querySelectorAll('.card');

    cards.forEach((card, index) => {
        const cardTop = card.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (cardTop < windowHeight - 50) {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }
    });
}

window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);


const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
        e.preventDefault();


        const formData = new FormData(this);
        const formEntries = Object.fromEntries(formData);


        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(formEntries.email)) {
            alert('Please enter a valid email address');
            return;
        }


        if (formEntries.message && formEntries.message.length < 10) {
            alert('Message must be at least 10 characters long');
            return;
        }


        alert('Message sent successfully!');
        this.reset();
    });
}

