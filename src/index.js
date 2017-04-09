import Point from './Point'
console.log(Point);
class Particles {

  constructor(element, params) {
    this.canvas = element;
    this.params = {
      width: window.innerWidth,
      height: window.innerHeight,
      points: 20,
    };

    if (params) {
      this.params = Object.assign({}, this.params, params);
    }

    this.log = () => {
      console.log(this.params);
    };

    this.initCanvas();
  }

  initCanvas() {
    this.canvas.width = this.params.width;
    this.canvas.height = this.params.height;
    this.ctx = this.canvas.getContext('2d');
    this.ctx.clearRect(0, 0, this.params.width, this.params.height);
  }

  start() {
    for (let i = 0; i < this.params.points; i += 1) {
      const point = new Point(this.ctx);
      point.draw();
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
test.log();
test.start();
