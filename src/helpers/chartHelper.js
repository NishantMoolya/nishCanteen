const generateColors = (length) => {
    const colors = [];
    for (let i = 0; i < length; i++) {
      // Generate a random color
      const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
      colors.push(color);
    }
    return colors;
  };

  export { generateColors };