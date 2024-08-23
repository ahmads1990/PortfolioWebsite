// Import functions from theme-toggler.js
import { calculateSettingAsThemeString, updateToggleButton, updateThemeDataAttribute } from "./themeToggler.js";

function submit_form() {
    document.formu1.submit();
    document.formu1.reset();
}
// redirects
function redirectToGoogleDrive() {
    window.location.href = "https://drive.google.com/file/d/1gtS48wI0ltcc-AuGmpzOlLRJjq7QCfIC/view?usp=sharing";
}
window.redirectToGoogleDrive = redirectToGoogleDrive;

/*
 * On page load: Theme Toggler
 */

// target the button using the data attribute
const themeToggler = document.querySelector("[data-theme-toggle]");
const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");

// detect the user’s system settings
const localStorageTheme = localStorage.getItem("theme");
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");
// Work out the current site settings
let currentThemeSetting = calculateSettingAsThemeString({
    localStorageTheme,
    systemSettingDark,
});

//Update the theme setting and button text according to current settings
updateToggleButton({ themeToggler: themeToggler, isDark: currentThemeSetting === "dark", lightIcon, darkIcon });
updateThemeDataAttribute({ theme: currentThemeSetting });

//Add an event listener to toggle the theme
themeToggler.addEventListener("click", (event) => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";
    // console.log(newTheme);
    localStorage.setItem("theme", newTheme);
    updateToggleButton({ themeToggler: themeToggler, isDark: newTheme === "dark", lightIcon, darkIcon });
    updateThemeDataAttribute({ theme: newTheme });
    currentThemeSetting = newTheme;
});
