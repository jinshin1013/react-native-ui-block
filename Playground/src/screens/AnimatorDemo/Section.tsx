import React from 'react'
import { BaseLayout, BaseText } from '../../../../lib'
import { Switch } from 'react-native'

export type SectionProps = {
  /**
   * Title of the section header.
   */
  title?: string
  /**
   * Switch title.
   */
  switchTitle?: string
  /**
   * Switch value.
   */
  switchValue?: boolean
  /**
   * On switch toggle.
   */
  onSwitchToggle?: (value: boolean) => void
}

export const Section: React.FC<SectionProps> = ({
  title = '',
  switchTitle,
  switchValue,
  onSwitchToggle,
  children,
}) => {
  return (
    <BaseLayout flex margin={{ bottom: 20 }}>
      <BaseLayout direction="row" hAlign="space-between" vAlign="center" margin={{ bottom: 10 }}>
        <BaseText numberOfLines={1} flex textTransform="uppercase" fontSize={14}>
          {title}
        </BaseText>
        <BaseLayout direction="row" vAlign="center">
          {!!switchTitle && (
            <BaseText fontSize={12} color="#919090" margin={{ right: 10 }}>
              {switchTitle}
            </BaseText>
          )}
          {switchValue !== undefined && (
            <Switch value={switchValue} onValueChange={onSwitchToggle} />
          )}
        </BaseLayout>
      </BaseLayout>

      {children}
    </BaseLayout>
  )
}
