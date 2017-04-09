import Point from './Point'

class Particles {

  constructor(element, params) {
    this.canvas = element;
    this.ctx = null;
    this.particles = [];
    this.params = {
      width: window.innerWidth,
      height: window.innerHeight,
      particlesAmount: 20,
      maxDistance: 100,
      lineColor: 'red',
    };
    if (params) {
      this.params = Object.assign({}, this.params, params);
    }
  }

  initCanvas() {
    this.canvas.width = this.params.width;
    this.canvas.height = this.params.height;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.clearRect(0, 0, this.params.width, this.params.height);
  }

  start() {
    this.initCanvas();
    this.initPoints();
    this.animate();
  }

  initPoints() {
    for (let i = 0; i < this.params.particlesAmount; i += 1) {
      const point = new Point(this.ctx);
      this.particles.push(point);
    }
  }

  animate() {
    this.draw();
    window.requestAnimationFrame(this.animate.bind(this));
  }

  draw() {
    this.ctx.clearRect(0, 0, this.params.width, this.params.height);
    for (let j = 0; j < this.particles.length; j += 1) {
      this.particles[j].draw();
    }
    this.update();
  }

  update() {
    for (let i = 0; i < this.particles.length; i += 1) {
      const particle = this.particles[i];

      if (particle.x + particle.radius > this.canvas.width) {
        particle.velocityX = -particle.velocityX;
      } else if (particle.x - particle.radius < 0) {
        particle.velocityX = -particle.velocityX;
      }

      if (particle.y + particle.radius > this.canvas.height) {
        particle.velocityY = -particle.velocityY;
      } else if (particle.y - particle.radius < 0) {
        particle.velocityY = -particle.velocityY;
      }

      particle.x += particle.velocityX;
      particle.y += particle.velocityY;

      for (let j = i + 1; j < this.particles.length; j += 1) {
        const nextParticle = this.particles[j];
        this.calculateDistance(particle, nextParticle);
      }
    }
  }

  calculateDistance(point1, point2) {
    const distanceX = point1.x - point2.x;
    const distanceY = point1.y - point2.y;
    const distance = Math.sqrt((distanceX * distanceX) + (distanceY * distanceY));

    if (distance <= this.params.maxDistance) {
      this.ctx.beginPath();
      this.ctx.strokeStyle = this.params.lineColor;
      this.ctx.moveTo(point1.x, point1.y);
      this.ctx.lineTo(point2.x, point2.y);
      this.ctx.stroke();
      this.ctx.closePath();
    }
  }

}

export default Particles;

const config = {
  width: 800,
  height: 800,
};

const canvas = document.querySelector('#particles');
const test = new Particles(canvas);
test.start();
