// Lightbox functionality
function openLightbox(imageSrc) {
    const lightbox = document.querySelector('.lightbox');
    const lightboxImg = lightbox.querySelector('img');
    lightboxImg.src = imageSrc;
    lightbox.style.display = 'flex';
    document.body.style.overflow = 'hidden';
}

function closeLightbox() {
    const lightbox = document.querySelector('.lightbox');
    lightbox.style.display = 'none';
    document.body.style.overflow = 'auto';
}

// Add click event listeners to menu items
document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            const imgSrc = this.querySelector('img').src;
            openLightbox(imgSrc);
        });
    });

    // Close lightbox when clicking the close button or outside the image
    const lightbox = document.querySelector('.lightbox');
    const closeButton = document.querySelector('.close-button');
    
    closeButton.addEventListener('click', closeLightbox);
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });

    // Close lightbox with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
}); 