import { Animated } from 'react-native'

import {
  TransformAnimations,
  CommonAnimations,
  ViewAnimations,
  TextAnimations,
  StringInterpolation,
  NumberInterpolation,
} from './types'

export const transformAnimationList: (keyof TransformAnimations)[] = [
  'translateX',
  'translateY',
  'scaleY',
  'scaleX',
  'scale',
  'rotate',
]

export const commonAnimationLists: (keyof CommonAnimations)[] = [
  'opacity',
  'width',
  'height',
  'padding',
  'paddingBottom',
  'paddingTop',
  'margin',
  'marginBottom',
  'marginTop',
  'left',
  'top',
  'left',
  'bottom',
  'right',
]

export const viewAnimationList: (keyof ViewAnimations)[] = [
  ...commonAnimationLists,
  ...transformAnimationList,
  'backgroundColor',
]

export const textAnimationList: (keyof TextAnimations)[] = [
  ...commonAnimationLists,
  ...transformAnimationList,
  'color',
  'fontSize',
]

type CreateInterpolatedStylesParams = {
  /**
   * A list of all animations.
   */
  animations: {
    [index: string]: StringInterpolation | NumberInterpolation | undefined
  }
  /**
   * Animated Value.
   */
  animatedValue: Animated.AnimatedValue
  /**
   * Input range configured.
   */
  inputRange: number[]
  /**
   * A list on non-transformation styles desired to be caught.
   * If not provided, all non-transformation styles will be applied.
   */
  nonTransformAnimationList?: string[]
}

type InterpolatedAnimationList = {
  nonTransformAnimations: { [key: string]: Animated.AnimatedInterpolation }[]
  transformAnimations: { [key: string]: Animated.AnimatedInterpolation }[]
}

export const createInterpolatedStyles = ({
  animations,
  animatedValue,
  inputRange,
  nonTransformAnimationList,
}: CreateInterpolatedStylesParams) => {
  const initialAnimationList: InterpolatedAnimationList = {
    nonTransformAnimations: [],
    transformAnimations: [],
  }

  if (!animations) {
    return
  }

  const extractedAnimationList = Object.entries(animations).reduce<InterpolatedAnimationList>(
    (extracted, [animationType, animationRange]) => {
      const interpolatedStyle = {
        [animationType]: animatedValue.interpolate({
          inputRange,
          outputRange: animationRange!,
        }),
      }

      // Transform Animation.
      if (transformAnimationList.includes(animationType as keyof TransformAnimations)) {
        return {
          ...extracted,
          transformAnimations: [...extracted.transformAnimations, interpolatedStyle],
        }
      }

      // If Non Transformation Animation list is not provided OR
      // the animation is included in the Non Transformation Animation List.
      if (!nonTransformAnimationList || nonTransformAnimationList.includes(animationType)) {
        return {
          ...extracted,
          nonTransformAnimations: [...extracted.nonTransformAnimations, interpolatedStyle],
        }
      }

      return extracted
    },
    initialAnimationList
  )

  return {
    transform: extractedAnimationList.transformAnimations,
    ...Object.assign({}, ...extractedAnimationList.nonTransformAnimations),
  }
}
