/**
 * ### IsNumber
 * Check whether the value is a number type.
 */
export function isNumber(value: unknown): value is number {
  return typeof value === 'number'
}

/**
 * ### IsString
 * Check whether the value is a string type.
 */
export function isString(value: unknown): value is string {
  return typeof value === 'string'
}

/**
 * ### IsBoolean
 * Check whether the value is a boolean type.
 */
export function isBoolean(value: unknown): value is boolean {
  return typeof value === 'boolean'
}
