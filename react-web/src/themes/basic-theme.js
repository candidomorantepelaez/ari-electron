import { createMuiTheme } from '@material-ui/core/styles'


const basicTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#2196f3',
      light: '#6ec6ff',
      dark: '#0069c0',
    },
    secondary: {
      main: '#b2ebf2',
      light: '#e5ffff',
      dark: '#81b9bf',
    },
  },
  typography: {
    useNextVariants: true,
  },
})

export default basicTheme
