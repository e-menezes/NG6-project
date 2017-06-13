import template from './navbar.html';// !text é um artifício do systemjs no plunker para carregar html
import controller from './navbar.controller';
import './navbar.scss'; // !css é um artifício do systemjs no plunker para carregar arquivos css ou scss ou sass

let navbarComponent = {
  bindings: {},
  template,
  controller
};

export default navbarComponent;
