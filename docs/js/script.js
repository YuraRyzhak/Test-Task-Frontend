const button = document.getElementById("button");
const list = document.getElementById("list");
const smileyButton = document.getElementById('smile-button');
const smileyDropdown = document.getElementById('smiley-dropdown');
const chatInput = document.getElementById('chat-input');
const fileButton = document.getElementById('file-button');
const fileInput = document.getElementById('chat-file-input');
const form = document.getElementById('form');
const sendButton = document.getElementById('send-button');

list.style.display = "none";

button.addEventListener('click', (event) => {
    if (list.style.display == 'none') {
        list.style.display = 'block';
    } else list.style.display = 'none';
})

smileyButton.addEventListener('click', function () {
    if (smileyDropdown.style.display == 'none') {
        smileyDropdown.style.display = 'block';
    } else {
        smileyDropdown.style.display = 'none';
    }
});

smileyDropdown.addEventListener('click', function (event) {
    if (event.target.classList.contains('smiley')) {
        const smiley = event.target.dataset.smiley;
        chatInput.value += smiley;
        smileyDropdown.style.display = 'none';
    }
});

fileButton.addEventListener('click', () => {
    fileInput.click();
});

fileInput.addEventListener('change', () => {
    console.log(fileInput.files[0]);
});

sendButton.addEventListener('click', () => {
    console.log(chatInput.value);
});

form.addEventListener('submit', function (event) {
    event.preventDefault(); 
});