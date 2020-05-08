import React, { useState } from 'react'
import { ScrollView } from 'react-native'
import { BaseLayout, BaseText, Direction, AlignItem, JustifyContent } from '../../../../lib'

import { RootType } from '../../routes/types'
import { ConfigSliderSection } from './ConfigSliderSection'
import { StackButtons } from './StackButtons'

export type BaseLayoutDemoProps = {}

export const BaseLayoutDemo: RootType<BaseLayoutDemoProps> = () => {
  const [width, setWidth] = useState(300)
  const [height, setHeight] = useState(300)
  const [backgroundColor, setBackgroundColor] = useState({ r: 255, g: 102, b: 102, a: 1 })
  const [borderRadius, setBorderRadius] = useState(0)
  const [borderWidth, setBorderWidth] = useState(0)
  const [direction, setDirection] = useState<Direction>('column')
  const [hAlign, setHAlign] = useState<AlignItem | JustifyContent>('flex-start')
  const [vAlign, setVAlign] = useState<AlignItem | JustifyContent>('flex-start')

  return (
    <BaseLayout flex padding={{ top: 20 }} hAlign="center">
      {/* BaseLayout component to be demoed. */}
      <ScrollView>
        <BaseLayout
          direction={direction}
          size={{ width, height }}
          backgroundColor={`rgba(${backgroundColor.r}, ${backgroundColor.g}, ${backgroundColor.b}, ${backgroundColor.a})`}
          border={{
            radius: borderRadius,
            width: borderWidth,
            color: 'black',
          }}
          vAlign={vAlign}
          hAlign={hAlign}
        >
          <BaseText margin={10} fontSize={20}>
            Item 1
          </BaseText>
          <BaseText margin={10} fontSize={20}>
            Item 2
          </BaseText>
        </BaseLayout>
      </ScrollView>

      {/* Config ground. */}
      <BaseLayout
        position={{ bottom: 0 }}
        backgroundColor="white"
        size={{ width: '100%', height: 400 }}
        border={{
          color: '#e6e6e6',
          width: { top: 1 },
        }}
        padding={15}
      >
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* Width and Height. */}
          <ConfigSliderSection
            title="WIDTH"
            sliderProps={{
              value: width,
              onValueChange: setWidth,
              maximumValue: 300,
              style: { width: '80%' },
            }}
          />
          <ConfigSliderSection
            title="HEIGHT"
            sliderProps={{
              value: height,
              onValueChange: setHeight,
              maximumValue: 300,
              style: { width: '80%' },
            }}
          />

          {/* Background color. */}
          <BaseText fontSize={12} color="gray">
            BACKGROUND COLOR
          </BaseText>
          <ConfigSliderSection
            direction="row"
            vAlign="center"
            title="R"
            titleProps={{ margin: { right: 10 } }}
            sliderProps={{
              value: backgroundColor.r,
              onValueChange: (r) => setBackgroundColor((prev) => ({ ...prev, r })),
              maximumValue: 255,
              style: { width: '75%' },
            }}
          />
          <ConfigSliderSection
            direction="row"
            vAlign="center"
            title="G"
            titleProps={{ margin: { right: 10 } }}
            sliderProps={{
              value: backgroundColor.g,
              onValueChange: (g) => setBackgroundColor((prev) => ({ ...prev, g })),
              maximumValue: 255,
              style: { width: '75%' },
            }}
          />
          <ConfigSliderSection
            direction="row"
            vAlign="center"
            title="B"
            titleProps={{ margin: { right: 10 } }}
            sliderProps={{
              value: backgroundColor.b,
              onValueChange: (b) => setBackgroundColor((prev) => ({ ...prev, b })),
              maximumValue: 255,
              style: { width: '75%' },
            }}
          />
          <ConfigSliderSection
            direction="row"
            vAlign="center"
            title="A"
            titleProps={{ margin: { right: 10 } }}
            sliderProps={{
              value: backgroundColor.a,
              onValueChange: (a) => setBackgroundColor((prev) => ({ ...prev, a })),
              maximumValue: 1,
              style: { width: '75%' },
            }}
          />

          {/* Border. */}
          <ConfigSliderSection
            title="BORDER RADIUS"
            sliderProps={{
              value: borderRadius,
              onValueChange: setBorderRadius,
              maximumValue: width / 2,
              style: { width: '80%' },
            }}
          />
          <ConfigSliderSection
            title="BORDER WIDTH"
            sliderProps={{
              value: borderWidth,
              onValueChange: setBorderWidth,
              maximumValue: 5,
              style: { width: '80%' },
            }}
          />

          {/* Direction */}
          <BaseText fontSize={12} color="gray">
            DIRECTION
          </BaseText>
          <StackButtons
            buttons={[
              { title: 'Column', onPress: () => setDirection('column') },
              { title: 'Column Reverse', onPress: () => setDirection('column-reverse') },
              { title: 'Row', onPress: () => setDirection('row') },
              { title: 'Row Reverse', onPress: () => setDirection('row-reverse') },
            ]}
          />

          {/* Align */}
          <BaseText fontSize={12} color="gray">
            ALIGN
          </BaseText>
          <StackButtons
            buttons={[
              {
                title: 'Top Left',
                onPress: () => {
                  setHAlign('flex-start')
                  setVAlign('flex-start')
                },
              },
              {
                title: 'Top Right',
                onPress: () => {
                  setHAlign('flex-end')
                  setVAlign('flex-start')
                },
              },
              {
                title: 'Center',
                onPress: () => {
                  setHAlign('center')
                  setVAlign('center')
                },
              },
              {
                title: 'Bottom Left',
                onPress: () => {
                  setHAlign('flex-start')
                  setVAlign('flex-end')
                },
              },
              {
                title: 'Bottom Right',
                onPress: () => {
                  setHAlign('flex-end')
                  setVAlign('flex-end')
                },
              },
            ]}
          />
        </ScrollView>
      </BaseLayout>
    </BaseLayout>
  )
}

BaseLayoutDemo.options = {
  topBar: {
    title: { text: '<BaseLayout />' },
  },
}
