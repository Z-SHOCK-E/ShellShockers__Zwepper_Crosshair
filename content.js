// Use MutationObserver to detect dynamically loaded crosshair elements
const observer = new MutationObserver((mutations) => {
    // Include '#reticleDot' along with the class selectors
    const crosshairSelectors = ['.crosshair', '.shlShk-crosshair', '#reticleDot'];
    
    crosshairSelectors.forEach((selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            // Add a custom class to ensure crosshair.css styles apply
            if (!element.classList.contains('custom-crosshair')) {
                element.classList.add('custom-crosshair');
            }
        });
    });
});

// Start observing the DOM for changes
observer.observe(document.body, {
    childList: true,
    subtree: true
});

// Initial check in case the crosshair is already loaded
document.addEventListener('DOMContentLoaded', () => {
    const crosshairSelectors = ['.crosshair', '.reticle', '.shlShk-crosshair', '#reticleDot'];
    crosshairSelectors.forEach((selector) => {
        const elements = document.querySelectorAll(selector);
        elements.forEach((element) => {
            element.classList.add('custom-crosshair');
        });
    });
});