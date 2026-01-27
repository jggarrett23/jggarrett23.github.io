async function loadMarkdownContent(fileName, elementName) {
    try {
        const response = await fetch(fileName);
        const markdown = await response.text();
        
        // This line converts the Markdown to HTML
        const htmlContent = marked.parse(markdown);
        
        document.getElementById(elementName).innerHTML = htmlContent;
    } catch (error) {
        console.error("Error loading the markdown file:", error);
    }
}

// Initial load

// About me
loadMarkdownContent('about_me.md', 'about-text');

// Resume / CV
loadMarkdownContent('resume_cv.md', 'experience');

// Research
loadMarkdownContent('research.md', 'research-projects')

// Initialize everything when the page loads
window.onload = () => {
    loadMarkdownContent();
};

function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('section');
    sections.forEach(sec => sec.classList.add('hidden'));
    
    // Show the selected section
    document.getElementById(sectionId).classList.remove('hidden');
}

function toggleNav() {
    const sidebar = document.getElementById("sidebar");
    const content = document.getElementById("main-content");
    
    sidebar.classList.toggle("active");
    content.classList.toggle("shifted");
}

function openPoster(filePath) {
    const modal = document.getElementById("poster-modal");
    const frame = document.getElementById("modal-frame");
    
    frame.src = filePath;
    modal.style.display = "block";
    
    // Disable background scrolling while modal is open
    document.body.style.overflow = "hidden";
}

// Close logic
document.addEventListener('click', function(e) {
    const modal = document.getElementById("poster-modal");
    // Close if "X" is clicked OR if user clicks the blurred background
    if (e.target.classList.contains('close-modal') || e.target === modal) {
        modal.style.display = "none";
        document.getElementById("modal-frame").src = ""; // Stop loading PDF
        document.body.style.overflow = "auto"; // Re-enable scrolling
    }
});
