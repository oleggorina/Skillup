import * as $ from 'jquery';
import '@babel/polyfill';
import '@css/style.css';
import '@scss/style.scss';
import '@model/lodash';
import Post from '@model/post.js';
import json from '@assets/data';
import imgLogo from '@assets/icon-square-big.png';
import xml from '@assets/data.xml';
import csv from '@assets/data.csv';

const post = new Post('Webpack Post Title', imgLogo);

$('pre').addClass('code').html(post.toString())

console.log('JSON: ', json);
console.log('XML: ', xml);
console.log('CSV: ', csv);
