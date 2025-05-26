// JavaScript Basics & Setup
console.log("Welcome to the Community Portal");

// Event Details - Data Types and Operators (for a single featured event, kept for now)
const featuredEventName = "Community Music Festival";
const featuredEventDate = "2024-03-15";
let featuredAvailableSeats = 100;

// Template literal for featured event information
const featuredEventInfo = `Event: ${featuredEventName}\nDate: ${featuredEventDate}\nAvailable Seats: ${featuredAvailableSeats}`;
console.log(featuredEventInfo);

// 5. Objects and Prototypes
// Define Event constructor or class
class Event {
    constructor(id, name, date, time, location, description, category, seats, image, price) {
        this.id = id;
        this.name = name;
        this.date = date;
        this.time = time;
        this.location = location;
        this.description = description;
        this.category = category;
        this.seats = seats;
        this.image = image;
        this.price = price;
    }

    checkAvailability() {
        return this.seats > 0;
    }

    // Method to decrement seats
    decrementSeats() {
        if (this.seats > 0) {
            this.seats--;
            return true;
        }
        return false;
    }
}

// Array to store events
let events = [];

// Function to add a new event
function addEvent(event) {
    events.push(event);
}

// Pre-populate some events
addEvent(new Event(1, 'Music Night', '2024-07-20', '19:00', 'Central Hall', 'An evening of live music.', 'Music', 100, 'images/music_night.jpg', 25.00));
addEvent(new Event(2, 'Art Exhibition', '2024-08-15', '10:00', 'City Gallery', 'Featuring local artists.', 'Art', 50, 'images/art_exhibition.jpg', 10.00));
addEvent(new Event(3, 'Tech Conference', '2024-09-01', '09:00', 'Convention Center', 'Innovations in technology.', 'Technology', 200, 'images/tech_conference.jpg', 150.00));
addEvent(new Event(4, 'Food Festival', '2024-07-25', '12:00', 'Downtown Park', 'Taste various cuisines.', 'Food', 150, 'images/food_festival.jpg', 0.00));
addEvent(new Event(5, 'Film Screening', '2024-08-05', '18:30', 'Grand Cinema', 'Independent film showcase.', 'Film', 75, 'images/film_screening.jpg', 12.50));

// New: Add more events using .push() (demonstration)
addEvent(new Event(6, 'Jazz Night', '2024-07-28', '20:00', 'The Blue Note', 'Smooth jazz performances.', 'Music', 80, 'images/jazz_night.jpg', 30.00));
addEvent(new Event(7, 'Baking Workshop', '2024-08-10', '14:00', 'Community Kitchen', 'Learn to bake delicious pastries.', 'Workshop', 30, 'images/baking_workshop.jpg', 45.00));

// New: Function to show only music events using .filter()
function showMusicEvents() {
    const musicEvents = events.filter(event => event.category === 'Music');
    displayEvents(musicEvents);
}

// Function to display events
function displayEvents(eventArray = events) {
    const eventsContainer = document.getElementById('eventsContainer');
    if (!eventsContainer) return; // Ensure the container exists

    eventsContainer.innerHTML = ''; // Clear existing events

    // Filter out past events and events with no seats
    const now = new Date();
    const upcomingEvents = eventArray.filter(event => {
        const eventDateTime = new Date(`${event.date}T${event.time}`);
        return eventDateTime > now && event.checkAvailability();
    });

    if (upcomingEvents.length === 0) {
        eventsContainer.innerHTML = '<p>No upcoming events available in this category.</p>';
        return;
    }

    // New: Use .map() to format display cards and then use createElement()
    upcomingEvents.map(event => {
        const eventCardDiv = document.createElement('div');
        eventCardDiv.className = 'event-card';
        eventCardDiv.innerHTML = `
            <img src="${event.image}" alt="${event.name}">
            <h3>${event.name}</h3>
            <p><strong>Date:</strong> ${event.date}</p>
            <p><strong>Time:</strong> ${event.time}</p>
            <p><strong>Location:</strong> ${event.location}</p>
            <p><strong>Category:</strong> ${event.category}</p>
            <p><strong>Seats Available:</strong> ${event.seats}</p>
            <p><strong>Price:</strong> $${event.price.toFixed(2)}</p>
            <p>${event.description}</p>
            <button onclick="registerForEvent(${event.id})">Register Now</button>
        `;
        eventsContainer.appendChild(eventCardDiv);
    });
}

// Function to filter events by category
function filterEvents() {
    const categoryFilter = document.getElementById('categoryFilter');
    const selectedCategory = categoryFilter.value;

    let filteredEvents = [];
    if (selectedCategory === 'All') {
        filteredEvents = events;
    } else {
        filteredEvents = events.filter(event => event.category === selectedCategory);
    }
    displayEvents(filteredEvents);
}

// Function to register for an event
function registerForEvent(eventId) {
    const event = events.find(e => e.id === eventId);
    if (event) {
        if (event.decrementSeats()) {
            alert(`Successfully registered for ${event.name}! Remaining seats: ${event.seats}`);
            displayEvents(); // Refresh the displayed events to show updated seat count
        } else {
            alert(`Sorry, ${event.name} is fully booked.`);
        }
    } else {
        alert('Event not found.');
    }
}

// Function to handle form submission for registration
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    // New: Get event ID from a hidden input or dynamically from the form context
    const eventToRegisterId = parseInt(document.getElementById('registrationEventId').value); 

    try {
        registerUser(name, email, eventToRegisterId);
    } catch (error) {
        console.error("Registration failed:", error.message);
        alert("Registration failed: " + error.message);
    }
}

// Function to register a user (placeholder for now)
function registerUser(name, email, eventId) {
    console.log(`User ${name} (${email}) registered for event ID ${eventId}`);
    // In a real application, you would send this data to a backend server
    // For now, we'll just call registerForEvent to simulate registration impact
    registerForEvent(eventId);
    // New: Update UI after registration (already handled by displayEvents() in registerForEvent)
}

// New: Function to cancel registration (example of updating UI)
function cancelRegistration(eventId) {
    const event = events.find(e => e.id === eventId);
    if (event) {
        event.seats++; // Increment seats as an example of cancellation
        alert(`Registration for ${event.name} cancelled. Seats available: ${event.seats}`);
        displayEvents(); // Update UI
    } else {
        alert('Event not found.');
    }
}

// New: Function for quick search by event name using keydown
function searchEvents() {
    const searchInput = document.getElementById('searchInput');
    const searchTerm = searchInput.value.toLowerCase();

    const filteredEvents = events.filter(event => 
        event.name.toLowerCase().includes(searchTerm) ||
        event.description.toLowerCase().includes(searchTerm)
    );
    displayEvents(filteredEvents);
}

// Initial display of events when the page loads
document.addEventListener('DOMContentLoaded', () => {
    displayEvents();

    // Attach event listener to the form if it exists
    const registrationForm = document.getElementById('registrationForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', handleSubmit);
    }

    // Attach event listener to the category filter if it exists
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterEvents);
    }

    // New: Attach event listener for quick search input
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('keydown', searchEvents);
    }

    // New: Attach event listener for "Show Music Events" button (if you add one in HTML)
    const showMusicEventsButton = document.getElementById('showMusicEventsButton');
    if (showMusicEventsButton) {
        showMusicEventsButton.addEventListener('click', showMusicEvents);
    }

    // YouTube Player API integration
    const youtubePlayer = document.getElementById('youtubePlayer');
    if (youtubePlayer) {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }
});

// YouTube Player API integration
// YouTube Player API integration
// 2. This code loads the IFrame Player API code asynchronously.
var tag = document.createElement('script');

tag.src = "https://www.youtube.com/iframe_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// 3. This function creates an <iframe> (and YouTube player)
//    after the API code downloads.
var player;
function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
        height: '315',
        width: '560',
        videoId: 'u_qFlTu7HTw', // Updated video ID
        events: {
            'onReady': onPlayerReady,
            'onStateChange': onPlayerStateChange
        }
    });
}

// 4. The API will call this function when the video player is ready.
function onPlayerReady(event) {
    // event.target.playVideo();
}

// 5. The API calls this function when the player's state changes.
//    The function indicates that when playing a video (state=1),
//    the player should play for six seconds and then stop.
var done = false;
function onPlayerStateChange(event) {
    if (event.data == YT.PlayerState.PLAYING && !done) {
        // setTimeout(stopVideo, 6000);
        done = true;
    }
}
function stopVideo() {
    player.stopVideo();
}

// Image enlargement functionality
document.querySelectorAll('.event-card img').forEach(image => {
    image.onclick = () => {
        document.querySelector('.popup-image').style.display = 'block';
        document.querySelector('.popup-image img').src = image.getAttribute('src');
    }
});

document.querySelector('.popup-image span').onclick = () => {
    document.querySelector('.popup-image').style.display = 'none';
}

// Form validation
const form = document.getElementById('registrationForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const ticketsInput = document.getElementById('tickets');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    validateInputs();
});

const setError = (element, message) => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = message;
    inputControl.classList.add('error');
    inputControl.classList.remove('success')
}

const setSuccess = element => {
    const inputControl = element.parentElement;
    const errorDisplay = inputControl.querySelector('.error');

    errorDisplay.innerText = '';
    inputControl.classList.add('success');
    inputControl.classList.remove('error');
};

const isValidEmail = email => {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}

const validateInputs = () => {
    const nameValue = nameInput.value.trim();
    const emailValue = emailInput.value.trim();
    const ticketsValue = ticketsInput.value.trim();

    if (nameValue === '') {
        setError(nameInput, 'Name is required');
    } else {
        setSuccess(nameInput);
    }

    if (emailValue === '') {
        setError(emailInput, 'Email is required');
    } else if (!isValidEmail(emailValue)) {
        setError(emailInput, 'Provide a valid email address');
    } else {
        setSuccess(emailInput);
    }

    if (ticketsValue === '') {
        setError(ticketsInput, 'Number of tickets is required');
    } else if (ticketsValue <= 0) {
        setError(ticketsInput, 'Number of tickets must be at least 1');
    } else {
        setSuccess(ticketsInput);
    }
};

// Geolocation functionality
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    document.getElementById("location").innerHTML = "Latitude: " + position.coords.latitude +
        "<br>Longitude: " + position.coords.longitude;
}

// Local Storage for form data
const registrationForm = document.getElementById('registrationForm');

registrationForm.addEventListener('input', () => {
    const formData = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        tickets: document.getElementById('tickets').value
    };
    localStorage.setItem('registrationFormData', JSON.stringify(formData));
});

window.addEventListener('load', () => {
    const storedFormData = localStorage.getItem('registrationFormData');
    if (storedFormData) {
        const formData = JSON.parse(storedFormData);
        document.getElementById('name').value = formData.name;
        document.getElementById('email').value = formData.email;
        document.getElementById('tickets').value = formData.tickets;
    }
});

// Form validation example
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    if (name === '' || email === '') {
        alert('Name and Email must be filled out');
        return false;
    }
    return true;
}

// Function to handle form submission for registration
function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission

    if (validateForm()) {
        const name = document.getElementById('name').value;
        const email = document.getElementById('email').value;
        const phone = document.getElementById('phone').value;
        const date = document.getElementById('date').value;
        const eventType = document.getElementById('eventType').value;
        const message = document.getElementById('message').value;

        const confirmationMessage = `Thank you, ${name}!\n\nYour registration for the ${eventType} event on ${date} has been received.\nWe will send a confirmation to ${email}.\n\nPhone: ${phone}\nMessage: ${message}`;
        
        document.getElementById('confirmation').innerText = confirmationMessage;
        alert(confirmationMessage);

        // Optionally clear the form
        document.getElementById('eventForm').reset();
    }
}

// Image enlargement on click
document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.event-gallery img').forEach(img => {
        img.addEventListener('click', () => {
            const overlay = document.createElement('div');
            overlay.style.cssText = 'position: fixed; top: 0; left: 0; width: 100%; height: 100%; background: rgba(0,0,0,0.8); display: flex; justify-content: center; align-items: center; z-index: 1000;';
            overlay.onclick = () => document.body.removeChild(overlay);

            const enlargedImg = document.createElement('img');
            enlargedImg.src = img.src;
            enlargedImg.style.cssText = 'max-width: 90%; max-height: 90%; object-fit: contain;';

            overlay.appendChild(enlargedImg);
            document.body.appendChild(overlay);
        });
    });

    // Attach event listener to the form if it exists
    const registrationForm = document.getElementById('eventForm');
    if (registrationForm) {
        registrationForm.addEventListener('submit', handleSubmit);
    }

    // Attach event listener to the category filter if it exists (even if it does nothing for now)
    const categoryFilter = document.getElementById('categoryFilter');
    if (categoryFilter) {
        categoryFilter.addEventListener('change', filterEvents); // filterEvents will be a placeholder for now
    }

    // Initial setup for YouTube Player API
    const youtubePlayerDiv = document.getElementById('player');
    if (youtubePlayerDiv) {
        const tag = document.createElement('script');
        tag.src = "https://www.youtube.com/iframe_api";
        const firstScriptTag = document.getElementsByTagName('script')[0];
        firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);
    }

    // Load preferences on page load
    loadPreference();
});

// Geolocation (example usage)
function getLocation() {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(showPosition, showError);
    } else {
        alert("Geolocation is not supported by this browser.");
    }
}

function showPosition(position) {
    alert(`Latitude: ${position.coords.latitude}\nLongitude: ${position.coords.longitude}`);
}

function showError(error) {
    switch(error.code) {
        case error.PERMISSION_DENIED:
            alert("User denied the request for Geolocation.");
            break;
        case error.POSITION_UNAVAILABLE:
            alert("Location information is unavailable.");
            break;
        case error.TIMEOUT:
            alert("The request to get user location timed out.");
            break;
        case error.UNKNOWN_ERROR:
            alert("An unknown error occurred.");
            break;
    }
}

// Local Storage for user preferences (example)
function savePreference() {
    const theme = document.getElementById('themeSelect').value;
    localStorage.setItem('theme', theme);
    alert('Preference saved!');
}

function loadPreference() {
    const theme = localStorage.getItem('theme');
    if (theme) {
        document.getElementById('themeSelect').value = theme;
        // Apply theme to page (e.g., change body class)
    }
}

// Placeholder functions for now, as event logic was removed
function filterEvents() {
    console.log("Filter events function called. No events to filter in this version.");
}

function showRegistrationForm() {
    const registrationSection = document.getElementById('registration');
    if (registrationSection) {
        registrationSection.style.display = 'block';
        // Scroll to the form
        registrationSection.scrollIntoView({ behavior: 'smooth' });
    }
}

function validatePhone(input) {
    // Basic phone number validation (example: 10 digits)
    const phonePattern = /^\d{10}$/;
    if (!phonePattern.test(input.value)) {
        input.setCustomValidity('Please enter a 10-digit phone number.');
    } else {
        input.setCustomValidity('');
    }
}

function countCharacters(textarea) {
    const charCountSpan = document.getElementById('charCount');
    if (charCountSpan) {
        charCountSpan.textContent = textarea.value.length;
    }
}

function clearPreferences() {
    localStorage.removeItem('theme');
    alert('Preferences cleared!');
    // Optionally reset the select to default
    document.getElementById('themeSelect').value = '';
}

function findNearbyEvents() {
    getLocation(); // Calls the geolocation function
}

// Placeholder for event search, if you add it back
function handleSearch(event) {
    if (event.key === 'Enter') {
        console.log("Search initiated for: " + event.target.value);
        // Implement search logic here if events are re-introduced
    }
}

// Example of using Object.entries()
function listEventDetails(eventId) {
    const event = events.find(e => e.id === eventId);
    if (event) {
        console.log(`Details for ${event.name}:`);
        for (const [key, value] of Object.entries(event)) {
            console.log(`${key}: ${value}`);
        }
    }
}

// Example of using .map() for formatting display cards (already integrated into displayEvents)
// Example of using .filter() for filtering events (already integrated into filterEvents)

// Initial call to display events when the script loads
displayEvents();