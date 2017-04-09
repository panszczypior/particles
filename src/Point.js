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
    this.x = startX || Math.random() * window.innerWidth;
    this.y = startY || Math.random() * window.innerHeight;
    this.velocityX = velocityX || (Math.random() * 2) - 1;
    this.velocityY = velocityY || (Math.random() * 2) - 1;
    this.color = color || 'blue';
    this.radius = radius || 3;
  }

  draw() {
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, startAngle, endAngle, false);
    this.context.lineWidth = 1;
    this.context.strokeStyle = this.color;
    this.context.stroke();
  }
}

export default Point;
