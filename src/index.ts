// Import the native module. On web, it will be resolved to TinkLinkExpo.web.ts
// and on native platforms to TinkLinkExpo.ts
import TinkLinkExpoModule from './TinkLinkExpoModule'

export function hello(): string {
    return TinkLinkExpoModule.hello()
}
