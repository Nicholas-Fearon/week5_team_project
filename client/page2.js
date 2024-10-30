// JavaScript to toggle settings sidebar
document.getElementById('menuButton').addEventListener('click', () => {
    const settings = document.querySelector('.settings');
    settings.classList.toggle('show');
});