const dishcard = {
    hidden: {
      opacity: 0,
      y: 100, // Start 30 pixels below its final position
    },
    visible: {
      opacity: 1,
      y: 0, // End at its original position
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 20,
      },
    },
  };

  export { dishcard }