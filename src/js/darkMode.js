const { isDepsOptimizerEnabled } = require("vite");

const root = document.getElementById('root');
const toggle = document.getElementById('toggle');
const darkMode = localStorage.getItem('dark');
const sun = "<i class='bi bi-sun-fill text-white text-3xl'></i>";
const moon = "<i class='bi bi-moon-fill'></i>";



if(darkMode) {
    root.classList.add('dark');
    toggle.innerHTML = sun;
} else {
    root.classList.remove('dark');
    toggle.innerHTML = moon;
    
}

function disable(){
    root.classList.remove('dark');
    toggle.innerHTML = moon
    localStorage.removeItem('')
}

function enable(){
    root.classList.add('dark');
    toggle.innerHTML = sun;
    localStorage.setItem('dark','enabled')
}

toggle.addEventListener('click', function() {
    const dark = localStorage.getItem('dark')
    if(dark) {
        disable();
    } else {
        enable();
    }
})