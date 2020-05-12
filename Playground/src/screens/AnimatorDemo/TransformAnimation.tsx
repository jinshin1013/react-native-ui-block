import React, { useState } from 'react'
import { Animator } from '../../../../lib'

import { Section } from './Section'

export type TransformAnimationProps = {}

export const TransformAnimation: React.FC<TransformAnimationProps> = () => {
  const [visibility1, setVisibility1] = useState(false)
  const [visibility2, setVisibility2] = useState(false)
  const [visibility3, setVisibility3] = useState(false)
  const [visibility4, setVisibility4] = useState(false)
  const [visibility5, setVisibility5] = useState(false)

  return (
    <>
      {/* Translate Y. */}
      <Section
        title="Translate Y"
        switchTitle="Toggle visibility"
        switchValue={visibility1}
        onSwitchToggle={setVisibility1}
      >
        <Animator.View
          size={200}
          backgroundColor="#1f57ff"
          visible={visibility1}
          animation={{ translateY: [40, 0] }}
        />
      </Section>

      {/* Translate X. */}
      <Section
        title="Translate X"
        switchTitle="Toggle visibility"
        switchValue={visibility2}
        onSwitchToggle={setVisibility2}
      >
        <Animator.View
          size={200}
          backgroundColor="#1f57ff"
          visible={visibility2}
          animation={{ translateX: [40, 0] }}
        />
      </Section>

      {/* Scale. */}
      <Section
        title="Scale"
        switchTitle="Toggle visibility"
        switchValue={visibility3}
        onSwitchToggle={setVisibility3}
      >
        <Animator.View
          size={200}
          backgroundColor="#1f57ff"
          visible={visibility3}
          animation={{ scale: [0, 1] }}
        />
      </Section>

      {/* Rotate. */}
      <Section
        title="Rotate"
        switchTitle="Toggle visibility"
        switchValue={visibility4}
        onSwitchToggle={setVisibility4}
      >
        <Animator.View
          size={200}
          backgroundColor="#1f57ff"
          visible={visibility4}
          animation={{ rotate: ['0deg', '90deg'] }}
        />
      </Section>

      {/* All. */}
      <Section
        title="All"
        switchTitle="Toggle visibility"
        switchValue={visibility5}
        onSwitchToggle={setVisibility5}
      >
        <Animator.View
          size={200}
          backgroundColor="#1f57ff"
          visible={visibility5}
          animation={{
            scale: [0, 1],
            rotate: ['0deg', '90deg'],
            translateY: [40, 0],
            translateX: [40, 0],
          }}
        />
      </Section>
    </>
  )
}
