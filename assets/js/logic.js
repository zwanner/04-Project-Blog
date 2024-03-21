const themeSwitcher = document.querySelector('.theme-switcher');
const modeSwitcher = document.querySelector('.switcher');
console.log(themeSwitcher);
console.log(modeSwitcher);

//get the current theme mode
let mode = localStorage.getItem('theme');

//set the theme to the current theme
modeSwitcher.setAttribute('data-bs-theme', mode);

themeSwitcher.addEventListener('click', function () {
    // If mode is dark, apply light background
    if (mode === 'dark') {
        mode = 'light';
        modeSwitcher.setAttribute('data-bs-theme', 'light');
        themeSwitcher.textContent = '☀️';
        localStorage.setItem('theme', 'light');
    }
    // If mode is light, apply dark background
    else {
        mode = 'dark';
        modeSwitcher.setAttribute('data-bs-theme', 'dark');
        themeSwitcher.textContent = '🌙';
        localStorage.setItem('theme', 'dark');
    }
});
