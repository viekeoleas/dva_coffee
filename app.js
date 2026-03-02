lucide.createIcons();

const modal = document.getElementById('contact-modal');
const ctaButtons = document.querySelectorAll('.cta-button');
const closeModalBtn = document.getElementById('close-modal');

const openModal = () => {
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
};

const closeModal = () => {
    modal.classList.remove('active');
    document.body.style.overflow = '';
};

ctaButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });
});

closeModalBtn.addEventListener('click', closeModal);

modal.addEventListener('click', (e) => {
    if (e.target === modal) {
        closeModal();
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('active')) {
        closeModal();
    }
});
