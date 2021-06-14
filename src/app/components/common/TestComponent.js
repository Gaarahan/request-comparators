import { Component } from './Component.js';

export class TestComponent extends Component {
  static selector() {
    return 'app-test';
  }

  template() {
    return `
        <style>
          label { color: #86b25c }
        </style>
        <label for='test'> this is test: </label>
        <input id='test' type='text'/>
    `;
  }
}
