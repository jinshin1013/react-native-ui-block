import React from 'react'
import Slider, { SliderProps } from '@react-native-community/slider'
import { BaseLayout, BaseText, BaseTextProps, BaseLayoutProps } from '../../../../lib'

export type ConfigSliderSectionProps = {
  title: string
  titleProps?: BaseTextProps
  sliderProps: SliderProps
} & BaseLayoutProps

export const ConfigSliderSection: React.FC<ConfigSliderSectionProps> = ({
  title,
  titleProps,
  sliderProps,
  ...props
}) => {
  return (
    <BaseLayout {...props}>
      <BaseText fontSize={12} color="gray" {...titleProps}>
        {title}
      </BaseText>
      <Slider {...sliderProps} />
    </BaseLayout>
  )
}
