var styles = require('./main.css');
module.exports = function () {
  var element = document.createElement('h1');
  element.innerText = 'Hello webpack hot reload';
  element.className = styles.redButton;
  return element;
}