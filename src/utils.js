/* eslint-disable no-param-reassign */
import { text } from 'elebend-js';

/**
 * @ignore
 */
export const isString = x => typeof x === 'string';
/**
 * @ignore
 */
export const isFunction = x => typeof x === 'function';
/**
 * @ignore
 */
export const isNumber = x => typeof x === 'number';
/**
 * @ignore
 */
export const isObject = x => typeof x === 'object';
/**
 * @ignore
 */
export const isUndefined = x => typeof x === 'undefined';
/**
 * @ignore
 */
export const isBody = x => isString(x) || isFunction(x);

/**
 * @ignore
 */
export const bodyHandler = body => (x) => {
  if (isString(body)) {
    text(body);
  } else if (isFunction(body)) {
    body(x);
  }
};

/**
 * @ignore
 */
export const elementHandler = (attr, body) => (x) => {
  bodyHandler(attr)(x);
  bodyHandler(body)(x);
};
/**
 * @ignore
 */
export const content = (className, element) => (attr, body) => {
  if (isString(attr) || isFunction(attr)) {
    return element({ class: className }, elementHandler(attr, body));
  }
  if (isObject(attr)) {
    const c = attr.class;
    if (isUndefined(c)) {
      attr.class = className;
    } else {
      attr.class = `${className} ${c}`;
    }
    return element(attr, body);
  }
  return element({ class: className }, body);
};
/**
 * @ignore
 */
export const selfClosing = (className, element) => (attr) => {
  if (isObject(attr)) {
    const c = attr.class;
    if (isUndefined(c)) {
      attr.class = className;
    } else {
      attr.class = `${className} ${c}`;
    }
    return element(attr);
  }
  return element({ class: className });
};
