/**
* Intlayer configuration file documentation 
* @see https://intlayer.org/doc/concept/configuration
*/

import { type IntlayerConfig, Locales } from 'intlayer';

const config: IntlayerConfig = {
  internationalization: {
    locales: [Locales.ENGLISH, Locales.PORTUGUESE_BRAZIL],
    defaultLocale: Locales.PORTUGUESE_BRAZIL,
  }
}

export default config;
