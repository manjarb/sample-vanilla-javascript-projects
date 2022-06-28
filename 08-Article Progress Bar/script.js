// Article Progress
// Increase progress bar width when user scroll down

// TODO: 1 Get progress bar and content elements
const progressBar = document.getElementById('js-highlight');
const contentElement = document.getElementById('js-container');

// TODO: 2 Capture user scroll action
window.onscroll = () => {
    // TODO: 3 Calculate progress bar width
    // TODO: 3.1 Find position of content after scroll
    const contentElementPostion = contentElement.getBoundingClientRect().top;
    // TODO: 3.2 Find content height
    const contentElementHeight = contentElement.offsetHeight - window.innerHeight;
    // TODO: 3.3 Calculate content's Scroll percentage
    const contentScrollPercentage = Math.abs((contentElementPostion / contentElementHeight) * 100);

    // TODO: 4 Update progress bar width
    progressBar.style.width = `${contentScrollPercentage}%`;
}