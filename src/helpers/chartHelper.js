const generateColors = (length) => {
    const colors = [];
    for (let i = 0; i < length; i++) {
      // Generate a random color
      const color = `hsl(${Math.random() * 360}, 100%, 50%)`;
      colors.push(color);
    }
    return colors;
  };

const loadFromLocalStorage = (key) => {
    try {
        const serializedState = localStorage.getItem(key);
        if (serializedState === null) {
            return undefined;
        }
        return JSON.parse(serializedState);
    } catch (e) {
        console.warn('Error loading from local storage', e);
        return undefined;
    }
};

const saveToLocalStorage = (key, state) => {
    try {
        const serializedState = JSON.stringify(state);
        localStorage.setItem(key, serializedState);
    } catch (e) {
        console.warn('Error saving to local storage', e);
    }
};

  export { generateColors,loadFromLocalStorage,saveToLocalStorage };