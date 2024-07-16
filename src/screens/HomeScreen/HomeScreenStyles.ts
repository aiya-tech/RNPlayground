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
    flex: 1,
    margin: 5,
    backgroundColor: '#fff',
    borderRadius: 8,
    overflow: 'hidden',
    elevation: 3,
  },
  image: {
    width: '100%',
    height: 150,
  },
  breedInfo: {
    padding: 10,
  },
  breedName: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  breedDetails: {
    fontSize: 14,
    color: '#666',
  },
})
