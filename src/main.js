// Add your real key here if you have it!
const API_KEY = 'DEMO_KEY'; 
const BASE_URL = 'https://api.nasa.gov/planetary/apod';
const appContainer = document.querySelector('#app');

async function fetchAPOD() {
    try {
        const response = await fetch(`${BASE_URL}?api_key=${API_KEY}`);
        
        // Handle rate limits / errors gracefully
        if (!response.ok) {
            throw new Error(`Error: ${response.status} - Please check your API key.`);
        }
        
        const data = await response.json();
        renderUI(data);

    } catch (error) {
        console.error("Fetch failed:", error);
        appContainer.innerHTML = `
            <p style="color: #ff6b6b; font-weight: bold;">
                Connection to cosmos failed. Try refreshing or updating your API Key.
            </p>
        `;
    }
}

function renderUI(data) {
    // Check if NASA sent a video or an image
    const isVideo = data.media_type === 'video';
    const mediaHTML = isVideo 
        ? `<iframe src="${data.url}" frameborder="0" allowfullscreen></iframe>`
        : `<img src="${data.url}" alt="${data.title}" />`;

    // Inject content into the #app div safely
    appContainer.innerHTML = `
        <h1>${data.title}</h1>
        ${mediaHTML}
        <p class="explanation">${data.explanation}</p>
    `;
}

// Start the sequence
fetchAPOD();