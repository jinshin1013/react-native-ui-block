import React, { useState } from 'react'
import { ScrollView, TouchableOpacity } from 'react-native'
import { BaseLayout, Animator, BaseText } from '../../../../lib'

import { RootType } from '../../routes/types'

import styles from './styles'
import { Navigation } from 'react-native-navigation'
import { Routes } from '../../routes/routes'

export type HomeProps = {}

export const Home: RootType<HomeProps> = ({ componentId }) => {
  const [animVisible1, setAnimVisible1] = useState(true)
  const [animVisible2, setAnimVisible2] = useState(false)

  const onBaseLayoutDemoScreenPush = () => {
    return Navigation.push(componentId, {
      component: {
        name: Routes.BaseLayoutDemo,
      },
    })
  }

  return (
    <ScrollView contentContainerStyle={styles.wrapper}>
      {/* Explore BaseLayout section. */}
      <BaseLayout margin={{ bottom: 20 }}>
        <TouchableOpacity activeOpacity={0.9} onPress={onBaseLayoutDemoScreenPush}>
          <Animator.View
            visible={animVisible1}
            size={{ width: 300, height: 50 }}
            vAlign="center"
            hAlign="center"
            border={{ radius: 8 }}
            animation={{
              backgroundColor: ['#DBCFB0', '#D4B2D8', '#545775', '#718F94', '#0F1020'],
            }}
            config={{
              fromValue: 0,
              toValue: 4,
              inputRange: [0, 1, 2, 3, 4],
              useNativeDriver: false,
              duration: 5000,
              unmount: false,
            }}
            onAnimationEnd={() => setAnimVisible1(false)}
            onAnimationReset={() => setAnimVisible1(true)}
          >
            <BaseText color="white">Explore BaseLayout</BaseText>
          </Animator.View>
        </TouchableOpacity>
      </BaseLayout>

      <BaseLayout margin={{ bottom: 20 }}>
        <TouchableOpacity
          activeOpacity={1}
          onPressIn={() => setAnimVisible2(true)}
          onPressOut={() => setAnimVisible2(false)}
        >
          <Animator.View
            visible={animVisible2}
            backgroundColor="coral"
            size={{ width: 300, height: 50 }}
            vAlign="center"
            hAlign="center"
            border={{ radius: 8 }}
            animation={{ backgroundColor: ['#F4B393', '#7A28CB'] }}
            config={{ unmount: false, useNativeDriver: false }}
          >
            <Animator.Text
              visible={animVisible2}
              color="white"
              animation={{ scale: [1, 1.1] }}
              config={{ unmount: false }}
            >
              Explore BaseText
            </Animator.Text>
          </Animator.View>
        </TouchableOpacity>
      </BaseLayout>
    </ScrollView>
  )
}

Home.options = {
  topBar: {
    title: { text: 'Home' },
    largeTitle: { visible: true },
  },
}
