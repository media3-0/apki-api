// @flow

import envConfiguration from 'envconfig-alpha';
import type { Options } from './typedefs';

/**
 * init returns given defaults object initialized with environment variables.
 */
function init(defaults: any, opts: Options): any {
  return envConfiguration({
    defaults,
    prefix: opts.prefix,
    addAdditionalFields: false,
  });
}

export default { init };
