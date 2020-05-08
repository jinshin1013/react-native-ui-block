/**
 * Align Items type.
 */
export type AlignItem = 'flex-start' | 'flex-end' | 'center' | 'stretch' | 'baseline'

/**
 * Justify Content type.
 */
export type JustifyContent =
  | 'center'
  | 'flex-start'
  | 'flex-end'
  | 'space-between'
  | 'space-around'
  | 'space-evenly'

/**
 * Represents the general side of an element.
 * eg: Padding
 */
export type Spacing<ValueType> =
  | {
      top?: ValueType
      left?: ValueType
      right?: ValueType
      bottom?: ValueType

      vertical?: ValueType // Left && Right.
      horizontal?: ValueType // Top && Bottom.
    }
  | ValueType // All sides.

/**
 * Represents the Corner of an element.
 * ie: BorderRadius
 */
export type Corner<ValueType> =
  | {
      topLeft?: ValueType
      topRight?: ValueType
      bottomLeft?: ValueType
      bottomRight?: ValueType

      left?: ValueType // Top Left && Bottom Left.
      right?: ValueType // Top Right && Bottom Right.

      top?: ValueType // Top Left && Top Right.
      bottom?: ValueType // Bottom Left && Bottom Right.
    }
  | ValueType // All sides.

/**
 * Represents the Size of an element.
 */
export type Size =
  | {
      width?: number | string
      height?: number | string
      maxWidth?: number | string
      maxHeight?: number | string
      minWidth?: number | string
      minHeight?: number | string
    }
  | number // Both width and height.
  | string // Both width and height.

/**
 * Represents the FlexDirection.
 */
export type Direction = 'row' | 'column' | 'row-reverse' | 'column-reverse'
