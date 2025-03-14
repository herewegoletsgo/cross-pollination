// Function to toggle more info sections
function toggleMoreInfo(button) {
    const moreInfo = button.nextElementSibling;
    if (moreInfo.style.display === 'block') {
        moreInfo.style.display = 'none';
        button.textContent = 'Learn More';
    } else {
        moreInfo.style.display = 'block';
        button.textContent = 'Show Less';
    }
}

// Function to render idea cards
function renderIdeaCards() {
    const ideaDirectory = document.querySelector('.idea-directory');
    ideaDirectory.innerHTML = ''; // Clear existing cards

    ideasData.forEach(idea => {
        const card = document.createElement('div');
        card.className = 'idea-card';
        
        card.innerHTML = `
            <h3>${idea.title}</h3>
            <p>${idea.shortDescription}</p>
            <p><strong>Technology:</strong> ${idea.technology}</p>
            <p><strong>Values:</strong> ${idea.values}</p>
            <button class="capital-btn" onclick="alert('Pledge interest—details soon.')">Capital: Open</button>
            <button class="learn-more-btn" onclick="toggleMoreInfo(this)">Learn More</button>
            <div class="more-info">
                <h4>Problem Addressed</h4>
                <p>${idea.problemAddressed}</p>
                <h4>Solution Details</h4>
                <p>${idea.solutionDetails}</p>
                <h4>Potential Scale</h4>
                <p>${idea.potentialScale}</p>
                <h4>Milestones for Capital</h4>
                <p>${idea.milestonesForCapital}</p>
                <h4>Team Needs</h4>
                <p>${idea.teamNeeds}</p>
            </div>
            <div class="score">
                Score: ${idea.score} (Values: ${idea.valueScore}, Innovation: ${idea.innovationScore}, Applicability: ${idea.applicabilityScore})
            </div>
        `;
        
        ideaDirectory.appendChild(card);
    });
}

// Function to handle idea submission
function submitIdea() {
    alert('Thank you for your interest! The idea submission form will be available soon.');
}

// Initialize the page when the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    renderIdeaCards();
}); 