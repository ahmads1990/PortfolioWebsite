function submit_form() {
    document.formu1.submit();
    document.formu1.reset();
}
// redirects
function redirectToGoogleDrive() {
    window.location.href =
        "https://drive.google.com/file/d/1gtS48wI0ltcc-AuGmpzOlLRJjq7QCfIC/view?usp=sharing";
}
// re
function calculateSettingAsThemeString({
    localStorageTheme,
    systemSettingDark,
}) {
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
// get theme on page load
const localStorageTheme = localStorage.getItem("theme");
// detect the user’s system settings
const systemSettingDark = window.matchMedia("(prefers-color-scheme: dark)");

// current user theme
let currentThemeSetting = calculateSettingAsThemeString({
    localStorageTheme,
    systemSettingDark,
});

// target the button using the data attribute
const button = document.querySelector("[data-theme-toggle]");
const lightIcon = document.getElementById("light-icon");
const darkIcon = document.getElementById("dark-icon");

button.addEventListener("click", () => {
    const newTheme = currentThemeSetting === "dark" ? "light" : "dark";

    // update the button
    const newCta = newTheme === "dark" ? "sun" : "moon";

    if (newTheme == "dark") {
        lightIcon.style.display = "block";
        darkIcon.style.display = "none";
    } else {
        lightIcon.style.display = "none";
        darkIcon.style.display = "block";
    }
    // use an aria-label if you are omitting text on the button
    // and using sun/moon icons, for example
    button.setAttribute("aria-label", newCta);

    // update theme attribute on HTML to switch theme in CSS
    document.querySelector("html").setAttribute("data-theme", newTheme);

    // update in local storage
    localStorage.setItem("theme", newTheme);

    // update the currentThemeSetting in memory
    currentThemeSetting = newTheme;
});
