const toolColors = [
  "#FB923C", // Warm Orange
  "#F7E03C", // JavaScript Yellow
  "#61DAFB", // React Blue
  "#A3E633", // Light Green
  "#E879F9", // Light Purple
  "#EF4444", // Red
];

const generateRandomGradient = () => {
  const getRandomColor = () => {
    return toolColors[Math.floor(Math.random() * toolColors.length)];
  };

  const color1 = getRandomColor();
  const color2 = "#fff";
  const randomAngle = Math.floor(Math.random() * 360);

  return `linear-gradient(${randomAngle}deg, ${color1}, ${color2})`;
};

export { generateRandomGradient };
