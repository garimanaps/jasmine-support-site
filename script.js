
const noBtn = document.getElementById('noBtn');
const yesBtn = document.getElementById('yesBtn');

noBtn.addEventListener('mouseover', () => {
    const i = Math.floor(Math.random() * window.innerWidth);
    const j = Math.floor(Math.random() * window.innerHeight);
    noBtn.style.left = i + 'px';
    noBtn.style.top = j + 'px';
});

yesBtn.addEventListener('click', () => {
    window.location.href = 'https://placeholder.com'; // Replace with actual therapy gift link
});
