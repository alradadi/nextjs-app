import React from 'react';
import { Provider } from 'react-redux';

import { store } from '@/src/redux/store';

interface Props {
  children: React.ReactChild;
}

export default function StoreProvider(props: Props) {
  return <Provider store={store}>{props.children}</Provider>;
}
