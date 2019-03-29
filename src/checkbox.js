/* eslint-disable no-param-reassign */
import { input } from 'elebend-js';
import { selfClosing, isObject } from './utils';

const checkbox = (attr) => {
  if (isObject(attr)) {
    attr.type = 'checkbox';
    return selfClosing('nes-checkbox', input)(attr);
  }
  return selfClosing('nes-checkbox', input)({ type: 'checkbox' });
};

checkbox.dark = (attr) => {
  if (isObject(attr)) {
    attr.type = 'checkbox';
    return selfClosing('nes-checkbox is-dark', input)(attr);
  }
  return selfClosing('nes-checkbox is-dark', input)({ type: 'checkbox' });
};

export default checkbox;
