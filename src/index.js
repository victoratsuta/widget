import React from 'react';
import {render} from 'react-dom';
import "@babel/polyfill";

import registerServiceWorker from './registerServiceWorker';

import App from './App';


// CREATE ROOT ELEMENT, SET ID AND STYLES

let rootElement = document.createElement('div');

rootElement.setAttribute('id', 'widget-root');

rootElement.style.position = 'absolute'
rootElement.style.left = 0
rootElement.style.right = 0
rootElement.style.top = 0

document.body.appendChild(rootElement);


render(<App/>, rootElement);

registerServiceWorker();
