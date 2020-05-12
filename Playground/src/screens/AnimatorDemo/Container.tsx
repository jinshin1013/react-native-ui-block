import React, { useState } from 'react'
import { BaseLayout, BaseText, Animator } from '../../../../lib'
import { TouchableOpacity } from 'react-native'

export type ContainerProps = {
  /**
   * Title of the container.
   */
  title: string
}

export const Container: React.FC<ContainerProps> = ({ title, children }) => {
  const [containerVisible, setContainerVisible] = useState(false)

  return (
    <BaseLayout flex margin={{ bottom: 20 }}>
      <BaseLayout direction="row" hAlign="space-between" vAlign="center" margin={{ bottom: 5 }}>
        <BaseText fontWeight="900" textTransform="uppercase" fontSize={20}>
          {title}
        </BaseText>

        <TouchableOpacity onPress={() => setContainerVisible((prev) => !prev)}>
          <BaseText color="#3881f5">{containerVisible ? 'HIDE' : 'SHOW'}</BaseText>
        </TouchableOpacity>
      </BaseLayout>

      <Animator.View
        flex
        visible={containerVisible}
        animation={{ opacity: [0, 1], translateY: [10, 0] }}
      >
        {children}
      </Animator.View>
    </BaseLayout>
  )
}
