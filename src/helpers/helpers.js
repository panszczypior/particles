const getRandomStartX = () => Math.random() * window.innerWidth;
const getRandomStartY = () => Math.random() * window.innerHeight;
const getRandomVelocity = () => (Math.random() * 2) - 1;

const helpers = {
  getRandomStartX,
  getRandomStartY,
  getRandomVelocity,
};

export {
  helpers as default,
  getRandomStartX,
  getRandomStartY,
  getRandomVelocity,
};
