import {StyleSheet} from 'react-native'
import {theme} from '~/theme'

export const styles = StyleSheet.create({
  label: {
    color: theme.grey3,
    fontSize: 10,
    lineHeight: 14,
    paddingBottom: 4,
  },
  labelFocus: {
    color: theme.primary,
    fontSize: 10,
    lineHeight: 14,
    paddingBottom: 4,
  },
  icon: {
    width: 24,
    height: 24,
  },
})

