import { a } from 'elebend-js';
import { content } from './utils';


const button = content('nes-btn', a);

button.primary = content('nes-btn is-primary', a);
button.success = content('nes-btn is-success', a);
button.warning = content('nes-btn is-warning', a);
button.error = content('nes-btn is-error', a);
button.disabled = content('nes-btn is-disabled', a);

export default button;
