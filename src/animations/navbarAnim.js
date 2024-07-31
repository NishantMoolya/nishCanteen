const menu = {
    start: {
      opacity: 0,
      y: -100, // Start 50 pixels above its original position
    },
    end: {
      opacity: 1,
      y: 0, // End at its original position
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
        delay:0.8
      },
    },
  }

  const cart = {
    hidden: {
      opacity: 0,
      y: -20, // Start above its final position
    },
    visible: {
      opacity: 1,
      y: 0, // End at its original position
      transition: {
        type: 'spring',
        stiffness: 300,
        damping: 30,
      },
    },
  };


  export { menu,cart };