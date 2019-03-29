import { content } from './utils';


const text = (element) => {
  const func = content('nes-text', element);

  func.primary = content('nes-text is-primary', element);
  func.success = content('nes-text is-success', element);
  func.warning = content('nes-text is-warning', element);
  func.error = content('nes-text is-error', element);
  func.disabled = content('nes-text is-disabled', element);

  return func;
};

export default text;
