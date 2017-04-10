const getRandomStartX = () => Math.random() * window.innerWidth;
const getRandomStartY = () => Math.random() * window.innerHeight;
const getRandomVelocity = () => (Math.random() * 2) - 1;
const getRadius = () => Math.random() * 5;

const helpers = {
  getRandomStartX,
  getRandomStartY,
  getRandomVelocity,
  getRadius,
};

export {
  helpers as default,
  getRandomStartX,
  getRandomStartY,
  getRandomVelocity,
  getRadius,
};
