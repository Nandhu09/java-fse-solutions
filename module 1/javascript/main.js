// 1. Basic Setup and Initialization
console.log("Welcome to the Community Portal");
window.addEventListener('load', () => {
    alert('Page is fully loaded');
});

// 2. Data Types and Operators
const eventName = "Community Music Festival";
const eventDate = "2025-06-15";
let availableSeats = 100;

// 3. Conditionals, Loops, and Error Handling
let events = [
    { name: "Music Concert", date: "2025-06-15", seats: 100, category: "Music" },
    { name: "Art Exhibition", date: "2025-06-20", seats: 50, category: "Art" },
    { name: "Tech Workshop", date: "2025-06-25", seats: 30, category: "Technology" }
];

function displayValidEvents() {
    try {
        const today = new Date().toISOString().split('T')[0];
        events.forEach(event => {
            if (event.date >= today && event.seats > 0) {
                displayEventCard(event);
            }
        });
    } catch (error) {
        console.error('Error displaying events:', error);
    }
}

// 4. Functions, Scope, and Closures
function addEvent(name, date, seats, category) {
    events.push({ name, date, seats, category });
}

function registerUser(eventId) {
    const event = events.find(e => e.id === eventId);
    if (event && event.seats > 0) {
        event.seats--;
        updateEventCard(event);
    }
}

// Closure to track category registrations
function createCategoryTracker() {
    const registrations = new Map();
    return {
        addRegistration: (category) => {
            registrations.set(category, (registrations.get(category) || 0) + 1);
        },
        getTotal: (category) => registrations.get(category) || 0
    };
}

// 5. Objects and Prototypes
function Event(name, date, seats, category) {
    this.name = name;
    this.date = date;
    this.seats = seats;
    this.category = category;
}

Event.prototype.checkAvailability = function() {
    return this.seats > 0;
};

// 6. Arrays and Methods
function filterEventsByCategory(category) {
    return events.filter(event => event.category === category);
}

function formatEventCards(events) {
    return events.map(event => 
        `${event.category} Event: ${event.name}`
    );
}

// 7. DOM Manipulation
function displayEventCard(event) {
    const container = document.querySelector('#eventList');
    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `
        <h3>${event.name}</h3>
        <p>Date: ${event.date}</p>
        <p>Seats: ${event.seats}</p>
        <button onclick="registerUser('${event.id}')">Register</button>
    `;
    container.appendChild(card);
}

function updateEventCard(event) {
    const card = document.querySelector(`[data-event-id="${event.id}"]`);
    if (card) {
        card.querySelector('p:last-child').textContent = `Seats: ${event.seats}`;
    }
}

// 8. Event Handling
function setupEventListeners() {
    document.getElementById('searchInput').addEventListener('input', handleSearch);
    document.getElementById('categoryFilter').addEventListener('change', handleCategoryFilter);
}

function handleSearch(event) {
    const searchTerm = event.target.value.toLowerCase();
    filterEvents(searchTerm);
}

function handleCategoryFilter(event) {
    const category = event.target.value;
    filterEventsByCategory(category);
}

// 9. Async Operations
async function fetchEvents() {
    try {
        const response = await fetch('mock-api/events.json');
        const data = await response.json();
        events = data;
        displayEvents();
    } catch (error) {
        console.error('Error fetching events:', error);
    }
}

// 10. Modern JavaScript Features
function registerUserModern({ name, email }, eventId) {
    const event = events.find(e => e.id === eventId);
    if (event && event.seats > 0) {
        event.seats--;
        return { success: true, message: 'Registration successful' };
    }
    return { success: false, message: 'No seats available' };
}

// 11. Form Handling
function handleFormSubmission(event) {
    event.preventDefault();
    const formData = new FormData(event.target);
    const name = formData.get('name');
    const email = formData.get('email');
    
    if (!name || !email) {
        showFormError('Please fill all fields');
        return;
    }
    
    // Process registration
    processRegistration({ name, email });
}

function showFormError(message) {
    const errorDiv = document.createElement('div');
    errorDiv.className = 'error-message';
    errorDiv.textContent = message;
    document.querySelector('form').appendChild(errorDiv);
}

// 12. AJAX & Fetch API
async function submitRegistration(userData) {
    try {
        const response = await fetch('mock-api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(userData)
        });
        const result = await response.json();
        showRegistrationResult(result);
    } catch (error) {
        console.error('Registration error:', error);
        showRegistrationResult({ success: false, message: 'Registration failed' });
    }
}

// 13. Debugging
function debugRegistration() {
    console.log('Starting registration process...');
    console.log('Form data:', document.forms[0].elements);
    console.log('Event target:', document.getElementById('searchInput'));
}

// 14. jQuery Example (commented out as jQuery is not used in this implementation)
// function setupJQuery() {
//     $('#registerBtn').click(function() {
//         $(this).closest('.event-card').fadeOut();
//     });
// }

// YouTube Player API integration
var player;

function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '315',
        width: '560',
        videoId: 'YG8-Yb3utHM',
        playerVars: {
            'playsinline': 1
        },
        events: {
            'onReady': onPlayerReady
        }
    });
}

function onPlayerReady(event) {
    console.log('Video is ready');
}

function playVideo() {
    if (player) player.playVideo();
}

function pauseVideo() {
    if (player) player.pauseVideo();
}

function restartVideo() {
    if (player) {
        player.seekTo(0);
        player.playVideo();
    }
}

// Form validation
function validatePhone(input) {
    const phoneRegex = /^\d{10}$/;
    if (!phoneRegex.test(input.value)) {
        alert('Please enter a valid 10-digit phone number');
        input.focus();
    }
}

function countCharacters(textarea) {
    document.getElementById('charCount').textContent = textarea.value.length;
}

function enlargeImage(img) {
    const currentWidth = img.style.width;
    img.style.width = currentWidth === '400px' ? '200px' : '400px';
    img.style.height = currentWidth === '400px' ? '200px' : '400px';
    img.style.position = currentWidth === '400px' ? 'static' : 'relative';
    img.style.zIndex = currentWidth === '400px' ? '1' : '1000';
}

// Form submission
function showConfirmation() {
    document.getElementById('confirmation').textContent = 'Registration submitted successfully!';
}

function handleSubmit(event) {
    event.preventDefault();
    showConfirmation();
    return false;
}

// Geolocation
function findNearbyEvents() {
    const result = document.getElementById("locationResult");
    const eventsList = document.getElementById("eventsList");

    if (!navigator.geolocation) {
        result.textContent = "Geolocation is not supported by your browser.";
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            const lat = position.coords.latitude.toFixed(6);
            const lon = position.coords.longitude.toFixed(6);
            result.textContent = `📍 Your location: Latitude ${lat}, Longitude ${lon}`;

            // Sample nearby events
            const nearbyEventsList = [
                { name: "Local Music Festival", distance: "0.5 km", date: "Next Saturday", type: "Music" },
                { name: "Community Art Exhibition", distance: "1.2 km", date: "Tomorrow", type: "Art" },
                { name: "Food & Culture Fair", distance: "2.0 km", date: "This Weekend", type: "Culture" },
                { name: "Yoga in the Park", distance: "1.8 km", date: "Every Monday", type: "Fitness" }
            ];

            // Display nearby events
            eventsList.innerHTML = nearbyEventsList.map(event => `
                <div class="event-card">
                    <h4>${event.name}</h4>
                    <p>📍 Distance: ${event.distance}</p>
                    <p>📅 Date: ${event.date}</p>
                    <p>🏷️ Type: ${event.type}</p>
                </div>
            `).join('');
        },
        (error) => {
            switch (error.code) {
                case error.PERMISSION_DENIED:
                    result.textContent = "❌ Location permission denied.";
                    break;
                case error.POSITION_UNAVAILABLE:
                    result.textContent = "❌ Location information is unavailable.";
                    break;
                case error.TIMEOUT:
                    result.textContent = "⏳ Location request timed out.";
                    break;
                default:
                    result.textContent = "❌ An unknown error occurred.";
            }
        }
    );
}

// Preferences
window.onload = function() {
    const savedType = localStorage.getItem("preferredEventType");
    if (savedType) {
        document.getElementById("eventType").value = savedType;
    }
};

function clearPreferences() {
    addDebugMessage("Page is fully loaded");
    
    // Show welcome message
    document.getElementById('welcomeBanner').classList.add('animated', 'fadeIn');
    
    // Initialize all components
    initializeComponents();
    
    // Display sample events
    displaySampleEvents();
}

// Debug console logging
console.log("Welcome to the Community Portal");
window.addEventListener('load', () => {
    // Show welcome message
    document.getElementById('welcomeBanner').classList.add('animated', 'fadeIn');
    
    // Initialize all components
    initializeComponents();
    
    // Display sample events
    displaySampleEvents();
});

// Add debug messages to UI
function showNotification(message, isError = false) {
    const notification = document.createElement('div');
    notification.className = `notification ${isError ? 'error' : ''}`;
    notification.textContent = message;
    
    const notificationsContainer = document.getElementById('notifications');
    if (notificationsContainer) {
        notificationsContainer.appendChild(notification);
        
        // Remove notification after 3 seconds
        setTimeout(() => {
            notification.remove();
        }, 3000);
    }
}

// Initialize components
function initializeComponents() {
    // Setup event list container
    const eventsContainer = document.getElementById('eventsContainer');
    if (eventsContainer) {
        eventsContainer.innerHTML = '<p>Loading events...</p>';
    }
    
    // Setup search functionality
    setupSearch();
    
    // Setup category filter
    setupCategoryFilter();
}

// Display sample events
function displaySampleEvents() {
    const events = [
        { name: "Community Music Festival", date: "2025-06-15", seats: 100, category: "Music" },
        { name: "Art Exhibition", date: "2025-06-20", seats: 50, category: "Art" },
        { name: "Tech Workshop", date: "2025-06-25", seats: 30, category: "Technology" }
    ];
    
    const eventsContainer = document.getElementById('eventsContainer');
    if (eventsContainer) {
        eventsContainer.innerHTML = events.map(event => `
            <div class="event-card">
                <h3>${event.name}</h3>
                <p>Date: ${event.date}</p>
                <p>Seats: ${event.seats}</p>
                <p>Category: ${event.category}</p>
                <button onclick="registerUser('${event.name}')">Register</button>
            </div>
        `).join('');
    }
}

// Search functionality
function setupSearch() {
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            const searchTerm = e.target.value.toLowerCase();
            filterEvents(searchTerm);
        });
    }
}

// Category filter
function setupCategoryFilter() {
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', (e) => {
            const category = e.target.value;
            filterEventsByCategory(category);
        });
    }
}

// Event filtering
function filterEvents(searchTerm) {
    const cards = document.querySelectorAll('.event-card');
    cards.forEach(card => {
        const eventName = card.querySelector('h3').textContent.toLowerCase();
        if (eventName.includes(searchTerm)) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

function filterEventsByCategory(category) {
    const cards = document.querySelectorAll('.event-card');
    cards.forEach(card => {
        const eventCategory = card.querySelector('p:last-child').textContent.split(':')[1].trim();
        if (category === 'All' || eventCategory === category) {
            card.style.display = 'block';
        } else {
            card.style.display = 'none';
        }
    });
}

// Registration
function registerUser(eventName) {
    const eventCard = document.querySelector(`.event-card h3:contains('${eventName}')`).closest('.event-card');
    if (eventCard) {
        const seats = parseInt(eventCard.querySelector('p:nth-child(3)').textContent.split(':')[1].trim());
        
        if (seats > 0) {
            eventCard.querySelector('p:nth-child(3)').textContent = `Seats: ${seats - 1}`;
            showNotification(`Successfully registered for ${eventName}`);
            
            // Show registration form
            const registrationForm = document.querySelector('.registration-form');
            if (registrationForm) {
                registrationForm.classList.add('active');
                
                // Pre-fill event name
                const eventNameInput = registrationForm.querySelector('#eventName');
                if (eventNameInput) {
                    eventNameInput.value = eventName;
                }
                
                // Focus on name field
                const nameInput = registrationForm.querySelector('#name');
                if (nameInput) {
                    nameInput.focus();
                }
            }
        } else {
            showNotification('No seats available for this event!', true);
        }
    } else {
        showNotification('Event not found!', true);
    }
}
}
