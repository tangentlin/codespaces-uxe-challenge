/**
 * Sanitize css to avoid any CSS injection (TODO)
 * @param css
 * @returns
 */
export function sanitizeCss(css: string): string {
  return css;
}

/**
 * Sanitize css class name (TODO)
 * @param className
 * @returns
 */
export function sanitizeCssClassName(className: string): string {
  return className;
}

/**
 * Create call expression for calc function
 * @param args
 * @returns
 */
export function calc(...args: string[]): string {
  return `calc(${args.join(' ')})`;
}
