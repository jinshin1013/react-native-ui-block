import React, { useMemo } from 'react'
import { View, ViewProps, ViewStyle } from 'react-native'

import { AlignItem, JustifyContent, Spacing, Size, Corner, Direction } from '../types'
import { createStyles } from '../utils/createStyle'
import { isNumber, isString } from '../utils/is'
import { Omit } from '../utils/omit'

export type BaseLayoutProps = {
  /**
   * Flex style.
   * If `true`, it will set `flex = 1`.
   */
  flex?: boolean | number
  /**
   * Size dimension.
   */
  size?: Size
  /**
   * Background color.
   */
  backgroundColor?: string
  /**
   * Flex Direction style. Default to `column`.
   */
  direction?: Direction
  /**
   * Vertical Alignment. Depending on the direction, it will change to
   * `alignItem` or `justifyContent` style.
   */
  vAlign?: AlignItem | JustifyContent
  /**
   * Horizontal alignment. Depending on the direction, it will change to
   * `alignItems` or `justifyContent` style.
   */
  hAlign?: AlignItem | JustifyContent
  /**
   * Padding style.
   */
  padding?: Spacing<number>
  /**
   * Margin style.
   */
  margin?: Spacing<number>
  /**
   * Border style.
   */
  border?: {
    width?: Spacing<number> | number
    color?: Spacing<string> | string
    radius?: Corner<number> | number
  }
  /**
   * Position style. If provided, `position: 'absolute'` will be assumed and set.
   */
  position?: {
    top?: number
    left?: number
    right?: number
    bottom?: number
  }
  /**
   * Underlying View Component. This has to be a typeof `View` component.
   *
   * ie: `UnderlyingView={Animated.View}`
   */
  UnderlyingView?: React.ComponentType<any> | React.ReactElement | null
} & ViewProps

/**
 * ### BaseLayout
 * A basic building block on top of the <View /> component with easier way to
 * define multiple layouts.
 */
export const BaseLayout: React.FC<BaseLayoutProps> = ({
  flex,
  direction,
  size,
  backgroundColor,
  vAlign,
  hAlign,
  padding,
  margin,
  border,
  position,
  style,
  UnderlyingView,
  ...props
}) => {
  // Main styles
  const mainStyle = useMemo(
    () =>
      createStyles<ViewStyle>({
        /**
         * Flex style.
         */
        flex: isNumber(flex) ? flex : flex ? 1 : undefined,
        /**
         * Flex Direction style. Default to `column`.
         */
        flexDirection: direction ?? 'column',
        /**
         * Size dimension.
         */
        width: isNumber(size) || isString(size) ? size : size?.width,
        height: isNumber(size) || isString(size) ? size : size?.height,
        maxWidth: !isNumber(size) && !isString(size) ? size?.maxWidth : undefined,
        maxHeight: !isNumber(size) && !isString(size) ? size?.maxHeight : undefined,
        minWidth: !isNumber(size) && !isString(size) ? size?.minWidth : undefined,
        minHeight: !isNumber(size) && !isString(size) ? size?.minHeight : undefined,
        /**
         * Background color.
         */
        backgroundColor,
        /**
         * Alignments.
         */
        alignItems: (direction?.includes('row') ? vAlign : hAlign) as AlignItem,
        justifyContent: (direction?.includes('row') ? hAlign : vAlign) as JustifyContent,
        /**
         * Padding style.
         */
        padding: isNumber(padding) ? padding : undefined,
        paddingTop: !isNumber(padding) ? padding?.top : undefined,
        paddingRight: !isNumber(padding) ? padding?.right : undefined,
        paddingBottom: !isNumber(padding) ? padding?.bottom : undefined,
        paddingLeft: !isNumber(padding) ? padding?.left : undefined,
        paddingVertical: !isNumber(padding) ? padding?.vertical : undefined,
        paddingHorizontal: !isNumber(padding) ? padding?.horizontal : undefined,
        /**
         * Margin style.
         */
        margin: isNumber(margin) ? margin : undefined,
        marginTop: !isNumber(margin) ? margin?.top : undefined,
        marginRight: !isNumber(margin) ? margin?.right : undefined,
        marginBottom: !isNumber(margin) ? margin?.bottom : undefined,
        marginLeft: !isNumber(margin) ? margin?.left : undefined,
        marginVertical: !isNumber(margin) ? margin?.vertical : undefined,
        marginHorizontal: !isNumber(margin) ? margin?.horizontal : undefined,
        /**
         * Border style.
         */
        // Border Radius.
        borderRadius: isNumber(border?.radius) ? border?.radius : undefined,
        borderTopLeftRadius: !isNumber(border?.radius)
          ? border?.radius?.topLeft ?? border?.radius?.left
          : undefined,
        borderBottomLeftRadius: !isNumber(border?.radius)
          ? border?.radius?.bottomLeft ?? border?.radius?.left
          : undefined,
        borderTopRightRadius: !isNumber(border?.radius)
          ? border?.radius?.topRight ?? border?.radius?.right
          : undefined,
        borderBottomRightRadius: !isNumber(border?.radius)
          ? border?.radius?.bottomRight ?? border?.radius?.right
          : undefined,
        // Border Width.
        borderWidth: isNumber(border?.width) ? border?.width : undefined,
        borderLeftWidth: !isNumber(border?.width)
          ? border?.width?.left ?? border?.width?.horizontal
          : undefined,
        borderRightWidth: !isNumber(border?.width)
          ? border?.width?.right ?? border?.width?.horizontal
          : undefined,
        borderTopWidth: !isNumber(border?.width)
          ? border?.width?.top ?? border?.width?.vertical
          : undefined,
        borderBottomWidth: !isNumber(border?.width)
          ? border?.width?.bottom ?? border?.width?.vertical
          : undefined,
        // Border Color.
        borderColor: isString(border?.color) ? border?.color : undefined,
        borderLeftColor: !isString(border?.color)
          ? border?.color?.left ?? border?.color?.horizontal
          : undefined,
        borderRightColor: !isString(border?.color)
          ? border?.color?.right ?? border?.color?.horizontal
          : undefined,
        borderTopColor: !isString(border?.color)
          ? border?.color?.top ?? border?.color?.vertical
          : undefined,
        borderBottomColor: !isString(border?.color)
          ? border?.color?.bottom ?? border?.color?.vertical
          : undefined,

        /**
         * Position style.
         */
        position: !!position ? 'absolute' : undefined,
        top: position?.top,
        left: position?.left,
        right: position?.right,
        bottom: position?.bottom,
      }),
    [flex, direction, size, backgroundColor, position, vAlign, hAlign, padding, margin, border]
  )

  if (UnderlyingView) {
    /**
     * TODO: Should probably type this properly at some stage.
     */
    // @ts-ignore
    return <UnderlyingView style={[mainStyle, style]} {...props} />
  }

  return <View style={[mainStyle, style]} {...props} />
}
