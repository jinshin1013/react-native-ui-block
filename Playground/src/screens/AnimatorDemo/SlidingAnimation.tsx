import React, { useState } from 'react'
import { Animator } from '../../../../lib'

import { Section } from './Section'

export type SlidingAnimationProps = {}

export const SlidingAnimation: React.FC<SlidingAnimationProps> = () => {
  const [visibility1, setVisibility1] = useState(false)
  const [visibility2, setVisibility2] = useState(false)
  const [visibility3, setVisibility3] = useState(false)
  const [visibility4, setVisibility4] = useState(false)

  return (
    <>
      <Section
        title="Slide from bottom"
        switchTitle="Toggle visibility"
        switchValue={visibility1}
        onSwitchToggle={setVisibility1}
      >
        <Animator.View
          size={{ width: 200, height: 100 }}
          backgroundColor="#bada55"
          visible={visibility1}
          animation={{
            opacity: [0, 1],
            translateY: [20, 0],
          }}
          config={{ unmount: false }}
        />
      </Section>

      <Section
        title="Slide from up"
        switchTitle="Toggle visibility"
        switchValue={visibility2}
        onSwitchToggle={setVisibility2}
      >
        <Animator.View
          size={{ width: 200, height: 100 }}
          backgroundColor="#7fe5f0"
          visible={visibility2}
          animation={{
            opacity: [0, 1],
            translateY: [-20, 0],
          }}
          config={{ unmount: false }}
        />
      </Section>

      <Section
        title="Slide from left"
        switchTitle="Toggle visibility"
        switchValue={visibility3}
        onSwitchToggle={setVisibility3}
      >
        <Animator.View
          size={{ width: 200, height: 100 }}
          backgroundColor="#7fe5f0"
          visible={visibility3}
          animation={{
            opacity: [0, 1],
            translateX: [-20, 0],
          }}
          config={{ unmount: false }}
        />
      </Section>

      <Section
        title="Slide from right"
        switchTitle="Toggle visibility"
        switchValue={visibility4}
        onSwitchToggle={setVisibility4}
      >
        <Animator.View
          size={{ width: 200, height: 100 }}
          backgroundColor="#7fe5f0"
          visible={visibility4}
          animation={{
            opacity: [0, 1],
            translateX: [20, 0],
          }}
          config={{ unmount: false }}
        />
      </Section>
    </>
  )
}
