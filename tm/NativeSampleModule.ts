// 2点要求
// 1. 文件必须使用 Native<MODULE_NAME> 命名
// 2. 代码中必须要输出 TurboModuleRegistrySpec 对象

import type {TurboModule} from 'react-native/Libraries/TurboModule/RCTExport'
import {TurboModuleRegistry} from 'react-native'

// 此接口必须命名为 Spec
export interface Spec extends TurboModule {
  readonly reverseString: (input: string) => string
}

export default TurboModuleRegistry.get<Spec>(
  'NativeSampleModule',
) as Spec | null
