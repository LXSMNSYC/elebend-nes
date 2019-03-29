/* eslint-disable no-param-reassign */
import { input, label, span } from 'elebend-js';
import { selfClosing, isObject } from './utils';

const radio = (name, attr) => {
  if (isObject(attr)) {
    attr.type = 'radio';
    return label(() => {
      selfClosing('nes-radio', input)(attr);
      span(name);
    });
  }
  return label(() => {
    selfClosing('nes-radio', input)({ type: 'radio' });
    span(name);
  });
};

radio.dark = (name, attr) => {
  if (isObject(attr)) {
    attr.type = 'radio';
    return label(() => {
      selfClosing('nes-radio is-dark', input)(attr);
      span(name);
    });
  }
  return label(() => {
    selfClosing('nes-radio is-dark', input)({ type: 'radio' });
    span(name);
  });
};

export default radio;
