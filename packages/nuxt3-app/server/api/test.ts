// The code below produces the error: 
//  WARN  [worker] Cannot find module '/home/marc/nuxt3-monorepo-import-bug/node_modules/test-lib/dir/test' imported from /home/marc/nuxt3-monorepo-import-bug/packages/nuxt3-app/.nuxt/nitro/index.mjs                
import message from 'test-lib/test'

export default async () => {
  return message
}
