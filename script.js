async function loadAboutText() {
    const container = document.getElementById('about-text');
    
    try {
        const response = await fetch('about_me.txt');
        if (!response.ok) throw new Error('Text file not found');
        
        const text = await response.text();
        
        // Preserve line breaks from the .txt file
        container.innerHTML = text.replace(/\n/g, '<br>');
    } catch (error) {
        console.error("Error loading bio:", error);
        container.innerHTML = "Welcome! My full biography is being updated.";
    }
}

// Initialize everything when the page loads
window.onload = () => {
    loadAboutText();
};