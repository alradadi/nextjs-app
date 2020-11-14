import { createMuiTheme } from '@material-ui/core';
import { red } from '@material-ui/core/colors';
import { ThemeOptions } from '@material-ui/core/styles/createMuiTheme';

export const createTheme = (options: ThemeOptions = {}) =>
  createMuiTheme({
    palette: {
      primary: {
        main: '#556cd6',
      },
      secondary: {
        main: '#19857b',
      },
      error: {
        main: red.A400,
      },
      background: {
        default: '#fff',
      },
    },
    ...options,
  });
