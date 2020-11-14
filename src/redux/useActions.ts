import { DependencyList, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';

import { AppActions, AppDispatch } from '@/src/redux/store';

/**
 * TODO: Update type after the new release of redux-toolkit
 * https://github.com/reduxjs/redux-toolkit/issues/771
 */
export function useActions<T extends Partial<AppActions>>(
  actions: T,
  deps?: DependencyList,
): T {
  const dispatch = useDispatch<AppDispatch>();

  return useMemo(
    () => {
      return bindActionCreators(actions as any, dispatch);
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    deps ? [dispatch, ...deps] : deps,
  ) as any;
}
