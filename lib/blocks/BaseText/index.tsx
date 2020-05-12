import React, { useMemo } from 'react'
import { Text, TextStyle, TextProps } from 'react-native'

import { Spacing, Size } from '../types'
import { createStyles } from '../utils/createStyle'
import { isNumber, isString } from '../utils/is'

export type BaseTextProps = {
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
   * Color of the text.
   */
  color?: string
  /**
   * Padding style.
   */
  padding?: Spacing<number>
  /**
   * Margin style.
   */
  margin?: Spacing<number>
  /**
   * Text align style.
   */
  textAlign?: 'auto' | 'left' | 'right' | 'center' | 'justify'
  /**
   * Font size style.
   */
  fontSize?: number
  /**
   * Font weight style.
   */
  fontWeight?:
    | 'normal'
    | 'bold'
    | '100'
    | '200'
    | '300'
    | '400'
    | '500'
    | '600'
    | '700'
    | '800'
    | '900'
  /**
   * Font style.
   */
  fontStyle?: 'normal' | 'italic'
  /**
   * Text transform style.
   */
  textTransform?: 'none' | 'capitalize' | 'uppercase' | 'lowercase'
  /**
   *
   */
  /**
   * Underlying Text Component. This has to be a typeof `Text` component.
   *
   * ie: `UnderlyingText={Animated.Text}`
   */
  UnderlyingText?: React.ComponentType<any> | React.ReactElement | null
} & TextProps

/**
 * ### BaseLayout
 * A basic building block on top of the <View /> component with easier way to
 * define multiple layouts.
 */
export const BaseText: React.FC<BaseTextProps> = ({
  flex,
  size,
  color,
  padding,
  margin,
  textAlign,
  fontSize,
  fontWeight,
  fontStyle,
  textTransform,
  style,
  UnderlyingText,
  ...props
}) => {
  // Main styles
  const mainStyle = useMemo(
    () =>
      createStyles<TextStyle>({
        /**
         * Flex style.
         */
        flex: isNumber(flex) ? flex : flex ? 1 : undefined,

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
         * Color of the text.
         */
        color,
        /**
         * Text font size style.
         */
        fontSize,
        /**
         * Text align style.
         */
        textAlign,
        /**
         * Text transform style.
         */
        textTransform,
        /**
         * Font weight style.
         */
        fontWeight,
        /**
         * Font style.
         */
        fontStyle,
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
      }),
    [flex, size, color, fontSize, fontWeight, fontStyle, textAlign, textTransform, padding, margin]
  )

  if (UnderlyingText) {
    /**
     * TODO: Should probably type this properly at some stage.
     */
    // @ts-ignore
    return <UnderlyingText style={[mainStyle, style]} {...props} />
  }

  return <Text style={[mainStyle, style]} {...props} />
}
