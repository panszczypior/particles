/* eslint no-underscore-dangle:0 */
/* eslint import/no-named-as-default-member:0 */

import consts from './helpers/consts';
import { getRandomStartX, getRandomStartY, getRandomVelocity, getRadius } from './helpers/helpers';

class Point {

  constructor(
    context,
    startX,
    startY,
    velocityX,
    velocityY,
    color,
    radius,
    lineWidth) {
    this.context = context;
    this.x = startX || getRandomStartX();
    this.y = startY || getRandomStartY();
    this.velocityX = velocityX || getRandomVelocity();
    this.velocityY = velocityY || getRandomVelocity();
    this.color = color || consts.color;
    this.radius = radius || getRadius();
    this.lineWidth = lineWidth || consts.lineWidth;
  }

  draw() {
    this.context.beginPath();
    this.context.arc(this.x, this.y, this.radius, consts.startAngle, consts.endAngle, false);
    this.context.fillStyle = consts.pointFillColor;
    this.context.fill();
    this.context.lineWidth = this.lineWidth;
    this.context.strokeStyle = this.color;
    this.context.stroke();
    this.context.closePath();
  }
}

export default Point;
