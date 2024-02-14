import { useEffect } from 'react';
import { Theme } from '../theme';
import { useTheme } from '../theme/useTheme';
import { newCssClassName } from './hashName';
import { injectStyle } from './injectStyle';

// css and styled function are used in popular CSS-in-JS libraries like styled-components and Emotion
// By using the same API, not only developers have familiar experience
// IDEs such as VSCode and WebStorm have extensions which can provide better autocompletion and
// syntax highlighting

// TODO: Provide better types for styled function and jsdoc

/**
 * A simple tagged template literal function that returns a CSS string.
 * @param strings
 * @param values
 * @returns
 */
export function css(strings: TemplateStringsArray, ...values: any[]): string {
  const cssString = strings.reduce((acc, str, i) => {
    const value = values[i] || '';
    return acc + str + value;
  }, '');
  return cssString;
}

/**
 * Wrap a component with supplied css styles
 * @param Component
 * @returns
 */
export function styled<P extends { className?: string; children?: React.ReactNode }>(
  Component: React.ComponentType<P> | keyof JSX.IntrinsicElements
) {
  return (strings: TemplateStringsArray | ((theme: Theme) => string), ...values: any[]) => {
    return (props: P) => {
      const { theme } = useTheme();
      let cssValue: string = '';

      if (typeof strings === 'function') {
        cssValue = strings(theme);
      } else {
        cssValue = css(strings, ...values);
      }

      const className = newCssClassName();
      const componentClassName = props.className ? `${props.className} ${className}` : className;

      useEffect(() => {
        injectStyle(cssValue, className);
      }, [cssValue, className]);

      return <Component {...props} className={componentClassName} />;
    };
  };
}
