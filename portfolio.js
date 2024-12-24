// Animation lorsque la page défile
let isScrolling = false;

window.addEventListener('scroll', function () {
    if (!isScrolling) {
        window.requestAnimationFrame(() => {
            handleScrollAnimations();
            isScrolling = false;
        });
        isScrolling = true;
    }
});

function handleScrollAnimations() {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;

        if (position < screenHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
        }
    });
}

// Ajout d'une animation d'apparition initiale
document.addEventListener('DOMContentLoaded', function () {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.transition = 'all 0.5s ease-in-out';
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
    });
});

// Texte à écrire
const titleText = "Bienvenue sur notre site";
const subText = "Découvrez notre contenu incroyable";

// Variables pour suivre la progression de l'animation
let titleIndex = 0;
let subIndex = 0;

// Fonction pour écrire progressivement le titre
function typeWriterTitle() {
    const titleElement = document.getElementById('animated-text');
    if (titleElement && titleIndex < titleText.length) {
        titleElement.innerHTML += titleText.charAt(titleIndex);
        titleIndex++;
        setTimeout(typeWriterTitle, 100);
    } else {
        setTimeout(typeWriterSubtext, 500);
    }
}

// Fonction pour écrire progressivement le sous-texte
function typeWriterSubtext() {
    const subTextElement = document.getElementById('animated-subtext');
    if (subTextElement && subIndex < subText.length) {
        subTextElement.innerHTML += subText.charAt(subIndex);
        subIndex++;
        setTimeout(typeWriterSubtext, 100);
    }
}

// Lancer l'animation dès que la page est complètement chargée
window.onload = function () {
    const titleElement = document.getElementById('animated-text');
    const subTextElement = document.getElementById('animated-subtext');
    if (titleElement && subTextElement) {
        titleElement.innerHTML = "";
        subTextElement.innerHTML = "";
        typeWriterTitle();
    }
};

// Sélectionner le bouton de menu et la sidebar
const menuBtn = document.getElementById('menu-btn');
const sidebar = document.getElementById('sidebar');

if (menuBtn && sidebar) {
    menuBtn.addEventListener('click', function () {
        sidebar.classList.toggle('active');
    });
}


document.addEventListener("DOMContentLoaded", () => {
    const spheres = document.querySelectorAll(".sphere");
    const header = document.querySelector("header");

    function positionSpheres() {
        spheres.forEach(sphere => {
            // Placement aléatoire
            const x = Math.random() * header.offsetWidth;
            const y = Math.random() * header.offsetHeight;
        
            sphere.style.left = `${x}px`;
            sphere.style.top = `${y}px`;

            // Durée d'animation aléatoire
            const duration = Math.random() * 3 + 3; // Entre 3 et 6 secondes
            sphere.style.animationDuration = `${duration}s`;
        });
        
    }

    // Initial placement
    positionSpheres();

    // Repositionner les boules lors du redimensionnement de la fenêtre
    window.addEventListener("resize", positionSpheres);

});


// Animation au défilement
window.addEventListener('scroll', function () {
    const services = document.querySelectorAll('.service-card');
    services.forEach(service => {
        const position = service.getBoundingClientRect().top;
        const screenHeight = window.innerHeight;
        if (position < screenHeight - 100) {
            service.style.opacity = '1';
            service.style.transform = 'translateY(0)';
        } else {
            service.style.opacity = '0';
            service.style.transform = 'translateY(50px)';
        }
    });
});

// Initialiser les cartes
document.addEventListener('DOMContentLoaded', function () {
    const services = document.querySelectorAll('.service-card');
    services.forEach(service => {
        service.style.transition = 'all 0.5s ease';
        service.style.opacity = '0';
        service.style.transform = 'translateY(50px)';
    });
});


// Animation lors du défilement
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section:not(#section1):not(#section3)');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const position = section.getBoundingClientRect().top;

        // Appliquer l'animation si la section est visible
        if (position < windowHeight - 100) {
            section.style.opacity = '1';
            section.style.transform = 'translateY(0)';
        } else {
            section.style.opacity = '0';
            section.style.transform = 'translateY(50px)';
        }
    });
});

// Initialisation des sections exclues des animations
document.addEventListener('DOMContentLoaded', () => {
    const animatedSections = document.querySelectorAll('section:not(#section1):not(#section3)');
    animatedSections.forEach(section => {
        section.style.transition = 'all 0.5s ease-in-out';
        section.style.opacity = '0';
        section.style.transform = 'translateY(50px)';
    });

    // Pour les sections exclues, laisser intact
    const excludedSections = document.querySelectorAll('#section1, #section3');
    excludedSections.forEach(section => {
        section.style.transition = 'none';
        section.style.opacity = '1';
        section.style.transform = 'none';
    });
});

