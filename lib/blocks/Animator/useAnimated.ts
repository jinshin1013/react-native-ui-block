import { useEffect, useRef } from 'react'
import { Animated } from 'react-native'

type BaseAnimation = {
  initialValue: number
  type: 'timing'
}

export const useAnimated = (
  config: BaseAnimation & Animated.TimingAnimationConfig,
  callback?: () => void
): Animated.Value => {
  const animatedValue = useRef(new Animated.Value(config.initialValue)).current

  useEffect(() => {
    Animated[config.type](animatedValue, config).start(callback)
    // Intentionally left the deps requirement blank as we do not want to
    // finish the animation early.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [config.toValue])

  return animatedValue
}
