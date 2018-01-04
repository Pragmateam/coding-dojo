import template from './template.html';

controller.$inject = ['store'];
function controller(store) {
  return {
    tasks: [...store.getState().tasks]
  }
}

export default {
  template,
  controller
};
