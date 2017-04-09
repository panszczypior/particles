/* eslint no-underscore-dangle:0 */

const _startX = Math.random() * window.innerWidth;
const _startY = Math.random() * window.innerHeight;
const _velocityX = (Math.random() * 2) - 1;
const _velocityY = (Math.random() * 2) - 1;
const _color = 'coral';
const _radius = 5;

const startAngle = 0;
const endAngle = Math.PI * 2;

class Point {

  constructor(
    context,
    startX = _startX,
    startY = _startY,
    velocityX = _velocityX,
    velocityY = _velocityY,
    color = _color,
    radius = _radius) {
    this.context = context;
    this.startX = startX;
    this.startY = startY;
    this.velocityX = velocityX;
    this.velocityY = velocityY;
    this.color = color;
    this.radius = radius;
  }

  draw() {
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.arc(this.startX, this.startY, this.radius, startAngle, endAngle, false);
    this.context.fill();
  }
}


export default Point;
