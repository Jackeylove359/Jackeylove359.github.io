/*
 * Student Name: Tsunami
 * Personal Portfolio Website JavaScript File
 * This file contains all interactive features of the website
 */

// ===== 1. Wait for DOM to load =====
// Use DOMContentLoaded event to ensure HTML is fully loaded before executing JavaScript
document.addEventListener('DOMContentLoaded', function() {
    // Initialize all features
    initUsernameFeature();      // Initialize username display feature
    initColorChangeFeature();   // Initialize button color change feature
    initScreenInfoFeature();    // Initialize screen info display feature
    initContactForm();          // Initialize contact form feature
});

// ===== 2. Username Display Feature =====
// This feature allows users to enter their name and displays a welcome message at the top of the page
function initUsernameFeature() {
    // Get input field and submit button elements
    const usernameInput = document.getElementById('username-input');
    const submitButton = document.getElementById('submit-name');
    const welcomeMessage = document.getElementById('welcome-message');
    
    // Check if elements exist (some pages may not have these elements)
    if (!usernameInput || !submitButton) {
        return; // Return directly if elements don't exist
    }
    
    // Add click event listener to submit button
    submitButton.addEventListener('click', function() {
        // Get user input name and trim whitespace
        const username = usernameInput.value.trim();
        
        // Check if user entered a name
        if (username) {
            // Update welcome message if name is entered
            if (welcomeMessage) {
                welcomeMessage.textContent = 'Welcome, ' + username + '!';
            }
            // Show welcome alert
            alert('Hello, ' + username + '! Welcome to my personal website.');
        } else {
            // Prompt user to enter name if empty
            alert('Please enter your name!');
        }
    });
    
    // Add Enter key support for input field
    usernameInput.addEventListener('keypress', function(event) {
        // Check if Enter key is pressed
        if (event.key === 'Enter') {
            // Trigger submit button click event
            submitButton.click();
        }
    });
}

// ===== 3. Button Color Change Feature =====
// This feature allows users to click a button to toggle its background color
function initColorChangeFeature() {
    // Get color change button
    const colorButton = document.getElementById('color-btn');
    
    // Check if button exists
    if (!colorButton) {
        return; // Return directly if button doesn't exist
    }
    
    // Define color array storing colors the button can toggle through
    const colors = [
        '#e74c3c', // Red
        '#3498db', // Blue
        '#2ecc71', // Green
        '#f39c12', // Orange
        '#9b59b6', // Purple
        '#1abc9c', // Teal
        '#34495e', // Dark Gray
        '#e91e63'  // Pink
    ];
    
    // Initialize color index
    let colorIndex = 0;
    
    // Add click event listener to button
    colorButton.addEventListener('click', function() {
        // Increment index and switch to next color
        colorIndex = (colorIndex + 1) % colors.length;
        // Apply new color to button background
        colorButton.style.backgroundColor = colors[colorIndex];
        // Output current color to console (for debugging)
        console.log('Button color changed to: ' + colors[colorIndex]);
    });
}

// ===== 4. Screen Information Display Feature =====
// This feature displays user's screen information
function initScreenInfoFeature() {
    // Get info button
    const infoButton = document.getElementById('info-btn');
    
    // Check if button exists
    if (!infoButton) {
        return; // Return directly if button doesn't exist
    }
    
    // Add click event listener to button
    infoButton.addEventListener('click', function() {
        // Get screen information
        const screenWidth = window.screen.width;          // Screen width
        const screenHeight = window.screen.height;        // Screen height
        const availWidth = window.screen.availWidth;      // Available width
        const availHeight = window.screen.availHeight;    // Available height
        const colorDepth = window.screen.colorDepth;      // Color depth
        const pixelRatio = window.devicePixelRatio;       // Pixel ratio
        const windowWidth = window.innerWidth;            // Window width
        const windowHeight = window.innerHeight;          // Window height
        
        // Build info message string
        const infoMessage = 
            '===== Screen Information =====\n\n' +
            'Screen Resolution: ' + screenWidth + ' x ' + screenHeight + '\n' +
            'Available Resolution: ' + availWidth + ' x ' + availHeight + '\n' +
            'Color Depth: ' + colorDepth + '-bit\n' +
            'Pixel Ratio: ' + pixelRatio + '\n' +
            'Current Window Size: ' + windowWidth + ' x ' + windowHeight + '\n\n' +
            'Browser: ' + navigator.userAgent;
        
        // Display info using alert
        alert(infoMessage);
        
        // Also output info to console
        console.log('Screen Information:', {
            screenWidth: screenWidth,
            screenHeight: screenHeight,
            availWidth: availWidth,
            availHeight: availHeight,
            colorDepth: colorDepth,
            pixelRatio: pixelRatio,
            windowWidth: windowWidth,
            windowHeight: windowHeight,
            userAgent: navigator.userAgent
        });
    });
}

// ===== 5. Contact Form Feature =====
// This feature handles contact form submission and validation
function initContactForm() {
    // Get form element
    const contactForm = document.getElementById('contact-form');
    const formFeedback = document.getElementById('form-feedback');
    
    // Check if form exists
    if (!contactForm) {
        return; // Return directly if form doesn't exist
    }
    
    // Add submit event listener to form
    contactForm.addEventListener('submit', function(event) {
        // Prevent default form submission behavior (prevent page refresh)
        event.preventDefault();
        
        // Get form fields
        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const subjectInput = document.getElementById('subject');
        const messageInput = document.getElementById('message');
        
        // Get field values and trim whitespace
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const subject = subjectInput.value.trim();
        const message = messageInput.value.trim();
        
        // Validate form fields
        // Check if name is empty
        if (!name) {
            showFeedback('Please enter your name!', 'error');
            nameInput.focus();
            return;
        }
        
        // Check if email is empty
        if (!email) {
            showFeedback('Please enter your email address!', 'error');
            emailInput.focus();
            return;
        }
        
        // Validate email format (using regular expression)
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailPattern.test(email)) {
            showFeedback('Please enter a valid email address!', 'error');
            emailInput.focus();
            return;
        }
        
        // Check if subject is empty
        if (!subject) {
            showFeedback('Please enter the message subject!', 'error');
            subjectInput.focus();
            return;
        }
        
        // Check if message content is empty
        if (!message) {
            showFeedback('Please enter your message!', 'error');
            messageInput.focus();
            return;
        }
        
        // Check message content length
        if (message.length < 10) {
            showFeedback('Message content must be at least 10 characters!', 'error');
            messageInput.focus();
            return;
        }
        
        // If all validation passes, show success message
        showFeedback('Message sent successfully! Thank you for your message, I will reply as soon as possible.', 'success');
        
        // Output form data to console (simulating send)
        console.log('Form submitted successfully!', {
            name: name,
            email: email,
            subject: subject,
            message: message,
            timestamp: new Date().toLocaleString()
        });
        
        // Reset form
        contactForm.reset();
        
        // Hide feedback message after 5 seconds
        setTimeout(function() {
            if (formFeedback) {
                formFeedback.style.display = 'none';
            }
        }, 5000);
    });
    
    // Helper function: Display form feedback message
    function showFeedback(message, type) {
        if (formFeedback) {
            formFeedback.textContent = message;
            formFeedback.className = 'form-feedback ' + type;
        }
    }
}

// ===== 6. Smooth Scroll Feature =====
// Add smooth scrolling effect to all in-page anchor links
document.addEventListener('DOMContentLoaded', function() {
    // Get all links starting with #
    const anchorLinks = document.querySelectorAll('a[href^="#"]');
    
    // Add click event to each anchor link
    anchorLinks.forEach(function(link) {
        link.addEventListener('click', function(event) {
            // Get target element ID
            const targetId = this.getAttribute('href');
            
            // Check if it's a valid anchor
            if (targetId !== '#') {
                const targetElement = document.querySelector(targetId);
                
                // Execute smooth scroll if target element exists
                if (targetElement) {
                    event.preventDefault();
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            }
        });
    });
});

// ===== 7. Navigation Bar Scroll Effect =====
// Add shadow effect to navigation bar when page scrolls
window.addEventListener('scroll', function() {
    const header = document.querySelector('header');
    
    if (header) {
        // Check scroll position
        if (window.scrollY > 10) {
            // Add stronger shadow
            header.style.boxShadow = '0 4px 10px rgba(0,0,0,0.2)';
        } else {
            // Restore default shadow
            header.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
        }
    }
});

// ===== 8. Console Welcome Message =====
// Output welcome message to browser console
console.log('%cWelcome to my personal portfolio website!', 'font-size: 20px; font-weight: bold; color: #3498db;');
console.log('%cI am Tsunami, a passionate student.', 'font-size: 14px; color: #666;');
console.log('%cHope you enjoy my website!', 'font-size: 14px; color: #666;');
