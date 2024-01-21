// Script pour activer/désactiver le mode sombre

document.addEventListener('DOMContentLoaded', function () {
    const darkModeToggle = document.getElementById('darkModeToggle');
    
    darkModeToggle.addEventListener('click', function () {
        // Ajouter ou supprimer la classe 'dark-mode' du body
        document.body.classList.toggle('dark-mode');

        // Enregistrer le choix de l'utilisateur dans le stockage local (persiste entre les sessions)
        const isDarkModeEnabled = document.body.classList.contains('dark-mode');
        localStorage.setItem('darkModeEnabled', isDarkModeEnabled);
    });

    // Charger le choix du mode sombre depuis le stockage local au chargement de la page
    const isDarkModeEnabled = localStorage.getItem('darkModeEnabled') === 'true';
    if (isDarkModeEnabled) {
        document.body.classList.add('dark-mode');
    }
});
document.addEventListener('DOMContentLoaded', function () {
    const accordions = document.querySelectorAll('.accordeon');

    accordions.forEach(accordion => {
        const titre = accordion.querySelector('.titre');

        titre.addEventListener('click', function () {
            accordion.classList.toggle('open');

            if (accordion.classList.contains('open')) {
                // Si l'accordéon est ouvert, ajoutez la classe "open" à l'accordéon
                accordion.querySelector('.contenu').style.height = 'auto';
            } else {
                // Si l'accordéon est fermé, retirez la classe "open" et réinitialisez la hauteur à 0
                accordion.querySelector('.contenu').style.height = '0';
            }
        });
    });
});


document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');

    tabs.forEach(tab => {
        tab.addEventListener('click', function () {
            // Retirer la classe "tab-active" de tous les onglets
            tabs.forEach(t => t.classList.remove('tab-active'));

            // Ajouter la classe "tab-active" à l'onglet actuel
            this.classList.add('tab-active');

            // Récupérer la cible associée à l'onglet
            const target = this.getAttribute('data-target');

            // Retirer la classe "active" de tous les contenus
            document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));

            // Ajouter la classe "active" au contenu correspondant à l'axe
            document.querySelector(`.content.${target}`).classList.add('active');
        });
    });
});
