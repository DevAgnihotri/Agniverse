// Starry Night Background Generator
// This script creates dynamic starry night elements with static positions

document.addEventListener('DOMContentLoaded', function() {
    generateStarryNight();
});

function generateStarryNight() {
    generateStars();
    generateComets();
    generateFallingStars();
    generateShootingTrails();
    generateDistantStars();
}

function generateStars() {
    const starsContainer = document.getElementById('stars-container');
    if (!starsContainer) return;
    
    // Static star positions for consistency
    const starPositions = [];
    for (let i = 0; i < 300; i++) {
        starPositions.push({
            left: Math.random() * 100,
            top: Math.random() * 100,
            size: Math.random() > 0.85 ? 6 : Math.random() > 0.7 ? 4 : Math.random() > 0.5 ? 2 : 1,
            opacity: Math.random() > 0.8 ? 0.9 : Math.random() > 0.6 ? 0.7 : Math.random() > 0.4 ? 0.5 : 0.3,
            delay: Math.random() * 5
        });
    }
    
    starPositions.forEach((pos, i) => {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = pos.left + '%';
        star.style.top = pos.top + '%';
        star.style.width = pos.size + 'px';
        star.style.height = pos.size + 'px';
        star.style.opacity = pos.opacity;
        star.style.animationDelay = pos.delay + 's';
        starsContainer.appendChild(star);
    });
}

function generateComets() {
    const cometsContainer = document.getElementById('comets-container');
    if (!cometsContainer) return;
    
    // Static comet positions and timing
    const cometData = [
        { left: 10, top: 5, delay: 0, duration: 15 },
        { left: 30, top: 15, delay: 2, duration: 16 },
        { left: 50, top: 10, delay: 4, duration: 14 },
        { left: 70, top: 20, delay: 6, duration: 17 },
        { left: 90, top: 5, delay: 8, duration: 15 },
        { left: 15, top: 40, delay: 1, duration: 16 },
        { left: 60, top: 45, delay: 3, duration: 14 },
        { left: 85, top: 35, delay: 5, duration: 15 }
    ];
    
    cometData.forEach((data, i) => {
        const comet = document.createElement('div');
        comet.className = 'comet';
        comet.style.left = data.left + '%';
        comet.style.top = data.top + '%';
        comet.style.animationDelay = data.delay + 's';
        comet.style.animationDuration = data.duration + 's';
        cometsContainer.appendChild(comet);
    });
}

function generateFallingStars() {
    const fallingStarsContainer = document.getElementById('falling-stars-container');
    if (!fallingStarsContainer) return;
    
    const fallingStarData = [
        { left: 15, delay: 0, duration: 8 },
        { left: 35, delay: 1.5, duration: 7 },
        { left: 55, delay: 3, duration: 9 },
        { left: 75, delay: 4.5, duration: 8 },
        { left: 25, delay: 6, duration: 7 },
        { left: 65, delay: 7.5, duration: 8 }
    ];
    
    fallingStarData.forEach((data, i) => {
        const fallingStar = document.createElement('div');
        fallingStar.className = 'falling-star';
        fallingStar.style.left = data.left + '%';
        fallingStar.style.top = '-5%';
        fallingStar.style.animationDelay = data.delay + 's';
        fallingStar.style.animationDuration = data.duration + 's';
        fallingStarsContainer.appendChild(fallingStar);
    });
}

function generateShootingTrails() {
    const shootingTrailsContainer = document.getElementById('shooting-trails-container');
    if (!shootingTrailsContainer) return;
    
    const shootingTrailData = [
        { right: 10, top: 15, delay: 0, duration: 4 },
        { right: 20, top: 25, delay: 2, duration: 5 },
        { right: 15, top: 35, delay: 4, duration: 4 },
        { right: 25, top: 20, delay: 6, duration: 5 }
    ];
    
    shootingTrailData.forEach((data, i) => {
        const shootingTrail = document.createElement('div');
        shootingTrail.className = 'shooting-trail';
        shootingTrail.style.right = data.right + '%';
        shootingTrail.style.top = data.top + '%';
        shootingTrail.style.animationDelay = data.delay + 's';
        shootingTrail.style.animationDuration = data.duration + 's';
        shootingTrailsContainer.appendChild(shootingTrail);
    });
}

function generateDistantStars() {
    const distantStarsContainer = document.getElementById('distant-stars-container');
    if (!distantStarsContainer) return;
    
    // Static distant star positions
    const distantStarPositions = [
        { left: 20, top: 15 }, { left: 45, top: 25 }, { left: 70, top: 10 },
        { left: 85, top: 30 }, { left: 30, top: 50 }, { left: 60, top: 40 },
        { left: 10, top: 65 }, { left: 80, top: 55 }, { left: 25, top: 75 },
        { left: 55, top: 80 }, { left: 75, top: 70 }, { left: 40, top: 85 },
        { left: 15, top: 35 }, { left: 65, top: 60 }, { left: 90, top: 45 }
    ];
    
    const delays = [0, 0.5, 1, 1.5, 2, 2.5, 3, 3.5, 4, 4.5, 0.3, 0.8, 1.3, 1.8, 2.3];
    const durations = [5, 6, 5, 6, 7, 5, 6, 7, 5, 6, 5, 6, 7, 5, 6];
    
    distantStarPositions.forEach((pos, i) => {
        const distantStar = document.createElement('div');
        distantStar.className = 'distant-star';
        distantStar.style.left = pos.left + '%';
        distantStar.style.top = pos.top + '%';
        distantStar.style.animationDelay = delays[i] + 's';
        distantStar.style.animationDuration = durations[i] + 's';
        distantStarsContainer.appendChild(distantStar);
    });
}

// Setup background image hover effects

