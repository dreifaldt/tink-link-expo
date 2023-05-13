import * as React from 'react';

import { TinkLinkExpoViewProps } from './TinkLinkExpo.types';

export default function TinkLinkExpoView(props: TinkLinkExpoViewProps) {
  return (
    <div>
      <span>{props.name}</span>
    </div>
  );
}
