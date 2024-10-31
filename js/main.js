let currentLanguage = 'fr';

// Traductions
const translations = {
    fr: {
        title: "Audi Série A",
        period: "Période",
        specs: "Caractéristiques principales",
        showMotorizations: "Motorisation",
        motor: "Moteur",
        configuration: "Configuration",
        power: "Puissance",
        torque: "Couple",
        gearbox: "Boite de vitesse",
        cumsuption: "Consommation",
        alimentation: "Alimentation"
    },
    en: {
        title: "Audi A Series",
        period: "Period",
        specs: "Main Features",
        showMotorizations: "Powertrain",
        motor: "Motor",
        configuration: "Configuration",
        power: "Power",
        torque: "Torque",
        gearbox: "Gearbox",
        cumsuption: "Cumsuption",
        alimentation: "Alimentation"
    }
};

// Changer la langue
function setLanguage(lang) {
    currentLanguage = lang;
    document.querySelector('[data-i18n="title"]').textContent = translations[lang].title;

    const modelBanner = document.getElementById("model-banner");
    modelBanner.innerHTML = '';

    models.forEach(model => {
        const modelButton = document.createElement("button");
        modelButton.classList.add("model-button");
        modelButton.textContent = model.name;
        modelButton.addEventListener("click", () => displayModelDetails(model));
        modelBanner.appendChild(modelButton);
    });

    // Vérifie si un modèle est déjà sélectionné et met à jour les détails
    const selectedModel = document.getElementById("model-details").dataset.selectedModel;
    if (selectedModel) {
        const modelData = models.find(m => m.name === selectedModel);
        if (modelData) {
            displayModelDetails(modelData);
        }
    }
}

// Charger les données au démarrage
document.addEventListener("DOMContentLoaded", () => {
    document.getElementById("lang-fr").addEventListener("click", () => setLanguage('fr'));
    document.getElementById("lang-en").addEventListener("click", () => setLanguage('en'));
    setLanguage(currentLanguage);
});

// Fonction d'affichage des détails des modèles
function displayModelDetails(model) {
    const modelDetails = document.getElementById("model-details");
    modelDetails.innerHTML = "";
    modelDetails.dataset.selectedModel = model.name;  // Enregistrer le modèle sélectionné

    model.generations.forEach(generation => {
        const generationCard = document.createElement("div");
        generationCard.classList.add("model-card");

        generationCard.innerHTML = `
            <h2 class="model-title">${generation.name} ${generation.type} (${generation.code})</h2>
            <p class="model-date">${generation.period[currentLanguage]}</p>
        `;

        generation.phases.forEach(phase => {
            const phaseSection = document.createElement("div");
            phaseSection.classList.add("phase-section");

            phaseSection.innerHTML = `
                <h3>${phase.phase}</h3>
                <p class="model-date">${phase.years[currentLanguage]}</p>

                <div class="carousel">
                    ${phase.images.map(image => `<img src="${image}" alt="${phase.phase} - ${generation.name}">`).join('')}
                </div>

                <button class="show-specs-button">+ ${translations[currentLanguage].showMotorizations}</button>
                <table class="specs-table">
                    <tr>
                        <th>${translations[currentLanguage].motor}</th>
                        <th>${translations[currentLanguage].configuration}</th>
                        <th>${translations[currentLanguage].power}</th>
                        <th>${translations[currentLanguage].torque}</th>
                        <th>${translations[currentLanguage].gearbox}</th>
                        <th>${translations[currentLanguage].cumsuption}</th>
                        <th>${translations[currentLanguage].alimentation}</th>
                    </tr>
                    ${phase.specs.map(spec => `
                        <tr>
                            <td>${spec.motor}</td>
                            <td>${spec.configuration[currentLanguage]}</td>
                            <td>${spec.power}</td>
                            <td>${spec.torque}</td>
                            <td>${spec.transmission[currentLanguage]}</td>
                            <td>${spec.consumption}</td>
                            <td>${spec.alimentation[currentLanguage]}</td>
                        </tr>
                    `).join('')}
                </table>
            `;

            const specsButton = phaseSection.querySelector(".show-specs-button");
            const specsTable = phaseSection.querySelector(".specs-table");
            specsButton.addEventListener("click", () => {
                specsTable.style.display = specsTable.style.display === "table" ? "none" : "table";
                const isVisible = specsTable.style.display === "table";
                specsButton.textContent = (isVisible ? "- " : "+ ") + translations[currentLanguage].showMotorizations;
            });

            generationCard.appendChild(phaseSection);

        });

        modelDetails.appendChild(generationCard);
    });
}

