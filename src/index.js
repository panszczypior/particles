/* eslint no-unused-vars:0 */

import Point from './Point';
import Particles from './Particles';


// optionally load config as second param to Particles constructor

const canvas = document.querySelector('#particles');
const test = new Particles(canvas);
test.start();
