// Code JavaScript pour gérer le menu hamburger
    const menuToggle = document.getElementById("menu-toggle");
    const navbar = document.querySelector(".navbar");

    // Ajouter un gestionnaire d'événement pour le clic
    menuToggle.addEventListener("click", () => {
        
    // Ajouter ou supprimer la classe active pour afficher/masquer le menu
    navbar.classList.toggle("active");
    });

// Animation des images de la galerie photo de ScanSanté

    const galleryItems = document.querySelectorAll('.gallery-item img');

    galleryItems.forEach((img) => {
        img.addEventListener('click', () => {
            // Créer une lightbox
            const lightbox = document.createElement('div');
            lightbox.classList.add('lightbox');
            lightbox.innerHTML = `<img src="${img.src}" alt="${img.alt}">`;
            document.body.appendChild(lightbox);

            // Fermer la lightbox au clic
            lightbox.addEventListener('click', () => {
                lightbox.remove();
            });
        }); 
    });

