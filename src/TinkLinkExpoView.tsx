import { requireNativeViewManager } from 'expo-modules-core';
import * as React from 'react';

import { TinkLinkExpoViewProps } from './TinkLinkExpo.types';

const NativeView: React.ComponentType<TinkLinkExpoViewProps> =
  requireNativeViewManager('TinkLinkExpo');

export default function TinkLinkExpoView(props: TinkLinkExpoViewProps) {
  return <NativeView {...props} />;
}
