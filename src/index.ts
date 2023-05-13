import { NativeModulesProxy, EventEmitter, Subscription } from 'expo-modules-core';

// Import the native module. On web, it will be resolved to TinkLinkExpo.web.ts
// and on native platforms to TinkLinkExpo.ts
import TinkLinkExpoModule from './TinkLinkExpoModule';
import TinkLinkExpoView from './TinkLinkExpoView';
import { ChangeEventPayload, TinkLinkExpoViewProps } from './TinkLinkExpo.types';

// Get the native constant value.
export const PI = TinkLinkExpoModule.PI;

export function hello(): string {
  return TinkLinkExpoModule.hello();
}

export async function setValueAsync(value: string) {
  return await TinkLinkExpoModule.setValueAsync(value);
}

const emitter = new EventEmitter(TinkLinkExpoModule ?? NativeModulesProxy.TinkLinkExpo);

export function addChangeListener(listener: (event: ChangeEventPayload) => void): Subscription {
  return emitter.addListener<ChangeEventPayload>('onChange', listener);
}

export { TinkLinkExpoView, TinkLinkExpoViewProps, ChangeEventPayload };
