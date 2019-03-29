var ElebendNES = (function (exports, elebendJs) {
  'use strict';

  /* eslint-disable no-param-reassign */

  /**
   * @ignore
   */
  const isString = x => typeof x === 'string';
  /**
   * @ignore
   */
  const isFunction = x => typeof x === 'function';
  /**
   * @ignore
   */
  const isObject = x => typeof x === 'object';
  /**
   * @ignore
   */
  const isUndefined = x => typeof x === 'undefined';

  /**
   * @ignore
   */
  const bodyHandler = body => (x) => {
    if (isString(body)) {
      elebendJs.text(body);
    } else if (isFunction(body)) {
      body(x);
    }
  };

  /**
   * @ignore
   */
  const elementHandler = (attr, body) => (x) => {
    bodyHandler(attr)(x);
    bodyHandler(body)(x);
  };
  /**
   * @ignore
   */
  const content = (className, element) => (attr, body) => {
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
  const selfClosing = (className, element) => (attr) => {
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

  const text = (element) => {
    const func = content('nes-text', element);

    func.primary = content('nes-text is-primary', element);
    func.success = content('nes-text is-success', element);
    func.warning = content('nes-text is-warning', element);
    func.error = content('nes-text is-error', element);
    func.disabled = content('nes-text is-disabled', element);

    return func;
  };

  const button = content('nes-btn', elebendJs.a);

  button.primary = content('nes-btn is-primary', elebendJs.a);
  button.success = content('nes-btn is-success', elebendJs.a);
  button.warning = content('nes-btn is-warning', elebendJs.a);
  button.error = content('nes-btn is-error', elebendJs.a);
  button.disabled = content('nes-btn is-disabled', elebendJs.a);

  const CLASS = 'nes-container';

  const container = content(CLASS, elebendJs.div);

  const CENTERED = x => `${x} is-centered`;
  const ROUNDED = x => `${x} is-rounded`;
  const DARK = x => `${x} is-dark`;

  /**
   *
   */

  const centered = CENTERED(CLASS);
  container.centered = content(centered, elebendJs.div);

  const centeredRounded = ROUNDED(centered);
  container.centered.rounded = content(centeredRounded, elebendJs.div);

  container.centered.rounded.dark = content(DARK(centeredRounded), elebendJs.div);

  const centeredDark = DARK(centered);
  container.centered.dark = content(centeredDark, elebendJs.div);

  container.centered.dark.rounded = container.centered.rounded.dark;

  /**
   *
   */
  const rounded = ROUNDED(CLASS);
  container.rounded = content(rounded, elebendJs.div);
  container.rounded.centered = container.centered.rounded;

  const roundedDark = DARK(ROUNDED);
  container.rounded.dark = content(roundedDark, elebendJs.div);
  container.rounded.dark.centered = container.centered.rounded.dark;

  /**
   *
   */
  const dark = DARK(CLASS);
  container.dark = content(dark, elebendJs.div);
  container.dark.centered = container.centered.dark;
  container.dark.rounded = container.rounded.dark;

  /* eslint-disable no-param-reassign */

  const radio = (name, attr) => {
    if (isObject(attr)) {
      attr.type = 'radio';
      return elebendJs.label(() => {
        selfClosing('nes-radio', elebendJs.input)(attr);
        elebendJs.span(name);
      });
    }
    return elebendJs.label(() => {
      selfClosing('nes-radio', elebendJs.input)({ type: 'radio' });
      elebendJs.span(name);
    });
  };

  radio.dark = (name, attr) => {
    if (isObject(attr)) {
      attr.type = 'radio';
      return elebendJs.label(() => {
        selfClosing('nes-radio is-dark', elebendJs.input)(attr);
        elebendJs.span(name);
      });
    }
    return elebendJs.label(() => {
      selfClosing('nes-radio is-dark', elebendJs.input)({ type: 'radio' });
      elebendJs.span(name);
    });
  };

  /* eslint-disable no-param-reassign */

  const checkbox = (attr) => {
    if (isObject(attr)) {
      attr.type = 'checkbox';
      return selfClosing('nes-checkbox', elebendJs.input)(attr);
    }
    return selfClosing('nes-checkbox', elebendJs.input)({ type: 'checkbox' });
  };

  checkbox.dark = (attr) => {
    if (isObject(attr)) {
      attr.type = 'checkbox';
      return selfClosing('nes-checkbox is-dark', elebendJs.input)(attr);
    }
    return selfClosing('nes-checkbox is-dark', elebendJs.input)({ type: 'checkbox' });
  };

  exports.Button = button;
  exports.Checkbox = checkbox;
  exports.Container = container;
  exports.Radio = radio;
  exports.Text = text;

  return exports;

}({}, Elebend));
