/**
 * ### Clean Object
 * Remove any undefined fields in the given object.
 */
export function cleanObject<P extends object>(obj: P): P {
  // @ts-ignore
  Object.keys(obj).forEach((key) => obj[key] === undefined && delete obj[key])
  return obj
}
