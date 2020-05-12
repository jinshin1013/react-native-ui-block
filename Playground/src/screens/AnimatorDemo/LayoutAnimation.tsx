import React, { useState } from 'react'
import { Animator } from '../../../../lib'

import { Section } from './Section'

export type LayoutAnimationProps = {}

export const LayoutAnimation: React.FC<LayoutAnimationProps> = () => {
  const [visibility1, setVisibility1] = useState(false)
  const [visibility2, setVisibility2] = useState(false)
  const [visibility3, setVisibility3] = useState(false)
  const [visibility4, setVisibility4] = useState(false)

  return (
    <>
      {/* Background Color */}
      <Section
        title="Background color"
        switchTitle="Toggle visibility"
        switchValue={visibility1}
        onSwitchToggle={setVisibility1}
      >
        <Animator.View
          size={{ width: 200, height: 150 }}
          visible={visibility1}
          animation={{ backgroundColor: ['#7738f5', '#ffa51f'] }}
          config={{ useNativeDriver: false, unmount: false, duration: 500 }}
        />
      </Section>

      {/* Opacity */}
      <Section
        title="Opacity"
        switchTitle="Toggle visibility"
        switchValue={visibility2}
        onSwitchToggle={setVisibility2}
      >
        <Animator.View
          size={{ width: 200, height: 150 }}
          visible={visibility2}
          backgroundColor="#ff1f6a"
          animation={{ opacity: [0, 1] }}
          config={{ unmount: false, duration: 500 }}
        />
      </Section>

      {/* Width */}
      <Section
        title="Width"
        switchTitle="Toggle visibility"
        switchValue={visibility3}
        onSwitchToggle={setVisibility3}
      >
        <Animator.View
          size={{ height: 150 }}
          visible={visibility3}
          backgroundColor="#ff1f6a"
          animation={{ width: [0, 200] }}
          config={{ useNativeDriver: false, unmount: false, duration: 500 }}
        />
      </Section>

      {/* HEIGHT */}
      <Section
        title="Height"
        switchTitle="Toggle visibility"
        switchValue={visibility4}
        onSwitchToggle={setVisibility4}
      >
        <Animator.View
          size={{ width: 200 }}
          visible={visibility4}
          backgroundColor="#ff1f6a"
          animation={{ height: [0, 150] }}
          config={{ useNativeDriver: false, unmount: false, duration: 500 }}
        />
      </Section>
    </>
  )
}
