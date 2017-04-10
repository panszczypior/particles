// /* eslint no-unused-vars:0 */

import Point from './Point';
import consts from './helpers/consts';
import config from './helpers/config.json';

const calculateDistance = Symbol('calculateDistance');
const initCanvas = Symbol('initCanvas');
const initParticles = Symbol('initParticles');
const animate = Symbol('animate');
const draw = Symbol('draw');
const update = Symbol('update');

class Particles {

  constructor(element, params) {
    this.canvas = element;
    this.ctx = null;
    this.particles = [];
    this.params = {
      width: window.innerWidth,
      height: window.innerHeight,
      canvasColor: consts.canvasColor,
      particlesAmount: consts.particlesAmount,
      maxDistance: consts.maxDistance,
      lineColor: consts.lineColor,
    };
    if (params) {
      this.params = Object.assign({}, this.params, params);
    }
  }

  [initCanvas]() {
    this.canvas.width = this.params.width;
    this.canvas.height = this.params.height;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.fillStyle = this.params.canvasColor;
    this.ctx.fillRect(0, 0, this.params.width, this.params.height);
  }

  start() {
    this[initCanvas]();
    this[initParticles]();
    this[animate]();
  }

  [initParticles]() {
    for (let i = 0; i < this.params.particlesAmount; i += 1) {
      const point = new Point(this.ctx);
      this.particles.push(point);
    }
  }

  [animate]() {
    this[draw]();
    window.requestAnimationFrame(this[animate].bind(this));
  }

  [draw]() {
    this.ctx.fillStyle = this.params.canvasColor;
    this.ctx.fillRect(0, 0, this.params.width, this.params.height);
    for (let j = 0; j < this.particles.length; j += 1) {
      this.particles[j].draw();
    }
    this[update]();
  }

  [update]() {
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
        this[calculateDistance](particle, nextParticle);
      }
    }
  }

  [calculateDistance](point1, point2) {
    const distanceX = point1.x - point2.x;
    const distanceY = point1.y - point2.y;
    const distance = Math.sqrt((distanceX * distanceX) + (distanceY * distanceY));

    if (distance <= this.params.maxDistance) {
      this.ctx.beginPath();
      this.ctx.strokeStyle = this.params.lineColor;
      const r1 = (point1.x + point1.radius) - consts.lineWidth;
      const r2 = (point1.y + point1.radius) - consts.lineWidth;
      const r3 = (point2.x + point2.radius) - consts.lineWidth;
      const r4 = (point2.y + point2.radius) - consts.lineWidth;
      this.ctx.moveTo(r1, r2);
      this.ctx.lineTo(r3, r4);
      this.ctx.stroke();
      this.ctx.closePath();
    }
  }

}

export default Particles;
