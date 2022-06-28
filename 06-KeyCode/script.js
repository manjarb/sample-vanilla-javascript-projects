// Key code project
// Press Any key then show number of that key

// TODO: 1 Get Information and Key press elements
const info = document.getElementById('info');
const keyElement = document.getElementById('key');

// TODO: 2 Capture Key press action of the web page
document.onkeydown = (event) => {
    // TODO: 3 Find key's code of the pressed key
    event = event || window.event;

    // TODO: 4 Display key's code into key element and hide Information element
    info.style.display = 'none';
    keyElement.innerHTML = event.keyCode;
};

