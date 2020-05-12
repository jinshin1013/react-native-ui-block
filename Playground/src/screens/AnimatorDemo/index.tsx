import React from 'react'
import { ScrollView, ViewStyle, StyleSheet, StatusBar } from 'react-native'

import { RootType } from '../../routes/types'

import { Container } from './Container'
import { SlidingAnimation } from './SlidingAnimation'
import { LayoutAnimation } from './LayoutAnimation'
import { TransformAnimation } from './TransformAnimation'

export type AnimatorDemoProps = {}

export const AnimatorDemo: RootType<AnimatorDemoProps> = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Container title="Sliding Animation">
          <SlidingAnimation />
        </Container>

        <Container title="Layout Animation">
          <LayoutAnimation />
        </Container>

        <Container title="Transform Animation">
          <TransformAnimation />
        </Container>
      </ScrollView>
    </>
  )
}

type Style = {
  scrollView: ViewStyle
}
const styles = StyleSheet.create<Style>({
  scrollView: {
    paddingHorizontal: 20,
    paddingTop: 10,
    paddingBottom: 100,
  },
})

AnimatorDemo.options = {
  topBar: {
    title: {
      text: 'Animator Demo',
      color: 'white',
    },
    largeTitle: {
      visible: true,
      color: '#ffffff',
    },
    background: {
      color: '#ff1f44',
    },
    backButton: {
      color: 'white',
    },
  },
}
