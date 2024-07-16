/* eslint-disable no-console */
/* eslint-disable @typescript-eslint/no-var-requires */
const fs = require('fs')
const path = require('path')

const screenName = process.argv[2]

if (!screenName) {
  console.error('Please provide a screen name.')
  process.exit(1)
}

const baseDir = path.join(__dirname, 'src', 'screens', screenName)

const files = [
  {
    name: `${screenName}.tsx`,
    content: `import React from 'react'
import {View} from 'react-native'
import {styles} from './${screenName}Styles'

const ${screenName}: React.FC = () => {
  return (
    <View></View>
  )
}

export default ${screenName}

`,
  },
  {
    name: 'index.tsx',
    content: `export {default} from './${screenName}'

`,
  },
  {
    name: `${screenName}Styles.ts`,
    content: `import {StyleSheet} from 'react-native'

export const styles = StyleSheet.create({

})

`,
  },
]

// 创建目录
if (!fs.existsSync(baseDir)) {
  fs.mkdirSync(baseDir, {recursive: true})
}

// 创建文件并写入内容
files.forEach(file => {
  const filePath = path.join(baseDir, file.name)
  fs.writeFileSync(filePath, file.content)
})

console.log(`Screen ${screenName} created successfully at ${baseDir}`)
