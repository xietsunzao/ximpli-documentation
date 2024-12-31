import siteConfig from '@generated/docusaurus.config';
import type * as PrismNamespace from 'prismjs';

export default function prismIncludeLanguages(
  PrismObject: typeof PrismNamespace,
): void {
  const {
    themeConfig: {prism},
  } = siteConfig;
  const {additionalLanguages = []} = prism as {additionalLanguages: string[]};

  // Prism components work on the Prism instance on the window, while prism-
  // react-renderer uses its own Prism instance. We temporarily mount the
  // instance onto window, import components to enhance it, then remove it to
  // avoid polluting global namespace.
  const PrismBefore = globalThis.Prism;
  globalThis.Prism = PrismObject;

  // Load base languages first
  require('prismjs/components/prism-markup-templating');
  require('prismjs/components/prism-bash');
  require('prismjs/components/prism-json');
  require('prismjs/components/prism-javascript');
  require('prismjs/components/prism-typescript');
  require('prismjs/components/prism-python');
  require('prismjs/components/prism-go');

  // Then load any additional languages
  additionalLanguages.forEach((lang) => {
    try {
      require(`prismjs/components/prism-${lang}`);
    } catch (e) {
      console.warn(`Failed to load Prism language '${lang}':`, e);
    }
  });

  // Restore former Prism global object
  if (PrismBefore) {
    globalThis.Prism = PrismBefore;
  } else {
    delete (globalThis as any).Prism;
  }
}
