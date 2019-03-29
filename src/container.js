import { div } from 'elebend-js';
import { content } from './utils';

const CLASS = 'nes-container';

const container = content(CLASS, div);

const CENTERED = x => `${x} is-centered`;
const ROUNDED = x => `${x} is-rounded`;
const TITLE = x => `${x} with-title`;
const DARK = x => `${x} is-dark`;

/**
 * 
 */
const titled = TITLE(CLASS);

/**
 *
 */
const centered = CENTERED(CLASS);
container.centered = content(centered, div);

const centeredRounded = ROUNDED(centered);
container.centered.rounded = content(centeredRounded, div);

container.centered.rounded.dark = content(DARK(centeredRounded), div);

const centeredDark = DARK(centered);
container.centered.dark = content(centeredDark, div);

container.centered.dark.rounded = container.centered.rounded.dark;

/**
 *
 */
const rounded = ROUNDED(CLASS);
container.rounded = content(rounded, div);
container.rounded.centered = container.centered.rounded;

const roundedDark = DARK(ROUNDED);
container.rounded.dark = content(roundedDark, div);
container.rounded.dark.centered = container.centered.rounded.dark;

/**
 *
 */
const dark = DARK(CLASS);
container.dark = content(dark, div);
container.dark.centered = container.centered.dark;
container.dark.rounded = container.rounded.dark;

export default container;
