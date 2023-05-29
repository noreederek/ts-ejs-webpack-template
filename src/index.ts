import * as _ from 'lodash';
import $ from "jquery";
import './style.css';
// import Icon from './icon.png';

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Appended', 'with', 'Typescript'], ' ');
  element.classList.add('hello');

  // const myIcon = new Image();
  // myIcon.src = Icon;

  // element.appendChild(myIcon);

  return element;
}

$('<div>Appended with JQuery</div>').appendTo(document.body);
document.body.appendChild(component());