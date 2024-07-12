import {DOG_API_KEY} from '@env'

export const getHttpHeader = () => {
  return {
    'x-api-key' : DOG_API_KEY,
  }
}
