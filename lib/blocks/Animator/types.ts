export type AnimatorComponentConfigType = {
  /**
   * A from animator value.
   * @default 0
   */
  fromValue?: number
  /**
   * A to animator value.
   * @default 1
   */
  toValue?: number
  /**
   * A custom input range of the animation.
   * If this is provided, make sure to have the same outputRange for each animation.
   * @default [0, 1]
   */
  inputRange?: number[]
  /**
   * A duration of the animation.
   * @default 300
   */
  duration?: number
  /**
   * A delay running the animation.
   * @default 0
   */
  delay?: number
  /**
   * A useNativeDriver animator config.
   * @default true
   */
  useNativeDriver?: boolean
  /**
   * A flag to unmount the component if `visible` prop is false.
   * @default true
   */
  unmount?: boolean
}

/**
 * A common Animator component props.
 */
export type AnimatorComponentProps = {
  /**
   * A visibility of the component. When `true`, the animation will start to its configured end.
   * If `false`, the animation will start to its configured beginning and finally unmount.
   * @default true
   */
  visible?: boolean
  /**
   * A Configuration for the Animator.
   */
  config?: AnimatorComponentConfigType
  /**
   * This will run at the end of the animation only on `visible = true`.
   */
  onAnimationEnd?: () => void
  /**
   * This will run at the end of the animation only on `visible = false`.
   */
  onAnimationReset?: () => void
}

/**
 * String animation interpolation
 */
export type StringInterpolation = string[]

/**
 * Number animation interpolation
 */
export type NumberInterpolation = number[]

/**
 * A list of Transform animation types.
 */
export type TransformAnimations = {
  translateY?: NumberInterpolation
  translateX?: NumberInterpolation
  scaleY?: NumberInterpolation
  scaleX?: NumberInterpolation
  scale?: NumberInterpolation
  rotate?: StringInterpolation
}

/**
 * A list of Common animation types.
 */
export type CommonAnimations = {
  opacity?: NumberInterpolation
  width?: NumberInterpolation
  height?: NumberInterpolation
  padding?: NumberInterpolation
  paddingTop?: NumberInterpolation
  paddingBottom?: NumberInterpolation
  margin?: NumberInterpolation
  marginTop?: NumberInterpolation
  marginBottom?: NumberInterpolation
}

/**
 * A list of View based component animation types.
 */
export type ViewAnimations = {
  backgroundColor?: StringInterpolation
} & CommonAnimations &
  TransformAnimations

/**
 * A list of Text based component animation types.
 */
export type TextAnimations = {
  color?: StringInterpolation
  fontSize?: NumberInterpolation
} & CommonAnimations &
  TransformAnimations
