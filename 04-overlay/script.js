// Project Requirement
// Click on Search Icon then show overlay backgroud.
// Input text into <input> then close overlay background after click X icon

// TODO: 1. Get all HTML elements used to perform actions later
// Search Icon
// First Option
const searchIcon = document.getElementById('search-button');
// Second Option
const searchIcon2 = document.querySelector('#search-button');

// Background Overlay
const bgOverlay = document.getElementById('search-overlay');
// <input> form
const textInput = document.getElementById('fullscreen-searchform');
// Close Button
const closeButton = document.getElementById('fullscreen-close-button');


// TODO: 2. Click on Search Icon
// Option 1
searchIcon.onclick = () => {
    // TODO: 3. Show Backgroud Overlay
    // TODO: 4. Show <input>
    // TODO: 5. Show close button
    // In order to show background overlay
    // We need to add class `fullscreen-search-overlay-show` to Backgroud Overlay element
    bgOverlay.classList.add('fullscreen-search-overlay-show');
}

// Option 2
// searchIcon.addEventListener('click', function () {
// })

// Option 3
// document.getElementById('search-button').onclick = () => {
// }

// TODO: 6. Click on Close button
closeButton.onclick = () => {
    // TODO: 7. Close Background overlay
    // In order to close Background overlay
    // We need to remove class `fullscreen-search-overlay-show` to Backgroud Overlay element
    bgOverlay.classList.remove('fullscreen-search-overlay-show'); 
};

// TODO: 8. Fix input Position
// Detect window's resize action
window.addEventListener('resize', () => {
    // Adjust window Position
    adjustInputPosition();
}, true);

// TODO: 9 Update Input position before resize
function adjustInputPosition() {
    // Get Window Height
    const windowHeight = window.innerHeight;

    // Change input height position
    textInput.style.top = `${windowHeight / 2}px` ;
}

adjustInputPosition();
