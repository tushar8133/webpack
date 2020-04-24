import './main.scss';

const root = document.createElement("div")
root.innerHTML = `<p>Hello Webpack...!</p>`;
document.body.appendChild(root);
// require('alert.js');

import showAlert from './alert';
showAlert();
