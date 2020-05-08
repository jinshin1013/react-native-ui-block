import React from 'react'
import { BaseLayout, BaseText } from '../../../../lib'
import { TouchableOpacity } from 'react-native'

export type StackButtonsProps = {
  buttons: {
    title: string
    onPress: () => void
  }[]
}

export const StackButtons: React.FC<StackButtonsProps> = ({ buttons }) => {
  return (
    <BaseLayout
      direction="row"
      size={{ width: '100%' }}
      margin={{ vertical: 10 }}
      border={{ width: 1, radius: 4, color: '#bdb5b5' }}
    >
      {buttons.map((button, index) => {
        return (
          <BaseLayout
            flex
            key={`Stack-button-${button.title}-${index}`}
            border={{ color: '#bdb5b5', width: { right: index < buttons.length - 1 ? 1 : 0 } }}
            padding={{ horizontal: 4 }}
          >
            <TouchableOpacity onPress={button.onPress}>
              <BaseLayout flex size={{ height: 50 }} hAlign="center" vAlign="center">
                <BaseText>{button.title}</BaseText>
              </BaseLayout>
            </TouchableOpacity>
          </BaseLayout>
        )
      })}
    </BaseLayout>
  )
}
