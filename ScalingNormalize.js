if (window.matchMedia("(min-width: 900px)").matches) {
    document.addEventListener(`DOMContentLoaded`, () => {
        // Get the value of `devicePixelRatio`
        const dpr = window.devicePixelRatio;
        // If the value is 1, return early
        if (dpr === 1) {
            return;
        }
        // Define the base zoom
        const baseZoom = 1;

        // Calculate the zoom scaling
        const zoom = baseZoom / dpr;

        // Create a style element
        const styleElement = document.createElement(`style`);

        // Add CSS rule to the style element
        styleElement.innerHTML = `
            @media (-webkit-device-pixel-ratio: ${dpr}) {
            :root {
            zoom: ${zoom};
            }
            }
            `;

        // Add the style element to the document
        document.head.appendChild(styleElement);
    });
}
