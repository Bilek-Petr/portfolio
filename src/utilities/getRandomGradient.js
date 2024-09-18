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
  return `linear-gradient(45deg, ${color1}, ${color2})`;
};

export { generateRandomGradient };
