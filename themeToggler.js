// Utility function to calculate the current theme setting.
function calculateSettingAsThemeString({ localStorageTheme, systemSettingDark }) {
    // most important check first user selection
    if (localStorageTheme !== null) {
        return localStorageTheme;
    }
    // if user system is dark mode return dark
    if (systemSettingDark.matches) {
        return "dark";
    }
    return "light";
}

//Utility function to update the button and aria-label.
function updateToggleButton({ themeToggler, isDark, lightIcon, darkIcon }) {
    if (isDark) {
        lightIcon.style.display = "block";
        darkIcon.style.display = "none";
        themeToggler.classList.remove("theme-toggler--isActive");
    } else {
        lightIcon.style.display = "none";
        darkIcon.style.display = "block";
        themeToggler.classList.add("theme-toggler--isActive");
    }
    themeToggler.setAttribute("aria-label", isDark ? "Change to light theme" : "Change to dark theme");
}

// Utility function to update the theme setting data attribute
function updateThemeDataAttribute({ theme }) {
    document.querySelector("html").setAttribute("data-theme", theme);
}

export { calculateSettingAsThemeString, updateToggleButton, updateThemeDataAttribute };
