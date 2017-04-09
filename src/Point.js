/* eslint no-underscore-dangle:0 */

const startAngle = 0;
const endAngle = Math.PI * 2;

class Point {

  constructor(
    context,
    startX,
    startY,
    velocityX,
    velocityY,
    color,
    radius) {
    this.context = context;
    this.startX = startX || Math.random() * window.innerWidth;
    this.startY = startY || Math.random() * window.innerHeight;
    this.velocityX = velocityX || (Math.random() * 2) - 1;
    this.velocityY = velocityY || (Math.random() * 2) - 1;
    this.color = color || 'coral';
    this.radius = radius || 3;
  }

  draw() {
    this.context.beginPath();
    this.context.fillStyle = this.color;
    this.context.arc(this.startX, this.startY, this.radius, startAngle, endAngle, false);
    this.context.fill();
  }
}


export default Point;
