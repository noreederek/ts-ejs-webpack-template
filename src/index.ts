import * as _ from 'lodash';
import $ from "jquery";

function component() {
  const element = document.createElement('div');

  element.innerHTML = _.join(['Hello', 'webpadckd'], ' ');

  return element;
}


$('<footer>Appended with JQ</footer>').appendTo(document.body);
document.body.appendChild(component());