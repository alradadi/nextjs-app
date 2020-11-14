import CssBaseline from '@material-ui/core/CssBaseline';
import {
  jssPreset,
  StylesProvider,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core/styles';
import { create } from 'jss';
import rtl from 'jss-rtl';
import { useRouter } from 'next/router';
import React, { useEffect } from 'react';

import { createTheme } from '@/src/theme/createTheme';

interface Props {
  children: React.ReactNode;
}

const jss = create({ plugins: [...jssPreset().plugins, rtl()] });

export default function ThemeProvider(props: Props) {
  const router = useRouter();

  const direction = router.locale === 'ar' ? 'rtl' : 'ltr';

  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  useEffect(() => {
    document.body.dir = direction;
  }, [direction]);

  return (
    <StylesProvider jss={jss}>
      <MuiThemeProvider theme={createTheme({ direction })}>
        <CssBaseline />
        {props.children}
      </MuiThemeProvider>
    </StylesProvider>
  );
}
