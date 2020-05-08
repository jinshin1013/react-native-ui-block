import { StyleSheet } from 'react-native'

import { cleanObject } from './cleanObject'

/**
 * ### CreateStyles
 * Generate a StyleSheet style.
 */
export function createStyles<P extends object>(styles: P) {
  return StyleSheet.create({
    main: cleanObject<P>(styles),
  }).main
}
