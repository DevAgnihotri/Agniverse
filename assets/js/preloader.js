/*========== PRELOADER FUNCTIONALITY ==========*/

// Preloader with guaranteed 11-second duration
document.addEventListener("DOMContentLoaded", () => {
    console.log('DOM loaded! Starting 11-second preloader countdown...');
    
    // Force preloader to run for exactly 11 seconds
    setTimeout(() => {
        console.log('11 seconds completed! Hiding preloader...');
        document.body.classList.add("loaded");
        console.log('Preloader will fade out via CSS transition');
    }, 11000); // Exactly 11 seconds
});

// Remove the backup window load listener to prevent early hiding
// The preloader will always run for the full 11 seconds

/*========== PRELOADER FUNCTIONALITY // ==========*/
