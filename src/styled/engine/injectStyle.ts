import { sanitizeCss, sanitizeCssClassName } from './cssUtil';
import { newHashName } from './hashName';
import { InjectGlobalStyleBehavior, InjectGlobalStyleReturn } from './types';

const injectedClasses: Set<string> = new Set();
export function injectStyle(css: string, className: string) {
  const cleanedCss = sanitizeCss(css);
  const cleanedClassName = sanitizeCssClassName(className);
  if (injectedClasses.has(cleanedClassName)) {
    return;
  }

  const style = document.createElement('style');
  style.innerHTML = `.${cleanedClassName} {${cleanedCss}}`;
  document.head.appendChild(style);
  injectedClasses.add(cleanedClassName);
}

function newGlobalStyleId(): string {
  return newHashName('global-style');
}

const defaultGlobalStyleToken = Symbol('defaultGlobalStyle');
const globalStyleIdMap: Map<Symbol, string> = new Map([[defaultGlobalStyleToken, newGlobalStyleId()]]);

export function injectGlobalStyle(
  css: string,
  token: Symbol = defaultGlobalStyleToken,
  behavior: InjectGlobalStyleBehavior = 'append'
): InjectGlobalStyleReturn {
  let id = globalStyleIdMap.get(token);
  if (!id) {
    id = newGlobalStyleId();
    globalStyleIdMap.set(token, id);
  }

  const cleanedCss = sanitizeCss(css);
  let styleEl = document.getElementById(id);
  if (styleEl == null) {
    styleEl = document.createElement('style');
    styleEl.id = id;
    document.head.appendChild(styleEl);
  }

  const finalCss = behavior === 'append' ? `${styleEl.innerHTML}\n${cleanedCss}` : cleanedCss;
  styleEl.innerHTML = finalCss;

  return { token, id };
}
