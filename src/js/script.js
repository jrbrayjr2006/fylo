const themeToggleButton = document.getElementById('theme-toggle');
const themeToggleDarkIcon = document.getElementById('theme-toggle-dark-icon');
const themeToggleLightIcon = document.getElementById('theme-toggle-light-icon');


if (
    localStorage.getItem('color-theme') === 'dark' ||
    (!('color-theme' in localStorage) &&
      window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
    // Show light mode icon
    themeToggleLightIcon.classList.remove('hidden');
    themeToggleDarkIcon.classList.add('hidden');
} else {
    // Show dark mode icon
    themeToggleDarkIcon.classList.remove('hidden');
    themeToggleLightIcon.classList.add('hidden');
}

// Listen for toggle button click
themeToggleButton.addEventListener('click', () => {
    if (themeToggleDarkIcon.classList.contains('hidden')) {
        // Show dark mode icon
        console.log('toggle dark icon');
        themeToggleDarkIcon.classList.remove('hidden');
        themeToggleLightIcon.classList.add('hidden');
        // document.documentElement.setAttribute('color-theme', 'dark');
        // localStorage.setItem('color-theme', 'dark');
    } else {
        // Show light mode icon
        console.log('toggle light icon');
        themeToggleLightIcon.classList.remove('hidden');
        themeToggleDarkIcon.classList.add('hidden');
        // document.documentElement.setAttribute('color-theme', 'light');
        // localStorage.setItem('color-theme', 'light');
    }
    toggleMode();
}); 

// themeToggleButton.addEventListener('click', toggleMode);

function toggleMode() {
    // can toggle icons here, but already done in the event listener
    // themeToggleDarkIcon.classList.toggle('hidden');
    // themeToggleLightIcon.classList.toggle('hidden');

    // If is set in local storage
    console.log(localStorage.getItem('color-theme'));
    if(localStorage.getItem('color-theme')) {
        if (localStorage.getItem('color-theme') === 'light') {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        } else {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        }
    } else {
        // If not set in local storage
        if (documnent.documentElement.classList.contains('dark')) {
            document.documentElement.classList.remove('dark');
            localStorage.setItem('color-theme', 'light');
        } else {
            document.documentElement.classList.add('dark');
            localStorage.setItem('color-theme', 'dark');
        }
    }
}