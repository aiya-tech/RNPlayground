import {StyleSheet} from 'react-native'
import {theme} from '~/theme'

export const styles = StyleSheet.create({
  container: {
    backgroundColor: theme.primary,
    flex: 1,
    width: '100%',
    height: '100%',
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  image: {
    width: 100,
    height: 100,
    marginRight: 16,
  },
  textContainer: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  description: {
    fontSize: 14,
    color: '#fff',
  },
})
