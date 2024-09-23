const toolColors = [
  "#13F2F2",
  "#038C8C",
  "#61DAFB", // React Blue
  "#2A9DF4",
  "#187BCD",
  "#04A8BF",
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
