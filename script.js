const lights = Array.from(document.querySelectorAll(".light"));

const colors = [
  "#d94a3a",
  "#f3c66b",
  "#2f6f4f",
  "#f08a2b",
  "#6b3fa0",
  "#f5f0e8",
];

function randomColor() {
  return colors[Math.floor(Math.random() * colors.length)];
}

function updateLights() {
  lights.forEach((light) => {
    const color = randomColor();
    light.style.background = color;
    light.style.boxShadow = `0 0 12px ${color}`;
    light.style.opacity = 0.75 + Math.random() * 0.25;
  });
}

updateLights();
setInterval(updateLights, 900);
