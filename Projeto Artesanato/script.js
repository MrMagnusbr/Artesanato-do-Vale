document.addEventListener('DOMContentLoaded', function() {
    const themeToggleBtn = document.getElementById('darkmodo');
    themeToggleBtn.addEventListener('click', function() {
        document.body.classList.toggle('dark-mode');
    });
});
