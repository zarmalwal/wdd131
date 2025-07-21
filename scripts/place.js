// Date updates
const yearSpan = document.getElementById("year");
const lastModifiedSpan = document.getElementById("lastModified");
yearSpan.textContent = new Date().getFullYear();
lastModifiedSpan.textContent = document.lastModified;

// Windchill calculation
function calculateWindChill(tempF, speed) {
    return (
        35.74 +
        0.6215 * tempF -
        35.75 * Math.pow(speed, 0.16) +
        0.4275 * tempF * Math.pow(speed, 0.16)
    ).toFixed(1);
}

const temp = parseFloat(document.getElementById("temp").textContent);
const speed = parseFloat(document.getElementById("speed").textContent);
const chill = document.getElementById("chill");

if (temp <= 50 && speed > 3) {
    chill.textContent = `${calculateWindChill(temp, speed)}°F`;
} else {
    chill.textContent = "N/A";
}
