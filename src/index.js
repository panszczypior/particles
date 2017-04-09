import Point from './Point'

class Particles {

  constructor(element, params) {
    this.canvas = element;
    this.ctx = null;
    this.points = [];
    this.params = {
      width: window.innerWidth,
      height: window.innerHeight,
      pointsAmount: 100,
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
    for (let i = 0; i < this.params.pointsAmount; i += 1) {
      const point = new Point(this.ctx);
      this.points.push(point);
      // point.draw();
    }
  }

  animate() {
    this.draw();
    window.requestAnimationFrame(this.animate.bind(this));
  }

  draw() {
    this.ctx.clearRect(0, 0, this.params.width, this.params.height);
    for (let j = 0; j < this.points.length; j += 1) {
      this.points[j].draw();
    }
    this.update();
  }

  update() {
    for (let i = 0; i < this.points.length; i += 1) {
      const particle = this.points[i];

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
