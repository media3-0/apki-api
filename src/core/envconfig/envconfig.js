// @flow

import envConfiguration from 'node-env-configuration';
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
