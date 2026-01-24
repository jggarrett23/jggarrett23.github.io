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

function toggleResumeMenu() {
    const sidebar = document.getElementById('resume-sidebar');
    const hamIcon = document.getElementById('ham-icon');
    const backIcon = document.getElementById('back-icon');
    const menuBtn = document.getElementById('resume-menu-btn'); // Grab the button too

    // Toggle the sidebar
    sidebar.classList.toggle('active');
    
    // Swap icons and button state
    if (sidebar.classList.contains('active')) {
        hamIcon.style.setProperty('display', 'none', 'important');
        backIcon.style.setProperty('display', 'inline-block', 'important');
    } else {
        hamIcon.style.setProperty('display', 'inline-block', 'important');
        backIcon.style.setProperty('display', 'none', 'important');
    }
}