import React, { useState } from 'react'
import { Animated, ViewStyle, StyleProp } from 'react-native'

import { AnimatorComponentProps, TextAnimations } from './types'
import { useAnimated } from './useAnimated'
import { BaseText, BaseTextProps } from '../BaseText'
import { createInterpolatedStyles, textAnimationList } from './animationList'
import { Omit } from '../utils/omit'

export type TextAnimatorProps = {
  /**
   * A list of View animations.
   */
  animation: TextAnimations
  /**
   * A custom style.
   */
  style?: StyleProp<ViewStyle>
} & AnimatorComponentProps &
  Omit<BaseTextProps, 'UnderlyingText'>

/**
 * ### TextAnimator
 * This component allows easily and declaratively define the desired animation on the
 * Text component.
 */
export const TextAnimator: React.FC<TextAnimatorProps> = ({
  /** TextAnimatorProps  */
  visible = true,
  config: _config,
  animation,
  onAnimationReset,
  onAnimationEnd,
  style,
  ...textProps
}) => {
  // Set the default config.
  const config = {
    fromValue: _config?.fromValue ?? 0,
    toValue: _config?.toValue ?? 1,
    inputRange: _config?.inputRange ?? [0, 1],
    duration: _config?.duration ?? 300,
    delay: _config?.delay ?? 0,
    unmount: _config?.unmount ?? true,
    useNativeDriver: _config?.useNativeDriver ?? true,
  }

  /** States. */
  const [animationFinished, setAnimationFinished] = useState(visible)
  const animator = useAnimated(
    {
      type: 'timing',
      initialValue: config.fromValue,
      toValue: visible ? config.toValue : config.fromValue,
      duration: config.duration,
      delay: config.delay,
      useNativeDriver: config.useNativeDriver,
    },
    () => {
      if (visible) {
        onAnimationEnd?.()
      } else {
        onAnimationReset?.()
      }

      if (config.unmount) {
        setAnimationFinished(visible)
      }
    }
  )

  /** Animation styles. */
  const animationStyle = createInterpolatedStyles({
    animatedValue: animator,
    inputRange: config.inputRange,
    animations: animation,
    nonTransformAnimationList: textAnimationList,
  })

  if (config.unmount && !animationFinished && !visible) {
    return null
  }

  return <BaseText UnderlyingText={Animated.Text} {...textProps} style={[style, animationStyle]} />
}
