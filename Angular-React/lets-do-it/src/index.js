import angular from 'angular';
import { createStore } from 'redux';
import app from './components/app';
import inputTask from './components/input-task';
import taskList from './components/task-list';
import taskItem from './components/task-item';

const todoAppModule = angular.module('todoApp', []);

const rootReducer = (state = {
  tasks: [
    { id: 1, description: 'Buy milk', done: false },
    { id: 2, description: 'Buy bread', done: true },
  ]
}, {type, payload}) => {
  switch (type) {
    case 'TASK_DONE':
      return {
        ...state,
        tasks: state.tasks.map(task => {
          if (task.id === payload.id) {
            task.done = true;
          }
          return task;
        })
      };
    default:
      return state

  }

};

const store = createStore(rootReducer);

todoAppModule.service('store', () => store);
todoAppModule.component('app', app);
todoAppModule.component('inputTask', inputTask);
todoAppModule.component('taskList', taskList);
todoAppModule.component('taskItem', taskItem);

