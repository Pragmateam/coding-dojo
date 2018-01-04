import template from './template.html';

Controller.$inject = ['store'];

const taskDone = payload => ({ type: 'TASK_DONE', payload });

function Controller(store) {
  return {
    markAsDone (id) {
      store.dispatch(taskDone({ id }));
    }
  }
}


export default {
  template,
  controller: Controller,
  bindings: {
    description: '<',
    done: '<',
    id: '<'
  }
};
