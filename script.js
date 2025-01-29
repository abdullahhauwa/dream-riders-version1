// Select elements
const navLinks = document.querySelectorAll('.navbar-link');
const dropdownLinks = document.querySelectorAll('.dropdown-link');
const dropdownMenu = document.querySelector('.dropdown-menu');
const sections = document.querySelectorAll('section');
const formButton = document.querySelector('button[type="submit"]');
const loaderContainer = document.querySelector('.loader-container');
const pickUpLocationInput = document.getElementById('pick-up-location');
const pickUpDateInput = document.getElementById('pick-up-date');
const pickUpTimeInput = document.getElementById('pick-up-time');
const destinationInput = document.getElementById('destination');
const dropOffDateInput = document.getElementById('drop-off-date');
const dropOffTimeInput = document.getElementById('drop-off-time');
const dropdown = document.querySelector('.dropdown');

const premiumBtn = document.querySelector('.premium');
const luxuryBtn = document.querySelector('.luxury');
const economicBtn = document.querySelector('.economic');
const suvBtn = document.querySelector('.suv');
const sportsBtn = document.querySelector('.sports');

const premiumGallery = document.getElementById('premium-gallery');
const luxuryGallery = document.getElementById('luxury-gallery');
const economicGallery = document.getElementById('economic-gallery');
const suvGallery = document.getElementById('suv-gallery');
const sportsGallery = document.getElementById('sports-gallery');



// Add event listeners to nav links
premiumBtn.addEventListener('click', () => {
    premiumGallery.style.display = 'grid';
    luxuryGallery.style.display = 'none';
    economicGallery.style.display = 'none';
    suvGallery.style.display = 'none';
    sportsGallery.style.display = 'none';
  });
  
  luxuryBtn.addEventListener('click', () => {
    premiumGallery.style.display = 'none';
    luxuryGallery.style.display = 'grid';
    economicGallery.style.display = 'none';
    suvGallery.style.display = 'none';
    sportsGallery.style.display = 'none';
  });
  
  economicBtn.addEventListener('click', () => {
    premiumGallery.style.display = 'none';
    luxuryGallery.style.display = 'none';
    economicGallery.style.display = 'grid';
    suvGallery.style.display = 'none';
    sportsGallery.style.display = 'none';
  });
  
  suvBtn.addEventListener('click', () => {
    premiumGallery.style.display = 'none';
    luxuryGallery.style.display = 'none';
    economicGallery.style.display = 'none';
    suvGallery.style.display = 'grid';
    sportsGallery.style.display = 'none';
  });
  
  sportsBtn.addEventListener('click', () => {
    premiumGallery.style.display = 'none';
    luxuryGallery.style.display = 'none';
    economicGallery.style.display = 'none';
    suvGallery.style.display = 'none';
    sportsGallery.style.display = 'grid';
  });
  
 dropdown.addEventListener('mouseover', () => {
 dropdownMenu.style.display = 'block';
 });

 dropdown.addEventListener('mouseout', () => {
 dropdownMenu.style.display = 'none';
});
navLinks.forEach((link, index) => {
link.addEventListener('click', (e) => {
e.preventDefault();
// Hide all sections
sections.forEach((section) => {
section.style.display = 'none';
});
// Show the section connected to the link
sections[index].style.display = 'block';
// Remove active class from all links
navLinks.forEach((link) => {
link.classList.remove('active');
});
// Add active class to the clicked link
link.classList.add('active');
});
});

// Add event listeners to dropdown links
dropdownLinks.forEach((link) => {
link.addEventListener('click', (e) => {
e.preventDefault();
// Remove active class from all dropdown links
dropdownLinks.forEach((link) => {
link.classList.remove('active');
});
// Add active class to the clicked dropdown link
link.classList.add('active');
});
});

// Add event listener to dropdown
dropdown.addEventListener('click', (e) => {
e.preventDefault();
// Toggle dropdown menu
dropdown.classList.toggle('show');
});

// Add event listener to form button
formButton.addEventListener('click', (e) => {
e.preventDefault();
// Display loader
loaderContainer.style.display = 'block';
// Get input values
const pickUpLocation = pickUpLocationInput.value;
const pickUpDate = pickUpDateInput.value;
const pickUpTime = pickUpTimeInput.value;
const destination = destinationInput.value;
const dropOffDate = dropOffDateInput.value;
const dropOffTime = dropOffTimeInput.value;
// Simulate delay
setTimeout(() => {

// Hide loader
loaderContainer.style.display = 'none';

// Display alert
alert(`You have booked a car from ${pickUpLocation} on ${pickUpDate} at ${pickUpTime} to ${destination} to be returned on ${dropOffDate} at ${dropOffTime}`);
// Log input values to console
console.log({
'Pick-up Location': pickUpLocation,
'Pick-up Date': pickUpDate,
'Pick-up Time': pickUpTime,
'Destination': destination,
'Drop-off Date': dropOffDate,
'Drop-off Time': dropOffTime,
});
}, 3000);
});

