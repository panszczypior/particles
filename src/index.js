/* eslint no-unused-vars:0 */

import Point from './Point';
import Particles from './Particles';
import config from './helpers/config.json';

// optionally load config as second param to Particles constructor

const canvas = document.querySelector('#particles');
const particlesTest = new Particles(canvas);
particlesTest.start();
