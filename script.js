const messages = [
    "Are you sure?",
    "Really sure??",
    "Are you positive?",
    "Pookie please...",
    "Just think about it!",
    "If you say no, I will be really sad...",
    "I will be very sad...",
    "I will be very very very sad...",
    "Ok fine, I will stop asking...",
    "Just kidding, say yes please! ❤️"
];

let messageIndex = 0;
let noButtonPosition = { x: 0, y: 0 };

function createHearts() {
    const heartsContainer = document.getElementById('heartsBg');
    const numberOfHearts = 20;

    for (let i = 0; i < numberOfHearts; i++) {
        const heart = document.createElement('div');
        heart.className = 'heart';
        heart.innerHTML = `
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="currentColor" stroke="none">
                <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"/>
            </svg>
        `;
        
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.top = `${Math.random() * 100}%`;
        heart.style.animationDelay = `${Math.random() * 5}s`;
        heart.style.transform = `scale(${0.5 + Math.random()})`;
        
        heartsContainer.appendChild(heart);
    }
}

function moveButton(button) {
    const container = document.querySelector('.buttons');
    const containerRect = container.getBoundingClientRect();
    const buttonRect = button.getBoundingClientRect();

    const maxX = containerRect.width - buttonRect.width;
    const maxY = containerRect.height - buttonRect.height;

    const newX = Math.random() * maxX;
    const newY = Math.random() * maxY;

    noButtonPosition = { x: newX, y: newY };
    
    button.style.transform = `translate(${newX}px, ${newY}px)`;
}

function handleNoClick() {
    const noButton = document.querySelector('.btn-no');
    const yesButton = document.querySelector('.btn-yes');
    
    noButton.textContent = messages[messageIndex];
    messageIndex = (messageIndex + 1) % messages.length;
    
    const currentSize = parseFloat(window.getComputedStyle(yesButton).fontSize);
    yesButton.style.fontSize = `${currentSize * 1.2}px`;
    
    moveButton(noButton);
}

function handleNoHover() {
    const noButton = document.querySelector('.btn-no');
    moveButton(noButton);
}

function handleYesClick() {
    const card = document.querySelector('.proposal-card');
    card.style.transform = 'translateX(-100vw) rotate(-20deg)';
    card.style.opacity = '0';
    
    setTimeout(() => {
        window.location.href = "yes_page.html";
    }, 500);
}

// Initialize the page
document.addEventListener('DOMContentLoaded', () => {
    createHearts();
    const proposalCard = document.getElementById('proposalCard');
    proposalCard.style.opacity = '0';
    
    setTimeout(() => {
        proposalCard.style.opacity = '1';
    }, 500);

    // Add hover event for the no button
    const noButton = document.querySelector('.btn-no');
    noButton.addEventListener('mouseover', handleNoHover);
});