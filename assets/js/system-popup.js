/*========== SYSTEM POPUP FUNCTIONALITY ==========*/

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    initializeSystemPopup();
});

function initializeSystemPopup() {
    // Get all system list items
    const systemItems = document.querySelectorAll('.system-list-item');
    const modal = document.getElementById('systemPopupModal');
    const closeBtn = document.getElementById('systemPopupClose');
    const modalTitle = document.getElementById('systemPopupTitle');
    
    // Complete system data - independent of HTML structure
    const systemData = {
        'Atmosphere': {
            title: 'Atmosphere',
            video: './assets/video/atm.mp4',
            description: 'The thin layer made up of a mixture of gases and particles suspended in the air that surround the Earth (78% N2, 21% oxygen, 0.9% argon, and 0.1% other gases).',
            details: [
                'There are five main layers that make up the atmosphere:',
                '<b>1. Troposphere:</b> The lowest layer where weather occurs and where we live. It contains about 75% of the atmosphere\'s mass.',
                '<b>2. Stratosphere:</b> Contains the ozone layer, which absorbs and scatters ultraviolet solar radiation.',
                '<b>3. Mesosphere:</b> The layer where most meteors burn up upon entering the atmosphere.',
                '<b>4. Thermosphere:</b> A layer with very thin air, where the auroras occur and the International Space Station orbits.',
                '<b>5. Exosphere:</b> The outermost layer, where the atmosphere thins out into space.'
            ],
            source: 'https://www.nasa.gov/general/what-is-earths-atmosphere'
        },
        'Hydrosphere': {
            title: 'Hydrosphere',
            video: './assets/video/hyd.mp4',
            description: 'A sphere that includes the liquid ocean, inland water bodies and groundwater.',
            details: [
                'Hydrosphere covers 70% of the Earth\'s surface.',
                'Hydrosphere is necessary for sustaining life on Earth.',
                'The Hydrosphere is a crucial part for the Water Cycle, includes processes like evaporation, condensation, precipitation etc.',
                'Oceans absorb and store solar energy, distribute heat around the globe through currents and influence weather patterns.'
            ],
            source: 'https://mynasadata.larc.nasa.gov/basic-page/about-hydrosphere'
        },
        'Cryosphere': {
            title: 'Cryosphere',
            video: './assets/video/cry.mp4',
            description: 'A subset of the Hydrosphere that consists of frozen water. (Snow and Ice)',
            details: [
                'The Cryosphere plays a critical role in regulating climate and sea levels.',
                'Around three-quarters of the world\'s fresh water is stored in the Cryosphere, primarily in glaciers and ice caps.',
                'The Cryosphere helps regulate Earth\'s climate by reflecting incoming solar radiation back into space, a process known as the albedo effect.',
                'Melting ice from the cryosphere contributes to sea level rise, which can impact coastal ecosystems and human settlements.'
            ],
            source: 'https://mynasadata.larc.nasa.gov/basic-page/about-cryosphere'
        },
        'Geosphere': {
            title: 'Geosphere',
            video: './assets/video/geo.mp4',
            description: 'A sphere that includes the solid Earth; the core, mantle, crust and soil layers.',
            details: [
                '94% of the solid Earth is made up of the following elements: oxygen, iron, silicon, and magnesium.',
                'The movement of the tectonic plates causes earthquakes, volcanic eruptions and the formation of mountains.',
                'The geosphere is a source of essential natural resources, including minerals, fossil fuels and soil, which are crucial for human activities and ecosystems.'
            ],
            source: 'https://mynasadata.larc.nasa.gov/basic-page/about-geosphere'
        },
        'Biosphere': {
            title: 'Biosphere',
            video: './assets/video/bio.mp4',
            description: 'The Biosphere includes all life on Earth including life living on the Earth\'s Geosphere and in Hydrosphere, including humans and all organic matter that has not yet decomposed.',
            details: [
                'The Biosphere functions as Earth\'s life support system, regulating atmospheric composition, soil health, and the hydrological cycle.',
                'It is home to a vast diversity of life forms, from microorganisms to plants and animals. Biodiversity within the biosphere is crucial for ecosystem stability and resilience.',
                'The biosphere helps regulate Earth\'s climate by influencing the carbon cycle and other biogeochemical cycles.',
                'The biosphere interacts with the atmosphere, hydrosphere, and geosphere, creating a complex web of interdependencies that sustain life on Earth.'
            ],
            source: 'https://mynasadata.larc.nasa.gov/basic-page/about-biosphere'
        }
    };    // Add click listeners ONLY to system-list-item elements (not connection markers)
    systemItems.forEach((item, index) => {
        // Only add listeners to elements within .system-list, not .connection-markers
        if (item.closest('.system-list')) {
            item.style.cursor = 'pointer';
            item.addEventListener('click', function() {
                const systemName = this.querySelector('h4').textContent.trim();
                if (systemData[systemName]) {
                    openSystemPopup(systemName, systemData[systemName]);
                }
            });
        
            // Add hover effect
            item.addEventListener('mouseenter', function() {
                this.style.transform = 'scale(1.02)';
                this.style.transition = 'transform 0.3s ease';
            });
        
            item.addEventListener('mouseleave', function() {
                this.style.transform = 'scale(1)';
            });        }
    });
    
    // Close button functionality
    closeBtn.addEventListener('click', closeSystemPopup);
    
    // Close on backdrop click
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeSystemPopup();
        }
    });
    
    // Close on Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeSystemPopup();
        }
    });
}

function openSystemPopup(systemName, systemInfo) {
    const modal = document.getElementById('systemPopupModal');
    const modalTitle = document.getElementById('systemPopupTitle');
    const detailsTab = document.getElementById('detailsTab');
    
    // Set the title
    modalTitle.textContent = systemName;
    
    // Create the content HTML from the data
    const contentHTML = `
        <div class="row g-4 align-items-center">
            <div class="col-md-7">
                <video class="rounded-4" muted autoplay loop>
                    <source src="${systemInfo.video}" type="">
                </video>
            </div>
            <div class="col-md-5">
                <h3 class="text-uppercase text-white">${systemInfo.title}</h3>
                <h5 class="text-white fw-normal">${systemInfo.description}</h5>
            </div>
            <div class="col-md-12">
                ${systemInfo.details.map(detail => {
                    if (detail.includes('<b>')) {
                        return `<p class="mb-2">${detail}</p>`;
                    } else if (detail.includes(':')) {
                        return `<h5 class="text-white">${detail}</h5>`;
                    } else {
                        return `<p>${detail}</p>`;
                    }
                }).join('')}
                
                <p class="d-flex align-items-center">
                    <b class="me-1">Source: </b> 
                    <a class="text-link" target="_blank" href="${systemInfo.source}">
                        <img style="width: 2em;" src="./assets/img/nasa.svg" alt="">
                        ${systemInfo.source}
                    </a>
                </p>
            </div>
        </div>
    `;
    
    // Clear previous content and add new content
    detailsTab.innerHTML = contentHTML;
    
    // Ensure videos play properly
    const video = modal.querySelector('video');
    if (video) {
        video.muted = true;
        video.loop = true;
        video.play().catch(e => console.log('Video autoplay prevented:', e));
    }
    
    // Show details tab content
    detailsTab.style.display = 'block';
    
    // Show the modal
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

function closeSystemPopup() {
    const modal = document.getElementById('systemPopupModal');
    
    // Hide the modal
    modal.classList.remove('active');
    document.body.style.overflow = '';
    
    // Clear content after animation
    setTimeout(() => {
        document.getElementById('detailsTab').innerHTML = '';
    }, 300);
    
    console.log('Closed system popup');
}

// Export functions for global access
window.openSystemPopup = openSystemPopup;
window.closeSystemPopup = closeSystemPopup;

/*========== SYSTEM POPUP FUNCTIONALITY // ==========*/
